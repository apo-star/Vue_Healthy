<script setup lang="ts">
defineProps<{ title: string; subtitle: string; className?: string }>();
</script>

<template>
  <h2 class="title" :class="className">
    {{ title }}<span class="subtitle">{{ subtitle }}</span>
  </h2>
</template>

<style lang="scss" scoped>
.title {
  display: inline-block;
  position: relative;
  font-weight: 900;
  font-size: rem(100);
  line-height: 1.5;
  letter-spacing: 0.2em;
  color: var(--color-title);
  text-transform: uppercase;
  font-family: "HelveticaNeueCondensed", Arial, Helvetica, sans-serif;
  left: rem(10);
  &._big {
    .subtitle {
      font-size: rem(36);
    }
  }
  &._line {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: rem(60);
      height: rem(2);
      background: var(--color-green);
      left: 50%;
      transform: translateX(-50%);
      margin-left: rem(-10);
    }
  }
}

.subtitle {
  position: absolute;
  left: 50%;
  top: 50%;
  white-space: nowrap;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: rem(30);
  line-height: 2;
  letter-spacing: 0.2em;
  color: var(--color-subtitle);
  text-transform: initial;
  font-family: "HelveticaNeue", Arial, Helvetica, sans-serif;
  margin-top: rem(-5);
  margin-left: rem(-8);
  text-transform: capitalize;
}
</style>
