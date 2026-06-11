<template>
  <div class="archives-panel">
    <div class="archives-stat">
      <span class="archives-icon">📋</span>
      <span class="archives-label">已建档蛇奴</span>
      <span class="archives-count">{{ store.data.archives.profile_count }}</span>
    </div>
    <div class="archives-stat">
      <span class="archives-icon">🎯</span>
      <span class="archives-label">潜在目标</span>
      <span class="archives-count muted">{{ store.data.archives.hidden_targets.length }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();
</script>

<style lang="scss" scoped>
.archives-panel {
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.archives-stat {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 6px;
}

.archives-icon {
  font-size: 1.1rem;
}

.archives-label {
  flex: 1;
  font-size: 0.85rem;
  color: var(--c-text-muted);
}

.archives-count {
  font-size: 1.2rem;
  font-weight: bold;
  font-variant-numeric: tabular-nums;
}

.archives-count.muted {
  color: var(--c-text-muted);
}
</style>
