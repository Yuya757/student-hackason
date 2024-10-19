<script setup lang="ts">
import { onMounted, computed, ref } from 'vue';
import { useStore } from 'vuex';
import Calendar from '@event-calendar/vue3';
import TimeGrid from '@event-calendar/time-grid';
import '@event-calendar/core/index.css';

const store = useStore();
const hackathons = computed(() => store.getters.getHackathons);
const error = computed(() => store.getters.getError);

onMounted(() => {
  store.dispatch('fetchHackathons');
});

const plugins = [TimeGrid];
const options = ref({
  view: 'timeGridMonth',
  events: computed(() => 
    hackathons.value.map(h => ({
      id: h.id,
      start: h.date,
      end: h.date,
      title: h.name,
      allDay: true,
    }))
  ),
});
</script>

<template>
  <div class="home">
    <h2>Welcome to Student Hackathon Japan</h2>
    <p>Join us for exciting hackathon events where students can showcase their skills and creativity!</p>
    
    <h3>Hackathon Calendar 2024</h3>
    <div v-if="error" class="error-message">{{ error }}</div>
    <Calendar v-else :options="options" :plugins="plugins" />
    
    <h3>Upcoming Hackathons</h3>
    <ul v-if="hackathons.length">
      <li v-for="hackathon in hackathons.slice(0, 3)" :key="hackathon.id">
        {{ hackathon.name }} - {{ hackathon.date }}
      </li>
    </ul>
    <p v-else>Loading hackathons...</p>
    
    <h3>Sponsors</h3>
    <div class="sponsors">
      <div class="sponsor">Sponsor 1</div>
      <div class="sponsor">Sponsor 2</div>
      <div class="sponsor">Sponsor 3</div>
    </div>
  </div>
</template>

<style scoped>
.home {
  max-width: 800px;
  margin: 0 auto;
}

h2, h3 {
  color: #2c3e50;
}

.sponsors {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.sponsor {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

.error-message {
  color: red;
  margin-bottom: 10px;
}

:deep(.ec-calendar) {
  height: 600px;
  font-family: Arial, sans-serif;
}
</style>