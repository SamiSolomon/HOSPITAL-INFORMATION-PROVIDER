import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
 
 import App from "./App.js"

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Suspense fallback={<div>Loadingg...</div>}>
    <React.StrictMode>
      <BrowserRouter>
       <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();