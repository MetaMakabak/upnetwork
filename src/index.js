import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { PrivyProvider } from '@privy-io/react-auth';
import { envConfig } from './utils/env';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <PrivyProvider
      appId={envConfig.privyAppId}
      config={
        {
          appearance:
          {
            "accentColor": "#6A6FF5",
            "theme": "dark",
            "showWalletLoginFirst": true,
            // "logo": 'https://www.turnup.so/logo512.png'
          },
          captchaEnabled: false,
          embeddedWallets: {
            createOnLogin: "all-users",
            noPromptOnSignature: true, // defaults to false
            requireUserPasswordOnCreate: false
          }
        }
      }
    >
      <App />
    </PrivyProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
