import React, { useState } from "react";
import s from './index.module.css';
import cx from 'classnames';

import { FiMenu as MobileMenuIcon } from 'react-icons/fi';
import { IoAddOutline as IntakeMenuIcon } from 'react-icons/io5';
import { IoServerOutline as DataMenuIcon } from 'react-icons/io5';
import { IoPeopleOutline as UsersMenuIcon } from 'react-icons/io5';
import { IoLocationOutline as LocationsMenuIcon } from 'react-icons/io5';
import { IoBoatOutline as ShipmentsMenuIcon } from 'react-icons/io5';
import { IoCalendarClearOutline as SchedulerMenuIcon } from 'react-icons/io5';
import { IoReaderOutline as ReportMenuIcon } from 'react-icons/io5';
import { IoWaterOutline as AntigenMenuIcon } from 'react-icons/io5';
import { IoBriefcaseOutline as ToolboxMenuIcon } from 'react-icons/io5';
import { IoBanOutline as RejectionsMenuIcon } from 'react-icons/io5';

// import "../styles/Sidebar.css";

const Logo =
  'https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fs3.amazonaws.com%2Fappforest_uf%2Fd18%2Ff1639948431145x275412139592513540%2FScreen%2520Shot%25202021-12-19%2520at%25201.13.36%2520PM.png?w=48&h=53&auto=compress&fit=crop&dpr=1';

const links = [
  {
    link: '/lab/intake',
    label: 'Intake',
    icon: <IntakeMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/lab/home',
    label: 'Data',
    icon: <DataMenuIcon size={20} color="#a5aabc" />,
    selected: true,
  },
  {
    link: '/lab/users',
    label: 'Users',
    icon: <UsersMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/lab/locations',
    label: 'Locations',
    icon: <LocationsMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/lab/shipments',
    label: 'Shipments',
    icon: <ShipmentsMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/',
    label: 'Scheduler',
    icon: <SchedulerMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/',
    label: 'Report',
    icon: <ReportMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/',
    label: 'Antigen',
    icon: <AntigenMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/',
    label: 'Toolbox',
    icon: <ToolboxMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/',
    label: 'Rejections',
    icon: <RejectionsMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/settings',
    label: 'Settings',
    icon: <RejectionsMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
  {
    link: '/lab/scan-in',
    label: 'Scan-in',
    icon: <RejectionsMenuIcon size={20} color="#a5aabc" />,
    selected: false,
  },
];
let activeStyle = {
  backgroundColor: '#eff8ff',
  // marginLeft: "-124px"
  width: ' 150px',
};

const Sidebar = ({children}) => {
    const [mobileMenu, setMobileMenu] = useState(false);
    return (
      <div>
        <div
          className={cx({
            [s.page_menu]: true,
            [s.visible_in_mobile]: mobileMenu,
          })}>
          <img src={Logo} alt="" />
          {/* <ul className="mt-20">
            {[...links].map((link, idx) => (
              // <li key={idx} className="" style={{background: get(link, 'selected')? '#eff8ff': '' }}>
              <li key={idx} className="">
                <NavLink
                  to={get(link, 'link')}
                  style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  className="">
                  <div className="flex flex-row w-full py-2 pr-10 pl-1 rounded-sm">
                    <div className="mr-5 flex items-center ">
                      {get(link, 'icon')}
                    </div>
                    <div className="font-normal">{get(link, 'label')}</div>
                  </div>
                </NavLink>
              </li>
            ))}
          </ul> */}
        </div>
        <div className={s.mobile_menu_bar}>
          <img src={Logo} alt="" />
          <MobileMenuIcon
            role={'presentation'}
            onClick={() => setMobileMenu(!mobileMenu)}
            size={'30px'}
          />
        </div>
        <div
          className={cx({
            [s.page_body]: true,
            [s.mobile_menu_active]: mobileMenu,
          })}
          onClick={() => setMobileMenu(false)}
          role={'presentation'}>
          <div>{children}</div>
        </div>
      </div>
  );
};

export default Sidebar;
