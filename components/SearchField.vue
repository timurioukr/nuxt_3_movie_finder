<script lang="ts" setup>
// Data
const search = ref('')
const searchMethod = ref('s')

// Methods
const params = computed(() => {
  return {
    searchTitle: search.value,
    searchMethod: searchMethod.value
  }
})
</script>

<template>
  <div class="px-2 mx-auto md:max-w-screen-md lg:px-36 flex">
    <el-input v-model="search" placeholder="Search movies..." class="input-with-select"
      @keydown.enter="$emit('getMovies', params)">
      <template #prepend>
        <el-select v-model="searchMethod" placeholder="Method" style="width: 125px">
          <el-option label="All similar" value="s" />
          <el-option label="Exact match" value="t" />
        </el-select>
      </template>
    </el-input>
    <el-button type="primary" class="ml-2" :disabled="!search" @click="$emit('getMovies', params)">Search</el-button>
  </div>
</template>