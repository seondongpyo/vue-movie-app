import cloneDeep from 'lodash/cloneDeep';
import movie from '../movie';

describe('movie store test', () => {
    let store;

    beforeEach(() => {
        store = cloneDeep(movie);
        store.state = movie.state();

        // this.$store.commit('Mutation's name', payload)
        store.commit = function (name, payload) {
            store.mutations[name](store.state, payload);
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
});