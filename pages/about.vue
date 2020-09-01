<template>
    <div>{{ text }}</div>
</template>

<script>
export default {
    data() {
        return {
            text: '',
        };
    },
    created() {
        if (process.server) {
            this.text = this.$about;
        }
    },
};
</script>
