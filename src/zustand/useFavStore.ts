import { create } from 'zustand'
import { FavStore } from './favStore';
import { GetMovieById } from '@/types/api'

const useFavStore = create<FavStore>((set) => ({
  favMovies: [],

  addFavMovie: (movie: GetMovieById) => set((state: FavStore) => ({ favMovies: [...state.favMovies, movie] })),
}))


// Exportación 🐶.
export default useFavStore;