<template>
  <div class="headerCLass">
    <!-- 项目图标-->
    <div class="menu-icon">
      <span>当前页面：主页</span>
    </div>
<!--系统名称-->
    <div class="menu-content">
      <span>GIS二三维展示平台</span>
    </div>
    <!--  用户头像信息-->
    <div class="userInfo">
      <el-dropdown>
    <span class="el-dropdown-link">
     <img class="userAvatar" :src="userAvatarImg"/>
    </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import {useCounterStore} from "@/stores/counter.js"
import {createRouter} from "vue-router";
import logo from "@/assets/img/logo.png"
import userAvatarImg from "@/assets/img/userAvatar.png"

// 折叠或展开路由
let setMenuCollapse = function () {
  let store = useCounterStore()
  store.setMenuCollapse()
  // 暂时跳转主页
  let router = createRouter()
  router.push({path: '/'})
}
</script>

<style lang="less" scoped>
.headerCLass {
  // 盒子布局
  display: flex;
  // 水平）对齐弹性容器的项目 均匀排列每个元素
  justify-content: space-between;
  // 每个元素剧中对齐
  align-items: center;
  background-color: #21314a;
  // 高度限定
  height: 50px;
  .userInfo {
    .userAvatar {
      // 高度限定
      height: 50px;
      // 圆角限定
      border-radius: 50%;
    }
  }

  .menu-content{
    font-size: 20px;
  //  加粗
    font-weight: bold;
    font-family: "微软雅黑",serif;
    color: #f3f4f6;
  }
}

</style>
