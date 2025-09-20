import { Info, TrendingDown, TrendingUp } from "lucide-react";

const MetricCard = ({ title, value, percentage, trend, comparison, isActive, onClick }) => {
    const getTrendColor = (trend) => {
      switch (trend) {
        case 'up': return 'text-green-600';
        case 'down': return 'text-red-600';
        default: return 'text-gray-600';
      }
    };
  
    const getTrendIcon = (trend) => {
      switch (trend) {
        case 'up': return <TrendingUp className="w-4 h-4" />;
        case 'down': return <TrendingDown className="w-4 h-4" />;
        default: return null;
      }
    };
  
    return (
      <div 
        onClick={onClick}
        className={`rounded-lg p-6 border cursor-pointer transition-all duration-200 hover:shadow-md ${
          isActive 
            ? 'bg-blue-50 border-blue-200 shadow-sm' 
            : 'bg-white border-gray-200 hover:border-gray-300'
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-gray-700 flex items-center gap-2">
            {title}
            <Info className="w-4 h-4 text-gray-400" />
          </h3>
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">{value}</span>
            {percentage !== 0 && (
              <div className={`flex items-center gap-1 ${getTrendColor(trend)}`}>
                {getTrendIcon(trend)}
                <span className="text-sm font-medium">{Math.abs(percentage)}%</span>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500">{comparison}</p>
        </div>
      </div>
    );
  };
  export default MetricCard