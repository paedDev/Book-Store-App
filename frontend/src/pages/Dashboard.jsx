import React from "react";
import Navbar, { SideBarItem } from "../components/Navbar.jsx";
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  User
} from 'lucide-react';
const Dashboard = () => {
  return <div className="h-screen w-full flex">
    <Navbar>
      <SideBarItem icon={<LayoutDashboard size={20} />} text={'Dashboard'}
        alert />
      <SideBarItem icon={<BarChart3 size={20} />} text={'Statistics'} active
      />
      <SideBarItem icon={<UserCircle size={20} />} text={'Users'} active
      />
      <SideBarItem icon={<Boxes size={20} />} text={'Inventory'}
      />
      <SideBarItem icon={<Package size={20} />} text={'Orders'}
        alert />
      <SideBarItem icon={<Receipt size={20} />} text={'Billings'}
      />
      <hr className="my-3 border-gray-100" />
      <SideBarItem icon={<Settings size={20} />} text={'Settings'}
      />
      <SideBarItem icon={<LifeBuoy size={20} />} text={'Help'}
      />
    </Navbar>
    {/* Main content here */}
    <main>
      <h1>Main content here</h1>
    </main>
  </div>;
};

export default Dashboard;
