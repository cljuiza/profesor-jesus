import { AppRouter } from "./Router";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <AppRouter/>
    </BrowserRouter>
  )
}