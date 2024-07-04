<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="collapse">
        <Router/>
      </el-aside>
      <el-container>
        <!--      头部位置-->
        <el-header>
          <Header/>
        </el-header>
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
.el-header{
  --el-header-padding: 0;
}
</style>
