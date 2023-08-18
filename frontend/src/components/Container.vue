<template>
  <div class="container">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.container {
  max-width: rv(1110);
  padding: 0 rv(20);
  margin: 0 auto;
  box-sizing: content-box;
}
</style>
