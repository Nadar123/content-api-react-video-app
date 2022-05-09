import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

import Navbar from "./components/Layout/Navbar";
import Add from "./pages/Add /Add";
import Watched from "./pages/Watched/Watched";
import WatchedList from "./pages/WatchedList/WatchedList";

import "./App.css";
import "./lib/font-awesome/css/all.min.css";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WatchedList />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
