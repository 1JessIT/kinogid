import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import API from "../../requester";

const initialState = {
  list: [],
  isLoading: false,
  error: {},
};

export const getFilms = createAsyncThunk("filmsList/getFilms", async (page) => {
  const response = await API.get(`/api/v2.2/films/top?page=${page}`, {
    params: { type: "TOP_250_BEST_FILMS" },
  });
  // console.log(response.data);
  // console.log(response.data.pagesCount);
  return {
    films: response.data.films,
    pagesCount: response.data.pagesCount,
  };
});

export const getFilmsBySearchAPI = async (search) => {
  const response = await API.get("api/v2.1/films/search-by-keyword", {
    params: { keyword: search },
  });
  return response.data;
};

export const getFilmsBySearch = createAsyncThunk(
  "fList/getFilmsBySearch",
  getFilmsBySearchAPI
);

const filmsListSlice = createSlice({
  name: "filmsList",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFilms.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getFilms.fulfilled, (state, action) => {
      state.isLoading = false;
      state.list = action.payload.films;
      state.pagesCount = action.payload.pagesCount;
    });
    builder.addCase(getFilms.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
    });
    builder.addCase(getFilmsBySearch.pending, (state) => {
      console.log("Searching films...");
      state.isLoading = true;
    });

    builder.addCase(getFilmsBySearch.fulfilled, (state, actions) => {
      console.log("Films searched successfully:", actions.payload);
      state.isLoading = false;
      state.list = actions.payload.films;
    });

    builder.addCase(getFilmsBySearch.rejected, (state, action) => {
      console.error("Error searching films:", action.error);
      state.isLoading = false;
      state.error = action.error;
    });
  },
});

export default filmsListSlice.reducer;
export const { reducer } = filmsListSlice;
