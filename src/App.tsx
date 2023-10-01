import "./App.css";
import { Home } from "./pages/home/home";
import { Route, Routes } from "react-router-dom";
import { AppLayout } from "./components/applayout/applayout";
import { Roster } from "./pages/roster";

export default function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roster" element={<Roster />} />
      </Routes>
    </AppLayout>
  );
}
