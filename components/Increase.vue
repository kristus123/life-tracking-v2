<script setup>
    const p = defineProps({
        history: {required: true},
        i: {required: true},
        field: {required: true},
    })

    let increase = 0
    if (p.i === 0) {
        increase = p.history[p.i][p.field] - p.history[0][p.field]
    } else {
        increase = p.history[p.i][p.field] - p.history[p.i-1][p.field]
    }

    const x = unit(p.field)
</script>

<template>
    <div style="padding-bottom:20px;">
        <p style="font-size:30px;">{{Math.round(history[i][field])}}{{x}}</p>
        
        <slot :value="Math.round(history[i][field])" />
    </div>
</template>

<style>

</style>