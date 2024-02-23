import { BrowserRouter, Route, Routes } from "react-router-dom";

import About from "./ui/About/About";
import Video from "./ui/contact/Video";
import Home from "./ui/Home/Home";
import Layout from "./ui/layout/Layout";
import Dashboard from "./admin/Dashboard/Dashboard";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="about" element={<About />} />
            <Route path="video" element={<Video />} />
            <Route path="home" element={<Home />} />
          </Route>
          <Route path="admin" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
