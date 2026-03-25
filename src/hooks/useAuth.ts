import { useAuthStore, User, Address } from "@/src/store/authStore";

export const useAuth = () => {
  const user = useAuthStore((state) => state.user);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const loading = useAuthStore((state) => state.loading);
  const signIn = useAuthStore((state) => state.signIn);
  const signUp = useAuthStore((state) => state.signUp);
  const signOut = useAuthStore((state) => state.signOut);
  const updateUser = useAuthStore((state) => state.updateUser);
  const addAddress = useAuthStore((state) => state.addAddress);
  const removeAddress = useAuthStore((state) => state.removeAddress);
  const setDefaultAddress = useAuthStore((state) => state.setDefaultAddress);

  const defaultAddress = user?.addresses?.find(a => a.isDefault);
  const addresses = user?.addresses || [];

  return {
    user,
    isAuthenticated,
    loading,
    signIn,
    signUp,
    signOut,
    updateUser,
    addAddress,
    removeAddress,
    setDefaultAddress,
    defaultAddress,
    addresses,
  };
};
