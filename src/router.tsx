import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App.tsx";
import ErrorPage from "./error-page.tsx";
import CV7500 from "./pages/CV7500.tsx";
import CJ1000 from "./pages/CJ1000.tsx";
import CV4400 from "./pages/CV4400.tsx";
import C1616 from "./pages/C1616.tsx";
import C1617 from "./pages/C1617.tsx";
import Cc1100 from "./pages/Cc1100.tsx";
import C4278 from "./pages/C4278.tsx";
import CB2030 from "./pages/CB2030.tsx";
import CB1000 from "./pages/CB1000.tsx";
import TB2515 from "./pages/TB2515.tsx";
import TB2024 from "./pages/TB2024.tsx";
import TB3151 from "./pages/TB3151.tsx";
import IC3200 from "./pages/IC3200.tsx";
import C1500 from "./pages/c1500.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "CV7500",
    element: <CV7500 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "CJ1000",
    element: <CJ1000 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "CV4400",
    element: <CV4400 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "C1616",
    element: <C1616 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "C1617",
    element: <C1617 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "Cc1100",
    element: <Cc1100 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "C4278",
    element: <C4278 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "CB2030",
    element: <CB2030 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "CB1000",
    element: <CB1000 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "TB2515",
    element: <TB2515 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "TB2024",
    element: <TB2024 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "TB3151",
    element: <TB3151 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "IC3200",
    element: <IC3200 />,
    errorElement: <ErrorPage />,
  },
  {
    path: "C1500",
    element: <C1500 />,
    errorElement: <ErrorPage />,
  },
]);
