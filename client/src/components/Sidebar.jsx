import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../style/Sidebar.scss";
import settingSidebar from "../images/settingSidebar.svg";
import dashboardSidebar from "../images/dashboardSidebar.svg";
import studentSidebar from "../images/studentSidebar.svg";
import emailLogo from "../images/emailLogo.svg";

const Sidebar = () => {
  const [sidebarState, setSidebarState] = useState({
    dashboradBtn: false,
    studentBtn: false,
    settingBtn: false,
  });
  return (
    <div className="sidebar">
      <div className="heading"> eSchool</div>
      <div className="sidebarList">
        <Link
          to="/dashboard"
          className={`items ${sidebarState.dashboradBtn ? "active" : ""}`}
          onClick={() => {
            setSidebarState({
              ...sidebarState,
              dashboradBtn: true,
              studentBtn: false,
              settingBtn: false,
            });
          }}
        >
          <img src={dashboardSidebar} />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/students"
          className={`items ${sidebarState.studentBtn ? "active" : ""}`}
          onClick={() => {
            setSidebarState({
              ...sidebarState,
              dashboradBtn: false,
              studentBtn: true,
              settingBtn: false,
            });
          }}
        >
          <img src={studentSidebar} />
          <span>Students</span>
        </Link>
        <Link
          to="/dashboard/settings"
          className={`items ${sidebarState.settingBtn ? "active" : ""}`}
          onClick={() => {
            setSidebarState({
              ...sidebarState,
              dashboradBtn: false,
              studentBtn: false,
              settingBtn: true,
            });
          }}
        >
          <img src={settingSidebar} />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
