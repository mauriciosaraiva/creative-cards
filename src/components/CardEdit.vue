<template>
<image-upload/>
  <div class="add_section_wrapper">
    <!-- will be only allowing 4 sections per page, so only show if less -->
    <button 
      v-if="selectedPage.sections?.length < 4" 
      @click="addSection()">
      Add new text section
    </button>
  </div>
  <div v-for="(section,index) in selectedPage.sections" :key="section.id">
    <!-- {{ section.userInput }} -->
    <TextInput 
      :section="section" 
      :sectionIndex="index"
    />
  </div>
</template>

<script>
import TextInput from './card/TextInput.vue'
import ImageUpload from './card/ImageUpload.vue'
import useCurrentCard from '@/composables/useCurrentCard'

export default {
  components: { TextInput, ImageUpload },
  props: { 
    selectedPage: Object,
  },
  setup() {
    const { addSection } = useCurrentCard();
    return { addSection };
  }
}
</script>

<style scoped>
  .add_section_wrapper {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
    /* align-items: center; */
    padding: 10px;
    /* border-radius: 3px; */
  }
</style>