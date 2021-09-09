<template>
    <div id="home" class="page">
        <div v-if="!isLoggedIn">
            <h3>Please Log in</h3>
        </div>
        <div v-else>
            <DevicesSummary></DevicesSummary>
            <SchedulesSummary></SchedulesSummary>
        </div>
    </div>
</template>

<script>
import DevicesSummary from './DevicesSummary.vue'
import SchedulesSummary from './SchedulesSummary.vue'
import { mapGetters } from 'vuex';

export default {
    name: "Home",
    components: {
        DevicesSummary,
        SchedulesSummary
    },
    computed: {
        ...mapGetters(['isLoggedIn']),
    }
};
</script>

<style scoped>
    #home { }
</style>