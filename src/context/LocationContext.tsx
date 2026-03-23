import React, { createContext, useContext, useState } from 'react';

type LocationContextType = {
  latitude: number | null;
  longitude: number | null;
  setLocation: (lat: number, lng: number) => void;
};

const LocationContext = createContext<LocationContextType | null>(null);

export function LocationProvider({ children }: { children: React.ReactNode }) {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const setLocation = (lat: number, lng: number) => {
    setLatitude(lat);
    setLongitude(lng);
  };

  return (
    <LocationContext.Provider value={{ latitude, longitude, setLocation }}>
      {children}
    </LocationContext.Provider>
  );
}

export const useLocationContext = () => {
  const ctx = useContext(LocationContext);
  if (!ctx) throw new Error('useLocationContext must be used inside provider');
  return ctx;
};
