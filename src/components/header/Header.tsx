import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router";

import { auth } from "../../services/firebaseConnection";
import { signOut } from "firebase/auth";

const Header = () => {
  async function handleLogout() {
    await signOut(auth);
  }

  return (
    <header className="w-full max-w-2xl mt-4 px-1">
      <nav className="bg-white w-full h-12 flex items-center justify-between rounded-md flex-row-reverse">
        <ul className="flex gap-4 px-3 font-medium">
          <Link to="/">Home</Link>
          <Link to="/admin">Meus Links</Link>
        </ul>
        <button onClick={handleLogout}>
          <BiLogOut size={28} color="#db2629" className="cursor-pointer" />
        </button>
      </nav>
    </header>
  );
};

export default Header;
