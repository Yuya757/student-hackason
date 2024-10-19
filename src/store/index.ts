import { createStore } from 'vuex';
import axios from 'axios';

interface Hackathon {
  id: number;
  name: string;
  date: string;
  location: string;
}

export default createStore({
  state: {
    hackathons: [] as Hackathon[],
    error: null as string | null,
  },
  mutations: {
    setHackathons(state, hackathons: Hackathon[]) {
      state.hackathons = hackathons;
    },
    setError(state, error: string) {
      state.error = error;
    },
  },
  actions: {
    async fetchHackathons({ commit }) {
      try {
        const response = await axios.get('https://api.mocki.io/v2/c4d7a195/hackathons-japan-2024');
        
        // Validate and sanitize the data
        const sanitizedHackathons = response.data.map((item: any) => ({
          id: Number(item.id) || 0,
          name: String(item.name) || '',
          date: String(item.date) || '',
          location: String(item.location) || '',
        }));

        commit('setHackathons', sanitizedHackathons);
        commit('setError', null);
      } catch (error) {
        console.error('Error fetching hackathons:', error);
        commit('setError', 'Failed to fetch hackathons. Please try again later.');
        commit('setHackathons', []);
      }
    }
  },
  getters: {
    getHackathons: (state) => state.hackathons,
    getError: (state) => state.error,
  }
});