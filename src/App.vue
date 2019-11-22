<template>
    <div id="app">
        <el-button @click="switchLanguage">{{$t('m.switchLanguage')}}</el-button>
        <el-button @click="addTaskCard"><i class="el-icon-plus"></i></el-button>
        <div class="router">
            <router-view/>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'app',
        components: {

        },
        methods: {
            switchLanguage() {
                let m = this.$i18n.locale === 'zh' ? 'en' : 'zh';
                this.$i18n.locale = m
            },
            addTaskCard(){
                this.$router.push("/addTaskCard")
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
