import { createSlice } from "@reduxjs/toolkit";

const compSlice = createSlice({
  name: 'comps',
  initialState:{
    data:[],
    dataLenght: 0,
    filter: {}
  },
  reducers: {

  }
})


export const {} = compSlice.actions
export default compSlice.reducer

