<template>
    <div id="auth-handler">
        <h5> {{ search() }} </h5>
    </div>
</template>

<script>
import qs from 'qs';
import config from '../config';
import { mapActions } from 'vuex';

export default {
    name: 'AuthHandler',
    methods: {
        ...mapActions(['finalizeLogin']),
        search() {
            // currently, when a user rejects permission application is redirected to 'Authorization callback URL' specified in the Github oauth app

            const QUERY_PARAMS = qs.parse(window.location.search.slice(1));

            if (Object.prototype.hasOwnProperty.call(QUERY_PARAMS, 'error') && Object.prototype.hasOwnProperty.call(QUERY_PARAMS, 'error_description')) {
                console.log('OAuth Error', QUERY_PARAMS.error_description);
            }
            else if (Object.prototype.hasOwnProperty.call(QUERY_PARAMS, 'code')) {
                if (Object.prototype.hasOwnProperty.call(QUERY_PARAMS, 'state') && QUERY_PARAMS.state === config.github.accessCodeState) {
                    this.finalizeLogin(QUERY_PARAMS.code);
                    return "OAuth Login Successful";
                }
            }
            else { console.log('OAuth Error', 'Unspecified OAuth error.'); }

            return "OAuth Login Failed.";
        }
    }
};
</script>

<style scoped>

</style>