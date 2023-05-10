<script lang="ts">
import Container from "./Container.vue";
import Title from "./Title.vue";
import Dishe from "./Dishe.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: { Container, Title, Dishe },
  data() {
    return {
      title: "sdf",
      items: [
        {
          img: "1",
          title: "Featured Meal",
          subtitle: "Served with french fries + drink",
          text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
        },
        {
          img: "2",
          title: "Featured Meal",
          subtitle: "Served with french fries + drink",
          text: "Choice of: Coke, Fanta, Sprite, Upgrade to&nbsp;large fries, Add whopper patty, Add Tender crisp patty and more...",
        },
      ],
    };
  },
});
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
          :title="title"
          :subtitle="subtitle"
          :text="text"
          :img="img"
          v-for="{ title, subtitle, text, img } in items"
          key="item.name"
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
