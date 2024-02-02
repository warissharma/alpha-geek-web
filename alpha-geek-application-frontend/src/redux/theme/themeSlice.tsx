import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Theme {
  theme: string;
  mode: "dark" | "light";
}

const initialState: Theme = {
  theme: "",
  mode: "light",
};

const counterSlice = createSlice({
  name: "theme-state",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    setDarkTheme: (state) => {
      state.mode = "dark";
    },
    setLightTheme: (state) => {
      state.mode = "light";
    },
    setTheme: (state, action: PayloadAction<Theme["theme"]>) => {
      state.theme = action.payload;
    },
    setThemeAndMode: (state, action: PayloadAction<Theme>) => {
      state.theme = action.payload.theme;
      state.mode = action.payload.mode;
    },
  },
});

export const {
  setDarkTheme,
  setLightTheme,
  setTheme,
  toggleTheme,
  setThemeAndMode,
} = counterSlice.actions;

export default counterSlice.reducer;
