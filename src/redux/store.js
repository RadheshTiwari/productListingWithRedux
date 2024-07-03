const {configureStore} = require('@reduxjs/toolkit');
import ProductSlice from './reducers';

const store = configureStore({reducer: {ProductSlice: ProductSlice}});
export default store;
