<template>
  <div id="app">
    <div id="nav">
      <div class="block"><el-avatar :size="50" :src="avatarUrl"></el-avatar></div>
      <div class="navRight">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          active-text-color="#35aa2f"
          background-color="#00000000"
          router
        >
          <el-menu-item index="/home"><i class="el-icon-house"/>首页</el-menu-item>
          <el-menu-item index="/note" route=""
            ><i class="el-icon-reading"/>学习笔记</el-menu-item
          >
          <el-menu-item index="/live"><i class="el-icon-headset"/>生活空间</el-menu-item>
          <el-menu-item index="/message"><i class="el-icon-chat-dot-round"/>留言板</el-menu-item>
          <el-menu-item index="/about"
            ><i class="el-icon-user" />关于我</el-menu-item
          >
        </el-menu>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      avatarUrl:require("./assets/ezc.png")
    }
  },
};
</script>
<style scoped>
.block {
  margin: 0 50px;
  float: left;
}
.el-menu-item {
  width: 150px;
  font-size: 15px;
  text-align: center;
}
i {
  margin-bottom: 3px;
}
</style>
