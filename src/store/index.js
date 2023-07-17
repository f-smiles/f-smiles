import { configureStore } from "@reduxjs/toolkit";
// import logger from 'redux-logger'
import productsSlice from "./productsSlice";
import singleProductSlice from "./singleProductSlice";
import pricesSlice from "./pricesSlice";
import singlePriceSlice from "./singlePriceSlice";
import bagSlice from "./bagSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, bagSlice);

export const store = configureStore({
  reducer: {
    products: productsSlice,
    singleProduct: singleProductSlice,
    prices: pricesSlice,
    singlePrice: singlePriceSlice,
    bag: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
});

console.log(store.getState());

export const persistor = persistStore(store);

// export default store
