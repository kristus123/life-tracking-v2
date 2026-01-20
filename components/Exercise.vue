<template>
  <div>
    <Card>
        <h1>{{name}} - {{kg}}kg</h1>
        <p>{{sets}} sets</p>
        <p>{{reps}} reps</p>
    </Card>
  </div>
</template>

<script>
export default {
    props:["name", "sets", "reps", "kg"]
}
</script>

<style>

</style>