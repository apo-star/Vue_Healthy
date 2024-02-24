<script setup lang="ts">
import { onMounted } from "vue";
import Container from "./Container.vue";
import Title from "./Title.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    title: "Pick meals",
    text: "Choose your meals from our diverse weekly menu. Find gluten or&nbsp;dairy free, low carb &amp;&nbsp;veggie options.",
  },
  {
    title: "Choose how often",
    text: "Our team of&nbsp;chefs do&nbsp;the prep work&nbsp;&mdash; no&nbsp;more chopping, measuring, or&nbsp;sink full of&nbsp;dishes!",
  },
  {
    title: "Fast deliveries",
    text: "Your freshly prepped 15-min dinner kits arrive on&nbsp;your doorstep in&nbsp;a&nbsp;refrigerated box.",
  },
  {
    title: "tasty meals",
    text: "Gobble makes cooking fast, so&nbsp;you have more time to&nbsp;unwind and be&nbsp;with family.",
  },
];

onMounted(() => {
  gsap.to("[data-directions-item]", {
    opacity: 1,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".work",
      markers: false,
      start: "top 50%",
      end: "bottom 50%",
    },
  });
});
</script>

<template>
  <section class="work">
    <Container>
      <div class="work__title">
        <Title title="work" subtitle="how it works" className="_line _big" />
      </div>
      <ul class="work__list">
        <transition-group appear>
          <li
            v-for="item in items"
            class="work__list-item work-list-item"
            data-directions-item
            :key="item.title"
          >
            <p class="work-list-item__title" v-html="item.title" />
            <p class="work-list-item__text" v-html="item.text" />
          </li>
        </transition-group>
      </ul>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.work {
  margin-bottom: rem(90);
  &__title {
    text-align: center;
    margin-bottom: rem(60);
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: rem(30);
  }

  .work-list-item {
    $this: &;
    opacity: 0;
    padding: rem(22) rem(24) rem(24);
    min-height: rem(206);
    border-radius: rem(6);
    background: var(--color-dark);
    overflow: hidden;
    transition: all 200ms linear;
    &:hover {
      transition: all 200ms linear;
      background: var(--color-green);
      #{$this}__title {
        color: var(--color-dark-2);
        transition: all 200ms linear;
        &::after {
          background: var(--color-dark-2);
        }
      }
      #{$this}__text {
        color: var(--color-dark-2);
        transition: color 200ms linear;
      }
    }
    &__title {
      position: relative;
      font-size: rem(22);
      color: var(--color-white);
      padding-bottom: rem(18);
      margin-bottom: rem(24);
      text-transform: capitalize;
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: rem(56);
        height: rem(2);
        background: var(--color-green);
      }
    }
    &__text {
      font-weight: 400;
      font-size: rem(13);
      line-height: 1.38;
      color: rgba(var(--color-white-rgba), 0.5);
    }
  }
}
</style>
