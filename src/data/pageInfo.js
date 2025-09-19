// src/data/pageInfo.js

const pageInfo = {
    dashboard: {
      title: "Dashboard",
      description:
        "Your central hub to track business performance, recent activity, and quick insights all in one place."
    },
    payments: {
      title: "Payments",
      description:
        "Manage all your transactions, view payment history, and track settlements securely."
    },
    banking: {
      title: "Banking",
      description:
        "Access smart banking tools, manage accounts, and simplify business finances in real time.",
      subcategories: {
        accounts: {
          title: "Accounts",
          description: "Track balances, manage account activity, and oversee company funds."
        },
        payouts: {
          title: "Payouts",
          description: "Send money instantly to vendors, employees, or customers with ease."
        },
        cards: {
          title: "Business Cards",
          description: "Smart cards for team expenses with real-time tracking and control."
        }
      }
    },
    payroll: {
      title: "Payroll",
      description:
        "Automate salary payments, manage employee details, and stay compliant with ease.",
      subcategories: {
        employees: {
          title: "Employee Management",
          description: "Add, manage, and organize employee records in one place."
        },
        salaries: {
          title: "Salaries",
          description: "Automated salary disbursal with tax and compliance handled."
        },
        compliance: {
          title: "Compliance",
          description: "Stay compliant with PF, ESI, and tax filings effortlessly."
        }
      }
    },
    more: {
      title: "More",
      description:
        "Explore additional tools and services designed to help your business grow faster.",
      subcategories: {
        analytics: {
          title: "Analytics",
          description: "Gain insights into sales, growth, and customer behavior."
        },
        integrations: {
          title: "Integrations",
          description: "Connect with third-party tools to extend business capabilities."
        },
        support: {
          title: "Support",
          description: "Get help through FAQs, live chat, or dedicated account managers."
        }
      }
    }
  };
  
  export default pageInfo;
  