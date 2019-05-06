<template>
    <div class="tab">
        <router-link v-for="(tab, index) in tabs" :key="tab" to="/" class="tab-item" tag="div">
            <span v-if="index === 0" class="active">{{ tab }}</span>
            <span v-else>{{ tab }}</span>
        </router-link>
    </div>
</template>
<script>
import { mapState } from 'vuex'

export default {
    computed: {
        ...mapState('staticText', {
            tabs: state => state.tabs
        })
    }
}
</script>
