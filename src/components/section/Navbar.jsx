import { Link } from "react-router";

function Navbar() {
  return (
    <header className="flex flex-row w-full bg-gray-300">
      <nav>
        <ul>
          <li>
            <Link to={"/"}>{`e-commerce (State Lifting)`}</Link>
          </li>
          <li>
            <Link>{`AuthLogin (context)`}</Link>
          </li>
          <li>
            <Link>{`to-dp (useReducer)`}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
