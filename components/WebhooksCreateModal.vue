<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" width="800" persistent>
      <v-btn primary light flat slot="activator">Add</v-btn>
      <v-card>
        <v-card-row>
          <v-card-title>Add Webhook</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>
            <v-select
              label="Account"
              required
              v-bind:items="accounts"
              v-model="account"
            ></v-select>
            <v-text-field label="Webhook URL" required v-model="hookUrl"></v-text-field>
            <small>* indicates required field</small>
          </v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="blue--text darken-1" flat v-on:click.native="cancel">Close</v-btn>
          <v-btn class="blue--text darken-1" flat v-on:click.native="submit">Save</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-layout>
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
      hookUrl: '',
      dialog: false
    }
  },
  computed: {
    accounts () {
      var list = this.$store.state.accounts.list
      for (var i = 0; i < list.length; i++) {
        list[i].text = list[i].name
      }
      return list
    }
  },
  methods: {
    submit () {
      this.$store.dispatch('webhooks/add', {
        account: this.account.id,
        hookUrl: this.hookUrl
      })
      console.log(this)
      this.close()
    },
    cancel () {
      this.close()
    },
    close () {
      this.account = ''
      this.hookUrl = ''
      this.dialog = false
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
