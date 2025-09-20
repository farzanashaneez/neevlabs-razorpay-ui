import React from "react";

const MiniLineChart = ({
  chartPoints = "",
  stroke = "#ef4444", // red
  width = 150,
  height = 60,
  fill = "rgba(239, 68, 68, 0.2)"
}) => {
    console.log(chartPoints)
  if (!chartPoints) return null;

  // Convert string points to array of numbers
  const rawPoints = chartPoints.split(" ").map(point => {
    const [x, y] = point.split(",").map(Number);
    return { x, y };
  });

  if (rawPoints.length === 0) return null;

  // Normalize x to fill the SVG width and y to fit SVG height
  const minY = Math.min(...rawPoints.map(p => p.y));
  const maxY = Math.max(...rawPoints.map(p => p.y));

  const points = rawPoints.map((p, i) => ({
    x: (i / (rawPoints.length - 1)) * width,
    y: height - ((p.y - minY) / (maxY - minY || 1)) * height
  }));

  // Convert points array to string for polyline
  const pointsStr = points.map(p => `${p.x},${p.y}`).join(" ");

  // Optional fill under the line
  const fillPointsStr = `${pointsStr} ${width},${height} 0,${height}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none">
      <polyline points={fillPointsStr} fill={fill} stroke="none" />
      <polyline
        points={pointsStr}
        fill="none"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default MiniLineChart;
