<template>
  <div>
    <v-container
      class="search-bar"
    >
      <v-autocomplete
        value="searchValue"
        label="Search for products"
        dense
        flat
        hide-details
        hide-no-data
        return-object
        item-text="title"
        item-value="url"
        :items="items"
        :loading="loading"
        :search-input.sync="search"
        @change="$emit('onChange', $event)"
        @keydown.enter="$emit('submitInput', search)"
      />
    </v-container>
  </div>
</template>

<script>

export default {
  name: "Search",
  model: {
    prop: 'searchValue',
    event: 'changeSearch'
  },
  props: {
    searchValue: {
      type: String,
      required: false,
      default: ''
    },
    items: {
      type: Array,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data: () => ({
    search: ''
  }),
  watch:{
    search(){
      this.$emit('changeSearch', this.search)
    },
    searchValue: {
      handler(){
        this.search = this.searchValue
      },
      immediate: true
    }
  }


}
</script>

<style scoped>
.search-bar{
  max-width: 300px
}
@media only screen and (max-width: 700px) {
  .search-bar{
    max-width: 150px;
  }

}
</style>