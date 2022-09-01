<template>
  <h1>Category</h1>
  <h2>Category: {{ $route.params.category }}</h2>
  <ul class="grid_wrapper">
    <li 
      class="category_item" 
      v-for="card in cardsByCategory" 
      :key="card.id"
    >
      <router-link :to="`/create/${card.id}/front`">
        <img :src="require(`@/assets/images/card-previews/${card.id}.jpg`)"
        :alt="`${card.name} preview image`"/>
      </router-link>
    </li>
  </ul>
</template>

<script>
// import { cards } from '../data';
// import { ref, computed } from 'vue';
import useCategory from '../composables/useCategory';


export default {
  setup() {
    const { cardsByCategory } = useCategory();
    return { cardsByCategory }
  }
}
</script>

<style>
  
</style>