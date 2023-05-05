// store/store.js
import { configureStore } from '@reduxjs/toolkit';
import qrcodeReducer from './features/qrcodeSlice';

export default configureStore({
    reducer: {
        qrcode: qrcodeReducer,
    },
});