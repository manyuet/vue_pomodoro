<template>
  <div id="frame">
    <el-container>
      <el-container>
        <el-aside width="260px">
          <left-side-nav-menu />
        </el-aside>
        <!--        <el-main>-->
        <!--          <categories-detail />-->

        <!--        </el-main>-->
      </el-container>
    </el-container>
  </div>
</template>

<script>
// import countDown from '../components/countDown';
import leftSideNavMenu from '../components/leftSideNavMenu'
// import CategoriesDetail from '../components/categoriesDetail'

export default {
  name: 'HomePage',
  components: {
    // CategoriesDetail,
    leftSideNavMenu
  }
}
</script>

<style scoped>
</style>
