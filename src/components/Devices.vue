<template>
    <div id="devices" class="page">
    <h3>Devices</h3>
        <div class="ui divided list">
            <div v-for="device in allDevices" :key="device.channel" class="item">
                <div class="left floated content">
                    <button
                        class="circular ui icon button"
                        :class="{
                            disabled: !device.assigned,
                            basic: !device.assigned,
                            green: deviceOn(device),
                            grey: !deviceOn(device)
                        }">
                        {{ device.channel }}
                    </button>
                </div>
                <div class="right floated content">
                    <button v-if="device.assigned"
                        class="ui mini primary button"
                        @click="onInitiateDeviceUnassignment(device.channel)">
                        Unassign
                    </button>
                    <button v-else
                        class="ui mini primary button"
                        @click="onInitiateDeviceAssignment(device.channel)">
                        Assign
                    </button>
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
                    class="ui primary approve button"
                    @click="onConfirmUnassignment">Unassign</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import $ from 'jquery';

const UNASSIGN_MODAL_ID = '#unassign-confirmation-modal';
const UNASSIGN_CHANNEL_ATTR = 'data-device-channel';

export default {
    name: 'Devices',
    computed: {
        ...mapGetters(['allDevices'])
    },
    methods: {
        ...mapActions(['assignDevice', 'unassignDevice']),
        deviceOn: function (device) {
            return device.state === 1 ? true : false;
        },
        unassignDeviceChannel: function () { return $(UNASSIGN_MODAL_ID).attr(UNASSIGN_CHANNEL_ATTR); },
        setUnassignDeviceChannel: function (value) { $(UNASSIGN_MODAL_ID).attr(UNASSIGN_CHANNEL_ATTR, value); },
        onEditDevice: function (channel) {
            console.log(`Edit Device ${channel}`);
        },
        onInitiateDeviceAssignment: function (channel) {
            this.assignDevice(channel);
        },
        onInitiateDeviceUnassignment: function (channel) {
            this.setUnassignDeviceChannel(channel);
            window.$('#unassign-confirmation-modal').modal('show');
        },
        onConfirmUnassignment: function () {
            this.unassignDevice(this.unassignDeviceChannel());
            this.setUnassignDeviceChannel(null);
        },
        onDenyUnassignment: function () { this.setUnassignDeviceChannel(null); }
    }
}
</script>

<style scoped>
    #devices { }
</style>