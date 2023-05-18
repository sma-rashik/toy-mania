import React from "react";

const Blog = () => {
  return (
    <div>
      <section className="relative mt-10  mb-11   bg-[url(https://i.ibb.co/jbRfkZZ/hand-drawn-christmas-toys-background-23-2148758008.jpg)] bg-cover bg-center bg-no-repeat">
        <div className="absolute "></div>

        <div className="mx-auto max-w-screen-xl px-4 py-28 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Blogs
            </h1>
          </div>
        </div>
      </section>
      <div className="grid mb-6 gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              What is an access token and refresh token? How do they work and
              where should we store them on the client-side?
            </h3>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            An access token is a credential that allows a client to access
            protected resources on behalf of a user. A refresh token is used to
            obtain new access tokens without requiring the user to
            reauthenticate. Both tokens should be securely stored on the
            client-side, typically in memory or a secure storage mechanism
            provided by the platform or framework.
          </p>
        </article>
        <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              Compare SQL and NoSQL databases?
            </h3>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            SQL databases are like organized filing cabinets with predefined
            categories and strict rules. NoSQL databases are like flexible
            storage bins where you can put anything in any format without
            following a specific structure.
          </p>
        </article>
        <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              What is express js? What is Nest JS?
            </h3>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            Express.js is a minimal and flexible web application framework for
            Node.js. It provides a simple yet powerful set of features for
            building web applications and APIs. NestJS, on the other hand, is a
            progressive and opinionated Node.js framework built on top of
            Express.js. It incorporates concepts from Angular and embraces a
            modular architecture, dependency injection, and strong typing to
            enhance the development experience for building scalable and
            maintainable server-side applications.
          </p>
        </article>
        <article className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6">
          <div>
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              What is MongoDB aggregate and how does it work ?
            </h3>
          </div>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            MongoDB's aggregate is a feature that helps analyze and manipulate
            data. It works by chaining operations together, like filtering and
            grouping, to get useful results. It's useful for tasks like
            generating reports or performing complex calculations on your data.
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
