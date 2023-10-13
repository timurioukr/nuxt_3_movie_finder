<script setup>
import { useMoviesStore } from '~/stores/index'
import { storeToRefs } from 'pinia'
useHead({ title: 'Find you movie | MovieFinder' })
//
const store = useMoviesStore()
const router = useRouter()
const { searchParams } = storeToRefs(store)

// Methods
const getMovies = params => {
  store.$reset()
  store.getCurrentMovies(params)
  router.push('/movies')
  searchParams.value = { ...params }
}
</script>

<template>
  <div class="h-full flex items-center justify-center ">
    <div class="bg-tickets bg-cover bg-center bg-white dark:bg-gray-600 shadow rounded-lg">
      <div class="py-8 px-4 mx-auto backdrop-blur-sm rounded-lg max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1
          class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          Movie <span class="bg-blue-600 px-3 rounded-lg">Finder</span></h1>
        <p class="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48">
          A catalog with millions of movies, just one click away!</p>
        <div class="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <NuxtLink to="/about"
            class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
            Learn more about MovieFinder
            <svg class="ml-2 -mr-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </NuxtLink>
        </div>
        <SearchField @getMovies="getMovies" />
      </div>
    </div>
  </div>
</template>