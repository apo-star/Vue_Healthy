<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: rem(1110);
  padding: 0 rem(20);
  margin: 0 auto;
  box-sizing: content-box;
}
</style>
