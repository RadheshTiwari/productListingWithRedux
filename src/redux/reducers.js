const {createSlice} = require('@reduxjs/toolkit');

const ProductSlice = createSlice({
  name: 'productSlice',
  initialState: {
    productData: [],
    cartData: [],
  },
  reducers: {
    productLisitng: (state, action) => {
      state.productData.push({...action.payload});
    },
    addToCart: (state, action) => {
      let myindex = -1;
      state.cartData.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      if (myindex == -1) {
        state.cartData.push({
          category: action.payload.category,
          description: action.payload.description,
          id: action.payload.id,
          image: action.payload.image,
          price: action.payload.price,
          qty: action.payload.qty + 1,
          rating: action.payload.rating,
          title: action.payload.title,
        });
      } else {
        state.cartData[myindex].qty = state.cartData[myindex].qty + 1;
      }
    },
    removeFromart: (state, action) => {
      // console.log('clicked');

      let myindex = -1;
      state.cartData.map((item, index) => {
        if (item.id == action.payload.id) {
          myindex = index;
        }
      });
      // console.log('myindex',myindex);
      if (myindex == -1) {
        // console.log("ifblock")
        return;
      } else {
        // console.log("elseblock")
        state.cartData[myindex].qty = state.cartData[myindex].qty - 1;
      }
    },
    deleteFromCart: (state, action) => {
      state.cartData = state.cartData.filter(
        item => item?.id !== action?.payload,
      );
    },
  },
});
export default ProductSlice.reducer;
export const {addToCart, deleteFromCart, productLisitng, removeFromart} =
  ProductSlice.actions;
