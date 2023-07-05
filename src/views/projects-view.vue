<template>
    <div v-if="projects" class="container">
        <projects-comp v-for="project of projects" :key="project.id" :project="project"/>
    </div>

    <div v-else>Its coming, dont worry...</div>
    
</template>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: auto auto auto;
        
    }
</style>

<script>
import projectsComp from '@/components/projects-comp.vue';

export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch("getProjects")
    },
    components: {projectsComp}
}
</script>