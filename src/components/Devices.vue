<template>
    <div id="devices" class="page">
    <h3>Devices</h3>
        <div class="ui divided list">
            <div v-for="device in allDevices" :key="device.id" class="item">
                <div class="content">
                    <a class="header">{{ device.name }}</a>
                    <div class="description">{{ device.type }}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
    name: 'Devices',
    computed: {
        ...mapGetters(['allDevices'])
    }
}
</script>

<style scoped>
    #devices { }
</style>