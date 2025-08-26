// src/components/admin/SearchFilter.tsx
import React from "react";

interface Props {
  search?: string;
  setSearch?: (val: string) => void;
  role?: string;
  setRole?: (val: string) => void;
  status?: string;
  setStatus?: (val: string) => void;
  from?: string;
  setFrom?: (val: string) => void;
  to?: string;
  setTo?: (val: string) => void;
}

const SearchFilter: React.FC<Props> = ({
  search,
  setSearch,
  role,
  setRole,
  status,
  setStatus,
  from,
  setFrom,
  to,
  setTo,
}) => {
  return (
    <div className="flex flex-wrap gap-3 mb-4 items-center">
      {/* 🔍 Search */}
      {setSearch && (
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch?.(e.target.value)}
          className="border p-2 rounded w-48"
        />
      )}

      {/* 🎭 Role Filter */}
      {setRole && (
        <select
          value={role}
          onChange={(e) => setRole?.(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Roles</option>
          <option value="rider">Rider</option>
          <option value="driver">Driver</option>
          <option value="admin">Admin</option>
        </select>
      )}

      {/* 📌 Status Filter */}
      {setStatus && (
        <select
          value={status}
          onChange={(e) => setStatus?.(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Status</option>
          <option value="requested">Requested</option>
          <option value="accepted">Accepted</option>
          <option value="in_transit">In Transit</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      )}

      {/* 📅 Date Range */}
      {setFrom && (
        <input
          type="date"
          value={from}
          onChange={(e) => setFrom?.(e.target.value)}
          className="border p-2 rounded"
        />
      )}
      {setTo && (
        <input
          type="date"
          value={to}
          onChange={(e) => setTo?.(e.target.value)}
          className="border p-2 rounded"
        />
      )}
    </div>
  );
};

export default SearchFilter;
