<template>
  <UPage>
    <UContainer>
      <audio
        id="audio"
        src="https://ice2.somafm.com/beatblender-128-mp3"
        crossorigin="anonymous"
        controls
        autoplay
        class="my-3"
      />
      <NuxtAudioMotionAnalyzer :source="audio" />
      <StreamInfo />
    </UContainer>
  </UPage>
</template>

<script setup lang="ts">
const audio = ref<HTMLMediaElement>()
onMounted(() => {
  audio.value = document.getElementById('audio') as HTMLMediaElement
})
</script>
