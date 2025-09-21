import { Home, CreditCard, FileText, Shield, Link2, Users, Building, Settings, X } from '../components/ui/Icons';

export const sidebarItems = [
  { icon: Home, label: 'Home', path: '/home' },
  { icon: CreditCard, label: 'Transactions', path: '/transactions' },
  { icon: FileText, label: 'Settlements', path: '/settlements' },
  { icon: FileText, label: 'Reports', path: '/reports' },
  { icon: Shield, label: 'Risk and Fraud', path: '/risk-fraud' }
];

export const paymentProducts = [
  { icon: Link2, label: 'Payment Links', path: '/payment-links' },
  { icon: Link2, label: 'Payment Links 2', path: '/payment-links-2' },
  { icon: FileText, label: 'Payment Pages', path: '/payment-pages' },
  { icon: Link2, label: 'Razorpay.me Link', path: '/razorpay-me' },
  { icon: Link2, label: 'Invoice', path: '/invoice' },
  { icon: Link2, label: 'Subscriptions', path: '/subscriptions' },
  { icon: FileText, label: 'Gift Cards', path: '/gift-cards' },
  { icon: Link2, label: 'Donations', path: '/donations' },
  { icon: FileText, label: 'Recurring Payments', path: '/recurring-payments' },
  { icon: Link2, label: 'Checkout', path: '/checkout' },
  { icon: FileText, label: 'Marketplace', path: '/marketplace' },
  { icon: Link2, label: 'POS', path: '/pos' },
  { icon: FileText, label: 'Payouts', path: '/payouts' },
  { icon: Link2, label: 'QR Payments', path: '/qr-payments' },
  { icon: Link2, label: 'Payment Analytics', path: '/payment-analytics' },
 
];

export const customerProducts = [
  { icon: Users, label: 'Customers', path: '/customers' },
  { icon: Building, label: 'Offers', path: '/offers' },
  { icon: Users, label: 'Developers', path: '/developers' },
  { icon: Building, label: 'Apps & Deals', path: '/apps-deals' }
];

export const BankingProducts = [
  { icon: X, label: 'Payroll', path: '/payroll' },
];
export const accountSettings = [
  { icon: Settings, label: 'Test Mode', path: '/test-mode' },
  { icon: Settings, label: 'Account & Settings', path: '/account-settings' }
];