<template>
  <div>
    <input
      class="search"
      placeholder="ex.Dacia"
      type="text"
      :value="inputValue"
      @keypress="$emit('changeInput', $event.target.value)"
    >
    <v-btn
      class="mr-3"
      icon
    >
      <v-icon>
        mdi-magnify
      </v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  name: "Search",
  model: {
    prop: 'inputValue',
    event: 'changeInput'
  },
  props: {
    inputValue: {
      type: String,
      required: false,
      default: ''
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