import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = {
  details: {},
  isLoading: false,
};

export const getDetails = createAsyncThunk(
  "filmDetails/getDetails",
  async (id) => {
    const response = await API.get(`api/v2.2/films/${id}`);
    return response.data;
  }
);

export const getActors = createAsyncThunk(
  "filmActors/getActors",
  async (id) => {
    const response = await API.get(`/api/v1/staff`, {
      params: { filmId: id },
    });
    return response.data;
  }
);

export const getAwards = createAsyncThunk(
  "filmDetails/getAwards",
  async (id) => {
    // console.log(id);
    const response = await API.get(`api/v2.2/films/${id}/awards`);
    // console.log(response.data);
    return response.data;
  }
);

export const getReviews = createAsyncThunk(
  "filmDetails/getReviews",
  async (id) => {
    // console.log(id);
    const response = await API.get(`api/v2.2/films/${id}/reviews`);
    console.log(response.data);
    return response.data.items;
  }
);

export const getBudget = createAsyncThunk(
  "filmBudget/getBudget",
  async (id) => {
    // console.log(id);
    const response = await API.get(`api/v2.2/films/${id}/box_office`);
    console.log(response.data);
    return response.data;
  }
);

export const getFacts = createAsyncThunk(" filmFacts/getFacts", async (id) => {
  const response = await API.get(`api/v2.2/films/${id}/facts`);
  console.log(response.data);
  return response.data;
});

const filmDetailsSlice = createSlice({
  name: "filmDetails",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getDetails.fulfilled, (state, action) => {
      state.isLoading = false;
      state.details = action.payload;
    });
    builder.addCase(getDetails.rejected, (state, action) => {
      state.details = action.error;
      state.isLoading = false;
    });
    builder.addCase(getAwards.fulfilled, (state, action) => {
      state.isLoading = false;
      state.awards = action.payload;
    });
    builder.addCase(getActors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.actors = action.payload;
    });
    builder.addCase(getReviews.fulfilled, (state, action) => {
      state.isLoading = false;
      state.reviews = action.payload;
    });
    builder.addCase(getBudget.fulfilled, (state, action) => {
      state.isLoading = false;
      state.budgets = action.payload;
    });
    builder.addCase(getFacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.facts = action.payload;
    });
  },
});

export default filmDetailsSlice.reducer;
