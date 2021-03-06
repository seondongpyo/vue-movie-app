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
        // find() : tag 선택자, wrapper 객체 반환
        expect(wrapper.find('v-card-title-stub').text()).toBe('영화 제목');
    });

    test('개봉 연도 출력', () => {
        expect(wrapper.find('v-card-subtitle-stub').text()).toBe('2020');
    });

    test('포스터 이미지 경로가 있는 경우', () => {
        const img = wrapper.find('v-img-stub');
        expect(img.attributes('src')).toBe('image.jpg');
        expect(img.attributes('height')).toBe('300');
    });

    test('포스터 이미지 경로가 없는 경우', () => {
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
                                    Poster: 'N/A',
                                    Year: '2020'
                                }
                            ]
                        }
                    }
                }
            }
        });
        
        const img = wrapper.find('v-img-stub');
        expect(img.attributes('src')).toBe('');
        expect(img.attributes('height')).toBe('100');
    });
});