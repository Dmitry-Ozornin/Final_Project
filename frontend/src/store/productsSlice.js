import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchProducts = createAsyncThunk("products/fetchPosts", async () => {
  const { data } = await axios.get("/products");
  return data;
});



const initialState = {
  products: {
    items: [],
    basket: [],
    status: "loading",
  },
};

const prodictsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addBasket(state, action) {
      try {
        let dubl = false;
        const masId = localStorage.getItem("basketFasion").split(',');

        console.log(dubl);
        if (masId) {
          if (masId.length > 0) {
            for (let i = 0; i < masId.length; i++) {
              if (masId[i] === action.payload.e) {
                dubl = true;
                console.log("дубль");
                continue;
              }
            }
            if (dubl === false) {
              localStorage.setItem("basketFasion", [localStorage.getItem("basketFasion"), action.payload.e]);
            }
          }
        } else {
          localStorage.setItem("basketFasion", action.payload.e);
        }
      } catch (error) {
        console.log(error);
      }
    },
    getBasket(state, action) {
      state.products.basket = localStorage.getItem("basketFasion");
    },
    deleteBasket(state, action) {
      // console.log(action.payload.idProduct);
      let newBasket = [];
      state.products.basket.split(",").map((index) => {
        if (index !== action.payload.idProduct) {
          newBasket.push(index);
        }
      });
      localStorage.setItem("basketFasion", newBasket);
      state.products.basket = localStorage.getItem("basketFasion");
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products.items = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.products.items = [];
      state.products.status = "error";
    });
  },
});

export const productsReducer = prodictsSlice.reducer;
export const { addBasket, getBasket, deleteBasket } = prodictsSlice.actions;
