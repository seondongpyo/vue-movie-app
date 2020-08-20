import { mount, createLocalVue } from '@vue/test-utils';
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
        wrapper = mount(SearchBar, {
            localVue,
            vuetify,
            store
        });
    });

    test('제목 입력 시 스토어 업데이트 확인', () => {
        wrapper.vm.title = 'lion';
        expect(wrapper.vm.title).toBe('lion');
    });

    test('로딩 중 아이콘 확인', async () => {
        wrapper.vm.$store.commit('movie/updateState', {
            loading: true
        });
        await wrapper.vm.$nextTick(); // 화면 갱신을 보장
        expect(wrapper.find('.v-progress-circular').exists()).toBe(true);
    });
});