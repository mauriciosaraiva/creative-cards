<template>
  <p 
    :style="cssObject"
    :class="{ italic: section.isItalic }"
  >
    {{ section.userInput }}
  </p>
</template>

<script>
import { computed } from 'vue'

export default {
  props: { section: Object },
  setup(props) {
    const cssObject = computed(() => {
      return {
        border: '1px dotted grey',
        display: 'flex',
        fontFamily: props.section.fontFamily,
        fontSize: props.section.fontSize,
        color: props.section.color,
        height: props.section.height + 'px',
        justifyContent: props.section.justifyContent,
        alignItems: props.section.alignItems,
        fontWeight: props.section.isBold ? 'bold' : 'normal',
      };
    });
    return {
      cssObject
    };
  }
}
</script>
<style scoped>
  /* .bold {
    font-weight: bold;
  } */
  .italic {
    font-style: italic;
  }
  p {
    margin: 0;
    box-sizing: border-box;
  }
</style>