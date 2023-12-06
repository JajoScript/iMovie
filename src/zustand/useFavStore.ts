import { create } from 'zustand'
import { FavStore } from './favStore';

const useFavStore = create<FavStore>((set) => ({
  favMovies: [],

  addFavMovie: (movieId: string) => set((state: FavStore) => ({ favMovies: [...state.favMovies, movieId] })),
}))


// Exportación 🐶.
export default useFavStore;