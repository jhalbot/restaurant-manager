<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column>
        <v-layout>
          <div class="headline">Tables</div>
        </v-layout>
        <v-card>
          <v-layout>
            <v-flex md4 >
              <v-menu
                :close-on-content-click="true"
                v-model="dateMenu"
                min-width="300px">
                <v-text-field
                  slot="activator"
                  v-model="selectedDate"
                  label="Select a Date"
                  prepend-icon="event"
                  readonly>
                </v-text-field>
                <v-date-picker v-model="selectedDate" no-title scrollable>
                </v-date-picker>
              </v-menu>
            </v-flex>
            <v-select 
              style="padding-right:20px" 
              label="Select a time Slot"
              v-model="selectedTime"
              :items="timeSlots">
            </v-select>
          </v-layout>
        </v-card>
        <br>
        <div class="headline" v-if="!selectedDate || !selectedTime">Hamburgler Hands Restaurant</div>
        <div>
          <div v-if="selectedDate && selectedTime">
            <div class="headline">Tables for {{ selectedDate }} at {{ selectedTime }}</div>
            <br>
            <!-- Overview of tables and status -->
            <div v-for="slot in tablesWithCustomersByTime" :key="slot.timeSlot"  v-if="slot.timeSlot === selectedTime">
              <table class="table  table-bordered table-hover col-md-7">
                <thead class="thead-light">
                  <tr>
                    <th scope="col">Table</th>
                    <th scope="col">Server</th>
                    <th scope="col">Diners</th>
                    <th scope="col">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="table in slot.tables" :key="table.table">
                    <th scope="row">{{ table.table }}</th>
                    <td>{{ table.server }}</td>
                    <td>{{ table.diners }}</td>
                    <td>{{ table.status }}</td>
                  </tr>
                </tbody>
              </table>
              <button id="show-modal" @click="showModal = true">Show Modal</button>
              <!-- use the modal component, pass in the prop -->
              <modal v-if="showModal" @close="showModal = false">
                <!--
                  you can use custom content here to overwrite
                  default content
                -->
                <h3 slot="header">custom header</h3>
              </modal>
            </div>
          </div>
        </div>
      



      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'Tables',
  props: {
    msg: String
  },
  data: () => ({
    selectedDate: '',
    selectedTime: '',
    tablesWithCustomersByTime: [
      {timeSlot: '7', tables: [
          {table: '1', server: 'Otto', diners: 3, status: 'Seated' },
          {table: '2', server: 'Thornton', diners: 4, status: 'Dining'},
          {table: '3', server: 'The Bird', diners: 5, status: 'Billed'}
        ]},
      {timeSlot: '8', tables: [
          {table: '1', server: 'Bob', diners: 3, status: 'Seated' },
          {table: '2', server: 'Earkle', diners: 4, status: 'Dining'},
          {table: '3', server: 'Kelsey', diners: 5, status: 'Billed'}
        ]},
      {timeSlot: '9', tables: [
          {table: '1', server: 'Mason', diners: 3, status: 'Seated' },
          {table: '2', server: 'Gray', diners: 4, status: 'Dining'},
          {table: '3', server: 'Orion', diners: 5, status: 'Billed'}
        ]}
    ],
    timeSlots: ['7', '8', '9']
  }),
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>



