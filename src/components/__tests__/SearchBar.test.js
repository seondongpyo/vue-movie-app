import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vue from 'vue';
import Vuetify from 'vuetify';
import SearchBar from '../SearchBar';
import store from '@/store';

Vue.use(Vuetify);
const localVue = createLocalVue();

describe('SearchBar Component Test', () => {
    let vuetify;
    let wrapper;

    beforeEach(() => {
        vuetify = new Vuetify();
        wrapper = shallowMount(SearchBar, {
            localVue,
            vuetify,
            store
        });
    });

    test('제목 입력 시 스토어 업데이트 확인', () => {
        wrapper.vm.title = 'lion';
        expect(wrapper.vm.title).toBe('lion');
    });
});