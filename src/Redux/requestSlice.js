import { createSlice } from "@reduxjs/toolkit";
// import { format } from "date-fns"; // Добавьте этот импорт

const requestSlice = createSlice({
  name: "requests",
  initialState: {
    requests: [
      {
        id: new Date().toISOString(),
        cityFrom: "Kyiv",
        cityTo: "London",
        requestType: "order",
        selectedType: "gadgets",
        date: "2022-01-01",
        description: "description",
        createdAt: new Date().toISOString(),
      },

      {
        id: 34234234234324,
        cityFrom: "deliver",
        cityTo: "deliver",
        requestType: "deliver",
        date: "2023-01-01",
        createdAt: new Date().toISOString(),
      },
    ],
  },
  reducers: {
    addRequest: (state, action) => {
      const currentDate = new Date();
      state.requests.push({
        id: new Date().toISOString(),
        requestType: action.payload.requestType,
        cityFrom: action.payload.cityFrom,
        cityTo: action.payload.cityTo,
        selectedType: action.payload.selectedType,
        date: action.payload.date,
        description: action.payload.description,
        createdAt: currentDate.toISOString(),
      });
    },
    deleteRequest: (state, action) => {
      state.requests = state.requests.filter(
        (request) => request.id !== action.payload
      );
    },
  },
});

export const { addRequest, deleteRequest } = requestSlice.actions;
export default requestSlice.reducer;
