<script setup lang="ts">
import WelcomeDemo from "@/components/Welcome.vue";
import StoreDemo from "@/components/Store.vue";
</script>

<template>
  <main class="container">
    <WelcomeDemo />
    <StoreDemo />
  </main>
</template>

<style lang="scss">
#app {
  position: fixed;
  width: 100vw;
  height: 100vh;

  background-image: url("/src/assets/images/background.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: 50%;
  background-color: #00020b;
  background-attachment: fixed;

  .container {
    max-width: 1280px;
    margin: 0 auto;
  }
}
</style>
