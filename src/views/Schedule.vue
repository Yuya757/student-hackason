<script setup lang="ts">
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const hackathons = computed(() => store.getters.getHackathons);
const error = computed(() => store.getters.getError);

onMounted(() => {
  store.dispatch('fetchHackathons');
});
</script>

<template>
  <div class="schedule">
    <h2>Hackathons in Japan 2024</h2>
    <div v-if="error" class="error-message">{{ error }}</div>
    <table v-else-if="hackathons.length">
      <thead>
        <tr>
          <th>Event</th>
          <th>Date</th>
          <th>Location</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hackathon in hackathons" :key="hackathon.id">
          <td>{{ hackathon.name }}</td>
          <td>{{ hackathon.date }}</td>
          <td>{{ hackathon.location }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading hackathons...</p>
  </div>
</template>

<style scoped>
/* ... (previous styles remain unchanged) ... */

.error-message {
  color: red;
  margin-bottom: 10px;
}
</style>