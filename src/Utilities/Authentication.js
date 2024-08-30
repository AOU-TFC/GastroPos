import { useEffect, useState } from "react";
// Importing useEffect and useState hooks from React for managing side effects and state.

import { useNavigate, useLocation } from "react-router-dom";
// Importing useNavigate and useLocation hooks from "react-router-dom" for programmatic navigation and accessing the current location.

import LoginAuth from "Services/Authentication";
// Importing the LoginAuth function, which handles the authentication request.

import Cookies from "js-cookie";
// Importing the js-cookie library to handle cookie operations.

export function useLogin() {
  // Defining a custom hook named useLogin.

  const navigate = useNavigate();
  // Getting the navigate function from useNavigate to perform navigation actions.

  async function login(userData) {
    // Defining an asynchronous function named login, which takes `userData` as a parameter.

    try {
      const response = await LoginAuth(userData);
      // Awaiting the result of the LoginAuth function, which performs the authentication request.

      const { status, data } = response;
      // Destructuring `status` and `data` from the response object.

      if (status === 200) {
        // Checking if the response status is 200 (OK), which indicates successful login.

        navigate("/admin");
        // Navigating to the "/admin" route upon successful login.

        Cookies.set("token", data.token);
        Cookies.set("Name", data.Name);
        // Storing the authentication token and user name in cookies.
      }
    } catch (error) {
      // Handling any errors that occur during the login process.

      if (error.response && error.response.status === 401) {
        // Checking if the error response status is 401 (Unauthorized).

        alert("Invalid email or password");
        // Displaying an alert message if the login credentials are invalid.
      }

      console.error("Something went wrong: ", error);
      // Logging any other errors to the console for debugging purposes.
    }
  }

  return { login };
  // Returning the login function as part of the hook's API.
}

export function Authenticated() {
  // Defining a custom hook named Authenticated.

  const [authenticated, setAuthenticated] = useState(false);
  // Defining a state variable `authenticated` to track if the user is authenticated.

  const navigate = useNavigate();
  // Getting the navigate function from useNavigate to perform navigation actions.

  const location = useLocation();
  // Getting the current location object from useLocation.

  useEffect(() => {
    // Using the useEffect hook to perform side effects based on dependencies.

    const token = Cookies.get("token");
    // Retrieving the authentication token from cookies.

    if (token) {
      // Checking if a token exists (indicating the user is authenticated).

      setAuthenticated(true);
      // Setting `authenticated` state to true.

      const User = Cookies.get("Name");
      // Retrieving the user name from cookies.

      if (User && location.pathname === "/login") {
        // Checking if the user name exists and if the current pathname is "/login".

        if (User === "Admin") {
          navigate("/admin", { replace: true });
          // Navigating to the "/admin" route if the user is an admin.
        }
      }
    } else if (!authenticated && location.pathname.startsWith("/admin")) {
      // If not authenticated and the current pathname starts with "/admin".

      navigate("/", { replace: true });
      // Redirecting to the root "/" route.
    }
  }, [authenticated, location.pathname, navigate]);
  // The effect depends on `authenticated`, `location.pathname`, and `navigate`.

  return null;
  // The Authenticated hook does not render any UI, it just handles authentication and redirection logic.
}
