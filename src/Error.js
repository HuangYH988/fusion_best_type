import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h1>Error! The page you are looking for does not exist!</h1>
      <h2>Or if you are viewing from website, click Continue button below:</h2>
      <Link to="/">Continue</Link>
    </div>
  );
}
