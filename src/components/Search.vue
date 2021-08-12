<template>
  <div>
    <form
      @submit="onSubmit"
      @keyup="$emit('changeInput', $event.target.value)"
    >
      <input
        :value="searchValue"
        class="search"
        placeholder="search products"
        type="text"
      >
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
  model: {
    prop: 'searchValue',
    event: 'submitInput'
  },
  props: {
    searchValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  // data: function (){
  //
  //   return {
  //     value: ''
  //   }
  // },
  methods: {
    onSubmit: function (e){
      e.preventDefault();
      this.$emit('submitInput', e.target.value)
    }
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