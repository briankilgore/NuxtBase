<template>
  <el-select v-bind:value="value" v-on:input="updateValue($event)" clearable placeholder="Select" style="width: 100%;">
    <el-option
      v-for="(item, index) in options"
      :key="index"
      :label="item.name"
      :value="item.id">
    </el-option>
  </el-select>
</template>

<script>
  export default {
    props: {
      'options': {
        type: Array
      },
      'value': {
        type: String
      }
    },
    methods: {
      updateValue (value) {
        console.log(value)
        this.$emit('account', value)
      }
    }
  }
</script>

<style scoped>
.el-form-item {
  margin-bottom: 0;
}
</style>
