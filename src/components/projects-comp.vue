<template>
    <div class="section">
        <div class="container">
        <div class="card">
            <div class="content">
                <div class="card-img"><img src="../assets/logo.png"></div>
                <div class="description-content">
                    <h3>The projects name stuffs</h3>
                </div>
            </div>
            <ul class="more-words-content">
                <li style="--i:1"><a href="#"><img src="https://i.postimg.cc/vBm857GY/icons8-octocat-50.png"></a></li>
                <li style="--i:2"><a href="#"><img src="https://i.postimg.cc/mDq4M0dj/icons8-website-100.png" width="50px"></a></li>
            </ul>
        </div>
    </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    .section {
        position: relative;
    }

    .section:before {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .section:after {
        content:'';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    .container {
        margin-top: 150px !important;
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