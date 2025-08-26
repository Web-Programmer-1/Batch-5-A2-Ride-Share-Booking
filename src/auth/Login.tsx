// import { useState } from "react";
// import { useLoginMutation } from "../redux/userApiSlice";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [login, { isLoading }] = useLoginMutation();
//   const navigate = useNavigate();

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const result = await login({ email, password }).unwrap();
//       console.log(result);

//       Swal.fire({
//         icon: "success",
//         title: "Login Successful 🎉",
//         text: `Welcome back ${email}`,
//         confirmButtonColor: "#009111", 
//       });

//       navigate("/");
//     } catch (err: any) {
//       Swal.fire({
//         icon: "error",
//         title: "Login Failed ❌",
//         text: err?.data?.message || "Something went wrong",
//         confirmButtonColor: "#ef4444", // red
//       });
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 relative overflow-hidden">
//       {/* Background Animated Illustration */}
//       <img
//         src="https://storyset.com/illustration/login/amico"
//         alt="Login illustration"
//         className="absolute left-0 bottom-0 w-1/2 opacity-30 animate-fade-in"
//       />

//       <form
//         onSubmit={handleSubmit}
//         className="backdrop-blur-lg bg-white/60 shadow-2xl rounded-3xl p-10 w-full max-w-md z-10 border border-orange-200 animate-slide-up"
//       >
//         <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">Welcome Back 👋</h2>

//         <input
//           type="email"
//           placeholder="Enter your email"
//           className="border border-orange-300 rounded-lg px-4 py-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />

//         <input
//           type="password"
//           placeholder="Enter your password"
//           className="border border-orange-300 rounded-lg px-4 py-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />

//         <button
//           type="submit"
//           disabled={isLoading}
//           className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-70"
//         >
//           {isLoading ? "Logging in..." : "Login"}
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;







import { useState } from "react";
import { useLoginMutation } from "../redux/userApiSlice";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const result = await login({ email, password }).unwrap();
      console.log(result);

      Swal.fire({
        icon: "success",
        title: "Login Successful 🎉",
        text: `Welcome back ${email}`,
        confirmButtonColor: "#009111",
      });

      navigate("/");
    } catch (err: any) {
      Swal.fire({
        icon: "error",
        title: "Login Failed ❌",
        text: err?.data?.message || "Something went wrong",
        confirmButtonColor: "#ef4444",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 relative overflow-hidden">
      <img
        src="https://storyset.com/illustration/login/amico"
        alt="Login illustration"
        className="absolute left-0 bottom-0 w-1/2 opacity-30 animate-fade-in"
      />

      <form
        onSubmit={handleSubmit}
        className="backdrop-blur-lg bg-white/60 shadow-2xl rounded-3xl p-10 w-full max-w-md z-10 border border-orange-200 animate-slide-up"
      >
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
          Welcome Back 👋
        </h2>

        <input
          type="email"
          placeholder="Enter your email"
          className="border border-orange-300 rounded-lg px-4 py-3 w-full mb-4 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter your password"
          className="border border-orange-300 rounded-lg px-4 py-3 w-full mb-6 focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-lg shadow-md disabled:opacity-70"
        >
          {isLoading ? "Logging in..." : "Login"}
        </button>

        <p className="text-center text-sm text-gray-700 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-orange-600 hover:underline font-medium">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
