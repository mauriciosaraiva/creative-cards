import useCards from './useCards';
import { computed, ref, watch } from 'vue';
import { useRoute } from 'vue-router';

export default function useCategory() {
  
  const route = useRoute();
  const { allCards } = useCards();
  let uniqueCategories = new Set();
  const category = ref(route.params.category);

  uniqueCategories.add('all');
  
  allCards.value.map( card => {
    card.categories.map( category => {
      uniqueCategories.add( category )
    })
  });

  const cardsByCategory = computed(() => {
    if(category.value === 'all') {
      return allCards.value;
    }
    return allCards.value.filter((card) =>
      card.categories.includes(category.value)
    );
  });

  // console.log("category: ", category.value);
  watch(
    () => route.params.category, 
    () => { category.value = route.params.category; }
  );

  return { uniqueCategories, cardsByCategory };
}