<template>
  <div>
    <v-card>
      <v-card-title>
        <webhooks-create-modal />
      </v-card-title>
      <v-data-table
          v-bind:headers="headers"
          :items="items"
          no-data-text="No Webhooks found"
          :loading="loading"
          selected-key="id"
          class="elevation-0"
        >
        <template slot="items" scope="props">
          <td>{{ props.item.id }}</td>
          <td>{{ props.item.accountName }}</td>
          <td>{{ props.item.hookUrl }}</td>
          <td>{{ props.item.status }}</td>
          <td>
            <div class="text-xs-center">
              <v-btn icon class="red--text" v-on:click.native.stop="deleteWebhook(props.item.id)">
                <v-icon>delete</v-icon>
              </v-btn>
            </div>
          </td>
        </template>
      </v-data-table>
    </v-card>
    <confirm ref="confirm" />
  </div>
</template>

<script>
  import WebhooksCreateModal from '~components/WebhooksCreateModal.vue'
  import Confirm from '~components/Confirm.vue'

  export default {
    props: ['items', 'loading'],
    data () {
      return {
        headers: [
          { text: 'Webhook ID', sortable: false, left: true, value: 'id' },
          { text: 'Account Name', sortable: true, left: true, value: 'accountName' },
          { text: 'Hook URL', sortable: false, left: true, value: 'hookUrl' },
          { text: 'Status', sortable: false, left: true, value: 'status' },
          { text: '', sortable: false, left: true }
        ]
      }
    },
    methods: {
      editWebhook (index, table) {
        // var webhook = table[index]
        console.log(table[index])
      },
      deleteWebhook (webhookId) {
        this.$refs.confirm.open({
          title: 'Delete Webhook?',
          msg: 'Clicking OK will permanently delete this webhook.',
          onConfirm: (callback) => {
            this.$store.dispatch('webhooks/delete', webhookId)
            callback()
          }
        })
      }
    },
    components: {
      WebhooksCreateModal,
      Confirm
    }
  }
</script>
