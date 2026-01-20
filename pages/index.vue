<script setup>
    import Diet from "~/services/diet/Diet"
    import {
      neededCalories,
      neededFatInGram,
      neededProteinInGram,
      neededCarbohydratesInGram,
      neededFiberInGram,
      neededSugarInGram,
      myWeight,
      maintainence,
    } from "~/services/diet/macroGoals"

    const allDays = Diet.allDays();
</script>

<template>
  <div>
    <div class="container" v-for="(_, i) in allDays.length >= 7 ? 7 : allDays.length" :key="i">
      <Card>
        <h2>maintain weight : {{maintainence}} calories</h2>
        <div class="cards">
          <div class="card">
            <Increase :history="allDays" :i="i" field="kcal" v-slot="{value}">
              <Range :goal="Math.round(neededCalories)" :actual="value" field="kcal" />
            </Increase>
          <Food style="margin-bottom:40px;" :date="allDays[i].date" nutrition="kcal" />
          </div>

          <div class="card">
            <Increase :history="allDays" :i="i" field="protein_in_gram" v-slot="{value}">
              <Range :goal="Math.round(neededProteinInGram)" :actual="value" field="protein_in_gram" />
            </Increase>
          <Food style="margin-bottom:40px;" :date="allDays[i].date" nutrition="protein_in_gram" />
          </div>

          <div class="card">
            <Increase :history="allDays" :i="i" field="fibre_in_gram" v-slot="{value}">
              <Range :goal="Math.round(neededFiberInGram)" :actual="value" field="fibre_in_gram" />
            </Increase>
          <Food style="margin-bottom:40px;" :date="allDays[i].date" nutrition="fibre_in_gram" />
          </div>

          <div class="card">
            <Increase :history="allDays" :i="i" field="fat_in_gram" v-slot="{value}">
              <Range :goal="Math.round(neededFatInGram)" :actual="value" field="fat_in_gram" />
            </Increase>
          <Food style="margin-bottom:40px;" :date="allDays[i].date" nutrition="fat_in_gram" />
          </div>

          <div class="card">
            <Increase :history="allDays" :i="i" field="carbohydrates_in_gram" v-slot="{value}">
              <Range :goal="Math.round(neededCarbohydratesInGram)" :actual="value" field="carbohydrates_in_gram" />
            </Increase>
          <Food style="margin-bottom:40px;" :date="allDays[i].date" nutrition="carbohydrates_in_gram" />
          </div>

          <div class="card">
            <Increase :history="allDays" :i="i" field="sugar_in_gram" v-slot="{value}">
              <Range :goal="Math.round(neededSugarInGram)" :actual="value" field="sugar_in_gram" />
            </Increase>
          <Food :date="allDays[i].date" nutrition="sugar_in_gram" />
          </div>
        </div>

        <div style="padding-top:10px; padding-bottom:10px;">
          <Meal :date="allDays[i].date" />
        </div>
      </Card>
    </div>
  </div>
</template>

<style>
.cards {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
}
.card {
}


@media (min-width: 300px) {
  .cards { grid-template-columns: repeat(1, 1fr); }
}

@media (min-width: 900px) {
  .cards { grid-template-columns: repeat(2, 1fr); }
}

</style>
