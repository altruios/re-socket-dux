import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import  test_slice    from '../slices/test_slice';
export default configureStore({
  reducer: {
    test:test_slice,
    middleware: [getDefaultMiddleware()]
  },
});
