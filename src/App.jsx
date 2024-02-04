import { Navbar} from "./components/index";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import { Root,ErrorPage,Home,Shop,Checkout,Auth} from "./routes";
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