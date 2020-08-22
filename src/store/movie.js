import axios from 'axios';

export default {
    namespaced: true,
    state: () => ({
        title: '',
        loading: false,
        movies: [],
        error: null
    }),
    getters: {

    },
    mutations: {
        updateState (state, payload) {
            Object.keys(payload).forEach(key => {
                state[key] = payload[key]   // loading = true
            });
        },
        pushIntoMovies (state, movies) {
            state.movies.push(...movies);
        }
    },
    actions: {
        fetchMovies ({ state, commit }, pageNum) {
            // return new Promise(async (resolve) => {
            //     const res = await axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${state.title}&page=${pageNum}`);
            //     commit('pushIntoMovies', res.data.Search);
            //     resolve(res.data);
            // });

            const searchResults = new Promise((resolve, reject) => {
                try {
                    axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${state.title}&page=${pageNum}`)
                        .then((res) => {
                            commit('pushIntoMovies', res.data.Search);
                            resolve(res.data);
                        });
                        
                } catch (error) {
                    reject(error);
                }
            });
            
            return Promise.resolve(searchResults);
        },
        async searchMovies ({ commit, dispatch }) {
            commit('updateState', {
                loading: true,
                movies: [],
                error: null
            });

            try {
                // const res = await axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${state.title}&page=1`);
                const { totalResults } = await dispatch('fetchMovies', 1);
                const pageLength = Math.ceil(totalResults / 10);    // 전체 페이지 수 구하기

                if (pageLength > 1) {
                    for (let i = 2; i <= pageLength; i++) {
                        // 최대 40개까지의 데이터만 조회
                        if (i > 4) {
                            break;
                        }

                        await dispatch('fetchMovies', i);
                    }
                }

            } catch (error) {
                commit('updateState', {
                    error: error
                });
            }
            
            commit('updateState', {
                loading: false
            });
        }
    }
}