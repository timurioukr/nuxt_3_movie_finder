import { defineStore } from "pinia"
import { useRuntimeConfig } from '../node_modules/nuxt/dist/app'

export const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
    singleMovie: {},
    isLoaded: false,
    isOpenMovieForm: false,
    totalMovies: 0,
    searchParams: {}
  }),
  actions: {
    async getCurrentMovies(params) {
      this.isLoaded = false
      try {
        const config = useRuntimeConfig()
        const response = await useFetch(`${ config.public.apiBaseUrl }/?apikey=${ config.public.apiKey }&${ params.searchMethod }=${ params.searchTitle }&page=${ params.page || 1 }`)
        if (params.searchMethod === 's') {
          const { Search, totalResults } = response.data.value
          this.movies = Search
          this.totalMovies = totalResults
          this.isLoaded = true
        } else this.movies.push(response.data.value)
          this.isLoaded = true
      } catch (error) {
        console.log(error)
        this.dataLoaded = true
      }
    },
   async getSingleMovie(id) {
      this.isLoaded = false
      try {
        const config = useRuntimeConfig()
        const { data } = await useAsyncData(() => $fetch(`${ config.public.apiBaseUrl }/?apikey=${ config.public.apiKey }&i=${ id }`))
        this.singleMovie = data.value
        this.isLoaded = true
      } catch (error) {
        console.log(error)
      }
    },
    changeAppComponentState (state, value = null) {
      if (value !== null) this[state] = value
      else this[state] = !this[state]
    }
  }
})