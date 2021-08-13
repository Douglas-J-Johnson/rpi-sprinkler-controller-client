<template>
    <div id="devices" class="page">
    <h3>Devices</h3>
        <div class="ui middle aligned divided list">
            <div v-for="device in allDevices" :key="device.id" class="item">
                <div class="content">
                    <a class="header">{{ device.name }}</a>
                    <div class="description">{{ device.type }}</div>
                </div>
                <div class="right floated content">
                    <button class="ui mini negative button" @click="removeDevice(device.id)">
                        Remove
                    </button>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
    name: 'Devices',
    computed: {
        ...mapGetters(['allDevices'])
    },
    methods: {
        ...mapMutations([
            'addDevice',
            'updateDevice',
            'removeDevice'
        ])
    }
}
</script>

<style scoped>
    #devices { }
</style>