import React from 'react';

const Marketplace: React.FC = () => {
  return (
    <div className="flex-grow max-w-3xl mx-auto mt-4 px-4 w-full">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">市集</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">圖片 {i}</span>
              </div>
              <div className="p-3">
                <div className="font-bold text-lg">NT$ {i * 100}</div>
                <div className="text-gray-800 font-medium">商品名稱 {i}</div>
                <div className="text-gray-500 text-sm">台北市</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
