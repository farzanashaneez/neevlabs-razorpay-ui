import { Calendar, ChevronDown } from "lucide-react";
import { useState } from "react";

const DateRangePicker = ({ dateRange, period, onPeriodChange }) => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <Calendar className="w-4 h-4 text-gray-500" />
          <span>{dateRange}</span>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-50"
          >
            {period}
            <ChevronDown className="w-4 h-4" />
          </button>
          {isOpen && (
            <div className="absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
              <div className="py-1">
                {['Last 7 days', 'Last 30 days', 'Last 90 days'].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      onPeriodChange(option);
                      setIsOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };
  export default DateRangePicker;