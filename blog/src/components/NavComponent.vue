<template>
  <div id="nav">
    <div class="block">
      <el-avatar :size="50" :src="avatarUrl"></el-avatar>
    </div>
    <div class="navRight">
      <el-menu
        mode="horizontal"
        active-text-color="#35aa2f"
        background-color="#00000000"
        router
      >
        <el-menu-item index="/home"
          ><i class="el-icon-house" />首页</el-menu-item
        >
        <el-menu-item index="/note"
          ><i class="el-icon-reading" />学习笔记</el-menu-item
        >
        <el-menu-item index="/live"
          ><i class="el-icon-headset" />生活空间</el-menu-item
        >
        <el-menu-item index="/message"
          ><i class="el-icon-chat-dot-round" />留言板</el-menu-item
        >
        <el-menu-item index="/about"
          ><i class="el-icon-thumb" />关于我</el-menu-item
        >
        <el-menu-item @click="loginVisible = true" style="float:right"
          ><i class="el-icon-user" />登录</el-menu-item
        >
      </el-menu>
    </div>

    <el-dialog
      title="登录"
      :visible.sync="loginVisible"
      width="30%"
      center
      @closed="close"
    >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            v-model="form.passWord"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="loginVisible = false;registerVisible = true;">注 册</el-button>
        <el-button type="primary" @click="login"
          >登 录</el-button
        >
      </span>
    </el-dialog>
    <el-dialog
      title="注册"
      :visible.sync="registerVisible"
      width="30%"
      center
      @closed="close"
    >
      <el-form ref="form" :model="form" label-width="80px" :rules="rules">
        <el-form-item label="用户名" prop="userName" v-focus>
          <el-input v-model="form.userName"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="form.email"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="passWord">
          <el-input
            v-model="form.passWord"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="form.checkPass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="registerVisible = false">取 消</el-button>
        <el-button type="primary" @click="registerVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    let validateEmail = (rule, value, callback) => {
      const theEmail = new RegExp("[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+");
      if (!theEmail.test(value)) {
        callback(new Error("邮箱格式不正确"));
      }
      callback();
    };
    let validatePass = (rule, value, callback) => {
      if (value != this.form.passWord) {
        callback(new Error("两次密码不一致"));
      }
      callback();
    };
    return {
      avatarUrl: require("../assets/ezc.png"),
      registerVisible: false,
      loginVisible: false,
      form: {
        userName: "",
        email: "",
        tel: "",
        passWord: "",
        checkPass: "",
      },
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 9, message: "用户名长度在3-9位", trigger: "blur" },
        ],
        email: [
          { required: true, message: "请输入邮箱", trigger: "blur" },
          { validator: validateEmail, trigger: "blur" },
        ],
        passWord: [{ required: true, message: "请输入密码", trigger: "blur" }],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { validator: validatePass, trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    close() {
      this.form = {
        userName: "",
        email: "",
        tel: "",
        passWord: "",
      };
    },
    login(){

    },
  },
  directives: {
    focus: {
      inserted(el) {
        if (el.querySelector("input")) {
          el.querySelector("input").focus();
        }
      },
    },
  },
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: space-between;
}
.navRight {
  width: 100%;
}
.block {
  margin: 0 50px;
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
