import React, { useState } from "react";
// Importing React and the useState hook for managing component state.

import AddLottie from "Components/Lotties";
// Importing the AddLottie component, which is used to render Lottie animations.

import resto from "Assets/Lotties/restaurant.json";
// Importing the Lottie animation file (in JSON format) from the assets directory.

import { useLogin } from "Utilities/Authentication";
// Importing the useLogin custom hook, which likely handles user authentication.

import "Styles/Desktop/Login.css";
// Importing the CSS file for styling the LoginPage component.

function LoginPage() {
  // Defining the LoginPage functional component.

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  // Initializing userData state with an object containing email and password fields, both initially empty.
  // setUserData is used to update this state when the user inputs data.

  const { login } = useLogin();
  // Destructuring the login function from the useLogin hook,
  // which will be used to authenticate the user when the form is submitted.

  const [showPass, setShowPass] = useState(false);
  // Initializing showPass state as false, which controls whether the password is shown or hidden.

  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  // Defining a function to toggle the showPass state between true and false.

  const handleChanges = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  // Defining a function to handle input changes.
  // It updates the userData state by spreading the current state and modifying the field that matches the input's name attribute.

  const handleLogin = (e) => {
    e.preventDefault();
    login(userData);
  };
  // Defining a function to handle the form submission.
  // It prevents the default form submission behavior and calls the login function with the userData state.

  return (
    <React.Fragment>
      {/* Wrapping the component's content in a React.Fragment, allowing for multiple elements to be returned. */}

      <div className="Login">
        {/* Creating a div with a class name for styling. This is the main container for the login page. */}

        <AddLottie LottieFile={resto} />
        {/* Rendering the AddLottie component, passing the imported resto animation file as the LottieFile prop. */}

        <form onSubmit={handleLogin} className="login-content">
          {/* Rendering a form element with an onSubmit handler to trigger the handleLogin function.
              The form also has a class name for styling. */}

          <div className="mail-field">
            {/* Creating a div to group the email input and label together. */}

            <input
              className="mail-input"
              type="text"
              autoComplete="off"
              name="email"
              onChange={handleChanges}
              required
            />
            {/* Rendering an input field for the email. It has various attributes:
                - className for styling.
                - type="text" to specify it as a text input.
                - autoComplete="off" to disable browser autocomplete.
                - name="email" to identify the input.
                - onChange to handle input changes via handleChanges.
                - required to make the field mandatory. */}

            <label className="mail-label">Email</label>
            {/* Rendering a label for the email input with a class name for styling. */}
          </div>

          <div className="pass-field">
            {/* Creating a div to group the password input and label together. */}

            <input
              className="pass-input"
              type={showPass ? "text" : "password"}
              autoComplete="off"
              name="password"
              onChange={handleChanges}
              required
            />
            {/* Rendering an input field for the password. It has various attributes:
                - className for styling.
                - type is conditionally set to "text" or "password" based on the showPass state.
                - autoComplete="off" to disable browser autocomplete.
                - name="password" to identify the input.
                - onChange to handle input changes via handleChanges.
                - required to make the field mandatory. */}

            <label className="pass-label">Password</label>
            {/* Rendering a label for the password input with a class name for styling. */}
          </div>

          <div className="show-pass-field">
            {/* Creating a div to group the "Show password" checkbox and label together. */}

            <input
              className="show-pass-check"
              type="checkbox"
              onChange={handleShowPass}
            />
            {/* Rendering a checkbox input to toggle the visibility of the password.
                - className for styling.
                - type="checkbox" specifies it as a checkbox.
                - onChange to handle changes via handleShowPass, toggling showPass. */}

            <label className="show-pass-label">Show password</label>
            {/* Rendering a label for the "Show password" checkbox with a class name for styling. */}
          </div>

          <div className="submitting-field">
            {/* Creating a div to group the login button and registration link together. */}

            <button className="login-btn" type="submit">
              Login
            </button>
            {/* Rendering a button to submit the form.
                - className for styling.
                - type="submit" specifies it as a submit button. */}

            <label className="not-registered">
              Not registered? <span>Register</span>
            </label>
            {/* Rendering a label with a prompt to register, including a span element for the "Register" text. */}
          </div>
        </form>
      </div>
    </React.Fragment>
  );
}

export default LoginPage;
// Exporting the LoginPage component as the default export of the module.
