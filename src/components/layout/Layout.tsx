import { Outlet } from "react-router";

const Layout = () => {
  return (
    <div className="w-full h-screen bg-linear-to-b from-gray-700 to-neutral-700">
      <Outlet />
    </div>
  );
};

export default Layout;
