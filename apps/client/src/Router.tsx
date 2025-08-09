import { Routes, Route } from "react-router";
import { Home } from "./routes/Home";
import { Default } from "./layouts/Default";
import About from "./routes/About";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Default/>}>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About/>}/>
      </Route>
    </Routes>
  );
}
