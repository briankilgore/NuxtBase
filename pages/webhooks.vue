<template>
  <div>
    <h1>Manage Webhooks</h1>
    <webhooks-create-button v-on:click.native="createWebhook"></webhooks-create-button>
    <el-card class="box-card">
      <!--<div slot="header" class="clearfix">
        <account-selector v-bind:options="accounts" v-on:accountChanged="accountChanged" />
      </div>-->
      <div class="text item">
        <webhooks-table v-bind:tableData="webhooks" v-bind:loading="webhooksDataLoading" />
      </div>
    </el-card>
    <webhooks-create-modal :show.sync="showModal"></webhooks-create-modal>
  </div>
</template>

<script>
import AccountSelector from '~components/AccountSelector.vue'
import WebhooksCreateButton from '~components/WebhooksCreateButton.vue'
import WebhooksCreateModal from '~components/WebhooksCreateModal.vue'
import WebhooksTable from '~components/WebhooksTable.vue'

// import WrikeAPI from '~plugins/wrikeapi.js'

// console.log(WrikeAPI)

export default {
  layout: 'auth',
  data () {
    return {
      webhooksDataLoading: false,
      activeAccount: '',
      showModal: false
    }
  },
  computed: {
    accounts () {
      return this.$store.state.accounts.list
    },
    webhooks () {
      return this.$store.getters['webhooks/webhooks']
    }
  },
  methods: {
    createWebhook () {
      this.showModal = true
    },
    accountChanged (value) {
      this.activeAccount = value
    }
  },
  mounted () {
    this.$store.dispatch('accounts/fetch')
    this.$store.dispatch('webhooks/fetch')
  },
  // watch: {
  //   activeAccount (val) {
  //     this.$store.dispatch('webhooks/fetch', val)
  //   }
  // },
  components: {
    AccountSelector,
    WebhooksCreateButton,
    WebhooksCreateModal,
    WebhooksTable
  }
}
</script>

<style scoped>
  h1 {
    display: inline-block;
  }
  .text {
    font-size: 14px;
  }

  .item {
    padding: 18px 0;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  .clearfix:after {
      clear: both
  }
</style>
