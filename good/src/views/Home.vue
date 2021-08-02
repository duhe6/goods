<template>
  <div class="home">
   
    <el-table
    :data="list"
    height="380"
    border
    style="width: 100%">
    <el-table-column
      prop="goodsName"
      label="商品名称"
      >
    </el-table-column>
    <el-table-column
      prop="goodsType"
      label="商品类型"
      >
    </el-table-column>
    <el-table-column
      prop="money"
      label="进货价格"
      >
    </el-table-column>
    <el-table-column
      prop="stockNum"
      label="库存数量"
      >
    </el-table-column>
    <el-table-column
      prop="supplier"
      label="供应商"
      >
    </el-table-column>
    <el-table-column
      prop="warehousTime"
      label="入库时间"
      >
    </el-table-column>
    
  </el-table>
  <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
</template>

<script>
import GoodsApi from '@/api/goods.js'

export default {
  data(){
    return {
      list:[],
      currentPage:1,
      pageSize:10,
      total:0
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      GoodsApi.getData(this.currentPage,this.pageSize).then(response=>{
        const resp = response.data;
        this.list = resp.data.rows;
        this.total = resp.data.total;
        console.log(resp);
      })
    },
     handleSizeChange(val) {
       this.pageSize = val;
       this.fetchData()
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.fetchData()
      }
  },
};
</script>
