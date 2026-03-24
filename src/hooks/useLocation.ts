import { useState, useEffect } from "react";
import * as Location from "expo-location";

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

export const useLocation = () => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setError("Permiso de ubicación denegado");
        setLoading(false);
        return;
      }

      const userLocation = await Location.getCurrentPositionAsync({});
      const address = await Location.reverseGeocodeAsync({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
      });

      setLocation({
        latitude: userLocation.coords.latitude,
        longitude: userLocation.coords.longitude,
        address: address[0]?.formattedAddress,
      });
    } catch (err) {
      setError("Error al obtener ubicación");
    } finally {
      setLoading(false);
    }
  };

  return { location, error, loading, refreshLocation: getLocation };
};
