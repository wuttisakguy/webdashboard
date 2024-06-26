import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDroplet, faBolt, faChartLine, faCamera, faGear, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const Leftbar: FC = () => {
  const menuLists = [
    {
      icon: faDroplet,
      title: "มิเตอร์น้ำ",
      route: "/watermeter",
    },
    {
      icon: faBolt,
      title: "มิเตอร์ไฟ",
      route: "/electricmeter",
    },
    {
      icon: faChartLine,
      title: "Dashboard",
      route: "/chart",
    },
    {
      icon: faGear,
      title: "Setting",
      route: "/setting",
    },
    {
      icon: faArrowRightFromBracket,
      title: "Logout",
      route: "/logout",
    },
    
  ];
  return (
    <div className="w-full h-full bg-[#1877F2] 2xl:px-4 xl:px-4 lg:px-4 px-2 py-20 select-none">
      {menuLists.map((item, idx) => (
        <div key={idx}>
          {item.route && ( 
            <Link href={item.route}>
              <div className="flex 2xl:justify-start xl:justify-start lg:justify-start justify-center items-center gap-10 2xl:p-5 xl:p-5 lg:p-5 py-4 px-2 mb-2 cursor-pointer duration-100 hover:bg-white/20 rounded-lg">
                <div className="w-[20px]">
                  <FontAwesomeIcon icon={item.icon} className="text-white" />
                </div>
                <p className="text-[17px] text-white 2xl:block xl:block lg:block hidden">
                  {item.title}
                </p>
              </div>
            </Link>
          )} 
        </div>
      ))}
    </div>
  );
};

export default Leftbar;