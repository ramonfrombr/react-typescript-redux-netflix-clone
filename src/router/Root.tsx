import { FC } from "react";
import { Outlet } from "react-router-dom";

const Root: FC = () => {
  return (
    <div className="min-h-screen bg-black">
      <Outlet />
    </div>
  );
};

export default Root;
