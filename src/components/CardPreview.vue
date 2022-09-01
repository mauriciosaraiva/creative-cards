<template>
  <div class="card_preview_wrapper"
    :style="{
      background: `url(${selectedPage.background})`,
      backgroundPosition: `$(selectedPage.backgroundPosition)`,
      backgroundSize: '100%',
      backgroundRepeat: 'no-repeat',
    }">
    <div v-for="section in selectedPage.sections" :key="section.id">
      <!-- {{ section.userInput }} -->
      <TextOutput :section="section"/>
    </div>
  </div>
</template>

<script>
import TextOutput from './card/TextOutput.vue'

export default {
  components: { TextOutput },
  props: {
    selectedPage: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>
.card_preview_wrapper {
  height: 600px;
  width: 450px;
  border: 1px solid lightgray;
  /** hide text sections if combined height is over 800px */
  overflow: hidden;
}  
</style>