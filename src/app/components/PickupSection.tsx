import { ChevronDown } from "lucide-react";
function PickupSection() {
  return (
    <div className="flex flex-col items-start justify-start bg-white rounded-lg shadow-sm px-1 py-1 w-fit">

      <div className="mb-2">
        <div className="flex items-center space-x-2">
          <input
            type="radio"
            id="pickup"
            name="option"
            className="text-blue-500 focus:ring-blue-500"
            defaultChecked
          />
          <label
            htmlFor="pickup"
            className="text-sm font-semibold text-gray-800"
          >
            Pick – Up
          </label>
        </div>
      </div>

      <div className="flex items-center justify-between w-full">

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-gray-900">Locations</span>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Selectyourcity</span>
            <ChevronDown />
          </div>
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1 sm:mx-4"></div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-gray-900">Date</span>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Selectyourdate</span>
            <ChevronDown />
          </div>
        </div>

        <div className="w-px h-6 bg-gray-200 mx-1 sm:mx-4"></div>

        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold text-gray-900">Time</span>
          <div className="flex items-center space-x-2 text-sm text-gray-400">
            <span>Selectyourtime</span>
            <ChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickupSection;
