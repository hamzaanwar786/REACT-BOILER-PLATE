const { createSlice } = require("@reduxjs/toolkit");

const languageSlice = createSlice({
  name: "language",
  initialState: {
    data: "en",
  },
  reducers: {
    setLanguage: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;
export default languageSlice.reducer;
