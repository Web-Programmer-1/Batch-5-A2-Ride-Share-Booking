import React, { useState, useEffect } from "react";
import { useGetAdminProfileQuery, useUpdateAdminProfileMutation } from "../../redux/AdminApiSlice";
import Swal from "sweetalert2";

const AdminProfile = () => {
  const { data, isLoading } = useGetAdminProfileQuery();
  const [updateProfile, { isLoading: updating }] = useUpdateAdminProfileMutation();

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", password: "" });

  useEffect(() => {
    if (data?.user) {
      setForm({
        name: data.user.name || "",
        phone: data.user.phone || "",
        password: "",
      });
    }
  }, [data]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       await updateProfile(form).unwrap();

                  Swal.fire({
              icon: "success",
              title: "Ride Create Successfully 🎉",
              text: `Welcome back`,
              confirmButtonColor: "#009111",
            });


      
      setEditMode(false);
    } 
                              catch (err) {
  const msg =
    typeof err === "string" ? err
    : err instanceof Error ? err.message
    : (err as any)?.data?.message ?? (err as any)?.error ?? "Something went wrong";

  Swal.fire({
    icon: "error",
    title: "Admin Profile  Failed ❌",
    text: String(msg),             
    confirmButtonColor: "#ef4444",
  });
}


  };

  if (isLoading) return <p className="text-center mt-6">Loading profile...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-xl rounded-lg p-6 mt-6 transition-all duration-300 hover:shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-blue-600">👨‍💼 Admin Profile</h2>

      {!editMode ? (
        <div className="space-y-4 text-gray-700">
          <p><strong>Name:</strong> {data?.user?.name}</p>
          <p><strong>Email:</strong> {data?.user?.email}</p>
          <p><strong>Phone:</strong> {data?.user?.phone || "N/A"}</p>
          <p><strong>Role:</strong> {data?.user?.role}</p>

          <button
            onClick={() => setEditMode(true)}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Update Profile
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={updating}
              className="flex-1 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition"
            >
              {updating ? "Updating..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="flex-1 bg-gray-500 text-white p-3 rounded-lg hover:bg-gray-600 transition"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AdminProfile;
