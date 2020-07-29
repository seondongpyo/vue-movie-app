<template>
  <v-app>
    <v-container>
      <!-- 검색바 컴포넌트 -->
      <search-bar/>
      
      <!-- 영화 목록 컴포넌트 -->
      <movie-list/>
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import MovieList from '@/components/MovieList';

export default {
  components: {
    SearchBar,
    MovieList
  }
};
</script>
