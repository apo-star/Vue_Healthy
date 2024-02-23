<script setup lang="ts">
import Container from "./Container.vue";
import Title from "./Title.vue";
import Dishe from "./Dishe.vue";

const items = [
  {
    img: "/images/dishes/dishe-1.png",
    title: "Featured Meal",
    subtitle: "Seremed with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-2.png",
    title: "Featured Meal",
    subtitle: "Seremed with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-3.png",
    title: "Featured Meal",
    subtitle: "Seremed with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
];
</script>

<template>
  <section class="dishes">
    <Container>
      <div class="dishes__title">
        <Title
          title="dishes"
          subtitle="Dish Of The Day"
          className="_line _big"
        />
      </div>
      <div class="dishes__wrap">
        <Dishe
          v-for="{ title, subtitle, text, img } in items"
          :title="title"
          :subtitle="subtitle"
          :text="text"
          :img="img"
          :key="title"
        />
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.dishes {
  &__wrap {
    display: grid;
    gap: rem(30);
    grid-template-columns: repeat(3, 1fr);
  }
  &__title {
    text-align: center;
  }
}
</style>
