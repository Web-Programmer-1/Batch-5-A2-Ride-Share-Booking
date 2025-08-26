import { useState, useEffect } from "react";
import {
  useGetMeQuery,
  useUpdateProfileMutation,
} from "../../redux/userApiSlice";
import Swal from "sweetalert2";

const Profile = () => {
  const { data: me, isLoading: isMeLoading, refetch } = useGetMeQuery();

  const [updateProfile, { isLoading: isUpdating }] = useUpdateProfileMutation();

  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (me?.user) {
      setName(me.user.name ?? "");
    }
  }, [me]);

  const handleSave = async () => {
    try {
      const payload: any = { name };
      if (password.trim()) payload.password = password;

      const res = await updateProfile(payload).unwrap();
      if (res.message || "Updated") {
        Swal.fire({
          icon: "success",
          title: "Profile Updated SuccessFully",
          text: "Ok",
          showConfirmButton: false,
          timer: 2000, 
          toast: true,
          position: "top-end",
          background: "#f0fdf4",
        });
      }

      setPassword("");
      setIsEditing(false);
      refetch();
    } catch (err: any) {
      alert(err?.data?.message || "❌ Update failed");
    }
  };

  const handleCancel = () => {
    if (me?.user) setName(me.user.name ?? "");
    setPassword("");
    setIsEditing(false);
  };

  if (isMeLoading) return <div className="p-6">Loading user info...</div>;
  if (!me?.user) return <div className="p-6">No user data found.</div>;

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow rounded">
      {!isEditing ? (
        // ---------- View Mode ----------
        <div>
          <h3 className="font-bold text-lg mb-3">User Info</h3>
          <table className="table-auto border-collapse border border-gray-300 w-full text-left">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Name</th>
                <th className="border px-4 py-2">Email</th>
                <th className="border px-4 py-2">Role</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border px-4 py-2">{me.user.name}</td>
                <td className="border px-4 py-2">{me.user.email}</td>
                <td className="border px-4 py-2">{me.user.role}</td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-end mt-4">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:opacity-90"
            >
              Update
            </button>
          </div>
        </div>
      ) : (
        // ---------- Edit Mode ----------
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="font-bold text-lg mb-3">Editing Profile</h3>

            <label className="block mb-2 font-medium">Name</label>
            <input
              type="text"
              className="border p-2 w-full mb-4 rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label className="block mb-2 font-medium">Change Password</label>
            <input
              type="password"
              className="border p-2 w-full mb-4 rounded"
              placeholder="New Password (optional)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex gap-3">
              <button
                onClick={handleSave}
                disabled={isUpdating}
                className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-60"
              >
                {isUpdating ? "Saving..." : "Save"}
              </button>
              <button
                onClick={handleCancel}
                type="button"
                className="bg-gray-200 px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded shadow-sm">
            <h3 className="font-bold text-lg mb-3">
              Current Updated User Info
            </h3>
            <table className="table-auto border-collapse border border-gray-300 w-full text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="border px-4 py-2">Name</th>
                  <th className="border px-4 py-2">Email</th>
                  <th className="border px-4 py-2">Role</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">{me.user.name}</td>
                  <td className="border px-4 py-2">{me.user.email}</td>
                  <td className="border px-4 py-2">{me.user.role}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
