import { useState } from "react";

const usePriceHistory = () => {
  const [historyModal, setHistoryModal] = useState(false);
  const [resolution, setResolution] = useState(1);
  const [symbol, setSymbol] = useState("");

  const toggleHistoryModal = () => {
    setHistoryModal(!historyModal);
  };

  const handleResolutionChange = (e) => {
    setResolution(e.target.value);
  };

  return {
    historyModal,
    toggleHistoryModal,
    resolution,
    handleResolutionChange,
    symbol,
    setSymbol,
  };
};

export default usePriceHistory;
