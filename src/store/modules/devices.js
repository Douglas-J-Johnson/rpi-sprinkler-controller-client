const state = {
    devices: [
        {id: 'CH1', status: 1, name: 'Front Pump', type: 'pump'},
        {id: 'CH2', status: 1, name: 'Back Pump', type: 'pump'},
        {id: 'CH3', status: 1, name: 'Zone 1', type: 'valve'},
        {id: 'CH4', status: 1, name: 'Zone 2', type: 'valve'},
        {id: 'CH5', status: 1, name: 'Zone 3', type: 'valve'},
        {id: 'CH6', status: 1, name: 'Zone 4', type: 'valve'},
        {id: 'CH7', status: 1, name: 'Zone 5', type: 'valve'},
        {id: 'CH8', status: 1, name: 'Zone 6', type: 'valve'},
    ] 
};

const getters = {
    allDevices: (state) => { return state.devices; },
    deviceByID: (state, id) => {
        console.log(id);
        // if found {
        //  return device object
        //} else
            return null;
        //}
    }
};

const mutations = {
    addDeviceToState: (state, device) => {
        console.log('Add', device);
        // check to see if device is in devices
        // if already in list, warn
        // else add device to list
    },
    updateDeviceInState: (state, id) => {
        console.log('Update', id);
        // check to see if device is in devices
        // if already in list, update
        // else error
    },
    removeDeviceFromState: (state, id) => {
        state.devices = state.devices.filter(device => device.id !== id);
    }
};

const actions = {
    removeDevice: ({ commit }, id) => {
        console.log('REMOVE', id);
        commit('removeDeviceFromState', id);
    }
};

export default { state, getters, mutations, actions };