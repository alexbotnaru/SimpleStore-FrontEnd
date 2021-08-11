<template>
  <div>
    <form
      @submit="onSubmit"
    >
      <v-autocomplete
        v-model="value"
        :loading="loading"
        :items="items"
        search-input.sync="search"
        cache-items
        flat
        hide-no-data
        hide-details
        class="search"
        placeholder="ex.Dacia"
        type="text"
      />
      <v-btn
        class="mr-3"
        icon
      >
        <v-icon>
          mdi-magnify
        </v-icon>
      </v-btn>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: function (){

    return {
      value: '',
      loading: false,
      items: [],
      search: null,
      select: null,
      states: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'District of Columbia',
        'Federated States of Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virgin Island',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
      ],
    }
    },
  watch: {
    search(val) {
      val && val !== this.select && this.querySelections(val)
    }
  },
  methods: {
    onSubmit: function (e){
      e.preventDefault();
      this.$emit('onEnterPress', this.value)
    },
    querySelections (v) {
      this.loading = true
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.states.filter(e => {
          return (e || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1
        })
        this.loading = false
      }, 500)
    },

  }

}
</script>

<style scoped>
.search{
  color: #707070;
  border: 1px solid grey;
  border-radius: 5px;
  height: 30px;
  padding: 2px 15px 2px 15px;
  outline: 0;
  background-color: #f5f5f5;
}
</style>