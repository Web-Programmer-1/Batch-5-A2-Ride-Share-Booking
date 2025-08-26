
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Menu, X,  Sun, Moon, MapPin, User } from "lucide-react";
import Swal from "sweetalert2";

import { useGetMeQuery, useLogoutMutation, userApi } from "../redux/userApiSlice";
import { useAppDispatch } from "../redux/hooks/hooks";
import SearchField from "../lib/SearchNav";

type Role = "rider" | "driver" | "admin" | undefined;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetMeQuery(undefined);
  const [logout, { isLoading: isLoggingOut }] = useLogoutMutation();

  const isLoggedIn = !!data?.user;
  const userRole: Role = data?.user?.role as Role;


  const firstName =
    ((data?.user?.name ?? "").trim().split(" ")[0] as string) || null;


  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);

  const handleLogout = async () => {
    try {
      await logout(null).unwrap();
      setIsMenuOpen(false);

      // RTK Query cache reset
      dispatch(userApi.util.resetApiState());

      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been logged out successfully!",
        timer: 1800,
        showConfirmButton: false,
      });

      navigate("/");
    } catch {
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "Something went wrong. Please try again!",
      });
    }
  };

  
  const publicLinks = [
    { to: "/", text: "Home" },
    { to: "/feather", text: "Feather" },
    { to: "/about", text: "About" },
   
    
    { to: "/contack", text: "Contact" },
    
  ];


  const roleLinksMap: Record<Exclude<Role, undefined>, { to: string; text: string }[]> = {
    rider: [{ to: "/rider", text: "Rider" }],
    driver: [{ to: "/driver", text: "Driver" }],
    admin: [{ to: "/admin", text: "Admin_Dashboard" }],
  };

  const navLinks = [
    ...publicLinks,
    ...(isLoggedIn && userRole ? roleLinksMap[userRole] : []),
  ];

  const linkBase = "text-sm font-medium transition-colors duration-300";
  const linkIdle =
    "text-gray-100/80 dark:text-gray-200/80 hover:text-white dark:hover:text-white";
  const linkActive = "text-white";

  const renderLinks = (onClick?: () => void) =>
    navLinks.map((link) => (
      <NavLink
        key={link.text}
        to={link.to}
        end={link.to === "/"}
        onClick={onClick}
        className={({ isActive }) =>
          `${linkBase} ${isActive ? linkActive : linkIdle}`
        }
      >
        {link.text}
      </NavLink>
    ));

  return (
    <>

      <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-yellow-500 via-orange-600 to-orange-500 border-b border-orange-500">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
           
            <div className="flex-shrink-0">
              <NavLink to="/" className="group flex items-center gap-2">
                <div
                  className="relative grid place-items-center w-10 h-10 rounded-lg
                             bg-gradient-to-br from-pink-600 via-red-500 to-orange-500
                             text-white shadow-md ring-2 ring-white/40"
                >
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="leading-tight select-none">
                  <span
                    className="block text-xl sm:text-2xl font-extrabold tracking-tight
                               text-gray-100 drop-shadow"
                  >
                    Ride <span className="font-extrabold">Share</span> Bd
                  </span>
                  <span
                    className="block text-[10px] sm:text-xs uppercase tracking-[0.22em]
                               text-white/80"
                  >
                    Book • Track • Arrive
                  </span>
                </div>
              </NavLink>
            </div>

           
            <nav className="hidden md:flex items-center gap-8">
              {renderLinks()}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <button
                className="p-2 rounded-full text-white/65 hover:bg-white/10 transition-colors"
                aria-label="Search"
                onClick={() => alert("Search coming soon")}
              >
              <SearchField></SearchField>
              </button>

         

              {isLoggedIn && (
                <div
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 text-white/90 border border-white/10"
                  title={firstName ? `Logged in as ${firstName}` : "Logged in user"}
                >
                  {firstName ? (
                    <span className="text-sm font-medium">Hi, {firstName}</span>
                  ) : (
                    <User className="h-5 w-5" />
                  )}
                </div>
              )}

              {isLoading ? (
                <span className="text-white/80 text-sm">Checking…</span>
              ) : !isLoggedIn ? (
                <>
                  <Link
                    to="/register"
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Register
                  </Link>
                  <Link
                    to="/login"
                    className="px-4 py-2 text-sm font-medium rounded-lg bg-blue-500 text-white hover:bg-blue-400 transition-colors"
                  >
                    Login
                  </Link>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-red-600 text-white hover:bg-red-500 disabled:opacity-70 transition-colors"
                >
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </button>
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((v) => !v)}
                className="relative p-2 text-white/90 rounded-md hover:bg-white/10"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                {!isMenuOpen ? <Menu className="h-6 w-6" /> : <X className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity md:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <aside
        className={`fixed top-0 left-0 h-full w-4/5 max-w-sm z-50 bg-white dark:bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-800">
            <NavLink to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
              <div className="grid place-items-center w-9 h-9 rounded-md bg-orange-500 text-white">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-gray-900 dark:text-gray-100">
                Ride Share Bd
              </span>
            </NavLink>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex-grow p-4">
            <div className="flex flex-col space-y-2">
              {renderLinks(() => setIsMenuOpen(false))}
            </div>
          </nav>

          <div className="p-4 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Theme</span>
            <button
              onClick={() => setIsDark((v) => !v)}
              className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
          </div>

          <div className="p-4">
            {isLoading ? (
              <span className="text-gray-700 dark:text-gray-300">Checking…</span>
            ) : !isLoggedIn ? (
              <div className="flex gap-3">
                <Link
                  to="/register"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-4 py-3 text-sm font-medium rounded-lg bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-4 py-3 text-sm font-medium rounded-lg bg-blue-600 text-white"
                >
                  Login
                </Link>
              </div>
            ) : (
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800">
                  {firstName ? (
                    <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                      Hi, {firstName}
                    </span>
                  ) : (
                    <User className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                  )}
                </div>

                <button
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="px-4 py-2 text-sm font-medium rounded-lg bg-red-600 text-white disabled:opacity-70"
                >
                  {isLoggingOut ? "Logging out..." : "Logout"}
                </button>
              </div>
            )}
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;






