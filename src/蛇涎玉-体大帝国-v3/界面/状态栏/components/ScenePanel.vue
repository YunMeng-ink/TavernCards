<template>
  <div class="scene-panel">
    <div class="info-row">
      <span class="info-icon">📍</span>
      <span class="info-value">{{ store.data.terminal.date_location }}</span>
    </div>
    <div class="info-row">
      <span class="info-icon">🎭</span>
      <span class="mode-badge" :style="{ background: modeColor }">{{ store.data.terminal.scene_mode }}</span>
    </div>
    <div class="info-row">
      <span class="info-icon">🔥</span>
      <div class="heat-track">
        <div class="heat-fill" :style="{ width: store.data.terminal.scene_heat + '%' }"></div>
      </div>
      <span class="value">{{ store.data.terminal.scene_heat }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const modeColor = computed(() => {
  const map: Record<string, string> = {
    '日常': '#475569',
    '调教': '#ec4899',
    '社交': '#3b82f6',
    '扩张': '#ef4444',
  };
  return map[store.data.terminal.scene_mode] || '#475569';
});
</script>

<style lang="scss" scoped>
.scene-panel {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.info-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.info-icon {
  font-size: 1rem;
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.info-value {
  font-size: 0.85rem;
}

.mode-badge {
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: bold;
  color: #fff;
}

.heat-track {
  flex: 1;
  height: 8px;
  background: var(--c-surface-light);
  border: 1px solid var(--c-border);
  overflow: hidden;
  position: relative;
  max-width: 200px;
}

.heat-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(90deg, #f43f5e, #ef4444, #dc2626);
  transition: width 0.3s ease;
}

.value {
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 28px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}
</style>
