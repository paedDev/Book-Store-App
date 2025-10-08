import React, { createContext, useContext, useEffect, useState } from "react";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { MdMoreVert } from "react-icons/md";

const SideBarContext = createContext();
const Navbar = ({ children }) => {
  const THEMES = [
    'light',
    'forest',
    'cupcake',
    'garden',
    'synthwave',
    'emerald',
    'caramellatte',
    'dracula',
    'aqua',
    'coffee',
    'lemonade',
    'retro'
  ];

  const [theme, setTheme] = useState('light');
  const [expanded, setExpanded] = useState(false);
  const handleChangeTheme = (e) => {
    setTheme(e.target.value);
  };
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
  return (
    <aside className="h-screen">
      <nav className={`h-full flex flex-col bg-white border-r border-gray-200 shadow-sm transition-all duration-300 ${expanded ? 'w-64' : 'w-18'
        }`}>

        {/*  */}
        <div className="p-4 pb-2 flex justify-between items-center mb-10">
          <img src='/images/nav-logo.png' alt=""
            className={` overflow-hidden transition-all ${expanded ? 'size-8' : 'size-0'}`} />
          <button onClick={() => setExpanded((prev) => !prev)}>
            {
              expanded ? <BsChevronBarRight /> : <BsChevronBarLeft />
            }
          </button>
        </div>

        {/*  */}
        <SideBarContext.Provider value={{ expanded }}>
          <ul className=" flex-1 px-3 ">
            {children}
          </ul>
        </SideBarContext.Provider>
        {/* bottom */}
        <div className="border-t flex p-3 items-center border-gray-200 ">
          <img src={'/images/nav-logo.png'} alt="" className="rounded-md size-8 min-w-[2rem]" />
          <div className={`flex justify-between items-center overflow-hidden transition-all ${expanded ? "w-52 ml-3" : 'w-0'}`}>
            <div className="leading-4">
              <h4 className="font-semibold">John Doe</h4>
              <span className="text-xs text-gray-600">Johndoe@gmail.com</span>
            </div>
          </div>
          <MdMoreVert
            size={20}
            className={`transition-all duration-300 ${expanded ? 'ml-auto' : 'opacity-0 w-0'
              }`}
          />
        </div>
      </nav>

    </aside>
  );
};
export default Navbar;
export function SideBarItem({ icon, text, active, alert }) {
  const { expanded } = useContext(SideBarContext);
  return (
    <li className={`relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group ${active ? "bg-gradient-to-r from-indigo-200 to-indigo-100 text-indigo-800" : 'hover:bg-indigo-50 text-gray-600 '
      }`}>
      {icon}
      <span className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : 'w-0'}`}>{text}</span>
      {
        alert && <div className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${expanded ? ''
          : 'top-2'}`}></div>
      }
      {!expanded && (
        <div className="absolute left-full rounded-md px-2 py-1 ml-6 bg-indigo-100 text-indigo-800 text-sm invisible opacity-20 -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0 z-50">
          {
            text
          }
        </div>
      )}
    </li>
  );

}
//  <div className="">
//         <select className="px-2 py-1 flex items-center justify-between text-sm" onChange={handleChangeTheme}
//         >
//           <option value="" disabled>Select a theme</option>
//           {
//             THEMES.map((theme, index) => (
//               <option key={index} value={theme} >
//                 {theme.charAt(0).toLocaleUpperCase() + theme.slice(1)}
//               </option>
//             ))
//           }
//         </select>
//       </div>