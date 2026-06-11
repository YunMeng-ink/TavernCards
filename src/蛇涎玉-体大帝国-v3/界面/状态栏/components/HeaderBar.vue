<template>
  <div class="header">
    <div class="header-row">
      <div class="energy-section">
        <span class="label">蛇涎玉·能量</span>
        <div class="energy-track">
          <div class="energy-fill" :style="{ width: store.data.jade.energy + '%', background: energyColor }"></div>
        </div>
        <span class="value">{{ store.data.jade.energy }}</span>
      </div>
      <div class="evolution-badge" :style="{ background: evolutionColor }">
        {{ store.data.jade.evolution }}
      </div>
      <div class="ling-she-count" :class="{ capped: store.data.jade.ling_she_jiu_qi_unlocked >= 9 }">
        <span class="count-num">{{ store.data.jade.ling_she_jiu_qi_unlocked }}</span>
        <span class="count-max">/9</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const evolutionColor = computed(() => {
  const map: Record<string, string> = {
    '碧绿': '#4ade80',
    '黄玉': '#fbbf24',
    '血玉': '#ef4444',
    '紫玉': '#a78bfa',
  };
  return map[store.data.jade.evolution] || '#94a3b8';
});

const energyColor = computed(() => {
  const e = store.data.jade.energy;
  if (e < 30) return 'var(--c-energy-low)';
  if (e < 60) return 'var(--c-energy-mid)';
  return 'var(--c-energy)';
});
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid var(--c-border);
  padding: 10px 12px;
}

.header-row {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}

.label {
  font-size: 0.75rem;
  color: var(--c-text-muted);
  white-space: nowrap;
}

.energy-section {
  display: flex;
  align-items: center;
  gap: 6px;
  flex: 1;
  min-width: 160px;
}

.energy-track {
  flex: 1;
  height: 14px;
  background: var(--c-surface-light);
  border: 1px solid var(--c-border);
  overflow: hidden;
  position: relative;
}

.energy-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition: width 0.3s ease, background 0.3s ease;
}

.value {
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 28px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.evolution-badge {
  padding: 3px 10px;
  font-size: 0.78rem;
  font-weight: bold;
  color: #0f172a;
  border-radius: 4px;
  white-space: nowrap;
}

.ling-she-count {
  display: flex;
  align-items: baseline;
  gap: 1px;
  padding: 3px 8px;
  border: 1px solid var(--c-border);
  border-radius: 4px;
  font-size: 0.8rem;
}

.ling-she-count.capped {
  border-color: var(--c-gold);
  color: var(--c-gold);
}

.count-num {
  font-weight: bold;
  font-variant-numeric: tabular-nums;
}

.count-max {
  color: var(--c-text-muted);
  font-size: 0.7rem;
}
</style>
