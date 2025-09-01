import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-900 sticky top-0 z-50 shadow-md">
      <h1 className="text-3xl font-bold text-blue-400">Kento Hyono</h1>
      <ul className="flex gap-6 text-2xl">
        <li>
            <Link
                to="projects"
                smooth={true}
                duration={600}
                className="cursor-pointer hover:text-blue-400"
            >
                Projects
            </Link>
        </li>
        <li>
            <Link
                to="games"
                smooth={true}
                duration={600}
                className="cursor-pointer hover:text-blue-400"
            >
                Games
            </Link>
        </li>
        <li>
            <Link
                to="contact"
                smooth={true}
                duration={600}
                className="cursor-pointer hover:text-blue-400"
            >
                Contact
            </Link>
        </li>
      </ul>
    </nav>
  );
}
