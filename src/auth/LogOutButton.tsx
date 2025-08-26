import { useLogoutMutation } from "../redux/userApiSlice";


const LogoutButton = () => {
  const [logout, { isLoading }] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logout(null).unwrap();


      alert("✅ Logged out successfully");

      
      // window.location.href = "/login";
    } catch (err: any) {
      alert(err?.data?.message || "❌ Logout failed");
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="bg-red-600 text-white px-4 py-2 rounded"
    >
      {isLoading ? "Logging out..." : "Logout"}
    </button>
  );
};

export default LogoutButton;
