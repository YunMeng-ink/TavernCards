<template>
  <div class="slave-panel">
    <template v-if="store.data.current_slave === '待初始化'">
      <div class="empty-state">
        <span class="empty-icon">⚪</span>
        <span>当前无蛇奴</span>
      </div>
    </template>
    <template v-else>
      <div class="slave-header">
        <span class="slave-name">{{ store.data.current_slave.name }}</span>
        <span class="slave-badge rank" :style="{ background: rankColor }">{{ store.data.current_slave.slave_rank }}</span>
        <span class="slave-badge rating">{{ store.data.current_slave.body_profile.rating }}</span>
      </div>

      <div class="body-card">
        <div class="body-stat">
          <span class="body-label">评级</span>
          <span class="body-val">{{ store.data.current_slave.body_profile.rating }}</span>
        </div>
        <div class="body-stat">
          <span class="body-label">长度</span>
          <span class="body-val">{{ store.data.current_slave.body_profile.cock_cm }}cm</span>
        </div>
        <div class="body-stat">
          <span class="body-label">身份</span>
          <span class="body-val">{{ store.data.current_slave.identity }}</span>
        </div>
        <div class="body-stat">
          <span class="body-label">羞耻役</span>
          <span class="body-val">{{ store.data.current_slave.shame_role }}</span>
        </div>
      </div>

      <div class="tags-row" v-if="store.data.current_slave.body_profile.body_tags.length">
        <span
          v-for="tag in store.data.current_slave.body_profile.body_tags"
          :key="tag"
          class="tag-pill"
          :style="{ background: tagColor(tag) }"
        >{{ tag }}</span>
      </div>

      <div class="tags-row" v-if="store.data.current_slave.body_profile.sensitive_points.length">
        <span
          v-for="pt in store.data.current_slave.body_profile.sensitive_points"
          :key="pt"
          class="tag-pill"
          style="background: #ec4899"
        >敏感:{{ pt }}</span>
      </div>

      <div class="tags-row" v-if="store.data.current_slave.body_profile.special_mods.length">
        <span
          v-for="mod in store.data.current_slave.body_profile.special_mods"
          :key="mod"
          class="tag-pill"
          style="background: #a78bfa"
        >改造:{{ mod }}</span>
      </div>

      <div class="stats-section">
        <div class="stat-row">
          <span class="stat-label">服从度</span>
          <div class="stat-track">
            <div class="stat-fill" :style="{ width: store.data.current_slave.psych.obedience + '%', background: '#60a5fa' }"></div>
          </div>
          <span class="stat-value">{{ store.data.current_slave.psych.obedience }}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">反抗度</span>
          <div class="stat-track">
            <div class="stat-fill" :style="{ width: store.data.current_slave.psych.resistance + '%', background: '#94a3b8' }"></div>
          </div>
          <span class="stat-value">{{ store.data.current_slave.psych.resistance }}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">淫堕度</span>
          <div class="stat-track">
            <div class="stat-fill" :style="{ width: store.data.current_slave.psych.corruption + '%', background: '#c084fc' }"></div>
          </div>
          <span class="stat-value">{{ store.data.current_slave.psych.corruption }}</span>
        </div>
        <div class="stat-row">
          <span class="stat-label">依赖度</span>
          <div class="stat-track">
            <div class="stat-fill" :style="{ width: store.data.current_slave.psych.dependency + '%', background: '#fb923c' }"></div>
          </div>
          <span class="stat-value">{{ store.data.current_slave.psych.dependency }}</span>
        </div>
        <div class="stat-row arousal">
          <span class="stat-label">兴奋度</span>
          <div class="stat-track">
            <div class="stat-fill pulse" :style="{ width: store.data.current_slave.sex_state.arousal + '%' }"></div>
          </div>
          <span class="stat-value">{{ store.data.current_slave.sex_state.arousal }}</span>
        </div>
      </div>

      <div class="sex-state-row">
        <div class="sex-chip">
          <span class="sex-key">贞操</span>
          <span class="sex-val">{{ store.data.current_slave.sex_state.chastity }}</span>
        </div>
        <div class="sex-chip">
          <span class="sex-key">后穴</span>
          <span class="sex-val">{{ store.data.current_slave.sex_state.anus_state }}</span>
        </div>
        <div class="sex-chip">
          <span class="sex-key">精液</span>
          <span class="sex-val">{{ store.data.current_slave.sex_state.semen_state }}</span>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useDataStore } from '../store';

const store = useDataStore();

const rankColor = computed(() => {
  const map: Record<string, string> = {
    'E': '#64748b',
    'D': '#22c55e',
    'C': '#3b82f6',
    'B': '#a855f7',
    'A': '#f59e0b',
    'S': '#ef4444',
    'SS': '#dc2626',
    'SSS': '#991b1b',
  };
  const rank = typeof store.data.current_slave === 'string' ? '' : store.data.current_slave.slave_rank;
  return map[rank] || '#64748b';
});

function tagColor(tag: string): string {
  if (tag.startsWith('特征') || tag.startsWith('体') || tag.startsWith('外')) return '#3b82f6';
  if (tag.startsWith('敏感') || tag.startsWith('骚') || tag.startsWith('淫')) return '#ec4899';
  if (tag.startsWith('改造') || tag.startsWith('刻印') || tag.startsWith('环')) return '#a78bfa';
  return '#475569';
}
</script>

<style lang="scss" scoped>
.slave-panel {
  padding: 12px;
}

.empty-state {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 24px;
  color: var(--c-text-muted);
  font-size: 0.9rem;
}

.empty-icon {
  font-size: 1.2rem;
}

.slave-header {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
  flex-wrap: wrap;
}

.slave-name {
  font-size: 1.05rem;
  font-weight: bold;
}

.slave-badge {
  padding: 2px 8px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: bold;
  color: #fff;
}

.slave-badge.rating {
  background: var(--c-surface-light);
  border: 1px solid var(--c-border-light);
}

.body-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 6px;
  margin-bottom: 8px;
  padding: 8px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 6px;
}

.body-stat {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.body-label {
  font-size: 0.65rem;
  color: var(--c-text-muted);
  text-transform: uppercase;
}

.body-val {
  font-size: 0.85rem;
  font-weight: 600;
}

.tags-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 6px;
}

.tag-pill {
  padding: 1px 7px;
  border-radius: 3px;
  font-size: 0.7rem;
  color: #fff;
}

.stats-section {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.stat-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.stat-label {
  font-size: 0.75rem;
  color: var(--c-text-muted);
  min-width: 45px;
}

.stat-track {
  flex: 1;
  height: 12px;
  background: var(--c-surface-light);
  border: 1px solid var(--c-border);
  overflow: hidden;
  position: relative;
}

.stat-fill {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  transition: width 0.3s ease;
}

.stat-fill.pulse {
  background: linear-gradient(90deg, #f43f5e, #ef4444, #f43f5e);
  background-size: 200% 100%;
  animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.stat-value {
  font-size: 0.8rem;
  font-weight: bold;
  min-width: 28px;
  text-align: right;
  font-variant-numeric: tabular-nums;
}

.arousal .stat-label {
  color: var(--c-accent);
}

.sex-state-row {
  display: flex;
  gap: 8px;
  margin-top: 10px;
  padding: 6px 8px;
  background: var(--c-surface);
  border: 1px solid var(--c-border);
  border-radius: 6px;
}

.sex-chip {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 2px;
}

.sex-key {
  font-size: 0.6rem;
  color: var(--c-text-muted);
  text-transform: uppercase;
}

.sex-val {
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--c-accent-light);
}
</style>
