<template>
    <div id="devices-summary">
    <h3>Devices</h3>
        <div class="ui divided list">
            <div v-for="device in allDevices" :key="device.channel" class="item">
                <div class="left floated content">
                    <button v-if="device.assigned"
                        class="circular ui button"
                        :class="{ green: deviceOn(device), grey: !deviceOn(device) }"></button>
                    <button v-else
                        class="circular disabled basic ui button"></button>
                </div>
                <div class="content">
                    <a class="header">{{ device.name }}</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'DevicesSummary',
    computed: {
        ...mapGetters(['allDevices'])
    },
    methods: {
        deviceOn: function (device) { return device.state === 1 ? true : false; }
    }
}
</script>

<style scoped>
    #devices-summary { }
</style>