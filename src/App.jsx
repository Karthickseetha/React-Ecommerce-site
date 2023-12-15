import { Navbar} from "./components/index";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Root,ErrorPage,Home,Shop,Checkout,Contact,Auth} from "./routes";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      { path: "/",  element: <Home/>},

      {
        path: "/shop/*",
        element: <Shop/>,
      },
      
    {
      path: "/cart",
      element: <Checkout/>,
    },
    {
      path: "/contact",
      element: <Contact/>,
      
    },
    {
      path: "/auth",
      element: <Auth/>,
      
    },
    
  ],
  },
  
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )

}
 
export default App;