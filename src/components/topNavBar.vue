<template>
  <div>
    <el-row class="top-row">
      <el-col :span="8">
        <span class="icon-smile">
          <font-awesome-icon :icon="['fas', 'smile']" /> </span>&nbsp; <span class="loginBtn">登录</span>&nbsp;|
        <span class="registerBtn">注册</span>
      </el-col>
      <el-col :span="4" :offset="12">
        <span class="icon-language" @click="switchLanguage">
          <font-awesome-icon :icon="['fas', 'language']" /> </span>&nbsp;&nbsp;
        <span
          class="icon-plus"
          @click="addTaskCard"
        ><font-awesome-icon
          :icon="['fas', 'plus-circle']"
        /></span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TopNavBar',
  methods: {
    switchLanguage() {
      const m = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = m
    },
    addTaskCard() {
      this.$router.push('/addTaskCard')
    }
  }
}
</script>

<style scoped>
.top-row {
  line-height: 45px;
  background-color: white;
}

.icon-language {
  font-size: 30px;
}

.icon-plus {
  font-size: 20px;
  margin-left: 5px;
}

.icon-smile {
  font-size: 20px;
  margin-left: 15px;
}
</style>
