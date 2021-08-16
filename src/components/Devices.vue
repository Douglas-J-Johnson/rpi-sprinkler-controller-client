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
                    <button
                        class="ui mini negative button"
                        @click="onInitiateDeviceRemoval(device.id)">Remove</button>
                </div>
            </div>
        </div>
        <div id="remove-confirmation-modal" class="ui active mini modal">
            <div class="ui header">
                Remove Device?
            </div>
            <div class="content">
                <p>Are you sure you want to remove this device from your device list?</p>
            </div>
            <div class="actions">
                <button
                    class="ui basic cancel button"
                    @click="onDenyRemoval">Cancel</button>
                <button
                    class="ui red approve button"
                    @click="onConfirmRemoval">Remove</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import $ from 'jquery';

const REMOVE_MODAL_ID = '#remove-confirmation-modal';
const REMOVE_ID_ATTR = 'data-device-id';


export default {
    name: 'Devices',
    computed: {
        ...mapGetters(['allDevices'])
    },
    methods: {
        ...mapActions(['removeDevice']),
        removeDeviceID: function () { return parseInt($(REMOVE_MODAL_ID).attr(REMOVE_ID_ATTR)); },
        setRemoveDeviceID: function (value) { $(REMOVE_MODAL_ID).attr(REMOVE_ID_ATTR, value); },
        onInitiateDeviceRemoval: function (id) {
            this.setRemoveDeviceID(id);
            // $('#remove-confirmation-modal').modal('show');
        },
        onConfirmRemoval: function () {
            this.removeDevice(this.removeDeviceID());
            this.setRemoveDeviceID(null);
        },
        onDenyRemoval: function () { this.setRemoveDeviceID(null); }
    }
}
</script>

<style scoped>
    #devices { }
</style>