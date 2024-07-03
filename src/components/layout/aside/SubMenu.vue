<template>
  <template v-for="item in menus" :key="item.path">
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
</template>

<script setup>
defineProps(["menus"])
</script>


<style scoped>

</style>
