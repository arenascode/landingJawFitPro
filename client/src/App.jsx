import {
  Navigate,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import NavBar from "./components/dashboard/navbar/NavBar.jsx";
import LeftBar from "./components/dashboard/leftBar/LeftBar.jsx";
import RightBar from "./components/dashboard/rightbar/RightBar.jsx";
import Login from "./pages/login/Login.jsx";
import HomePage from "./pages/Home/HomePage.jsx";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import { useSessions } from "./context/AuthContext.jsx";
import HowItWorks from "./pages/HowItWorks/HowItWorks.jsx";
import HomeNavBar from "./components/homeNavBar/HomeNavBar.jsx";

function App() {

  const {currentUser} = useSessions() 
  console.log({ currentUser });
  
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to={"/login"} />;
    }
    return children;
  };

  const AdminLayout = () => {
    return (
      <div id="dashboardContainer">
        <NavBar />
        <div style={{ display: "flex" }} className="dashboard">
          <LeftBar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const HomeLayout = () => {

    return (
      <div className="homeContainer">
        <Outlet/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "",
      element: <HomeLayout />,
      children: [
        {
          path: "/",
          element: <HomePage/>
        },
        {
          path: "/como-funciona",
          element: <HowItWorks/>
        }
      ]
    },
    {
      path: "/admin",
      element: (
        <ProtectedRoute>
          <AdminLayout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/admin",
          element: <AdminDashboard />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
