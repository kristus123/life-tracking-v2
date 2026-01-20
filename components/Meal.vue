<template>
  <div class="cards">
    <div v-for="m in meals" :key="m.name">
        <h3 style="margin-top:40px;">{{m.name}}</h3>
        <div v-for="e in m.eaten" :key="e">
            <p>{{e.name.replace(/_/g, " ")}} - <strong>{{Math.round(e.raw_grams_eaten)}}g</strong></p>
        </div>
    </div>
  </div>
</template>

<script>
import dietHistory from "~/services/diet/dietHistory"
export default {
    props:["date"],

    data() {
        return {
            meals: dietHistory.find(d => d.date == this.date).meals
        }
    }
    
}
</script>

<style>

</style>