<script lang="ts">
import { defineComponent } from "vue";
import Container from "./Container.vue";

export default defineComponent({
  components: { Container },
  data() {
    return {
      menu: [
        {
          link: "#",
          name: "Menu",
        },
        {
          link: "#",
          name: "Recipes",
        },
        {
          link: "#",
          name: "Chefs",
        },
        {
          link: "#",
          name: "Contacts",
        },
      ],
    };
  },
});
</script>

<template>
  <header class="header">
    <Container>
      <div class="header__inner">
        <a class="header__logo-wrapper" href="/">
          <img
            class="header__logo"
            src="../assets/images/logo.svg"
            width="207"
          />
        </a>
        <nav class="header__nav">
          <ul class="header__menu menu">
            <li class="menu__item" v-for="item in menu" key="item.name">
              <a class="menu__link" href="#">{{ item.name }}</a>
            </li>
          </ul>
        </nav>
      </div>
    </Container>
  </header>
</template>

<style lang="scss" scoped>
.header {
  position: relative;
  border-bottom: 1px solid rgba(var(--color-white-rgba), 0.1);
  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: rem(91);
  }
  &__logo-wrapper {
    width: rem(207);
  }
  &__logo {
    width: 100%;
  }

  .menu {
    display: flex;
    gap: rem(40);
    &__link {
      color: var(--color-white);
      font-weight: 700;
      font-size: rem(14);
      line-height: 1;
      font-family: "HelveticaNeueCondensed", Arial, Helvetica, sans-serif;
    }
  }
}
</style>
