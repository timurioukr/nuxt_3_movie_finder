<script setup>
import { useMoviesStore } from '~/stores/index'
import { storeToRefs } from 'pinia'

// Data
const setInitialState = () => ({
  title: '',
  director: '',
  year: '',
  poster: []
})
const body = ref([setInitialState()])
const fileList = ref([])

// Store
const store = useMoviesStore()
const { isOpenMovieForm } = storeToRefs(store)

// Methods
const handleClose = () => { 
  store.changeAppComponentState('isOpenMovieForm', false)
  body.value = setInitialState()
  fileList.value = []
}

const setMyMovie = () => {
  const formData = new FormData()
  for (const key in body) {
    if (body.hasOwnProperty(key)) formData.append(key, body[key])
  }
  store.setMyMovie(formData)
  handleClose()
}

const handleAvatarSuccess = (uploadFiles) => body.poster = uploadFiles.raw

const handleExceed = (files, uploadFiles) => {
  ElMessage.warning(
    `The limit is 1, you selected ${files.length} files this time, add up to ${
      files.length + uploadFiles.length
    } totally`
  )
}
</script>

<template>
  <el-dialog v-model="isOpenMovieForm" title="Upload info about your movie" width="30%" :before-close="handleClose">
    <div>
      <el-input v-model="body.title" placeholder="Movie's title" />
      <el-input v-model="body.director" placeholder="Movie's director" class="mt-5" />
      <el-input v-model="body.year" placeholder="Movie's year" class="mt-5" />
    </div>
    <div class="mt-5">
      <el-upload
        v-model:file-list="fileList"
        :on-change="handleAvatarSuccess"
        :limit="1" 
        :on-exceed="handleExceed">
        <el-button type="primary">Click to upload poster</el-button>
      </el-upload>
    </div>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleClose">Cancel</el-button>
        <el-button type="primary" @click="setMyMovie">
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>