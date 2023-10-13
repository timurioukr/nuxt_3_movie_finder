<script setup>
// Props
const props = defineProps({ movie: { type: Object, default: () => ({}) } })
</script>

<template>
  <div class="h-full flex justify-center items-center">
    <div class="flex flex-col items-center mt-6">
      <div
        class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
        <img v-if="movie?.Poster !== 'N/A'" class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-60 md:rounded-none md:rounded-l-lg"
          :src="movie?.Poster" alt="movie-poster">
        <div v-else class="flex items-center justify-center w-full h-56 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
          <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
        <div class="flex flex-col text-start p-4 leading-normal">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Title: {{ movie?.Title }}
          </h5>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Year: {{ movie?.Year }}</p>
          <p v-if="movie?.Director" class="mb-3 font-normal text-gray-700 dark:text-gray-400">Director: {{ movie?.Director
          }}</p>
          <div class="flex items-center">
            <svg class="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="currentColor" viewBox="0 0 22 20">
              <path
                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <p class="ml-2 text-sm font-bold text-gray-900 dark:text-white">{{ movie?.imdbRating }}</p>
          </div>
        </div>
      </div>
    </div>
</div></template>