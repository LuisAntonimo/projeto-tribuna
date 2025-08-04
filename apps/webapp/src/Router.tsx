import { Routes, Route } from "react-router";
import { Home } from "./routes/Home";
import { Auth } from "./routes/Auth/Auth";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/auth" element={<Auth/>}/>
    </Routes>
  );
}
