<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
      <v-list>
        <v-layout class="logo-background">
          <img class="align-center" src="./assets/logo.png">
        </v-layout>
        <v-layout>
          <v-btn class="btn btn-secondary btn-width-90" @click="resetPage(); showTablesPage = true">
            View Tables
          </v-btn>
        </v-layout>
        <v-layout>
          <v-btn class="btn btn-secondary btn-width-90" @click="resetPage(); showQueueModal = true">
            Queue New Diners
          </v-btn>
        </v-layout>
        <v-layout>
          <v-btn class="btn btn-secondary btn-width-90">
            Seat Diners
          </v-btn>
        </v-layout>
        <v-layout>
          <v-btn class="btn btn-secondary btn-width-90">
            Bill Diners
          </v-btn>
        </v-layout>
        <v-layout>
          <v-btn class="btn btn-secondary btn-width-90">
            Add Table
          </v-btn>
        </v-layout>
        <v-layout>
          <v-btn class="btn btn-secondary btn-width-90">
            Add Reservation
          </v-btn>
        </v-layout>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-content v-if="showTablesPage">
      <Tables/>
    </v-content>
    <v-content v-if="showQueueModal">
      <QueueModal/>
    </v-content>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import Tables from './components/Tables';
import QueueModal from './components/QueueModal';

export default {
  name: 'App',
  components: {
    Tables,
    QueueModal
  },
  data () {
    return {
      showQueueModal: false,
      showTablesPage: false,
      clipped: false,
      drawer: true,
      fixed: false,
      items: [{
        icon: '',
        title: ''
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  methods: {
    resetPage: function() {
      console.log('trying to reset the page')
      this.showQueueModal= false;
      this.showTablesPage= false;
    }
  }
}
</script>

<style>
.logo-background {
  background-color: #ffffff;
  width: 100%;
  align: center;
}
.align-center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}
.btn-width-90 {
  display: block;
    margin-left: auto;
    margin-right: auto;
    width: 90%;
}

</style>


