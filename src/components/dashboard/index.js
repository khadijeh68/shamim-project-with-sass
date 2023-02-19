import { NavLink } from "react-router-dom";

import { RiDashboardFill, RiBillLine } from "react-icons/ri";
import { BiUserCircle, BiChat, BiMailSend } from "react-icons/bi";
import { BsPersonPlus, BsEject } from "react-icons/bs";
import { digitsEnToFa } from "@persian-tools/persian-tools";
import { IoIosArrowDropright } from "react-icons/io";

const Dashboard = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">
            <RiDashboardFill size={22} />
            <span>داشبورد</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BiUserCircle size={22} />
            <span>پروفایل</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BiChat size={22}/>
            گفتگوها
            <span>{digitsEnToFa(3)}</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BiMailSend size={22} />
            <span>ارسال دعوت نامه</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <RiBillLine size={22} />
            <span>صدور پیش فاکتور</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BsPersonPlus size={22} />
            <span>عضویت در کانتمو</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/">
            <BsEject size={22} />
            <span>نمایش آثار</span>
          </NavLink>
        </li>
      </ul>
      <IoIosArrowDropright size={22}/>
    </div>
  );
};

export default Dashboard;
