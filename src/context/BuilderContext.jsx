import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const BuilderContext = createContext();

export const useBuilderContext = () => useContext(BuilderContext);

export function BuilderProvider({ children }) {
  const getInitialState = (key) => {
    const savedItem = localStorage.getItem(key);
    return savedItem ? JSON.parse(savedItem) : 0;
  };

  const [selectCase, setSelectCase] = useState(() =>
    getInitialState("caseItem")
  );
  const [selectCpu, setSelectCpu] = useState(() => getInitialState("cpuItem"));
  const [selectGpu, setSelectGpu] = useState(() => getInitialState("gpuItem"));
  const [selectMobo, setSelectMobo] = useState(() =>
    getInitialState("moboItem")
  );
  const [selectPsu, setSelectPsu] = useState(() => getInitialState("psuItem"));
  const [selectRam, setSelectRam] = useState(() => getInitialState("ramItem"));
  const [selectStorage, setSelectStorage] = useState(() =>
    getInitialState("StorageItem")
  );
  const [selectCooler, setSelectCooler] = useState(() =>
    getInitialState("coolerItem")
  );

  const handleItem = (key, setFunction) => (item) => {
    localStorage.setItem(key, JSON.stringify(item));

    setFunction(item);
  };

  const handleCase = handleItem("caseItem", setSelectCase);
  const handleCpu = handleItem("cpuItem", setSelectCpu);
  const handleGpu = handleItem("gpuItem", setSelectGpu);
  const handleMobo = handleItem("moboItem", setSelectMobo);
  const handlePsu = handleItem("psuItem", setSelectPsu);
  const handleRam = handleItem("ramItem", setSelectRam);
  const handleStorage = handleItem("StorageItem", setSelectStorage);
  const handleCooler = handleItem("coolerItem", setSelectCooler);

  const clearItem = (key, setFunction) => () => {
    localStorage.removeItem(key);
    setFunction(0);
  };

  const clearCase = clearItem("caseItem", setSelectCase);
  const clearCpu = clearItem("cpuItem", setSelectCpu);
  const clearGpu = clearItem("gpuItem", setSelectGpu);
  const clearMobo = clearItem("moboItem", setSelectMobo);
  const clearPsu = clearItem("psuItem", setSelectPsu);
  const clearRam = clearItem("ramItem", setSelectRam);
  const clearStorage = clearItem("StorageItem", setSelectStorage);
  const clearCooler = clearItem("coolerItem", setSelectCooler);

  return (
    <BuilderContext.Provider
      value={{
        selectCase,
        selectCpu,
        selectGpu,
        selectMobo,
        selectPsu,
        selectRam,
        selectStorage,
        selectCooler,
        handleCase,
        handleCpu,
        handleGpu,
        handleMobo,
        handlePsu,
        handleRam,
        handleStorage,
        handleCooler,
        clearCase,
        clearCpu,
        clearGpu,
        clearMobo,
        clearPsu,
        clearRam,
        clearStorage,
        clearCooler,
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

BuilderProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
