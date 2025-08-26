// // src/Dashboard/Admin/UserManagement.tsx
// import { useState } from "react";
// import {
//   useGetAllUsersQuery,
//   useBlockUserMutation,
//   useApproveDriverMutation,
// } from "../../redux/AdminApiSlice";

// const UserManagement = () => {
//   const [search, setSearch] = useState("");
//   const [role, setRole] = useState("");

//   const { data, isLoading } = useGetAllUsersQuery({ search, role });
//   console.log(data, role,search)
//   const [blockUser] = useBlockUserMutation();
//   const [approveDriver] = useApproveDriverMutation();

//   if (isLoading) return <p className="text-center mt-6">Loading users...</p>;

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">User Management</h2>

//       {/* Search + Filter */}
//       <div className="flex gap-3 mb-4">
//         <input
//           type="text"
//           placeholder="Search by name or email"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="border p-2 rounded w-1/2"
//         />
//         <select
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//           className="border p-2 rounded"
//         >
//           <option value="">All Roles</option>
//           <option value="rider">Rider</option>
//           <option value="driver">Driver</option>
//           <option value="admin">Admin</option>
//         </select>
//       </div>

//       {/* User Table */}
//       <table className="w-full border rounded shadow">
//         <thead className="bg-gray-100">
//           <tr>
//             <th className="p-2 border">Name</th>
//             <th className="p-2 border">Email</th>
//             <th className="p-2 border">Role</th>
//             <th className="p-2 border">Status</th>
//             <th className="p-2 border">Actions</th>
//           </tr>
//         </thead>
        
//         <tbody>
//   {data?.data?.map((u: any) => (
//     <tr key={u._id} className="text-center">
//       <td className="p-2 border">{u.name}</td>
//       <td className="p-2 border">{u.email}</td>
//       <td className="p-2 border">{u.role}</td>
//       <td className="p-2 border">
//         {u.role === "driver"
//           ? u.approved
//             ? "✅ Approved"
//             : "❌ Pending"
//           : u.isBlocked
//           ? "🚫 Blocked"
//           : "✅ Active"}
//       </td>
//       <td className="p-2 border flex gap-2 justify-center">
//         {/* Block/Unblock */}
//         <button
//           onClick={() => blockUser(u._id)}
//           className={`px-3 py-1 rounded ${
//             u.isBlocked
//               ? "bg-green-600 text-white"
//               : "bg-red-600 text-white"
//           }`}
//         >
//           {u.isBlocked ? "Unblock" : "Block"}
//         </button>

//         {/* Approve Driver */}
//         {u.role === "driver" && (
//           <button
//             onClick={() => approveDriver(u._id)}
//             className={`px-3 py-1 rounded ${
//               u.approved
//                 ? "bg-yellow-600 text-white"
//                 : "bg-blue-600 text-white"
//             }`}
//           >
//             {u.approved ? "Suspend" : "Approve"}
//           </button>
//         )}
//       </td>
//     </tr>
//   ))}
// </tbody>

        
//       </table>
//     </div>
//   );
// };

// export default UserManagement;









// src/Dashboard/Admin/UserManagement.tsx
import { useMemo, useState } from "react";
import {
  useGetAllUsersQuery,
  useBlockUserMutation,
  useApproveDriverMutation,
} from "../../redux/AdminApiSlice";

