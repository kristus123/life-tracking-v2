<template>
    <div>
        <button class="pretty" @click="show=!show">{{show ? 'hide' : 'show'}} {{name}} sources</button>

        <div v-if="show">
            <div v-for="m in meals" :key="m.name" style="padding:5px; margin-left:50px; margin-right:50px; margin-top:25px; border: 2px solid grey; border-radius: 50px;">
                <h4>{{m.name}} - <strong>{{totalNutritionValueFromMeal(m.eaten)}}{{unit}} {{name}}</strong></h4>
                <div v-for="e in m.eaten" :key="e.name">
                    
                    <p>{{e.name.replace(/_/g, " ")}} - <strong>{{Math.round(shit(e))}}{{unit}}</strong></p>
                </div>
            </div> 
        </div>        
    </div> 
</template>

<script>
import dietHistory from "~/services/diet/dietHistory"

export default {
    props: ["date", "nutrition"],
    data() {
        return {
            show: false,
            meals: dietHistory.find(d => d.date == this.date).meals.flatMap(m => {return {
                name: m.name, 
                eaten :m.eaten
            }})
        }
    },

    methods: {
        totalNutritionValueFromMeal(eaten) {
            return Math.round(eaten.map(e => this.shit(e)).reduce((a,b) => a+b))
        },
        shit(eaten) {
            return (eaten[this.nutrition] * eaten.grams_eaten) / 100.0
        },
    },

    computed: {
        unit() {
            return this.nutrition.includes("_in_gram") 
                ? "g" 
                : ""
        },
        name() {
            return this.nutrition.replace("_in_gram", "").replace(/_/g, " ");
        }
    }
}
</script>

<style>

</style>