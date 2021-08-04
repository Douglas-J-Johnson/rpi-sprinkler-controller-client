<template>
    <div id="auth-defualt">
        Authorization Failed.
    </div>
</template>

<script>
import qs from 'qs';
import { router } from '../main'

export default {
    name: 'AuthHandler',
    created() {
        // currently, when a user rejects permission application is redirected to 'Authorization callback URL' specified in the Github oauth app
        const QUERY_PARAMS = qs.parse(window.location.search.slice(1));

        if (Object.prototype.hasOwnProperty.call(QUERY_PARAMS, 'error')) {
            console.log('OAuth Error', QUERY_PARAMS.error);
        }
        else { console.log('OAuth Error', 'Unspecified OAuth error.'); }

        router.push('/');
    }
};
</script>

<style scoped>

</style>