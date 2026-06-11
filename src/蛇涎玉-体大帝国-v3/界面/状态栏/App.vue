<template>
  <div class="card">
    <HeaderBar />

    <TabNav v-model="active_tab" :tabs="tabs" />

    <div v-if="active_tab" class="content-area">
      <div v-if="active_tab === '场景'" class="tab-pane active">
        <ScenePanel />
      </div>
      <div v-else-if="active_tab === '蛇奴'" class="tab-pane active">
        <SlavePanel />
      </div>
      <div v-else-if="active_tab === '档案'" class="tab-pane active">
        <SlaveArchives />
      </div>
    </div>

    <StatusMiniBar />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from './components/HeaderBar.vue';
import ScenePanel from './components/ScenePanel.vue';
import SlavePanel from './components/SlavePanel.vue';
import SlaveArchives from './components/SlaveArchives.vue';
import StatusMiniBar from './components/StatusMiniBar.vue';
import TabNav from './components/TabNav.vue';

const tabs = [
  { id: '场景', label: '场景' },
  { id: '蛇奴', label: '蛇奴' },
  { id: '档案', label: '档案' },
];

const active_tab = useLocalStorage<string | null>('jade_status_bar:active_tab', null);
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 540px;
  background-color: var(--c-bg);
  border: 1px solid var(--c-border);
  display: flex;
  flex-direction: column;
  font-family: var(--font-stack);
  color: var(--c-text);
  font-size: 13px;
  line-height: 1.35;
  margin: 0 auto;
}

.content-area {
  min-height: 0;
}

.tab-pane {
  display: none;
  animation: fadeEffect 0.3s;
}

.tab-pane.active {
  display: block;
}

@keyframes fadeEffect {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
