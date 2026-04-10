import React from 'react';

const Friends: React.FC = () => {
  return (
    <div className="flex-grow max-w-3xl mx-auto mt-4 px-4 w-full">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">朋友</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border rounded-lg p-4 flex flex-col items-center">
              <img src={`https://i.pravatar.cc/150?img=${i + 10}`} alt="Friend" className="w-24 h-24 rounded-full mb-2" />
              <span className="font-semibold">朋友 {i}</span>
              <button className="mt-2 bg-blue-100 text-blue-600 hover:bg-blue-200 px-4 py-1 rounded-md w-full font-semibold transition-colors">新增朋友</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Friends;
