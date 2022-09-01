<template>
  <nav>
    <ul>
      <li>
        <router-link to="front" class="page-select">
          <span>Front</span>
          <img src="@/assets/icons/front-back.svg" alt="left"/>
        </router-link>
      </li>
      <li>
        <router-link to="inside-left" class="page-select">
          <span>Inside Left</span>
          <img src="@/assets/icons/inside-left.svg" alt="left"/>
        </router-link>
      </li>
      <li>
        <router-link to="inside-right" class="page-select">
          <span>Inside Right</span>
          <img src="@/assets/icons/inside-right.svg" alt="left"/>
        </router-link>
      </li>
      <li>
        <router-link to="back" class="page-select">
          <span>Back</span>
          <img src="@/assets/icons/front-back.svg" alt="left"/>
        </router-link>
      </li>
    </ul>
    <button @click="saveCard">Place Order</button>
  </nav>
</template>
<script>
export default {
  
}
</script>
<style scoped>
ul {
  display: flex;
  margin: 1.6rem 0;
}
.page-select {
  display: flex;
  align-items: center;
  margin-right: 10px;
}
img {
  max-width: 30px;
  margin-left: 10px;
}
</style>