import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
      <main className="h-[100vh] w-full flex justify-center items-center place-items-center px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-cyan-100 py-2 px-4 bg-cyan-800 inline-block rounded-xl">Coming soon</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-100 sm:text-5xl">
            The page you’re looking for is under development.
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-cyan-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-cyan-700 transition-all ease-in focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
