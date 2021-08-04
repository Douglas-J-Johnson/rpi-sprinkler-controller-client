<template>
    <div id="app-header">
        <h2>Header</h2>
        <button v-if="isLoggedIn" @click="logout">Logout</button>
        <button v-else @click="login">Login</button>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: { },
    methods: {
        ...mapGetters(['isLoggedIn']),
        ...mapActions(['login', 'logout'])
    }
};
</script>

<style scoped>
    #app-header {
        color: blue;
    }
</style>