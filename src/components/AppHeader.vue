<template>
    <div id="app-header">
        <h2>Header</h2>
        <button @click="login">Login</button>
        <button @click="logout">Logout</button>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'AppHeader',
    methods: {
        ...mapActions(['login', 'logout']),
    }
};
</script>

<style scoped>
    #app-header {
        color: blue;
    }
</style>