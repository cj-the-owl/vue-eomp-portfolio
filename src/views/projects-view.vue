<template>
    <div v-if="projects" class="container">
        <div class="projects" v-for="project in projects" :key="project.name">
            <div class="card">
            <div class="content">
                <div class="card-img"><img :src="project.image"></div>
                <div class="description-content">
                    <h3>{{ project.name }}</h3>
                </div>
            </div>
            <ul class="more-words-content">
                <li style="--i:1"><a :href="project.github"><img src="https://i.postimg.cc/vBm857GY/icons8-octocat-50.png"></a></li>
                <li style="--i:2"><a :href="project.netlify"><img src="https://i.postimg.cc/mDq4M0dj/icons8-website-100.png"></a></li>
            </ul>
        </div>


        </div>
    </div>

    <div v-else>Its coming, dont worry...</div>
    
</template>

<script>
export default {
    computed: {
        projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch("fetchProjects")
    },
}
</script>

<style scoped>
    .container {
        display: grid;
        grid-template-columns: auto auto auto;
        
    }

    .container {
        position: relative;
        z-index:  1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap:wrap;
    }

    .container .card {
        position: relative;
        width: 300px;
        height: 400px;
        background: rgba(255, 255, 255, 0.05);
        margin: 20px;
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        border-radius: 20px;
        display: flex;
        align-items: center;
        backdrop-filter: blur(10px);
    }

    .container .card .content {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        opacity: 0.5;
        transition: 0.5s;
    }

    .container .card:hover .content {
        opacity: 1;
    }

    .container .card .content .card-img {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        border: 10px solid rgba(0, 0, 0, 0.25);
    }

    .container .card .content .card-img img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .container .card .content .description-content h3 {
        color: black;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-weight: 500;
        font-size: 18px;
        text-align: center;
        margin: 20px 0 10px;
        line-height: 1.1em;
    }

    .container .card .more-words-content {
        position: absolute;
        bottom: 50px;
        display: flex;
    }

    .container .card li {
        list-style: none;
        margin: 0 10px;
        transform: translateY(40px);
        transition: 0.5s;
        transition-delay: calc(0.1s * var(--i));
    }

    .container .card:hover li {
        transform: translateY(0px);
    }
</style>
