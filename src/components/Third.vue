<template>
  <div>
    <el-container>
      <el-header>百知教育信息管理系统</el-header>
      <el-main><el-table :data="user" style="width: 100%">
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column prop="username" label="姓名" width="100"></el-table-column>
        <el-table-column prop="age" label="年龄" width="120"></el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{scope.row.data}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="bir" label="生日" width="120"></el-table-column>
        <el-table-column prop="salary" label="工资" width="120"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="170"></el-table-column>
      </el-table></el-main>
      <el-footer>Footer</el-footer>
    </el-container>


  </div>

</template>

<script>
export default {
  name: "Third",
  data(){
    return {
      user:[],
    }
  },
  methods:{
    get_emp(){
      let user_id=this.$route.params.id;
      this.$axios({
        url:"http://127.0.0.1:8000/userapp/get_emp/",
        method:'get',
        params:{
          user_id:user_id
        }
      }).then(res=>{
        console.log(res.data);
        this.user=res.data;
      }).catch(error=>{
        console.log(error);
      })
    }
  },
  created() {
    this.get_emp();
  }
}
</script>

<style scoped>
.el-header, .el-footer {
  background-color: cornflowerblue;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 60px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
