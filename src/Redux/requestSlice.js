import { createSlice } from '@reduxjs/toolkit'
// import { format } from "date-fns"; // Добавьте этот импорт

const requestSlice = createSlice({
    name: 'requests',
    initialState: {
        requests: [
            // {
            //   id: new Date().toISOString(),
            //   cityFrom: "Kyiv",
            //   cityTo: "London",
            //   requestType: "order",
            //   selectedType: "gadgets",
            //   date: "2022-01-01",
            //   description: "description",
            //   createdAt: new Date().toLocaleDateString(),
            // },
            // {
            //   id: 34234234234324,
            //   cityFrom: "deliver",
            //   cityTo: "deliver",
            //   requestType: "deliver",
            //   date: "2023-01-01",
            //   createdAt: new Date().toLocaleDateString(),
            // },
        ],

        sortedRequests: [],
    },
    reducers: {
        addRequest: (state, action) => {
            state.requests.push({
                id: new Date().toISOString(),
                requestType: action.payload.requestType,
                cityFrom: action.payload.cityFrom,
                cityTo: action.payload.cityTo,
                selectedType: action.payload.selectedType,
                date: action.payload.date,
                description: action.payload.description,
                createdAt: new Date().toLocaleDateString(),
            })

            state.sortedRequests.push({
                id: new Date().toISOString(),
                requestType: action.payload.requestType,
                cityFrom: action.payload.cityFrom,
                cityTo: action.payload.cityTo,
                selectedType: action.payload.selectedType,
                date: action.payload.date,
                description: action.payload.description,
                createdAt: new Date().toLocaleDateString(),
            })
        },
        deleteRequest: (state, action) => {
            state.requests = state.requests.filter(
                (request) => request.id !== action.payload
            )

            state.sortedRequests = state.requests.filter(
                (request) => request.id !== action.payload
            )
        },

        sortRequestsByDateAsc: (state) => {
            state.sortedRequests = state.requests.sort(
                (a, b) => new Date(a.date) - new Date(b.date)
            )
        },

        sortRequestsByDateDesc: (state) => {
            state.sortedRequests = state.requests.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            )
        },

        sortRequestsByCreatedAtAsc: (state) => {
            state.sortedRequests = state.requests.sort(
                (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
            )
        },

        sortRequestsByCreatedAtDesc: (state) => {
            state.sortedRequests = state.requests.sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
            )
        },

        editRequest: (state, action) => {
            const { id, cityFrom, cityTo, description, date } = action.payload
            const requestIndex = state.requests.findIndex(
                (request) => request.id === id
            )
            if (requestIndex !== -1) {
                state.requests[requestIndex].cityFrom = cityFrom
                state.requests[requestIndex].cityTo = cityTo
                state.requests[requestIndex].description = description
                state.requests[requestIndex].date = date
            }
        },
    },
})

export const {
    addRequest,
    deleteRequest,
    sortRequestsByDateAsc,
    sortRequestsByDateDesc,
    sortRequestsByCreatedAtAsc,
    sortRequestsByCreatedAtDesc,
    editRequest,
} = requestSlice.actions
export default requestSlice.reducer
