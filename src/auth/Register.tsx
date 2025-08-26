
import { useState } from "react";
import { useRegisterMutation } from "../redux/userApiSlice";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("rider");
  const [register, { isLoading }] = useRegisterMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
       await register({ name, email, password, role }).unwrap();
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your account has been created!",
        confirmButtonColor: "#f97316",
      });

      navigate("/login");

      

     
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: err.data?.message || "Something went wrong!",
        confirmButtonColor: "#f97316",
      });
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        background: "linear-gradient(to bottom right, #fff5e1, #ffe4cc)",
      }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-orange-600 mb-6 text-center">
          Create Account ✨
        </h2>

        <input
          type="text"
          placeholder="Enter your name"
          className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter your email"
          className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border border-gray-300 rounded px-4 py-2 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <select
          className="border border-gray-300 rounded px-4 py-2 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-orange-300"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="rider">Rider</option>
          <option value="driver">Driver</option>
          <option value="admin">Admin</option>
        </select>

        <button
          type="submit"
          disabled={isLoading}
          className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 w-full rounded transition"
        >
          {isLoading ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
