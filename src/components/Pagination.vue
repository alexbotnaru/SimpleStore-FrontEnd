<template>
  <div class="text-center">
    <v-pagination
      v-model="page"
      :length="3"
      circle
    />
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data () {
    return {
      page: 1,
    }
  },
}
</script>

<style scoped>

</style>