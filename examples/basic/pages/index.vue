<template>
  <UPage>
    <UContainer>
      <UButton
        :label="isPlaying ? 'Pause' : 'Play'"
        :icon="isPlaying ? 'i-heroicons-pause' : 'i-heroicons-play'"
        class="my-3"
        @click="isPlaying ? audio?.pause() : audio?.play()"
      />
      <audio
        id="audio"
        ref="audioRef"
        src="https://ice2.somafm.com/beatblender-128-mp3"
        crossorigin="anonymous"
        class="my-3"
      />
      <NuxtAudioMotionAnalyzer :source="audio" />
      <StreamInfo />
    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const audio = ref<HTMLMediaElement>()
const isPlaying = ref(false)
onMounted(() => {
  audio.value = document.getElementById('audio') as HTMLMediaElement
  audio.value.onplaying = () => {
    isPlaying.value = true
  }
  audio.value.onpause = () => {
    isPlaying.value = false
  }
})
</script>
