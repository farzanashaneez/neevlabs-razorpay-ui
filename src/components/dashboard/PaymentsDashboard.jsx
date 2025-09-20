import React, { useState } from 'react';
import { TrendingUp, TrendingDown, Calendar, ChevronDown, Info, ArrowRight } from 'lucide-react';
import dashboardData from '../../data/dashboardData';
import MetricCard from './MetricCard';
import InsightCard from './InsightCard';
import DateRangePicker from './DateRangePicker';
import PieChart from './PieChart';
import LineChart from './LineChart';


const PaymentsDashboard = () => {
  const [period, setPeriod] = useState('Last 7 days');
  const [activeMetric, setActiveMetric] = useState('collectedAmount');
  const data = dashboardData;

  const getCurrentChartData = () => {
    return data.overview[activeMetric].chartData;
  };

  const handleMetricClick = (metricKey) => {
    setActiveMetric(metricKey);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold text-gray-900">Payments Overview</h1>
          <DateRangePicker 
            dateRange={data.dateRange} 
            period={period}
            onPeriodChange={setPeriod}
          />
        </div>

        {/* Overview Cards */}
        <div className="max-w-7xl mx-auto ">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          <MetricCard
            title="Collected Amount"
            value={data.overview.collectedAmount.value}
            percentage={data.overview.collectedAmount.percentage}
            trend={data.overview.collectedAmount.trend}
            comparison={data.overview.collectedAmount.comparison}
            isActive={activeMetric === 'collectedAmount'}
            onClick={() => handleMetricClick('collectedAmount')}
          />
          <MetricCard
            title="Refunds"
            value={data.overview.refunds.value}
            percentage={data.overview.refunds.percentage}
            trend={data.overview.refunds.trend}
            comparison={data.overview.refunds.comparison}
            isActive={activeMetric === 'refunds'}
            onClick={() => handleMetricClick('refunds')}
          />
          <MetricCard
            title="Orders"
            value={data.overview.orders.value}
            percentage={data.overview.orders.percentage}
            trend={data.overview.orders.trend}
            comparison={data.overview.orders.comparison}
            isActive={activeMetric === 'orders'}
            onClick={() => handleMetricClick('orders')}
          />
        </div>

        {/* Chart */}
        <LineChart data={getCurrentChartData()} activeMetric={activeMetric} />
        </div>

        {/* Top Insights */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h2 className="text-xl font-bold text-gray-900">Top Insights</h2>
          <DateRangePicker 
            dateRange={data.dateRange} 
            period={period}
            onPeriodChange={setPeriod}
          />
        </div>

        {/* Insights Grid - Proper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Payment Count */}
          <InsightCard
            title="Payment count"
            value={data.insights.paymentCount.value}
            change={data.insights.paymentCount.change}
            trend={data.insights.paymentCount.trend}
            comparison={data.insights.paymentCount.comparison}
            chartPoints={data.insights.paymentCount.chartPoints}
          />
          
          {/* Payment Failure Count */}
          <InsightCard
            title="Payment failure count"
            value={data.insights.paymentFailureCount.value}
            change={data.insights.paymentFailureCount.change}
            trend={data.insights.paymentFailureCount.trend}
            comparison={data.insights.paymentFailureCount.comparison}
            chartPoints={data.insights.paymentFailureCount.chartPoints}
          />
          
          {/* Refund Count */}
          <InsightCard
            title="Refund count"
            value={data.insights.refundCount.value}
            change={data.insights.refundCount.change}
            trend={data.insights.refundCount.trend}
            comparison={data.insights.refundCount.comparison}
            chartPoints={data.insights.refundCount.chartPoints}
            className="md:col-span-1 xl:col-span-1"
          />
          
          {/* Refund Failure Count */}
          <InsightCard
            title="Refund failure count"
            value={data.insights.refundFailureCount.value}
            change={data.insights.refundFailureCount.change}
            trend={data.insights.refundFailureCount.trend}
            comparison={data.insights.refundFailureCount.comparison}
            chartPoints={data.insights.refundFailureCount.chartPoints}
            className="md:col-span-1 xl:col-span-1"
          />
          
          {/* Payment Method Split - Spans 2 columns on medium screens, 1 on xl */}
          <div className="md:col-span-2 xl:col-span-1">
            <PieChart 
              data={data.paymentMethods}
              title="Payment method split"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentsDashboard;