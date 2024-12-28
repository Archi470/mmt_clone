'use client';

const FareTypes = () => {
  return (
    <div className="flex flex-col items-center w-[98%] h-50 mx-auto mt-2 text-gray-700">
      {/* Fare Type Selection */}
      <div className="flex items-center justify-between w-full mb-5 text-sm">
        <div className="mr-2 font-bold text-gray-400 text-xs w-14">Select a fare type</div>
        <div className="flex items-center space-x-2">
          <div className="flex items-center h-full px-2 text-xs font-bold text-left bg-blue-100 rounded-l-md">
            <input type="radio" className="mr-1" />
            <p>Regular fees</p>
          </div>
          <div className="flex items-center h-full px-2 text-xs font-bold text-left bg-blue-100 rounded-l-md">
            <input type="radio" className="mr-1" />
            <p>Student fares</p>
          </div>
          <div className="flex items-center h-full px-2 text-xs font-bold text-left bg-blue-100 rounded-l-md">
            <input type="radio" className="mr-1" />
            <p>Senior Citizen</p>
          </div>
          <div className="flex items-center h-full px-2 text-xs font-bold text-left bg-blue-100 rounded-l-md">
            <input type="radio" className="mr-1" />
            <p>Double seat</p>
          </div>
        </div>
      </div>

      {/* Trending Searches */}
      <div className="flex items-center mt-2 text-sm">
        <div className="mr-2 text-xs font-bold">Trending Searches:</div>
        <div className="flex flex-col justify-center px-2 py-1 mx-2 text-sm text-gray-700 bg-gray-200 rounded-md">
          <p>Chennai to Hyderabad</p>
        </div>
        <div className="flex flex-col justify-center px-2 py-1 mx-2 text-sm text-gray-700 bg-gray-200 rounded-md">
          <p>Delhi to Kolkata</p>
        </div>
      </div>
    </div>
  );
};

export default FareTypes;
