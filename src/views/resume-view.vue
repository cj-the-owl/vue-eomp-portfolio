<template>
    <div class="container py-4">
        <div class="row align-items-md-stretch">
            <h2 class="pt-4">Education & Experience</h2>
            <div v-if="educations" class="col-md-6" id="timeline">
                <div v-for="education in educations" :key="education.year" class="content">
                    <h4>{{ education.year }}</h4>
                    <h5>{{ education.place }}</h5>
                    <p>{{ education.des }}</p>
                </div>
            </div>
            <div v-else>Hang on...</div>

            <div v-if="experiences" class="col-md-6" id="timeline2">
                <div v-for="experience in experiences" :key="experience.place" class="content">
                    <h4>{{ experience.place }}</h4>
                    <h5>{{ experience.roles }}</h5>
                    <p>{{ experience.des }}</p>
                    <p>{{ experience.time }}</p>
                </div>
            </div>
            <div v-else>Hang on...</div>
        </div>
        <h1>Hard Skills</h1>
        <div class="hard-skills">
            <div>
                <p style="width: 100%" data-value="90">HTML: Expert</p>
                <progress max="100" value="90"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="90">CSS: Expert</p>
                <progress max="100" value="90"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="65">JavaScript: Intermediate</p>
                <progress max="100" value="65"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="80">Bootstrap: Advanced</p>
                <progress max="100" value="80"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="70">Vue.js: Intermediate</p>
                <progress max="100" value="70"></progress>
            </div>
        </div>
        <h1 class="mt-3">Soft Skills</h1>
        <div class="soft-skills">
            <div>
                <p style="width: 100%" data-value="80">Communication: Advanced</p>
                <progress max="100" value="80"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="80">Team skills: Expert</p>
                <progress max="100" value="90"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="90">Adaptability: Expert</p>
                <progress max="100" value="90"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="80">Leadership: Advanced</p>
                <progress max="100" value="80"></progress>
            </div>
            <div>
                <p style="width: 100%" data-value="80">Problem-solving: Advanced</p>
                <progress max="100" value="80"></progress>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            educations() {
                return this.$store.state.educations
            },
            experiences() {
                return this.$store.state.experiences
            }
        },

        mounted() {
            this.$store.dispatch("fetchEducations")
            this.$store.dispatch("fetchExperiences")
        },
    }
</script>

<style scoped>
    #timeline {
        margin: 90px auto;
        width: 360px;
        border-left: 6px solid rgba(255, 255, 255, 0.5);
        padding: 0 20px 0 30px;
    }
    #timeline2 {
        margin: 90px auto;
        width: 400px;
        border-left: 6px solid rgba(255, 255, 255, 0.5);
        padding: 0 20px 0 30px;
    }

    .content {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        padding: 10px 25px;
        font-size: 16px;
        border: 1px solid #fff;
        border-radius: 20px;
        line-height: 1.7;
        position: relative;
        height: 320px;
        margin-bottom: 20px;
        text-align: center;
    }

    .content::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: black;
        border: 3px solid #ddd;
        position: absolute;
        top: 10px;
        left: -40px;
    }
    .hard-skills, .soft-skills {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
        padding: 5px;
    }

    #hs-file {
        color: black !important;
    }
    progress[value] {
        -webkit-appearance: none;
         appearance: none;

         height: 35px;
         width: 60rem;
    }
    progress[value]::-webkit-progress-bar {
        background: rgba(255, 255, 255, 0.2);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        border-radius: 20px;
    }

    progress[value]::-webkit-progress-value {
        background-color:rgba(255, 255, 255, 0.7);
        border-radius: 20px;
    }

    progress[value]::-webkit-progress-value::before {
        content: 'value';
        position: relative;
        right: 0;
        top: -125%;
        color: black
}

@media screen and (max-width: 700px) {
    #timeline2 .content {
        font-size: 12px;
    }

    progress {
        width: 250px !important;
    }
}
@media screen and (max-width: 400px) {
    #timeline2 .content {
        font-size: 12px;
    }

    progress {
        width: 250px !important;
    }
}


</style>