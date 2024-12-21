import logo from "../../../public/assets/logo/logo.svg";
import { NavLink } from "react-router-dom";
import { pageConfig } from "../../config/pageConfig";
import {
  MoonIcon,
  QueueListIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/16/solid";
import { Switch } from "antd";

const AppSidebar = () => {
  return (
    <div className="card">
      <div className="flex items-center gap-2.5 mb-10">
        <img src={logo} alt="myFinance" className="w-10" />
        <h1 className="text-xl font-semibold text-menu">MyFinance</h1>
      </div>
      <ul className="grid gap-2 mb-5">
        <li>
          <NavLink to={pageConfig.home} className="menu">
            <Squares2X2Icon className="w-5" />
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to={pageConfig.history} className="menu">
            <QueueListIcon className="w-5" />
            История
          </NavLink>
        </li>
        <li>
          <NavLink to={pageConfig.profile} className="menu">
            <UserIcon className="w-5" />
            Профиль
          </NavLink>
        </li>
      </ul>
      <div className="border opacity-50" />
      <div className="px-2.5 flex justify-between mt-5">
        <MoonIcon className="w-5" />
        {/* <SunIcon className="w-5" /> */}
        <Switch className="switch" />
      </div>
    </div>
  );
};

export default AppSidebar;
