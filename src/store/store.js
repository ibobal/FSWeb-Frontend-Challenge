import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "../features/settings/settingsSlice";
import dataReducer from "../features/data/dataSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    data: dataReducer,
  },
});

export default store;
