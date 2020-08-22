import movie from '../movie';

describe('movie store test', () => {
    test('state 업데이트', () => {
        const state = movie.state();
        movie.mutations.updateState(state, {
            loading: true
        });

        expect(state.loading).toBe(true);
    });
});