const UserManagement = () => {
  const [search, setSearch] = useState("");
  const [role, setRole] = useState("");
  const [blockUser, { isLoading: blocking }] = useBlockUserMutation();
  const [approveDriver, { isLoading: approving }] = useApproveDriverMutation();

  const queryParams = useMemo(() => ({ search, role }), [search, role]);
  const { data, isLoading, refetch, isFetching } = useGetAllUsersQuery(queryParams);

  const users = data?.data ?? [];

  const handleBlockToggle = async (id: string) => {
    try {
      await blockUser(id).unwrap();
      refetch();
    } catch {}
  };

  const handleApproveToggle = async (id: string) => {
    try {
      await approveDriver(id).unwrap();
      refetch();
    } catch {}
  };

  if (isLoading)
    return (
      <div className="p-6 max-w-7xl mx-auto">
        <p className="text-center mt-8 text-gray-600">Loading users...</p>
      </div>
    );

  return (
    <div className="p-4 sm:p-6 max-w-7xl mx-auto">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-5">
        <h2 className="text-xl sm:text-2xl font-semibold">User Management</h2>
        <div className="flex w-full sm:w-auto gap-3">
          <input
            type="text"
            placeholder="Search by name or email"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full sm:w-72 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full sm:w-44 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">All Roles</option>
            <option value="rider">Rider</option>
            <option value="driver">Driver</option>
            <option value="admin">Admin</option>
          </select>
        </div>
      </div>

      {isFetching && (
        <div className="mb-3 text-sm text-gray-500">Refreshing…</div>
      )}

      <div className="md:hidden space-y-3">
        {users.length === 0 ? (
          <div className="text-center text-gray-600 py-10">No users found</div>
        ) : (
          users.map((u: any) => (
            <div
              key={u._id}
              className="rounded-xl border border-gray-200 shadow-sm p-4 bg-white"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="font-medium">{u.name}</div>
                  <div className="text-sm text-gray-600 break-all">{u.email}</div>
                </div>
                <span className="text-xs px-2 py-1 rounded-full bg-gray-100">
                  {u.role}
                </span>
              </div>

              <div className="mt-3 text-sm">
                {u.role === "driver" ? (
                  <span
                    className={`px-2 py-1 rounded-full ${
                      u.approved ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                    }`}
                  >
                    {u.approved ? "Approved" : "Pending"}
                  </span>
                ) : (
                  <span
                    className={`px-2 py-1 rounded-full ${
                      u.isBlocked ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"
                    }`}
                  >
                    {u.isBlocked ? "Blocked" : "Active"}
                  </span>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <button
                  onClick={() => handleBlockToggle(u._id)}
                  disabled={blocking}
                  className={`px-3 py-2 text-sm rounded-lg disabled:opacity-50 ${
                    u.isBlocked
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-red-600 text-white hover:bg-red-700"
                  }`}
                >
                  {u.isBlocked ? "Unblock" : "Block"}
                </button>

                {u.role === "driver" && (
                  <button
                    onClick={() => handleApproveToggle(u._id)}
                    disabled={approving}
                    className={`px-3 py-2 text-sm rounded-lg disabled:opacity-50 ${
                      u.approved
                        ? "bg-yellow-600 text-white hover:bg-yellow-700"
                        : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                  >
                    {u.approved ? "Suspend" : "Approve"}
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      <div className="hidden md:block">
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm bg-white">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-50 text-gray-700">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Status</th>
                <th className="p-3 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length === 0 ? (
                <tr>
                  <td colSpan={5} className="p-6 text-center text-gray-600">
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((u: any) => (
                  <tr key={u._id} className="border-t">
                    <td className="p-3">{u.name}</td>
                    <td className="p-3 break-all">{u.email}</td>
                    <td className="p-3 capitalize">{u.role}</td>
                    <td className="p-3">
                      {u.role === "driver" ? (
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            u.approved
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {u.approved ? "Approved" : "Pending"}
                        </span>
                      ) : (
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            u.isBlocked
                              ? "bg-red-100 text-red-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {u.isBlocked ? "Blocked" : "Active"}
                        </span>
                      )}
                    </td>
                    <td className="p-3">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleBlockToggle(u._id)}
                          disabled={blocking}
                          className={`px-3 py-1.5 rounded-lg text-sm disabled:opacity-50 ${
                            u.isBlocked
                              ? "bg-emerald-600 text-white hover:bg-emerald-700"
                              : "bg-red-600 text-white hover:bg-red-700"
                          }`}
                        >
                          {u.isBlocked ? "Unblock" : "Block"}
                        </button>
                        {u.role === "driver" && (
                          <button
                            onClick={() => handleApproveToggle(u._id)}
                            disabled={approving}
                            className={`px-3 py-1.5 rounded-lg text-sm disabled:opacity-50 ${
                              u.approved
                                ? "bg-yellow-600 text-white hover:bg-yellow-700"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                          >
                            {u.approved ? "Suspend" : "Approve"}
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
