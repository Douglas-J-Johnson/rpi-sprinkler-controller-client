const state = {
    devices: [
        {channel: 'CH1', assigned: true, state: 1, name: 'Front Pump', type: 'pump'},
        {channel: 'CH2', assigned: true, state: 1, name: 'Back Pump', type: 'pump'},
        {channel: 'CH3', assigned: true, state: 1, name: 'Zone 1', type: 'valve'},
        {channel: 'CH4', assigned: true, state: 1, name: 'Zone 2', type: 'valve'},
        {channel: 'CH5', assigned: true, state: 1, name: 'Zone 3', type: 'valve'},
        {channel: 'CH6', assigned: false, state: 0, name: '', type: ''},
        {channel: 'CH7', assigned: true, state: 1, name: 'Zone 5', type: 'valve'},
        {channel: 'CH8', assigned: true, state: 1, name: 'Zone 6', type: 'valve'},
    ] 
};

const getters = {
    allDevices: (state) => { return state.devices; },
    channelStates: ((state) => {
        state.devices.forEach(device => {
            console.log(device.channel, device.state);
        });
    }),
    deviceByID: (state, channel) => {
        console.log(channel);
        // if found {
        //  return device object
        //} else
            return null;
        //}
    }
};

const mutations = {
    assignDeviceToState: (state, device) => {
        console.log('Assign', device);
        // check to see if device is in devices
        // if already in list, warn
        // else assign device to list
    },
    updateDeviceInState: (state, channel) => {
        console.log('Update', channel);
        // check to see if device is in devices
        // if already in list, update
        // else error
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
    unassignDevice: ({ commit }, channel) => {
        commit('unassignDeviceInState', channel);
    },

};

export default { state, getters, mutations, actions };