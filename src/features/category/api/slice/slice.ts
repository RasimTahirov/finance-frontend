import { createSlice } from '@reduxjs/toolkit'

import { categoryAll, categoryThunk } from '../thunks/thunk'
import { IInitialStateCategory } from '../../types/type'

const initialState: IInitialStateCategory = {
  category: [],
  error: null,
  loading: false,
}

const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    removeCategory: (state, action) => {
      state.category = state.category
        ? state.category.filter((cat) => cat.id !== action.payload)
        : null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(categoryThunk.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(categoryThunk.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.category = action.payload
      })
      .addCase(categoryThunk.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })

      .addCase(categoryAll.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(categoryAll.fulfilled, (state, action) => {
        state.loading = false
        state.error = null
        state.category = action.payload
      })
      .addCase(categoryAll.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload as string
      })
  },
})

export default categorySlice.reducer
export const { removeCategory } = categorySlice.actions
