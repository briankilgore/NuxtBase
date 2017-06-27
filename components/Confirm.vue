<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" persistent>
      <v-card>
        <v-card-row>
          <v-card-title>{{ title }}</v-card-title>
        </v-card-row>
        <v-card-row>
          <v-card-text>{{ msg }}</v-card-text>
        </v-card-row>
        <v-card-row actions>
          <v-btn class="green--text darken-1" flat="flat" @click.native="cancel">Cancel</v-btn>
          <v-btn class="green--text darken-1" flat="flat" @click.native="submit">OK</v-btn>
        </v-card-row>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        title: '',
        msg: '',
        onConfirm: null
      }
    },
    methods: {
      cancel () {
        this.dialog = false
      },
      submit () {
        this.onConfirm(() => {
          this.dialog = false
        })
      },
      open (args) {
        this.dialog = true
        if (args.title) {
          this.title = args.title
        }
        if (args.msg) {
          this.msg = args.msg
        }
        if (args.onConfirm) {
          this.onConfirm = args.onConfirm
        }
      }
    }
  }
</script>

<style scoped>

</style>
