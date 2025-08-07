import { Link } from "react-router";

function Navbar() {
  return (
    <header className="flex flex-row w-full bg-gray-300">
      <nav className="flex flex-row">
        <ul className="flex flex-row p-2.5 gap-2.5 border-black border m-1.5 rounded-md">
          <li className="p-1.5 border rounded-md hover:bg-gray-500 hover:shadow-blue-300 hover:shadow-md">
            <Link to={"/"}>{`e-commerce (State Lifting)`}</Link>
          </li>
          <li className="p-1.5 border rounded-md hover:bg-gray-500 hover:shadow-blue-300 hover:shadow-md">
            <Link>{`AuthLogin (context)`}</Link>
          </li>
          <li className="p-1.5 border rounded-md hover:bg-gray-500 hover:shadow-blue-300 hover:shadow-md">
            <Link>{`to-doApp (useReducer)`}</Link>
          </li>
        </ul>

        <ul className="flex flex-row p-2.5 gap-2.5 border-black border m-1.5 rounded-md">
          <li className="p-1.5 border rounded-md hover:bg-gray-500 hover:shadow-blue-300 hover:shadow-md">
            <Link to={"survey"}>Survey Perokok</Link>
          </li>
          <li className="p-1.5 border rounded-md hover:bg-gray-500 hover:shadow-blue-300 hover:shadow-md">
            <Link>New Todo list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
