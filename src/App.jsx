import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Components/Routes/Routes";

export default function App() {
  return <RouterProvider router={router} />;
}
