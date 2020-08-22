<template>
  <v-app>
    <v-container>
      <!-- 검색바 컴포넌트 -->
      <search-bar/>
      
      <!-- 에러 메시지 컴포넌트 -->
      <error-message/>

      <!-- 영화 목록 컴포넌트 -->
      <movie-list/>
    </v-container>
  </v-app>
</template>

<script>
import SearchBar from '@/components/SearchBar';
import ErrorMessage from '@/components/ErrorMessage';
import MovieList from '@/components/MovieList';

export default {
  components: {
    SearchBar,
    ErrorMessage,
    MovieList
  }
};
</script>
