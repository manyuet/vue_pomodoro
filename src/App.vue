<template>
    <div id="app">
        <button @click="switchLanguage">切换</button>
        <count-down></count-down>
    </div>
</template>

<script>
    import countDown from "./components/countDown";

    export default {
        name: 'app',
        components: {
            countDown
        },
        methods: {
            switchLanguage() {
                let m = this.$i18n.locale === 'zh' ? 'en' : 'zh';
                this.$i18n.locale = m
            }
        }
    }
</script>

<style>
#app{
    max-width: 1080px;
    min-width: 1080px;
    max-height: 900px;
    min-height: 900px;
    margin-left: auto;
    margin-right: auto;
}
</style>
