<template>
    <div id="devices" class="page">
    <h3>Devices</h3>
        <div class="ui middle aligned divided list">
            <div v-for="device in allDevices" :key="device.channel" class="item">
                <div class="left floated content">
                    <button class="circular ui icon button">{{ device.channel }}</button>
                </div>
                <div v-if="device.assigned" class="right floated content">
                    <button
                        class="ui mini negative button"
                        @click="onInitiateDeviceUnassignment(device.channel)">Unassign</button>
                </div>
                <div class="content">
                    <a class="header">{{ device.name }}</a>
                    <div class="description">{{ device.type }}</div>
                </div>
            </div>
        </div>
        <div id="unassign-confirmation-modal" class="ui mini modal">
            <div class="ui header">
                Unassign Device?
            </div>
            <div class="content">
                <p>Are you sure you want to unassign this device from a relay channel?</p>
            </div>
            <div class="actions">
                <button
                    class="ui basic cancel button"
                    @click="onDenyUnassignment">Cancel</button>
                <button
                    class="ui red approve button"
                    @click="onConfirmUnassignment">Unassign</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import $ from 'jquery';

const UNASSIGN_MODAL_ID = '#unassign-confirmation-modal';
const UNASSIGN_ID_ATTR = 'data-device-channel';

export default {
    name: 'Devices',
    computed: {
        ...mapGetters(['allDevices'])
    },
    methods: {
        ...mapActions(['unassignDevice']),
        unassignDeviceID: function () { return $(UNASSIGN_MODAL_ID).attr(UNASSIGN_ID_ATTR); },
        setUnassignDeviceID: function (value) { $(UNASSIGN_MODAL_ID).attr(UNASSIGN_ID_ATTR, value); },
        onInitiateDeviceUnassignment: function (channel) {
            this.setUnassignDeviceID(channel);
            window.$('#unassign-confirmation-modal').modal('show');
        },
        onConfirmUnassignment: function () {
            this.unassignDevice(this.unassignDeviceID());
            this.setUnassignDeviceID(null);
        },
        onDenyUnassignment: function () { this.setUnassignDeviceID(null); }
    }
}
</script>

<style scoped>
    #devices { }
</style>