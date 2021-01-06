<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">
        <el-form :model="user" status-icon :rules="rules" ref="user" label-width="100px" class="demo-user">
          <el-form-item label="id" prop="id">
            <el-input type="text" v-model="user.id" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" prop="username">
            <el-input type="text" v-model="user.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="年龄" prop="age">
            <el-input v-model.number="user.age"></el-input>
          </el-form-item>
          <el-form-item label="日期" prop="data">
            <el-input v-model.number="user.data"></el-input>
          </el-form-item>
          <el-form-item label="生日" prop="bir">
            <el-input v-model.number="user.bir"></el-input>
          </el-form-item>
          <el-form-item label="工资" prop="salary">
            <el-input v-model.number="user.salary"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model.number="user.email"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('user')">提交</el-button>
            <el-button @click="resetForm('user')">重置</el-button>
          </el-form-item>
        </el-form>

      </div></el-col>
      <el-col :span="8"><div class="grid-content bg-purple">&nbsp;</div></el-col>

    </el-row>
  </div>

</template>

<script>
export default {
  name: "Second",
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.user.checkPass !== '') {
          this.$refs.user.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.user.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      user: {},
      rules: {
        pass: [
          { validator: validatePass, trigger: 'blur' }
        ],
        checkPass: [
          { validator: validatePass2, trigger: 'blur' }
        ],
        age: [
          { validator: checkAge, trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
          let user_all=this.user.id;
          console.log(user_all)
          this.$axios({
            url:"http://127.0.0.1:8000/userapp/add/",
            method:'get',
            params:{
              user_id:this.user.id,
              user_name:this.user.username,
              user_age:this.user.age,
              user_data:this.user.data,
              user_bir:this.user.bir,
              user_salary:this.user.salary,
              user_email:this.user.email,
            }
          }).then(rst=>{
            console.log(rst.data);
            // this.user=
          }).catch(error=>{
            console.log(error);
          })

        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    update(){
      let user_id=this.$route.params.id;
      this.$axios({
        url:"http://127.0.0.1:8000/userapp/update/",
        method:'get',
        params:{
          user_id:user_id
        }
      }).then(rst=>{
        console.log(rst.data);
        this.user=rst.data;
      }).catch(error=>{
        console.log(error);
      })
    }
  },
  created() {
    this.update();
  }
}
</script>

<style scoped>

</style>
