import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [
      {
        id: new Date().toISOString(),
        cityFrom: "Kyiv",
        cityTo: "London",
        selectedType: "gadgets",
        date: "2022-01-01",
        description: "description",
      },
    ],
  },
  reducers: {
    addOrder: (state, action) => {
      state.orders.push({
        id: new Date().toISOString(),
        cityFrom: action.payload.cityFrom,
        cityTo: action.payload.cityTo,
        selectedType: action.payload.selectedType,
        date: action.payload.date,
        description: action.payload.description,
      });
    },
    deleteOrder: (state, action) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload
      );
    },
  },
});

export const { addOrder, deleteOrder } = orderSlice.actions;
export default orderSlice.reducer;
