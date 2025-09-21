import { Info } from "lucide-react";

const PaymentMethodSplit = () => {
  const data = {
    'Card': 40,
    'Netbanking': 35, 
    'Upi': 25
  };

  const total = Object.values(data).reduce((sum, value) => sum + value, 0);
  const colors = ['#e5f3ff', '#60a5fa', '#2563eb']; // Light blue, medium blue, dark blue
  
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
      color: colors[index],
      label: key,
      value: value
    };
  });

  return (
    <div className="bg-white rounded-lg p-6 border border-gray-200 ">
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-900 flex items-center gap-2 mb-1">
          Payment method split
          <Info className="w-4 h-4 text-gray-400" />
        </h3>
        <p className="text-xs text-gray-500">Last week</p>
      </div>
      
      <div className="flex  sm:flex-row items-center justify-between sm:items-start gap-6 sm:gap-8">
       
        
        <div className="flex-shrink-0 order-1 sm:order-2">
          <div className="relative bg-insight">
            <svg width="80" height="80" viewBox="0 0 100 100" className="sm:w-[80px] sm:h-[80px]">
              {segments.map((segment, index) => (
                <path
                  key={index}
                  d={segment.path}
                  fill={segment.color}
                />
              ))}
              {/* Inner circle for donut effect */}
              <circle cx="50" cy="50" r="25" fill="white" />
            </svg>
          </div>
        </div>


        <div className="space-y-3 flex-1 order-2 sm:order-1 max-w-[250px]">
          {segments.map((segment, index) => (
            <div key={index} className="flex items-center justify-between border-b-1 border-b-gray-300">
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-sm flex-shrink-0"
                  style={{ backgroundColor: segment.color }}
                ></div>
                <span className="text-[12px] text-gray-700">{segment.label}</span>
              </div>
              <span className="text-xs font-medium text-gray-900">₹</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentMethodSplit;