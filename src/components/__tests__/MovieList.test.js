import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import MovieList from '../MovieList';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('MovieList Component Test', () => {
    let vuetify;
    let wrapper;

    beforeEach(() => {
        vuetify = new Vuetify();
        wrapper = shallowMount(MovieList, {
            localVue,
            vuetify,
            mocks: {
                $store: {
                    state: {
                        movie: {    
                            movies: [
                                {
                                    imdbId: '123456',
                                    Title: '영화 제목',
                                    Poster: 'image.jpg',
                                    Year: '2020'
                                }
                            ]
                        }
                    }
                }
            }
        });
    });

    test('영화 제목 출력', () => {
        console.log(wrapper.html());
    });
});