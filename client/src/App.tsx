import { Button } from "@/components/ui/button";

const App = () => {
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

export default App;
