import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: []
    }),
    getters: {

    },
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]   // loading = true
            });
        },        
    },
    actions: {
        async searchMovies ({ state, commit }) {
            commit('updateState', {
                loading: true
            });

            const res = await axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${state.title}`)
            
            commit('updateState', {
                movies: res.data.Search,
                loading: false
            });
        }
    }
}