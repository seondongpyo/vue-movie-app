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
    mutations: {    // 데이터 변경 가능, 비동기 처리 불가능
        // 각 데이터를 변경하려고 할 때마다 매번 mutation를 추가하기 힘듦!
        // updateTitle (state, title) {
        //     state.title = title;
        // },
        // updateLoading () {},

        // 범용성이 있는 mutation 정의
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]   // loading = true
            });
        },        
    },
    actions: {  // 데이터 변경 불가능, 비동기 처리 가능
        async searchMovies ({ state, commit }) {
            // state.loading = true;
            commit('updateState', {
                loading: true
            });

            const res = await axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${state.title}`)
            console.log(res.data);
            state.movie = res.data.Search;

            // state.loading = false;
            commit('updateState', {
                loading: false
            });
        }
    }
}