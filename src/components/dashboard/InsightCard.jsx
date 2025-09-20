import { ArrowRight, Info, TrendingDown, TrendingUp } from "lucide-react";
import MiniLineChart from "./MiniLineChart";

const InsightCard = ({
  title,
  value,
  change,
  trend,
  comparison,
  chartPoints,
  showChart = true,
  className = ""
}) => {
  const getTrendColor = (trend) => {
    switch (trend) {
      case "up":
        return "text-green-600";
      case "down":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  const getTrendIcon = (trend) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4" />;
      case "down":
        return <TrendingDown className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <div className={`bg-white rounded-lg p-6 border border-gray-200 ${className}`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-700 flex items-center gap-2">
            {title} <Info className="w-4 h-4 text-gray-400" />
          </h3>
          <p className="text-xs text-gray-500 mt-1">Last week</p>
        </div>
        
        {showChart && chartPoints && (
  <div className="flex items-center justify-center ml-6 bg-blue-50 rounded-md p-2">
<MiniLineChart chartPoints={chartPoints} />
  </div>
)}


      </div>

      {/* Value and Change */}
      <div className="flex items-end justify-between">
        <div className="flex-1">
          <div className="text-3xl font-bold text-gray-900 mb-2">{value}</div>
          {change !== 0 && comparison && (
            <div className={`flex items-center gap-1 text-sm ${getTrendColor(trend)}`}>
              {getTrendIcon(trend)}
              <span className="font-medium">{Math.abs(change)}</span>
              <span>{comparison}</span>
            </div>
          )}
        </div>

        {/* View Details Button */}
        <div className="ml-4">
          <button className="text-blue-600 text-sm flex items-center gap-1 hover:text-blue-700 whitespace-nowrap">
            View Details <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;
