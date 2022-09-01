import useCards from './useCards';
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import { v4 as uuidv4 } from 'uuid';

export default function useCurrentCard() {
  const { allCards } = useCards();
  const route = useRoute();

  const selectedCard = ref({});
  [selectedCard.value] = allCards.value.filter( 
      (card) => card.id === Number(route.params.id)
    );
  
  const selectedPage = ref({});
  function getPageIndex() {
    return selectedCard.value.pages.findIndex(
      (page) => page.name === route.params.page
    );
  }
  function getSelectedPage() { 
    selectedPage.value = selectedCard.value.pages[getPageIndex()];
  }

  function updateCard(sectionIndex, data) {
    console.log("updating the card: ", data);
    selectedCard.value.pages[getPageIndex()].sections[sectionIndex] = data;
  }

  function addSection() {
    // max 4 section allowed
    if(selectedPage.value.sections.length >= 4) {
      console.log("only 4 sections are allowed")
      return
    }
    const newSection = {
      id: uuidv4(),
      height: 200, 
      fontSize: '42px', 
      justifyContent: 'center', 
      alignItems: 'center',
      color: '#383333', 
      userInput: 'Enter your text here', 
      fontFamily: 'Georgia', 
      isItalic: true, 
      isBold: false, 
    };
    
    selectedCard.value.pages[getPageIndex()].sections.push(newSection);
  }

  function removeSection(sectionIndex) {
    selectedCard.value.pages[getPageIndex()].sections.splice(sectionIndex,1);
  }

  function updateSectionOrder(sectionIndex, direction) {
    const arr = selectedCard.value.pages[getPageIndex()].sections;

    if (selectedCard.value.pages[getPageIndex()].sections[sectionIndex + direction] === undefined) {
      console.log("you reached the top or bottom of the pages...")  
      return;
    }
    [arr[sectionIndex], arr[sectionIndex + direction]] = [
      arr[sectionIndex + direction], arr[sectionIndex],
    ];
  }

  function updateImage(url) {
    selectedCard.value.pages[getPageIndex()].background = url;
    selectedCard.value.pages[getPageIndex()].backgroundPosition = 'center';
  }

  function repositionImage(position) {
    selectedCard.value.pages[getPageIndex()].backgroundPosition = position;
    console.log("Position: ", position);
  }

  function removeImage() {
    selectedCard.value.pages[getPageIndex()].background = "";
  }


  onMounted(() => {
    getSelectedPage();
    // console.log(selectedPage.value,selectedCard.value);
  });

  watch(
    () => route.params.page,
    () => {
      getSelectedPage();
    }
  )

  return { 
    selectedCard,
    selectedPage,
    updateCard,
    addSection,
    removeSection,
    updateSectionOrder,
    updateImage,
    repositionImage,
    removeImage
  };
}
