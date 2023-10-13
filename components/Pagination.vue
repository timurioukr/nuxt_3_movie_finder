<script setup>
// Props
const props = defineProps({ total: { type: Number, default: 0 } })
</script>

<template>
  <div class="example-pagination-block">
    <el-pagination hide-on-single-page layout="prev, pager, next" :total="total" @current-change="value => $emit('getMovies', value)"/>
  </div>
</template>

<style scoped>
.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}
.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}
</style>
