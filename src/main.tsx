import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { Index } from './pages/Index/index.tsx'
import 'react-toastify/dist/ReactToastify.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/*",
    element: (
      <Index />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);