<script setup>
import { storeToRefs } from 'pinia'
import { useMoviesStore } from '~/stores/index'
useHead({ title: 'Find movies | MovieFinder' })

// Store
const store = useMoviesStore()
const { searchParams } = storeToRefs(store)

// Methods
const getMovies = page => store.getCurrentMovies({ ...searchParams.value, page })
</script>

<template>
  <div class="flex items-center justify-center h-full flex-col p-4">
    <div class="flex justify-center">
      <h3
        class="mb-4 text-3xl font-extrabold tracking-tight leading-none text-gray-900 md:text-3xl lg:text-5xl dark:text-white">
        <span class="bg-blue-600 px-3 rounded-lg" v-if="!store?.movies?.length">Empty...</span>
        <span class="bg-blue-600 px-3 rounded-lg" v-else>I found...</span>
      </h3>
      <Spinner v-if="!!store?.movies?.length" />
    </div>

    <template v-if="store?.movies?.length === 1">
      <div v-for="movie in store.movies" :key="movie.imdbID" :movie="movie">
        <NuxtLink :to="`movies/${movie.imdbID} `">
          <MovieCard :movie="movie" />
        </NuxtLink>
      </div>
    </template>
    <template v-else>
      <el-carousel  height="auto" arrow="always" class="rounded-lg">
        <el-carousel-item v-for="movie in store.movies" :key="movie.imdbID" style="height: 600px">
          <NuxtLink :to="`movies/${movie.imdbID} `">
            <MovieCard :movie="movie" />
          </NuxtLink>
        </el-carousel-item>
      </el-carousel>
      <Pagination :total="Number(store.totalMovies)" @getMovies="getMovies"/>
    </template>
  </div>
</template>