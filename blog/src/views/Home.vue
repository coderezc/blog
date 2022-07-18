<template>
  <div>
    <el-container>
      <el-header>善始者实繁，克终者盖寡</el-header>
      <el-container>
        <el-aside>
            <el-avatar :size="150" :src="avatarUrl"></el-avatar>
            <div>ezc</div>
            <div>微信：ezc0099</div>
            <div>QQ：769679588</div>
            <div>github：*******</div>
        </el-aside>
        <el-container>
          <el-main><div>个人简介</div></el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
    data(){
        return{
            avatarUrl:require("../assets/ezc.png")
        }
    }
};
</script>
<style scoped>
.el-aside{
width: 400px;
display: flex;
flex-direction:column;
align-items: center;
}
</style>
