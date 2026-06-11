<template>
  <nav class="tabs">
    <button
      v-for="tab in props.tabs"
      :key="tab.id"
      class="tab-button"
      :class="{ active: model === tab.id }"
      :aria-expanded="model === tab.id"
      @click="toggleTab(tab.id)"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>

<script setup lang="ts">
const props = defineProps<{
  tabs: { id: string; label: string }[];
}>();

const model = defineModel<string | null>({ required: true });

function toggleTab(id: string) {
  model.value = model.value === id ? null : id;
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  background-color: var(--c-surface);
  border-bottom: 1px solid var(--c-border);
}

.tab-button {
  flex: 1;
  padding: 8px 10px;
  border: none;
  background: transparent;
  color: var(--c-text-muted);
  font-size: 0.85rem;
  font-weight: bold;
  font-family: var(--font-stack);
  cursor: pointer;
  transition: all 0.2s;
  border-right: 1px solid var(--c-border);
}

.tab-button:last-child {
  border-right: none;
}

.tab-button:hover {
  background-color: var(--c-surface-light);
  color: var(--c-text);
}

.tab-button.active {
  background-color: var(--c-bg);
  color: var(--c-accent);
  position: relative;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10%;
  right: 10%;
  height: 2px;
  background: var(--c-accent);
}
</style>
