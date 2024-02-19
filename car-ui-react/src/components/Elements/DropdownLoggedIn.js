import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export const DropdownLoggedIn = ({ setDropdown }) => {
  const naviagte = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    // Fetch user data from db.json
    const fetchUserData = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        const userData = await response.json();

        // Assuming sessionStorage has been set after login
        const userId = sessionStorage.getItem("userId");

        // Find the user with the matching id
        const user = userData.find((user) => user.id === Number(userId));

        // Update the userEmail state with the user's email
        setUserEmail(user.email);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userId");
    setDropdown(false);
    naviagte("/");
  }
  return (
    <div
      id="dropdownAvatar"
      className="select-none	absolute top-10 right-0 z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
    >
      <div className="py-3 px-4 text-sm text-gray-900 dark:text-white">
        <div className="font-medium truncate">{userEmail}</div>
      </div>
      <ul
        className="py-1 text-sm text-gray-700 dark:text-gray-200"
        aria-labelledby="dropdownUserAvatarButton"
      >
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/products"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            All Cars
          </Link>
        </li>
        <li>
          <Link
            onClick={() => setDropdown(false)}
            to="/dashboard"
            className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Dashboard
          </Link>
        </li>
      </ul>
      <div className="py-1">
        <span
          onClick={handleLogout}
          className="cursor-pointer block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
        >
          Log out
        </span>
      </div>
    </div>
  );
};
