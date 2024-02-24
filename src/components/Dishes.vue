<script setup lang="ts">
import Container from "./Container.vue";
import Title from "./Title.vue";
import Dishe from "./Dishe.vue";

const items = [
  {
    img: "/images/dishes/dishe-1.png",
    title: "Featured Meal",
    subtitle: "Served with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-2.png",
    title: "Featured Meal",
    subtitle: "Served with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-3.png",
    title: "Featured Meal",
    subtitle: "Served with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-4.png",
    title: "Featured Meal",
    subtitle: "Served with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-5.png",
    title: "Featured Meal",
    subtitle: "Served with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
  {
    img: "/images/dishes/dishe-6.png",
    title: "Featured Meal",
    subtitle: "Served with french fries + drink",
    text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
  },
];
</script>

<template>
  <section class="dishes">
    <Container>
      <Title
        title="dishes"
        subtitle="Dish Of The Day"
        className="dishes__title _line _big"
      />
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
  padding-bottom: rem(90);
  &__wrap {
    display: grid;
    gap: rem(30);
    grid-template-columns: repeat(3, 1fr);
  }
  &__title {
    text-align: center;
    display: block;
    margin: 0 auto;
    margin-bottom: rem(60);
  }
}
</style>
