<template>
  <el-table :data="tableData" empty-text="No Webhooks Found" v-loading="loading" element-loading-text="Loading..." border style="width: 100%">
    <el-table-column prop="id" label="Webhook ID" min-width="200"></el-table-column>
    <el-table-column prop="accountName" label="Account Name" min-width="200"></el-table-column>
    <el-table-column prop="hookUrl" label="Hook URL" min-width="600"></el-table-column>
    <el-table-column prop="status" label="Status" min-width="200"></el-table-column>
    <el-table-column min-width="200">
      <template scope="scope">
        <el-button
          @click.native.prevent="editWebhook(scope.$index, tableData)"
          size="small">
          Edit
        </el-button>
        <el-button
          @click.native.prevent="deleteWebhook(scope.$index, tableData)"
          type="danger"
          size="small">
          Remove
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    props: ['tableData', 'loading'],
    methods: {
      editWebhook (index, table) {
        // var webhook = table[index]
        console.log(table[index])
      },
      deleteWebhook (index, table) {
        console.log(table[index])

        var webhook = table[index]
        this.$store.dispatch('webhooks/delete', webhook.id)
      }
    }
  }
</script>
