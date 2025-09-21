// ErrorBoundary.jsx
import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    
    this.setState({
      error: error,
      errorInfo: errorInfo
    });

  
  }

  render() {
    if (this.state.hasError) {
      // Custom fallback UI
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.96-.833-2.73 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h2 className="text-xl font-semibold text-gray-900 text-center mb-2">
              Oops! Something went wrong
            </h2>
            
            <p className="text-gray-600 text-center mb-6">
              We're sorry for the inconvenience. The application has encountered an unexpected error.
            </p>
            
            <div className="flex gap-3">
              <button
                onClick={() => window.location.reload()}
                className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Reload Page
              </button>
              
              <button
                onClick={() => this.setState({ hasError: false, error: null, errorInfo: null })}
                className="flex-1 bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Try Again
              </button>
            </div>
            
            {/* Development mode: Show error details */}
            {import.meta.env.DEV && this.state.error && (
              <details className="mt-4 p-4 bg-gray-100 rounded-md">
                <summary className="cursor-pointer text-sm font-medium text-gray-700 mb-2">
                  Error Details (Dev Mode)
                </summary>
                <div className="text-xs text-gray-600 space-y-2">
                  <div>
                    <strong>Error:</strong>
                    <pre className="mt-1 whitespace-pre-wrap">{this.state.error.toString()}</pre>
                  </div>
                  <div>
                    <strong>Stack Trace:</strong>
                    <pre className="mt-1 whitespace-pre-wrap">{this.state.errorInfo.componentStack}</pre>
                  </div>
                </div>
              </details>
            )}
          </div>
        </div>
      );
    }

    // No error, render children normally
    return this.props.children;
  }
}

export default ErrorBoundary;

// ===== USAGE EXAMPLES =====

// 1. Wrap your entire app (main.jsx or App.jsx)
/*
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ErrorBoundary from './components/ErrorBoundary.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
*/

// 2. Wrap specific components
/*
// App.jsx
import ErrorBoundary from './components/ErrorBoundary'
import Dashboard from './components/Dashboard'
import UserProfile from './components/UserProfile'

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Dashboard />
      </ErrorBoundary>
      
      <ErrorBoundary>
        <UserProfile />
      </ErrorBoundary>
    </div>
  )
}
*/

// 3. Custom Error Boundary with props
/*
class CustomErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <div>Something went wrong.</div>;
    }

    return this.props.children;
  }
}

// Usage:
<CustomErrorBoundary 
  fallback={<MyCustomErrorUI />}
  onError={(error, errorInfo) => logToService(error, errorInfo)}
>
  <MyComponent />
</CustomErrorBoundary>
*/

// 4. Hook for error handling in functional components (for non-render errors)
/*
// useErrorHandler.js
import { useState } from 'react';

export const useErrorHandler = () => {
  const [error, setError] = useState(null);

  const throwError = (error) => {
    setError(error);
    throw error; // This will be caught by ErrorBoundary
  };

  const clearError = () => setError(null);

  return { throwError, clearError, error };
};

// Usage in functional component:
function MyComponent() {
  const { throwError } = useErrorHandler();
  
  const handleAsyncError = async () => {
    try {
      await riskyAsyncOperation();
    } catch (error) {
      throwError(error); // This will trigger the error boundary
    }
  };

  return <button onClick={handleAsyncError}>Do Something Risky</button>;
}
*/