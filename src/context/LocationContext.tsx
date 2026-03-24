import React, { createContext, useContext, ReactNode } from "react";
import { useLocation } from "@/src/hooks/useLocation";

interface LocationContextType {
  location: { latitude: number; longitude: number; address?: string } | null;
  error: string | null;
  loading: boolean;
  refreshLocation: () => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const locationData = useLocation();

  return (
    <LocationContext.Provider value={locationData}>
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocationContext must be used within a LocationProvider");
  }
  return context;
};
