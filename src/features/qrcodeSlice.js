import { createSlice } from "@reduxjs/toolkit";

const qrcodeSlice = createSlice({
  name: "qrcode",
  initialState: {
    link: "",
  },
  reducers: {
    setQrCodeLink: (state, action) => {
      state.link = action.payload;
    },
  },
});

export const { setQrCodeLink } = qrcodeSlice.actions;
export default qrcodeSlice.reducer;