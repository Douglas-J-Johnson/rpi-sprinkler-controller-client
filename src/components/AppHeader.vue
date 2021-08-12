<template>
    <div id="app-header">
        <div class="ui menu">
            <router-link to="/" class="item">Home</router-link>
            <router-link to="/devices" class="item">Devices</router-link>
            <router-link to="/schedules" class="item">Schedules</router-link>
            <div class="right menu">
                <div class="item">
                    <button class="ui primary button" v-if="!isLoggedIn" @click="login">
                        Login
                    </button>
                    <button class="ui primary button" v-else @click="logout">
                        Logout
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'AppHeader',
    computed: { 
        ...mapGetters(['isLoggedIn']),
    },
    methods: {
        ...mapActions(['login', 'logout'])
    }
};
</script>

<style scoped>
    #app-header { }
</style>