<template>
  <div class="headerCLass">
    <!-- 项目图标-->
    <div class="menu-icon">
      <el-button @click="setMenuCollapse">
        <el-icon>
          <Menu/>
        </el-icon>
      </el-button>
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

let userAvatarImg = "../../../../public/img/img.png"
// 折叠或展开路由
let setMenuCollapse = function () {
  let store = useCounterStore()
  store.setMenuCollapse()
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

  .userInfo {
    .userAvatar {
      // 高度限定
      height: 50px;
      // 圆角限定
      border-radius: 50%;
    }
  }
}

</style>
