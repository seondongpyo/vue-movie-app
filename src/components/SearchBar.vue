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
    computed: {
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
        ...mapActions('movie', [
            'searchMovies'
        ])
    }
}
</script>