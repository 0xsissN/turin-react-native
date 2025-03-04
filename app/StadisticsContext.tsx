import { createContext, useContext, useRef } from "react";
import { Stadistics } from "./patterns/Observer";

const StadisticsContext = createContext<Stadistics | null>(null);

export const StadisticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const stadistics = useRef(new Stadistics()).current;

  return (
    <StadisticsContext.Provider value={stadistics}>
      {children}
    </StadisticsContext.Provider>
  );
};

export const useStadistics = () => {
  const context = useContext(StadisticsContext);
  if (!context) {
    throw new Error("useStadistics debe usarse dentro de un StadisticsProvider");
  }
  return context;
};