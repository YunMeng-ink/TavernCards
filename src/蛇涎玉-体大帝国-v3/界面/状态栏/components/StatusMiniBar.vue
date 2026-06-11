<template>
  <div class="mini-bar">
    <div class="mini-item">
      <span class="mini-dot" :style="{ background: energyColor }"></span>
      <span>{{ store.data.jade.energy }}</span>
    </div>
    <div class="mini-item" v-if="typeof store.data.current_slave !== 'string'">
      <span class="mini-dot" style="background: var(--c-accent)"></span>
      <span>{{ store.data.current_slave.name }}</span>
    </div>
    <div class="mini-item">
      <span class="mini-dot" style="background: #f43f5e"></span>
      <span>{{ store.data.terminal.scene_mode }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const energyColor = computed(() => {
  const e = store.data.jade.energy;
  if (e < 30) return 'var(--c-energy-low)';
  if (e < 60) return 'var(--c-energy-mid)';
  return 'var(--c-energy)';
});
</script>

<style lang="scss" scoped>
.mini-bar {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 6px 12px;
  border-top: 1px solid var(--c-border);
  background: var(--c-surface);
  font-size: 0.75rem;
}

.mini-item {
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--c-text-muted);
}

.mini-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  display: inline-block;
}
</style>
