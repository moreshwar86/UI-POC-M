import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SideBarMenu.scss";
import Home from "../../assets/icons/Home";
import Graph from "../../assets/icons/Graph";
import Dollar from "../../assets/icons/Dollar";
import Hamburger from "../../assets/icons/Hamburger";
import { hideRightSidebar } from "../../store/searchbar";
import { useDispatch } from "react-redux";

interface SideBarMenuProps {
  collapsed?: boolean;
}

const SideBarMenu: React.FC<SideBarMenuProps> = ({ collapsed = false }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div className={`sidebar-menu ${collapsed ? "collapsed" : ""}`}>
      <ul className="sidebar-menu__list">
        <div className="sidebar-menu__logo">M</div>
        <li className="sidebar-menu__item">
          <Link to={"/"}>
            <Hamburger />
          </Link>
        </li>
        <li className="sidebar-menu__item">
          <Link
            to={"/dashboard"}
            onClick={() => dispatch(hideRightSidebar(false))}
            className="active"
          >
            <Home stokeColor="#f5f5ef" fill="transparent" />
          </Link>
        </li>
        <li className="sidebar-menu__item">
          <Link to={"/dashboard"}>
            <Dollar />
          </Link>
        </li>
        <li className="sidebar-menu__item">
          <Link to={"/dashboard"}>
            <Graph />
          </Link>
        </li>
        <li className="sidebar-menu__item">
          <Link to={"/dashboard/vendorForm"} onClick={() => {}}>
            Vendor Form
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;
