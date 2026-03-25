import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import * as Location from "expo-location";

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
  city?: string;
}

interface LocationContextType {
  location: LocationData | null;
  error: string | null;
  loading: boolean;
  refreshLocation: () => Promise<void>;
  getAddressFromCoords: (lat: number, lng: number) => Promise<string>;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const getAddressFromCoords = async (latitude: number, longitude: number): Promise<string> => {
    try {
      const address = await Location.reverseGeocodeAsync({ latitude, longitude });
      if (address[0]) {
        const { street, district, city, region } = address[0];
        return [street, district, city, region].filter(Boolean).join(", ");
      }
      return `${latitude}, ${longitude}`;
    } catch {
      return `${latitude}, ${longitude}`;
    }
  };

  const getLocation = async () => {
    setLoading(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permiso de ubicación denegado");
        setLoading(false);
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      const address = await getAddressFromCoords(
        userLocation.coords.latitude,
        userLocation.coords.longitude
      );

      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        address,
      });
      setError(null);
    } catch (err) {
      setError("Error al obtener ubicación");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <LocationContext.Provider
      value={{
        location,
        error,
        loading,
        refreshLocation: getLocation,
        getAddressFromCoords,
      }}
    >
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
