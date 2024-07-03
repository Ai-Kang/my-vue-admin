<template>
  <div class="common-layout">
    <el-container>
<!--      头部位置-->
      <el-header>
        <Header/>
      </el-header>
      <el-container>
<!--        路由位置-->
        <el-aside width="200px">
          <Router/>
        </el-aside>
        <!--        页面-->
        <el-main>
          <RouterView/>
        </el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script setup>
import {RouterView} from 'vue-router'
import Header from "@/components/layout/header/Header.vue";
import Router from "@/components/layout/aside/Router.vue";

</script>

<style scoped>
</style>
