import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import  test_slice    from '../slices/test_slice';
import  server_sender    from '../slices/server_sender';
export default configureStore({
  reducer: {
    test:test_slice,
    server_sender,
    middleware: getDefaultMiddleware({    
         serializableCheck: {      
              // Ignore these action types      
              ignoredPaths: ['./slices'],      
          },  
     }),
  },
});
