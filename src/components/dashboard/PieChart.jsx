import { Info } from "lucide-react";

const PieChart = ({ data, title }) => {
    const total = Object.values(data).reduce((sum, value) => sum + value, 0);
    const colors = ['#e5f3ff', '#3b82f6', '#1e40af']; // Light blue, blue, dark blue to match your image
    
    let currentAngle = 0;
    const segments = Object.entries(data).map(([key, value], index) => {
      const angle = (value / total) * 360;
      const startAngle = currentAngle;
      currentAngle += angle;
      
      const x1 = 50 + 35 * Math.cos((startAngle - 90) * Math.PI / 180);
      const y1 = 50 + 35 * Math.sin((startAngle - 90) * Math.PI / 180);
      const x2 = 50 + 35 * Math.cos((currentAngle - 90) * Math.PI / 180);
      const y2 = 50 + 35 * Math.sin((currentAngle - 90) * Math.PI / 180);
      
      const largeArcFlag = angle > 180 ? 1 : 0;
      
      return {
        path: `M 50 50 L ${x1} ${y1} A 35 35 0 ${largeArcFlag} 1 ${x2} ${y2} Z`,
        color: colors[index % colors.length],
        label: key,
        percentage: Math.round((value / total) * 100)
      };
    });
  
    return (
      <div className="bg-white rounded-lg p-6 border border-gray-200 h-full">
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-700 flex items-center gap-2 mb-1">
            {title}
            <Info className="w-4 h-4 text-gray-400" />
          </h3>
          <p className="text-xs text-gray-500">Last week</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-start gap-6">
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative">
              <svg width="120" height="120" viewBox="0 0 100 100">
                {segments.map((segment, index) => (
                  <path
                    key={index}
                    d={segment.path}
                    fill={segment.color}
                  />
                ))}
                {/* Inner circle for donut effect */}
                <circle cx="50" cy="50" r="20" fill="white" />
              </svg>
            </div>
          </div>
          
          <div className="space-y-4 w-full">
            {segments.map((segment, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-3 h-3 rounded-sm flex-shrink-0"
                    style={{ backgroundColor: segment.color }}
                  ></div>
                  <span className="text-sm text-gray-600 capitalize">{segment.label}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">₹</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  export default PieChart