import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
reducer : {
    app : appSlice, // added appSlice into store now we have to provide our store to our app usinge Provider
    chat : chatSlice,
},
});
export default store;