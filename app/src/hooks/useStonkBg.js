import { useState } from "react";

const useStonkBg = () => {
  const [stonkBg, setStonkBg] = useState(false);
  const handleStonkSwitch = () => {
    setStonkBg(!stonkBg);
  };

  return { stonkBg, handleStonkSwitch };
};

export default useStonkBg;
