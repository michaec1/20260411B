import React from 'react';

const Groups: React.FC = () => {
  return (
    <div className="flex-grow max-w-3xl mx-auto mt-4 px-4 w-full">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">社團</h2>
        <div className="space-y-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center space-x-4 border-b pb-4 last:border-0 last:pb-0">
              <div className="w-16 h-16 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-500 font-bold text-xl">
                G{i}
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-lg">社團 {i}</h3>
                <p className="text-gray-500 text-sm">10k 位成員 · 每天 10+ 篇貼文</p>
              </div>
              <button className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md font-semibold transition-colors">加入</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Groups;
