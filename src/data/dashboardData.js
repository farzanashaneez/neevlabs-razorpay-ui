const dashboardData = {
  dateRange: "11/09/2025 - 17/09/2025",
  overview: {
    collectedAmount: {
      value: "₹85,430",
      percentage: 35,
      trend: "up",
      comparison: "more than the week before",
      chartData: [
        { date: "Sep 11", thisWeek: 45000, lastWeek: 38000 },
        { date: "Sep 12", thisWeek: 52000, lastWeek: 42000 },
        { date: "Sep 13", thisWeek: 38000, lastWeek: 35000 },
        { date: "Sep 14", thisWeek: 28000, lastWeek: 30000 },
        { date: "Sep 15", thisWeek: 48000, lastWeek: 45000 },
        { date: "Sep 16", thisWeek: 65000, lastWeek: 50000 },
        { date: "Sep 17", thisWeek: 78000, lastWeek: 52000 }
      ]
    },
    refunds: {
      value: "₹12,340",
      percentage: -50,
      trend: "down",
      comparison: "less than the week before",
      chartData: [
        { date: "Sep 11", thisWeek: 15000, lastWeek: 25000 },
        { date: "Sep 12", thisWeek: 18000, lastWeek: 28000 },
        { date: "Sep 13", thisWeek: 12000, lastWeek: 22000 },
        { date: "Sep 14", thisWeek: 8000, lastWeek: 18000 },
        { date: "Sep 15", thisWeek: 10000, lastWeek: 20000 },
        { date: "Sep 16", thisWeek: 14000, lastWeek: 24000 },
        { date: "Sep 17", thisWeek: 16000, lastWeek: 26000 }
      ]
    },
    orders: {
      value: "₹156,780",
      percentage: 0,
      trend: "neutral",
      comparison: "same as the week before",
      chartData: [
        { date: "Sep 11", thisWeek: 65000, lastWeek: 65000 },
        { date: "Sep 12", thisWeek: 70000, lastWeek: 70000 },
        { date: "Sep 13", thisWeek: 68000, lastWeek: 68000 },
        { date: "Sep 14", thisWeek: 72000, lastWeek: 72000 },
        { date: "Sep 15", thisWeek: 75000, lastWeek: 75000 },
        { date: "Sep 16", thisWeek: 78000, lastWeek: 78000 },
        { date: "Sep 17", thisWeek: 80000, lastWeek: 80000 }
      ]
    }
  },
insights:{
    paymentCount: {
      value: 47,
      change: -6,
      trend: "down",
      comparison: "less than the week before",
      chartPoints: "2,10 5,8 8,6 10,4 14,5 18,8 22,5 26,2 30,4 34,6 38,5 42,4" // downward trend, smoothed
    },
    paymentFailureCount: {
      value: 29,
      change: 24,
      trend: "up",
      comparison: "more than the week before",
      chartPoints: "2,12 5,8 8,5 10,2 14,3 18,6 22,5 26,4 30,6 34,8 38,7 42,6" // upward trend, smoothed
    },
    refundCount: {
      value: 1,
      change: -1,
      trend: "down",
      comparison: "less than the week before",
      chartPoints: "2,8 5,7 8,6 10,4 14,4 18,4 22,3 26,3 30,2 34,2 38,1 42,1" // small downward trend, smoothed
    },
    refundFailureCount: {
      value: 0,
      change: 0,
      trend: "neutral",
      comparison: "",
      chartPoints: "2,3 5,3 8,3 10,3 14,3 18,3 22,3 26,3 30,3 34,3 38,3 42,3" // flat line, smoothed
    }
  },
  
  
  paymentMethods: {
    card: 45,
    netbanking: 30,
    upi: 25
  }
};

export default dashboardData