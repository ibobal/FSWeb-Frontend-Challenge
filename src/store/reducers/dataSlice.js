import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { data } from "../../data";
import axios from "axios";

export const fetchContentData = createAsyncThunk(
  "fetchContentData",
  async (language, thunkAPI) => {
    const response = await axios.post(
      "https://reqres.in/api/workintech",
      data[language],
      { headers: { "x-api-key": "reqres-free-v1" } }
    );
    console.log(response.data);
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: { data: data["en"], loading: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContentData.pending, (state) => {
        state.loading = "loading";
      })
      .addCase(fetchContentData.fulfilled, (state, action) => {
        state.loading = "idle";
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchContentData.rejected, (state, action) => {
        state.loading = "idle";
        state.error = action.error.message;
      });
  },
});

export default dataSlice.reducer;
