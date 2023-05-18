import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { app } from "../../firebase.init";

const SocialAuth = () => {
  const SocialButton = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
      signInWithPopup(auth, googleProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };

    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
      signInWithPopup(auth, githubProvider)
        .then((result) => {
          const user = result.user;
          console.log(user);
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    };

    return (
      <>
        <div className="divider">OR</div>
        <div className="text-center">
          <button
            onClick={handleGoogleSignIn}
            className="btn btn-square btn-outline"
          >
            <FaGoogle className="w-5 h-5" />
          </button>{" "}
          <button
            onClick={handleGithubSignIn}
            className="btn btn-square btn-outline"
          >
            <FaGithub className="w-5 h-5" />
          </button>
        </div>
      </>
    );
  };

  return <SocialButton />;
};

export default SocialAuth;
