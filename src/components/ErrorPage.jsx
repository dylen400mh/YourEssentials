import { Link } from "react-router-dom";

function ErrorPage() {
    return <div>
        <h1>Page not found!</h1>
        <Link to="/">Click here to go back</Link>
    </div>
}

export default ErrorPage;