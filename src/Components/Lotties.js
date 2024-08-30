import React from "react";
// Importing the React library to create a React component.

import Lottie from "lottie-react";
// Importing the Lottie component from the "lottie-react" package,
// which is used to render Lottie animations in React applications.

function AddLottie({ LottieFile }) {
  // Defining the AddLottie functional component.
  // It accepts a prop named LottieFile, which contains the animation data.

  return (
    <div id="lottie">
      {/* Creating a div element with an id of "lottie" to contain the Lottie animation. */}

      <Lottie animationData={LottieFile} loop={true} />
      {/* Rendering the Lottie component, passing the animation data via the animationData prop.
          The loop prop is set to true to make the animation loop infinitely. */}
    </div>
  );
}

export default AddLottie;
// Exporting the AddLottie component as the default export of the module.
