<template>
  <el-dialog title="Add Webhook" :visible.sync="showModal">
    <el-form label-position="right" label-width="100px">
      <el-form-item label="Account">
        <el-select v-model="account" clearable placeholder="Select" style="width: 100%;">
          <el-option
            v-for="(item, index) in accounts"
            :key="index"
            :label="item.name"
            :value="item.id">
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Hook URL">
        <el-input v-model="hookUrl"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="cancel">Cancel</el-button>
      <el-button type="primary" @click="submit">Create</el-button>
    </span>
  </el-dialog>
</template>

<script>
import AccountSelector from '~components/AccountSelector.vue'

export default {
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showModal: this.show,
      account: '',
      hookUrl: ''
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts.list
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('webhooks/add', {
        account: this.account,
        hookUrl: this.hookUrl
      })
      this.$emit('update:show', false)
    },
    cancel () {
      this.$emit('update:show', false)
    },
    close () {
      console.log(this)
    }
  },
  watch: {
    showModal (val) {
      this.$emit('update:show', val)
    },
    show (val) {
      console.log(val)
      this.showModal = this.show
      this.$emit('update:show', val)
    }
  },
  components: {
    AccountSelector
  }
}
</script>

<style scoped>

</style>
