
import React from 'react';
import { currentUser } from '../constants';
import { UserIcon, UsersIcon, UserGroupIcon, BuildingStorefrontIcon, VideoCameraIcon, ClockIcon } from './icons/Icons';
import { ViewType } from '../App';

interface LeftSidebarProps {
  currentView: ViewType;
  setCurrentView: (view: ViewType) => void;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ currentView, setCurrentView }) => {
  const sidebarItems = [
    { icon: <UserIcon className="h-6 w-6 text-blue-500" />, label: currentUser.name, view: 'home' as ViewType },
    { icon: <UsersIcon className="h-6 w-6 text-blue-500" />, label: '朋友', view: 'friends' as ViewType },
    { icon: <UserGroupIcon className="h-6 w-6 text-blue-500" />, label: '社團', view: 'groups' as ViewType },
    { icon: <BuildingStorefrontIcon className="h-6 w-6 text-blue-500" />, label: '市集', view: 'marketplace' as ViewType },
    { icon: <VideoCameraIcon className="h-6 w-6 text-blue-500" />, label: 'Watch', view: null },
    { icon: <ClockIcon className="h-6 w-6 text-blue-500" />, label: '我的珍藏', view: null },
  ];

  return (
    <aside className="hidden lg:block w-80 p-4 fixed top-14 left-0 h-full">
      <div className="space-y-2">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            onClick={() => item.view && setCurrentView(item.view)}
            className={`w-full flex items-center space-x-3 p-2 rounded-lg transition-colors ${item.view === currentView ? 'bg-gray-200' : 'hover:bg-gray-200'}`}
          >
            {item.label === currentUser.name ? (
               <img src={currentUser.avatar} alt={currentUser.name} className="w-7 h-7 rounded-full" />
            ) : (
              item.icon
            )}
            <span className="font-semibold text-black">{item.label}</span>
          </button>
        ))}
      </div>
      <hr className="my-4" />
      <h2 className="text-black font-semibold mb-2">你的捷徑</h2>
      {/* Add shortcut items here */}
    </aside>
  );
};

export default LeftSidebar;
