import { Link } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <h2>
        <Link to={"snow"}>Snow</Link>
      </h2>
      <h2>
        <Link to={"home"}>Home</Link>
      </h2>
    </div>
  );
}
