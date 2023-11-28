import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="container mx-12 py-8">
      <h1 className="text-gray-600">Page not found!</h1>
      <Link
        to="/"
        className="mt-4 bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 focus:outline-none inline-block"
      >
        Click here to go back
      </Link>
    </div>
  );
}

export default ErrorPage;
