import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Signup = () => {
  const handleLogin = (event) => {
    const { createUser } = useContext(AuthContext);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    console.log(email, name, photo, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .then((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Get started today
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            Consectetur adipisicing elit. Obcaecati sunt dolores deleniti
            inventore quaerat mollitia?
          </p>

          <form
            onSubmit={handleLogin}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">Sign Up</p>

            <div>
              <label htmlFor="email" className="sr-only">
                Name
              </label>

              <div className="relative">
                <input
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name="name"
                  placeholder="Enter Your name"
                />
              </div>
            </div>
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
            <div>
              <label htmlFor="password" className="sr-only">
                Photo URL
              </label>

              <div className="relative">
                <input
                  type="url"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  name="photo"
                  placeholder=" Photo URL"
                />
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign Up
            </button>

            <p className="text-center text-sm text-gray-500">
              Already Have an Accoount?
              <Link className="underline" to="/login">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
