<template>
  <div>
    <el-container>
      <el-header>百知教育信息管理系统</el-header>
      <el-main><el-table :data="user_list" style="width: 100%">
        <el-table-column prop="id" label="id" width="100"></el-table-column>
        <el-table-column label="姓名" width="100">
          <template slot-scope="scope">
            <el-popover trigger="hover" placement="top">
              <p>姓名: {{ scope.row.username }}</p>
              <div slot="reference" class="name-wrapper">
                <el-tag size="medium">{{ scope.row.username }}</el-tag>
              </div>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="age" label="年龄" width="120"></el-table-column>
        <el-table-column label="日期" width="180">
          <template slot-scope="scope">
            <i class="el-icon-time"></i>
            <span style="margin-left: 10px">{{ scope.row.data }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="bir" label="生日" width="120"></el-table-column>
        <el-table-column prop="salary" label="工资" width="120"></el-table-column>
        <el-table-column prop="email" label="邮箱" width="120"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="primary" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row.id)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row.id)">删除</el-button>
            <el-button size="mini" type="primary" @click="handleAdd(scope.$index, scope.row.id)">增加</el-button>
            <el-button size="mini" type="primary" @click="handleShow(scope.$index, scope.row.id)">查看</el-button>
          </template>
        </el-table-column>
      </el-table></el-main>
      <el-footer>Footer</el-footer>
    </el-container>


  </div>

</template>

<script>
export default {
  name: "First",
  data() {
    return {
      user_list:[]
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
      this.$router.push("/second/"+row);

    },
    handleDelete(index, row) {
      console.log(index, row);
        this.$axios({
          url:'http://127.0.0.1:8000/userapp/del_emp/',
          method:'get',
          params:{
            user_id:row
          }
      }).then(rst=>{
        console.log(rst.data);
      }).catch(error=>{
        console.log(error);
      })
    },
    handleShow(index,row){
      this.$router.push('/third/'+row);
    },
    handleAdd(index,row){
      this.$router.push('/add/'+row)
    }
  },
  created(){
    this.$axios({
      url:"http://127.0.0.1:8000/userapp/emp_show/",
      method:'get',
    }).then(res=>{
      console.log(res.data)
      this.user_list=res.data;
    }).catch(error=>{
      console.log(error)
    })
  },

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
