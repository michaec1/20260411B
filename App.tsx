
import React, { useState } from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import Feed from './components/Feed';
import Friends from './components/Friends';
import Groups from './components/Groups';
import Marketplace from './components/Marketplace';
import { User } from './types';
import ChatBox from './components/ChatBox';

export type ViewType = 'home' | 'friends' | 'groups' | 'marketplace';

const App: React.FC = () => {
  const [openChats, setOpenChats] = React.useState<User[]>([]);
  const [currentView, setCurrentView] = useState<ViewType>('home');

  const handleOpenChat = (user: User) => {
    setOpenChats(prev => {
      if (prev.find(u => u.id === user.id)) {
        return prev;
      }
      return [...prev, user];
    });
  };

  const handleCloseChat = (userId: number) => {
    setOpenChats(prev => prev.filter(u => u.id !== userId));
  };

  const renderContent = () => {
    switch (currentView) {
      case 'friends':
        return <Friends />;
      case 'groups':
        return <Groups />;
      case 'marketplace':
        return <Marketplace />;
      case 'home':
      default:
        return <Feed />;
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main className="flex justify-between pt-14">
        <LeftSidebar currentView={currentView} setCurrentView={setCurrentView} />
        {renderContent()}
        <RightSidebar onOpenChat={handleOpenChat} />
      </main>
      <div className="fixed bottom-0 right-4 flex items-end space-x-2 z-50">
        {openChats.map((user) => (
          <ChatBox
            key={user.id}
            user={user}
            onClose={() => handleCloseChat(user.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
