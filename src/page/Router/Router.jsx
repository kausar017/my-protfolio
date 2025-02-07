import { createBrowserRouter } from "react-router-dom";
import Home from "../../Home";
import Detals from "../Detals/Detals";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: `/detals/:id`,
    element: <Detals />,
    loader: async ({ params }) => {
      const res = await fetch("/Detals.json"); 
      const data = await res.json(); 
      return data.find((item) => item.id === parseInt(params.id));
    },
  },
]);

export default Router;
