<template>
  <div id="frame">
    <el-input v-model="account.username" :placeholder="$t('m.email')" />
    <el-input v-model="account.password" :placeholder="$t('m.password')" />
    <el-button type="warning" @click="login">登陆</el-button>
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      account: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login() {

    }
  }
}
</script>

<style scoped>
#frame{
    width: 300px;
    margin-left: auto;
    margin-right: auto;
}
</style>
