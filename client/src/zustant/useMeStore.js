import { create } from "zustand";

const useMeStore = create((set) => ({
  token: null,
  me: null,
  setToken: (token) => set(() => ({ token: token })),
  setMe: (me) => set(() => ({ me })),
  //   getMe:
}));

export default useMeStore;
