<template>
  showOptions: {{ showOptions }}
  currentSection: {{ currentSection }}
  <div 
    class="text-input-wrapper"
    @mouseover="showOptions = true"
    @mouseleave="showOptions = false"
  >
    <section class="text-input-header">
      <div>
        <button @click="updateSectionOrder(sectionIndex, -1)">
          <img src="@/assets/icons/arrow-up.svg" alt="arrow up">
        </button>
        <button @click="updateSectionOrder(sectionIndex, 1)">
          <img src="@/assets/icons/arrow-down.svg" alt="arrow down">
        </button>
      </div>
      <button @click="removeSection(sectionIndex)">X</button>
    </section>
    <textarea
      v-model="currentSection.userInput"
      rows="4"
      cols="50">
    </textarea>
    <div class="menu" v-show="showOptions">
      <button @click="showOptions = false">Close</button>
      <div class="menu-top">
        <select v-model="currentSection.fontFamily">
          <option value="Times New Roman">Times New Roman</option>
          <option value="Georgia">Georgia</option>
          <option value="Arial">Arial</option>
          <option value="Comic Sans MS">Comic Sans MS</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
        </select>
        <select v-model="currentSection.fontSize">
          <option value="1.6rem">Normal</option>
          <option value="2rem">Big</option>
          <option value="2.5rem">Bigger</option>
          <option value="3rem">Biggest</option>
        </select>
        <input v-model="currentSection.color" type="color" />
        <label>
          <!-- checkbox will be hidden with CSS later leaving only the image -->
          <!-- we leave this in for accessibility so it can be read by screen readers -->
          <!-- and also still keep keyboard interactions too -->
          <input type="checkbox" v-model="currentSection.isBold" />
          <img src="@/assets/icons/bold.svg" alt="center" />
        </label>
        <label>
          <input type="checkbox" v-model="currentSection.isItalic" />
          <img src="@/assets/icons/italic.svg" alt="center" />
        </label>
      </div>
      <div class="menu-middle">
        <button @click="changeHeight(100)">
          <img src="../../assets/icons/arrow-up.svg" alt="arrow up" />
        </button>
        <button @click="changeHeight(-100)">
          <img src="../../assets/icons/arrow-down.svg" alt="arrow down" />
        </button>
      </div>
      <div class="menu-bottom">
        <label>
          <input 
            v-model="currentSection.justifyContent" 
            type="radio" 
            value="flex-start"
            name="horizontal"
          />
          <img src="../../assets/icons/left.svg" alt="left">
        </label>
        <label>
          <input 
            v-model="currentSection.justifyContent" 
            type="radio" 
            value="center"
            name="horizontal"
          />
          <img src="../../assets/icons/center.svg" alt="center">
        </label>
        <label>
          <input 
            v-model="currentSection.justifyContent" 
            type="radio" 
            value="flex-end"
            name="horizontal"
          />
          <img src="../../assets/icons/right.svg" alt="right">
        </label>
      </div>
    </div>
  </div>
</template>

<script>
  import { 
    reactive,
    ref,
    watch 
  } from "vue";

  import useCurrentCard from "@/composables/useCurrentCard";

  export default {
    props: { section: Object, sectionIndex: Number} ,
    setup(props) {
      const currentSection = reactive( props.section );
      // const currentSection = ref({ ...props.section });
      const showOptions = ref(false);
      const { updateCard, removeSection, updateSectionOrder } = useCurrentCard();

      function changeHeight(value) {
        let currentHeight = currentSection.height;
        if(
          currentHeight === 100 && value === -100 ||
          currentHeight === 600 && value === 100
        ) { return; }
        currentSection.height = currentHeight + value;

      }

      watch(
        currentSection,
        // currentSection.value,
        () => {
        // (newValue,oldValue) => {
          // console.log({...oldValue},{...newValue})
          updateCard( props.sectionIndex, currentSection );
          // updateCard( props.sectionIndex, currentSection.value );
        }
      );

      return {
        currentSection,
        showOptions,
        removeSection,
        updateSectionOrder,
        changeHeight
      };
    },
  };
</script>

<style scoped>
img {
  max-width: 30px;
}
.menu {
  position: absolute;
  background: linear-gradient(30deg, rgb(253,207,207),rgb(140,140,236));
  padding: 10px;
  border-radius: 0 0 3px 3px;
}
.menu-top, .menu-bottom {
  display:flex;
  align-items:center;
}
/* Hide Radio */
input[type='radio'], input[type='checkbox'] {
  opacity: 0;
  width: 0;
  height: 0;
}
/* Image Styles */
/* + is the adjacents selector - selects all images which follow the readi/check-box */
input[type='radio'] + img, input[type='checkbox'] + img {
  cursor: pointer;
}
/* Checked Styles */
input[type='radio']:checked + img, input[type='radio']:focus + img,
input[type='checkbox']:checked + img, input[type='checkbox']:focus + img {
  outline: 2px solid rgb(119, 123, 125);
}
textarea {
  border: none;
  border-radius: 3px;
  width: 100%;
  font-weight: lighter;
  padding: 5px;
  box-sizing: border-box;
}
select {
  margin-right: 5px;
}
.text-input-header {
  display: flex;
  justify-content: space-between;
  padding-bottom: 5px;
  /* box-shadow: inset 1px 1px 2px 2px #252727; */
}
.text-input-header button {
  font-size: 15px;
  font-weight: 700;
  padding-right: 5px;
}
.text-input-header button img {
  width: 20px;
}
</style>
