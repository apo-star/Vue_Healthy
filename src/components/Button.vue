<script setup lang="ts">
interface IButton {
  text?: string;
  className?: string;
  buttonType: "submit" | "button";
}

withDefaults(defineProps<IButton>(), {
  buttonType: "button",
});
</script>

<template>
  <button class="button" :class="className" :type="buttonType">
    {{ text }}
  </button>
</template>

<style scoped lang="scss">
.button {
  cursor: pointer;
  border: none;
  outline: none;
  color: var(--color-primary);
  background: var(--color-green);
  font-family: "HelveticaNeueCondensed", Arial, Helvetica, sans-serif;
  &._big {
    padding: rem(25) rem(58);
    border-radius: rem(43);
    font-weight: 700;
    font-size: rem(18);
    line-height: 1.375rem;
    text-align: center;
    letter-spacing: 0.2em;
  }
  &._small {
    font-size: rem(10);
    font-weight: 900;
    line-height: 1;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-align: center;
    padding: rem(10) rem(32);
    border-radius: rem(40);
    height: rem(40);
  }
  &._grey {
    background: transparent;
    color: rgba(var(--color-white-rgba), 0.5);
    border: rem(2) solid var(--color-title);
  }
  &._black {
    background: var(--color-primary);
  }
}
</style>
