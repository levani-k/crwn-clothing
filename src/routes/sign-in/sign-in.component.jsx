import React from "react";

import { signInWithGooglePopup, createUserDocumentfromAuth } from "utils/firebase/firebase.utils";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentfromAuth(user)
  };
  return (
    <div>
      <h1>SignIn page</h1>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
};

export default SignIn;
