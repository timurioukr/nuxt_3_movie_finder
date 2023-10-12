<script setup>
import { useMoviesStore } from '~/stores/index'
import { nextTick } from 'vue'
const route = useRoute()
const store = useMoviesStore()
useHead({ title: 'Find movies | MovieFinder' })

// Hooks
onMounted(() => loadData())

// Methods
const loadData = async () => {
  await nextTick()
  await store.getSingleMovie(route.params.id)
}
</script>

<template>
  <div class="h-full text-center" v-if="!Object.keys(store?.singleMovie)?.length">
    <Spinner />
  </div>
  <div v-else
    class="h-full bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
    <div class="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
      <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
        {{ store?.singleMovie?.Title }}
      </h1>
      <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">{{ store?.singleMovie?.Plot }}</p>
      <MovieCard :movie="store?.singleMovie" />
      <div class="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
        <a :href="`https://www.google.com/search?q=${store?.singleMovie?.Title}`" target="_blank"
          class="inline-flex justify-center items-center mt-7 py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
          What do they write about this in Internet?
        </a>
      </div>
    </div>
  </div>
</template>