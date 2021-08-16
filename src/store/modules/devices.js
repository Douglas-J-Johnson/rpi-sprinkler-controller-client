const state = {
    devices: [
        {id: 1, name: 'Front Pump', type: 'switch'},
        {id: 2, name: 'Back Pump', type: 'switch'},
        {id: 3, name: 'Zone 1', type: 'switch'},
        {id: 4, name: 'Zone 2', type: 'switch'},
        {id: 5, name: 'Zone 3', type: 'switch'},
        {id: 6, name: 'Zone 4', type: 'switch'},
        {id: 7, name: 'Zone 5', type: 'switch'},
        {id: 8, name: 'Zone 6', type: 'switch'},
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
    addDevice: (state, device) => {
        console.log('Add', device);
        // check to see if device is in devices
        // if already in list, warn
        // else add device to list
    },
    updateDevice: (state, id) => {
        console.log('Update', id);
        // check to see if device is in devices
        // if already in list, update
        // else error
    },
    removeDevice: (state, id) => {
        state.devices = state.devices.filter(device => device.id !== id)
    }
};

const actions = { };

export default { state, getters, mutations, actions };