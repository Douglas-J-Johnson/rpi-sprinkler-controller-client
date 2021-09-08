const state = {
    devices: [
        {channel: 'CH1', assigned: true, state: 0, name: 'Front Pump', type: 'pump'},
        {channel: 'CH2', assigned: true, state: 0, name: 'Back Pump', type: 'pump'},
        {channel: 'CH3', assigned: true, state: 0, name: 'Zone 1', type: 'valve'},
        {channel: 'CH4', assigned: true, state: 0, name: 'Zone 2', type: 'valve'},
        {channel: 'CH5', assigned: true, state: 1, name: 'Zone 3', type: 'valve'},
        {channel: 'CH6', assigned: true, state: 1, name: 'Zone 4', type: 'valve'},
        {channel: 'CH7', assigned: true, state: 1, name: 'Zone 5', type: 'valve'},
        {channel: 'CH8', assigned: true, state: 1, name: 'Zone 6', type: 'valve'},
    ] 
};

const getters = {
    allDevices: (state) => { return state.devices; },
    channelStates: ((state) => {
        console.log("HERE");

        state.devices.forEach(device => {
            console.log(device.channel, device.state);
        });
    })
};

const mutations = {
    updateDeviceInfoInState: (state, update) => {
        let channel = update.channel;

        state.devices = state.devices.map((device) => {
            if (device.channel === channel) {
                Object.keys(update).forEach(key => {
                    if (key !== 'channel') {
                        device[key] = update[key];
                    }
                })
            }

            return device;
        });
    },
    assignDeviceInState: (state, channel) => {
        state.devices = state.devices.map((device) => {
            if (device.channel === channel) {
                device.assigned = true;
                device.state = 0;
            }

            return device;
        });
    },
    unassignDeviceInState: (state, channel) => {
        state.devices = state.devices.map((device) => {
            if (device.channel === channel) {
                device.assigned = false;
                device.state = 0;
                device.name = '';
                device.type = '';
            }

            return device;
        });
    }
};

const actions = {
    assignDevice: ({ commit }, channel) => {
        commit('assignDeviceInState', channel);
    },
    unassignDevice: ({ commit }, channel) => {
        commit('unassignDeviceInState', channel);
    },
    setDeviceState: ({ commit }, update) => {
        // Check actual device state
        // Send device states to server
        commit('updateDeviceInfoInState', update);
    }
};

export default { state, getters, mutations, actions };