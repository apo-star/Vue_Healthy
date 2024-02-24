<script setup lang="ts">
import Star from "./Star.vue";
</script>

<template>
  <ul class="stars">
    <Star state="full" />
    <Star state="full" />
    <Star state="full" />
    <Star state="half" />
    <Star state="empty" />
  </ul>
</template>

<style scoped lang="scss">
.stars {
  display: flex;
  gap: rem(5);
}
</style>
