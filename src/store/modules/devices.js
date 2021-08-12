const state = {
    devices: [
        {id: 1, name: 'Pump', type: 'switch'},
        {id: 2, name: 'Zone 1', type: 'switch'},
        {id: 3, name: 'Zone 2', type: 'switch'},
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
        console.log(device);
        // check to see if device is in devices
        // if already in list, warn
        // else add device to list
    },
    updateDevice: (state, id) => {
        console.log(id);
        // check to see if device is in devices
        // if already in list, update
        // else error
    },
    removeDevice: (state, id) => {
        console.log(id);
        // check to see if device is in devices
        // if already in list, delete
        // else info message
    }
};

const actions = { };

export default { state, getters, mutations, actions };