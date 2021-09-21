import config from "../config";

const getStatesURL = `${config.deviceController.controllerServerIP}${config.deviceController.getStates}`
const setStatesURL = `${config.deviceController.controllerServerIP}${config.deviceController.setStates}`

export default {
    getDeviceStates: function () {
        console.log(`Get from ${getStatesURL}`);

        fetch(setStatesURL, {
            method: 'GET',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
        })
        .then(console.log);
    },
    postDeviceStates: function (states) {
        console.log(`POST to ${setStatesURL}`, states);
        const requestBody = new URLSearchParams();

        Object.keys(states).forEach(relayIdentifier => {
            requestBody.append(relayIdentifier, states[relayIdentifier]);
        })
    
        fetch(setStatesURL, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
            body: requestBody.toString()
        })
        .then(console.log);
    }
};