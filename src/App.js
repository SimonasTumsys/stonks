import Home from "./pages/Home";
import { classNames } from "./utils/utils";
import useStonkBg from "./hooks/useStonkBg";
import bgChart from "./assets/bg-chart.jpg";
import bgStonk from "./assets/stonks.png";

const App = () => {
  const { stonkBg, handleStonkSwitch } = useStonkBg();

  return (
    <div
      className={classNames(
        stonkBg
          ? "bg-[url('./assets/stonks.png')]"
          : "bg-[url('./assets/bg-chart.jpg')]",
        "App h-screen w-screen bg-no-repeat bg-cover bg-center bg-fixed"
      )}
    >
      <Home stonkBg={stonkBg} handleStonkSwitch={handleStonkSwitch} />
    </div>
  );
};

export default App;
