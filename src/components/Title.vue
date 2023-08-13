<script setup lang="ts">
defineProps<{ title: string; subtitle: string; className?: string }>();
</script>

<template>
  <h2 class="title" :class="className">
    {{ title }}
    <span class="subtitle">{{ subtitle }}</span>
  </h2>
</template>

<style lang="scss" scoped>
.title {
  display: inline-block;
  position: relative;
  font-weight: 900;
  font-size: rv(100);
  line-height: 1.5;
  letter-spacing: 0.2em;
  color: var(--color-title);
  text-transform: uppercase;
  font-family: "HelveticaNeueCondensed", Arial, Helvetica, sans-serif;
  left: rv(10);
  &._big {
    .subtitle {
      font-size: rv(36);
    }
  }
  &._line {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: rv(60);
      height: rv(2);
      background: var(--color-green);
      left: 50%;
      transform: translateX(-50%);
      margin-left: rv(-10);
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
  font-size: rv(30);
  line-height: 2;
  letter-spacing: 0.2em;
  color: var(--color-subtitle);
  text-transform: initial;
  font-family: "HelveticaNeue", Arial, Helvetica, sans-serif;
  margin-top: rv(-5);
  margin-left: rv(-8);
  text-transform: capitalize;
}
</style>
