<template>
    <div>
        <v-text-field
            v-model="title"
            outlined
            @keypress.enter="searchMovies"
        >
            <template v-slot:prepend-inner>
                <v-icon>search</v-icon>
            </template>

            <template v-slot:append>
                <v-progress-circular
                    v-if="loading"
                    size="24"
                    color="primary"
                    indeterminate
                >
                </v-progress-circular>
            </template>

        </v-text-field>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    // data () {
    //     return {
    //         title: '',
    //         loading: false
    //     }
    // },
    computed: {
        // title () {
        //     return this.$store.state.movie.title;   // error 발생 : 양방향 바인딩이 되어 있어서 값 입력 시 title이 movie.js 밖에서 수정되려고 함
        //     // → setter를 지정해서 store의 mutation의 도움을 받아야 함
        // },
        title: {
            get () {    // getter
                return this.$store.state.movie.title;
            },
            set (newTitle) {    // setter
                this.$store.commit('movie/updateState', {
                    title: newTitle
                });
            }
        },
        loading () {
            return this.$store.state.movie.loading;
        }
    },
    methods: {
        // searchMovies () {
        //     this.$store.dispatch('movie/searchMovies');
        // }

        ...mapActions('movie', [
            'searchMovies'
        ])
    }
}
</script>