import { configureStore } from "@reduxjs/toolkit";
import FilmsListReducer from "./components/FilmList/filmsListSlice";
import FilmDetailsReducer from "./pages/FilmDetails/filmDetailsSlice";

const store = configureStore({
  reducer: {
    filmsList: FilmsListReducer,
    filmDetails: FilmDetailsReducer,
  },
});

export default store;
