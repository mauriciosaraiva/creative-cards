<template>
  <SwitchPage/>
  <div class="card_wrapper">
    <section>
      <card-preview :selectedPage="selectedPage"></card-preview>
    </section>
    <section>
      <card-edit :selectedPage="selectedPage"></card-edit>
    </section>
  </div>
</template>

<script>
import CardPreview from '../components/CardPreview.vue';
import CardEdit from '../components/CardEdit.vue';
import useCurrentCard from '../composables/useCurrentCard.js'
import SwitchPage from '../components/card/SwitchPage.vue'

export default {
  components: { CardPreview, CardEdit, SwitchPage },
  setup() {
    const { selectedPage } = useCurrentCard();
    return { selectedPage };
  }
}
</script>

<style scoped>
.card_wrapper {
  display: flex;
  background: #35363a;
  color: white;
  /* box-shadow: 1px 1px 2px 2px #ddd inset; */
}
.card_wrapper > section {
  /* display: flex;
  flex-direction: column; */
  flex: 1;
  padding: 10px;
}
  
</style>