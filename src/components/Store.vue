<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script>

<template>
  <div class="store-content">
    <h2>CounterStore example</h2>
    <p>Store count: {{ store.counter }}</p>
    <p>Double store count: {{ store.doubleCount }}</p>

    <div class="actions">
      <div class="action">
        <button type="button" @click="store.increment">Increment action</button>
        <span><i> increment() { this.counter++; }</i></span>
      </div>
      <div class="action">
        <button type="button" @click="store.counter++">Increment state</button>
        <span><i> state: () => ({ counter: counter++, })</i></span>
      </div>
      <div class="action">
        <button type="button" @click="store.$patch({ counter: 100 })">
          Patch 100
        </button>
        <span><i>store.$patch({ counter: 100 })</i></span>
      </div>
      <div class="action">
        <button type="button" @click="store.$reset">Reset</button>
        <span><i>store.$reset</i></span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.store-content {
  padding-top: 5%;
  color: $white;
  text-align: center;
  margin: 0 auto;
  max-width: 400px;

  .actions {
    margin-top: 12px;
    display: flex;
    flex-direction: column;

    .action {
      margin: 4px;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
