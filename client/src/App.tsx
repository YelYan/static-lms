import { Button } from "@/components/ui/button";
import { Routes, Route } from "react-router";

import About from "./pages/about";
import NotFound from "./pages/notfound";

const Home = () => {
  return (
    <div>
      <h1 className="text-center text-4xl text-red-500">Hello world</h1>

      <Button
        variant={"default"}
        className="text-green-500 cursor-pointer bg-yellow-400"
      >
        Click me
      </Button>
    </div>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
