import { Link, useLocation } from "react-router-dom";

export default function DisplayRanking(props) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type1 = searchParams.get("type1");
  const type2 = searchParams.get("type2");
  return (
    <div>
      {console.log(type1)}
      {console.log(type2)}
      <Link to="/">Home</Link>
    </div>
  );
}
