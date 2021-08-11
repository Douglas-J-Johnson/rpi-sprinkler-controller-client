<template>
    <div id="home">
        <div v-if="!isLoggedIn">Please Log in</div>
        <div v-else>You are logged in!</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: "Home",
    computed: {
        ...mapGetters(['isLoggedIn']),
    }
};
</script>

<style scoped>
    #home { }
</style>