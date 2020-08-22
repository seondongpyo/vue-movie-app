import cloneDeep from 'lodash/cloneDeep';
import axios from 'axios';
import movie from '../movie';

jest.mock('axios');

describe('movie store test', () => {
    let store;

    beforeEach(() => {
        store = cloneDeep(movie);
        store.state = movie.state();

        // this.$store.commit('Mutation's name', payload);
        store.commit = function (name, payload) {
            store.mutations[name](store.state, payload);
        }

        // this.$store.dispatch('searchMovies', payload);
        store.dispatch = function (name, payload) {
            const context = {
                state: store.state,
                commit: store.commit,
                dispatch: store.dispatch
            };

            return store.actions[name](context, payload);
        }
    });

    test('state 업데이트', () => {
        store.commit('updateState', {
            title: 'Hello!',
            movies: [1, 2, 3],
            loading: true
        });

        expect(store.state.title).toBe('Hello!');
        expect(store.state.movies).toEqual([1, 2, 3]);
        expect(store.state.loading).toBe(true);
    });

    test('영화 목록 push test', () => {
        expect(store.state.movies).toEqual([]);
        store.commit('pushIntoMovies', [{
            title: '영화 제목'
        }]);
        expect(store.state.movies).toEqual([{title: '영화 제목'}]);
    });

    test('영화 목록을 정상적으로 가져온 경우', async () => {
        axios.get.mockResolvedValue({
            data: {
                totalResults: '1',
                Search: [
                    {
                        imdbId: '123456',
                        Title: '영화 제목',
                        Poster: 'image.jpg',
                        Year: '2020'
                    }
                ]
            }
        });
        
        await store.dispatch('searchMovies');
        expect(store.state.movies).toEqual([
            {
                imdbId: '123456',
                Title: '영화 제목',
                Poster: 'image.jpg',
                Year: '2020'
            }
        ]);
    });
});