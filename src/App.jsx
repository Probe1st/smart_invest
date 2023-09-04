import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import './stylesheets/input.css';
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <div className="mt-32"></div>
    </BrowserRouter>
  );
}