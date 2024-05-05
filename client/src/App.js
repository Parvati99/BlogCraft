import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Single from "./pages/Single";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import "../src/css/style.scss"

 const Layout=()=>{
  return(
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path: "/",
      element:<Home/>,
    },
    {
      path: "/post/:id",
    element:<Single/>,
  },
  {
    path: "/write",
  element:<Write/>,
},
    ],
  },
  {
    path: "/login",
    element: <Login/>,
  },
  
  {
    path: "/register",
    element: <Register/>,
  },
 
]);

function App() {
  return (
    <div className="app">
      <div className="container">
        <RouterProvider router={router}/>
    </div>
    </div>
  );
}

export default App;
