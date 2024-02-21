import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MDBIcon } from "mdb-react-ui-kit";

export const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  
  const [users, setUsers] = useState([]); // State to hold users data

  // Fetch the users data from the server
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://localhost:8000/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // Fetch users data on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  const getNextId = () => {
    const maxId = users.reduce(
      (max, user) => (parseInt(user.id, 10) > max ? parseInt(user.id, 10) : max),
      0
    );
    return maxId + 1;
  };  

  async function handleRegister(event) {
    event.preventDefault();
    const authDetail = {
      id: getNextId(),
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };
    // Manually check if the email already exists in the fetched users data
    const existingUser = users.find((user) => user.email === authDetail.email);

    if (existingUser) {
      // Email already exists, show error toast
      toast.error("Email already exists");
    } else {
      // Proceed with registration
      const requestOptions = {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(authDetail),
      };

      try {
      const response = await fetch(
        "http://localhost:8000/users",
        requestOptions
      );
      const data = await response.json();

      if (response.ok) {

        sessionStorage.setItem('userId', authDetail.id);
        sessionStorage.setItem('userName', authDetail.name);
        
        // Navigate to the 
        navigate("/products");
      } else {
        toast.error(data.message || "Registration failed");
      }
    } catch (error) {
      console.error("Error during registration:", error);
    }
  }
}

  return (
    <main>
      <section>
        <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
          Register
        </p>
      </section>
      <form onSubmit={handleRegister}>
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your name
          </label>
          <input
            type="name"
            id="name"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Shivam Roy"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="shivam.roy@gmail.com"
            required
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Your password
          </label>
          {/* <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required minLength="7" /> */}
          <div className="flex items-center">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              className="flex-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="ml-2 p-2.5 text-gray-500 dark:text-gray-400 cursor-pointer"
            >
              {showPassword ? (
                <MDBIcon icon='eye' />
              ) : (
                <MDBIcon icon='eye-slash' />
              )}
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register
        </button>
      </form>
    </main>
  );
};