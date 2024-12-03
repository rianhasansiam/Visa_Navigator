import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage.jsx/ErrorPage ";
import AllVisas from "./All Visas/AllVisas";
import AddVisa from "./Add Visa/AddVisa";
import MyAddedVisas from "./My Added Visas/MyAddedVisas";
import MyVisaApplication from "./My Visa Application/MyVisaApplication";

const Root = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path: "/all-visas",
          element: <AllVisas/>,
          
        },
        {
          path: "/add-visa",
          element: <AddVisa/>,
          
        },
        {
          path: "/my-added-visas",
          element: <MyAddedVisas/>,
     
        },
        {
          path: "/my-visa-applications",
          element: <MyVisaApplication/>,
         
        },
      ]
    },
    
    
  ]);


  export default Root