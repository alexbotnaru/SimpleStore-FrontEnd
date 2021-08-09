<template>
  <input type="text"
  :value="inputValue"
  @keypress="$emit('changeInput', $event.target.value)">
</template>

<script>
export default {
  name: "Search",
  props: {
    inputValue: {
      type: String,
      required: false,
      default: ''
    }
  },
  model: {
    prop: 'inputValue',
    event: 'changeInput'
  }
}
</script>

<style scoped>

</style>