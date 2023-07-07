<template>
    <div v-if="testimonials" class="container">
        <div v-for="testimonial of testimonials" :key="testimonial.title" class="box">
            <div class="elements person-img">
            <img :src="testimonial.photo">
        </div>
        <div class="elements p-name">
            <h2>{{ testimonial.title }}</h2>
        </div>
        <div class="elements words">
            <p>{{ testimonial.desc }}</p>
        </div>
        <div class="card"></div>
    </div>
        </div>
    <div v-else>Just hang on...</div>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        }
    },
    mounted() {
        this.$store.dispatch("fetchTestimonials")
    },

}
</script>

<style scoped>

    .container {
        display: grid;
        grid-template-columns: auto auto;

    }
     .box {
        margin: 100px;
        position: relative;
        border-radius: 20px;
        transform-style: preserve-3d;
        /* width: 400px; */
    }

    .box .card {
        position: relative;
        background: rgba(255, 255, 255, 0.5 );
        width: 300px;
        min-height: 400px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.5 );
        border-top: 1px solid rgba(255, 255, 255, 0.75 );
        border-left: 1px solid rgba(255, 255, 255, 0.75 );
        border-radius: 20px;
        box-shadow: 0 25px 45px rgba(0,0,0,0.05);
    }

    .elements {
        position: absolute;
        top:50px;
        left: -30px;
        width: 100px;
        height: 100px;
        background: rgba(255, 255, 255, 0.1 );
        transform: translateZ(80px);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.5 );
        border-top: 1px solid rgba(255, 255, 255, 0.75 );
        border-left: 1px solid rgba(255, 255, 255, 0.75 );
        border-radius: 10px;
        box-shadow: 0 25px 45px rgba(0,0,0,0.05);
    }

    .elements.person-img {
        /* top: -30px;
        left: initial; */
        right: 68rem;
        /* width: 120px; */
        height: 120px;
        padding: 10px;
        transform: translateZ(120px);
    }

    .elements.person-img img {
        position: relative ;
        width: calc(100% - 20px);
        border-radius: 8px;
        border: 1px solid rgba(255, 255, 255, 0.5 );
        border-top: 1px solid rgba(255, 255, 255, 0.75 );
        border-left: 1px solid rgba(255, 255, 255, 0.75 );
        border-radius: 10px;
        box-shadow: 0 25px 45px rgba(0,0,0,0.05);
        opacity: 0;
        transition: 0.5s;
    }

    .box:hover .elements.person-img img {
        opacity: 1;
    }

    .elements.p-name {
        top: 100px;
        bottom: 100px;
        left: 40px;
        right: 65rem;
        width: 50%;
        padding: 10px;
        text-align: right;
        transform: translateZ(100px);
        background: transparent;
        backdrop-filter: blur(0px);
        border: none;
        box-shadow: none;
        /* transition: 0.5s;
        opacity: 0;
        transition-delay: 0.25s; */
    }

    /* .box:hover .elements.p-name {
        top: 80px;
        opacity: 1;

    } */

    .elements.words {
        top:initial;
        left: 40px;
        bottom: 10px;
        right: 1000px;
        width: 70%;
        min-height: 200px;
        padding: 10px;
        transform: translateZ(180px);
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .elements.words p {
        position: relative;
        font-size: 0.80em;
        transition: 0.5s;
        opacity: 0;
        transition-delay: 0.5s;
    }

    .box:hover .elements.words p {
        opacity: 1;
    }
</style>

