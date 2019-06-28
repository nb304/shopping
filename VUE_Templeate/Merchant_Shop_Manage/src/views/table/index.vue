<template>
  <div>
    <el-container>
      <el-header>
        <el-row style="height:100%;">
          <el-card shadow="always" style="height:100%;">
            <el-button type="primary" icon="el-icon-plus" @click="dialogFormVisible = true">添加宝贝</el-button>
          </el-card>
        </el-row>
      </el-header>
      <el-main>
        <div class="app-container">
          <el-table
            v-loading="listLoading"
            :data="list"
            element-loading-text="Loading"
            border
            fit
            highlight-current-row
          >
            <el-table-column align="center" label="ID" width="95">
              <template slot-scope="scope">{{ scope.$index }}</template>
            </el-table-column>
            <el-table-column label="Title">
              <template slot-scope="scope">{{ scope.row.title }}</template>
            </el-table-column>
            <el-table-column label="Author" width="110" align="center">
              <template slot-scope="scope">
                <span>{{ scope.row.author }}</span>
              </template>
            </el-table-column>
            <el-table-column label="Pageviews" width="110" align="center">
              <template slot-scope="scope">{{ scope.row.pageviews }}</template>
            </el-table-column>
            <el-table-column class-name="status-col" label="Status" width="110" align="center">
              <template slot-scope="scope">
                <el-tag :type="scope.row.status | statusFilter">{{ scope.row.status }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column align="center" prop="created_at" label="Display_time" width="200">
              <template slot-scope="scope">
                <i class="el-icon-time"/>
                <span>{{ scope.row.display_time }}</span>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-main>
      <el-footer>
        <el-pagination
          background
          layout="prev, pager, next"
          :current-page="currentPage"
          :total="total"
          @current-change="handleSizeChange"
          page-size="3"
          small="false"
        ></el-pagination>
      </el-footer>
    </el-container>

    <div>
      <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="活动名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="活动区域" :label-width="formLabelWidth">
            <el-select v-model="form.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { getList } from "@/api/table";

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      total: 100,
      currentPage: 2,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList().then(response => {
        this.list = response;
        this.listLoading = false;
      });
    },
    Ajax() {
      this.fetchData();
    },
    handleSizeChange(val) {
      console.log(`当前页: ${val}`);
    }
  }
};
</script>
<style scope>
.el-main {
  padding: 0px !important;
}
.el-header {
  padding: 0px;
  line-height: 80px;
  height: 80px !important;
}

.el-card__body {
  padding: 0px;
  height: 100%;
  padding-left: 20px;
  overflow: auto;
}
</style>
