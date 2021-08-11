<template>
    <div id="home">
        <div v-if="!isLoggedIn">
            <h3>Please Log in</h3>
        </div>
        <div v-else>
            <h3>You are logged in!</h3>
        </div>
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
    #home {
        padding: 1rem;
    }
</style>