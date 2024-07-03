<template>
  <el-row class="tac">
    <el-col>
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :router="true"

          @open="handleOpen"
          @close="handleClose"
      >
        <!--        暂时关闭折叠-->
        <!--        :collapse="store.menuCollapse"-->
        <template v-for="item in store.menuList" :key="item.path">
          <el-menu-item v-if="!item.children" :index="item.path" :key="item.path">
            <span>{{ item.label }}</span>
          </el-menu-item>
          <el-sub-menu :index="item.path" v-else>
            <template #title>
              <span>{{ item.label }}</span>
            </template>
            <SubMenu :menus="item.children"/>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script setup>
import {useCounterStore} from "@/stores/counter.js"
import SubMenu from "@/components/layout/aside/SubMenu.vue";
// 获取菜单信息
let store = useCounterStore()
</script>

<style scoped>
.el-menu-vertical-demo {
  height: 100vh;
}
</style>
