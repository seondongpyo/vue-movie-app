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
import axios from 'axios';

export default {
    data () {
        return {
            title: '',
            loading: false
        }
    },
    methods: {
        async searchMovies () {
            // axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${this.title}`)
            //     .then((response) => {
            //         console.log(response);
            //     })

            // await 함수가 실행되기 전에 로딩 애니메이션 실행
            this.loading = true;

            // async & await 사용하기
            const res = await axios.get(`http://www.omdbapi.com/?apikey=bdae121c&s=${this.title}`)
            console.log(res.data);

            // await 함수가 종료되면 로딩 애니메이션 종료
            this.loading = false;
        }
    }
}
</script>