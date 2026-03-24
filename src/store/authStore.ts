import { create } from "zustand";
import { supabase } from "@/src/lib/supabase";

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  session: any | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  session: null,
  loading: false,

  signIn: async (email, password) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;

      const { data: profile } = await supabase
        .from("profiles")
        .select("name")
        .eq("id", data.user.id)
        .single();

      set({
        user: {
          id: data.user.id,
          email: data.user.email!,
          name: profile?.name || email.split("@")[0],
        },
        session: data.session,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  signUp: async (email, password, name) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
      });
      if (error) throw error;

      if (data.user) {
        await supabase.from("profiles").insert({
          id: data.user.id,
          name,
          email,
        });
      }

      set({
        user: {
          id: data.user!.id,
          email,
          name,
        },
        session: data.session,
        loading: false,
      });
    } catch (error) {
      set({ loading: false });
      throw error;
    }
  },

  signOut: async () => {
    await supabase.auth.signOut();
    set({ user: null, session: null });
  },

  setUser: (user) => set({ user }),
}));
