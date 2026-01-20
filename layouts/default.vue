<template>
    <div>
        <div v-for="b in buttons" :key="b" style="padding:20px; display: inline-block;">
            <NuxtLink :to="b">
                <button>{{b}}</button>
            </NuxtLink>
        </div>
        <slot />
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttons: [],
            }
        }
    }
</script>