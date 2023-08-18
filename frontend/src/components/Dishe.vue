<script setup lang="ts">
defineProps<{ title: string; subtitle: string; text: string; img: string }>();
</script>

<template>
  <article class="dishe">
    <picture>
      <!-- <source srcset="../assets/images/slider/slide-1.webp" type="image/webp" /> -->
      <img class="dishe__img" src="../assets/images/dishes/dishe-1.png" />
    </picture>
    <p class="dishe__title">{{ title }}</p>
    <p class="dishe__subtitle">{{ subtitle }}</p>
    <p class="dishe__text">{{ text }}</p>
    <footer class="dishe__footer"></footer>
  </article>
</template>

<style lang="scss" scoped>
.dishe {
  &__img {
    width: 100%;
  }
}
</style>
