<template>
  <div id="app">
    <AppHeader></AppHeader>
    <h1>Hello</h1>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style>
#app {
  text-align: center;
  color: turquoise;
}
</style>
