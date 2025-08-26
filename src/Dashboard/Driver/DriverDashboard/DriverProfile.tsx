

// import React, { useState } from "react";
// import { useGetMeQuery } from "../../../redux/userApiSlice";
// import { useUpdateDriverProfileMutation } from "../../../redux/driverApislice";


// const DriverProfile = () => {
//   const { data: me, isLoading: loadingMe } = useGetMeQuery(); // get logged in driver
//   const [updateProfile, { isLoading: updating }] = useUpdateDriverProfileMutation();

//   const [editMode, setEditMode] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     vehicle: "",
//     password: "",
//   });


//   React.useEffect(() => {
//     if (me?.user) {
//       setForm({
//         name: me.user.name || "",
//         phone: me.user.phone || "",
//         vehicle: (me.user as any)?.vehicle || "",
//         password: "",
//       });
//     }
//   }, [me]);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const res = await updateProfile(form).unwrap();
//       alert("✅ " + res.message);
//       setEditMode(false); // update successful হলে আবার read-only তে চলে যাবে
//     } catch (err: any) {
//       alert("❌ " + (err.data?.message || "Update failed"));
//     }
//   };

//   if (loadingMe) return <p className="text-center mt-6">Loading profile...</p>;

//   return (
//     <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
//       <h2 className="text-2xl font-bold mb-4 text-center">Driver Profile</h2>

//       {!editMode ? (
//         // 👉 Read Only Mode
//         <div className="space-y-3">
//           <p><strong>Name:</strong> {me?.user?.name}</p>
//           <p><strong>Email:</strong> {me?.user?.email}</p>
//           <p><strong>Phone:</strong> {me?.user?.phone || "N/A"}</p>
//           <p><strong>Vehicle:</strong> {(me?.user as any)?.vehicle || "N/A"}</p>
//           <p><strong>Role:</strong> {me?.user?.role}</p>

//           <button
//             onClick={() => setEditMode(true)}
//             className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//           >
//             Update Profile
//           </button>
//         </div>
//       ) : (
//         // 👉 Edit Mode
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Full Name"
//             value={form.name}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             name="phone"
//             placeholder="Phone Number"
//             value={form.phone}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="text"
//             name="vehicle"
//             placeholder="Vehicle Details (e.g., Toyota Prius, Bike No)"
//             value={form.vehicle}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="New Password"
//             value={form.password}
//             onChange={handleChange}
//             className="w-full border p-2 rounded"
//           />

//           <div className="flex gap-3">
//             <button
//               type="submit"
//               disabled={updating}
//               className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700"
//             >
//               {updating ? "Updating..." : "Save Changes"}
//             </button>
//             <button
//               type="button"
//               onClick={() => setEditMode(false)}
//               className="flex-1 bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       )}
//     </div>
//   );
// };

// export default DriverProfile;



















import React, { useState, useEffect } from "react";
import { useGetMeQuery } from "../../../redux/userApiSlice";
import { useUpdateDriverProfileMutation } from "../../../redux/driverApislice";

const DriverProfile = () => {
  const { data: me, isLoading: loadingMe } = useGetMeQuery();
  const [updateProfile, { isLoading: updating }] = useUpdateDriverProfileMutation();

  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicle: "",
    password: "",
  });

  useEffect(() => {
    if (me?.user) {
      setForm({
        name: me.user.name || "",
        phone: me.user.phone || "",
        vehicle: (me.user as any)?.vehicle || "",
        password: "",
      });
    }
  }, [me]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await updateProfile(form).unwrap();
      alert("✅ " + res.message);
      setEditMode(false);
    } catch (err: any) {
      alert("❌ " + (err.data?.message || "Update failed"));
    }
  };

  if (loadingMe) return <p className="text-center mt-6">Loading profile...</p>;

  return (
    <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6 mt-6">
      <h2 className="text-2xl font-bold mb-4 text-center">Driver Profile</h2>

      {!editMode ? (
        <div>
          <table className="w-full table-auto border border-gray-200 mb-4">
            <tbody>
              <tr className="border-b">
                <td className="font-semibold p-2 bg-gray-50 w-1/3">Name</td>
                <td className="p-2">{me?.user?.name}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2 bg-gray-50">Email</td>
                <td className="p-2">{me?.user?.email}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2 bg-gray-50">Phone</td>
                <td className="p-2">{me?.user?.phone || "N/A"}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2 bg-gray-50">Vehicle</td>
                <td className="p-2">{(me?.user as any)?.vehicle || "N/A"}</td>
              </tr>
              <tr className="border-b">
                <td className="font-semibold p-2 bg-gray-50">Role</td>
                <td className="p-2">{me?.user?.role}</td>
              </tr>
            </tbody>
          </table>

          <button
            onClick={() => setEditMode(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
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
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="text"
            name="vehicle"
            placeholder="Vehicle Details (e.g., Toyota Prius, Bike No)"
            value={form.vehicle}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          <input
            type="password"
            name="password"
            placeholder="New Password"
            value={form.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />

          <div className="flex gap-3">
            <button
              type="submit"
              disabled={updating}
              className="flex-1 bg-green-600 text-white p-2 rounded hover:bg-green-700"
            >
              {updating ? "Updating..." : "Save Changes"}
            </button>
            <button
              type="button"
              onClick={() => setEditMode(false)}
              className="flex-1 bg-gray-400 text-white p-2 rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default DriverProfile;
