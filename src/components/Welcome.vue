<script setup lang="ts"></script>

<template>
  <div class="intro-content">
    <h1 class="intro-title">Coddin Template: Vue3-Vite-Pinia</h1>
    <div class="logo-wrapper">
      <img
        alt="Coddin logo"
        class="logo"
        src="@/assets/icons/coddin-logo.svg"
        width="400"
        height="400"
      />
      <img
        alt="Pinia logo"
        class="logo"
        src="@/assets/icons/logo.svg"
        width="400"
        height="400"
      />
    </div>
    <p>This template contains:</p>
    <ul>
      <li>Vue3</li>
      <li>TypeScript</li>
      <li>Pinia</li>
      <li>Unit tests (Vitest)</li>
      <li>Scss (global files in vite.config.js)</li>
      <li>Prettier & EsLint configured files</li>
      <li>And alot of other boilerplate</li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
@import "./src/scss/animations";

.intro-content {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $white;

  .logo-wrapper {
    display: flex;

    .logo {
      display: block;
      margin: 0 auto;
      animation: heartbeat 2s infinite;
    }
  }
}
</style>
