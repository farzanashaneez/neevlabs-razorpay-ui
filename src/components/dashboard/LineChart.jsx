import { ArrowRight } from "lucide-react";

const LineChart = ({ data, activeMetric }) => {
    const maxValue = Math.max(...data.flatMap(d => [d.thisWeek, d.lastWeek]));
    const chartHeight = 200;
    const chartWidth = 100; // Use percentage for responsiveness
    const padding = 40;
    
    const getY = (value) => chartHeight - padding - ((value / maxValue) * (chartHeight - 2 * padding));
    const getX = (index, totalWidth) => padding + (index * (totalWidth - 2 * padding)) / (data.length - 1);
  
    return (
      <div className="bg-white p-6 rounded-lg border border-gray-200">
        <div className="w-full overflow-x-auto">
          <svg width="100%" height={chartHeight} viewBox={`0 0 600 ${chartHeight}`} className="min-w-[600px]">
            {/* Grid lines */}
            {[0, 0.25, 0.5, 0.75, 1].map((ratio, i) => (
              <line
                key={i}
                x1={padding}
                y1={padding + (chartHeight - 2 * padding) * ratio}
                x2={600 - padding}
                y2={padding + (chartHeight - 2 * padding) * ratio}
                stroke="#f3f4f6"
                strokeWidth="1"
              />
            ))}
            
            {/* Area fills */}
            <defs>
              <linearGradient id="thisWeekGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3"/>
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1"/>
              </linearGradient>
              <linearGradient id="lastWeekGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.2"/>
                <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.1"/>
              </linearGradient>
            </defs>
            
            {/* Generate paths */}
            {(() => {
              const thisWeekPoints = data.map((d, i) => `${getX(i, 600)},${getY(d.thisWeek)}`).join(' ');
              const lastWeekPoints = data.map((d, i) => `${getX(i, 600)},${getY(d.lastWeek)}`).join(' ');
              
              return (
                <>
                  {/* Area for this week */}
                  <polygon
                    points={`${padding},${chartHeight-padding} ${thisWeekPoints} ${600-padding},${chartHeight-padding}`}
                    fill="url(#thisWeekGradient)"
                  />
                  
                  {/* Area for last week */}
                  <polygon
                    points={`${padding},${chartHeight-padding} ${lastWeekPoints} ${600-padding},${chartHeight-padding}`}
                    fill="url(#lastWeekGradient)"
                  />
                  
                  {/* Lines */}
                  <polyline
                    points={thisWeekPoints}
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="3"
                  />
                  <polyline
                    points={lastWeekPoints}
                    fill="none"
                    stroke="#9ca3af"
                    strokeWidth="2"
                  />
                </>
              );
            })()}
            
            {/* X-axis labels */}
            {data.map((d, i) => (
              <text
                key={i}
                x={getX(i, 600)}
                y={chartHeight - 10}
                textAnchor="middle"
                fontSize="12"
                fill="#6b7280"
              >
                {d.date}
              </text>
            ))}
          </svg>
        </div>
        
        <div className="flex items-center gap-6 mt-4 flex-wrap">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-sm"></div>
            <span className="text-sm text-gray-600">This Week</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-gray-400 rounded-sm"></div>
            <span className="text-sm text-gray-600">Last Week</span>
          </div>
          <div className="ml-auto">
            <button className="text-blue-600 text-sm flex items-center gap-1 hover:text-blue-700">
              View {activeMetric === 'collectedAmount' ? 'collected amount' : activeMetric === 'refunds' ? 'refunds' : 'orders'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default LineChart;

 
  
