import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import SocialAuth from "../SocialAuth/SocialAuth";
import Swal from "sweetalert2";

const Login = () => {
  const { signIn, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from);

        // Show SweetAlert success alert
        Swal.fire({
          icon: "success",
          title: "Login Successful",
          text: "You have been logged in successfully!",
        });
      })
      .catch((error) => {
        console.log(error);

        // Show SweetAlert error alert
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Invalid email or password.",
        });
      });
  };
  useEffect(() => {
    document.title = "ToyMania | Login";
  }, []);
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
            sunt dolores deleniti inventore quaerat mollitia?
          </p>

          <form
            onSubmit={handleLogin}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>

              <div className="relative">
                <input
                  type="email"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name="email"
                  placeholder="Enter email"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>

              <div className="relative">
                <input
                  type="password"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name="password"
                  placeholder="Enter password"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>

            <p className="text-center text-sm text-gray-500">
              No account?
              <Link className="underline" to="/signup">
                Sign up
              </Link>
            </p>
            <SocialAuth />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
