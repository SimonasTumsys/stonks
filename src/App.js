import Home from "./pages/Home";
import backgroundImage from "./assets/bg-chart.jpg";

const App = () => {
  return (
    <div
      className="App h-screen w-screen 
      bg-[url('./assets/stonks.png')] 
    bg-no-repeat bg-cover bg-center bg-fixed"
    >
      <Home />
    </div>
  );
};

export default App;
