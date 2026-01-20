<template>
  <div>
    <div v-if="actual < goal">
        <p style="color:red;">add <strong>{{Math.abs(diff)}}{{unit}}</strong></p>
    </div>
    <div v-else-if="actual > goal">
      <p style="color:blue;">reduce by <strong>{{diff}}{{unit}}</strong></p>
    </div>
    <div v-else>
      <p style="color:green;">PERFECT!</p>
    </div>    
  </div>
</template>

<script>
export default {
    props: ["actual", "goal", "field"],

    computed: {
        diff() {
            return this.actual - this.goal
        },
        unit() {
          return this.field.includes("_in_gram") ? 'g ' : ' ' + this.field
        }
    }

}
</script>

<style>

</style>