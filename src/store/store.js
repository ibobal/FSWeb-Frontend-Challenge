import { configureStore } from "@reduxjs/toolkit";
import settingsReducer from "./reducers/settingsSlice";
import dataReducer from "./reducers/dataSlice";

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    data: dataReducer,
  },
});

export default store;
