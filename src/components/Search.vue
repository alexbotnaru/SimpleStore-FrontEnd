<template>
  <v-autocomplete
    value="searchValue"
    label="Search for products"
    dense
    flat
    hide-details
    hide-no-data
    item-text="title"
    item-value="url"
    :items="items"
    :loading="loading"
    :search-input.sync="search"
    @keydown.enter="$emit('submitInput', search)"
  >
    <!--    @keydown.enter="changeSearch"-->
    <!--  >-->
    <!--      @submit="onSubmit"-->
    <!--      @keyup="$emit('changeInput', $event.target.value)"-->

    <!--      <input-->
    <!--        :value="searchValue"-->
    <!--        class="search"-->
    <!--        placeholder="search products"-->
    <!--        type="text"-->
    <!--      >-->
  </v-autocomplete>
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

</style>