<template>
  <div id="app">
    <AppHeader></AppHeader>
    <h1> {{ getCode() }} </h1>
    <router-view></router-view>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  methods: {
    ...mapGetters(['getCode']),
  }
};
</script>

<style>
#app {
  text-align: center;
  color: turquoise;
}
</style>
