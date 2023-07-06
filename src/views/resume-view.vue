<template>
    <div class="container py-4">
        <div class="row align-items-md-stretch">
            <div class="col-md-6" id="timeline">
                <div class="content">
                    <h2>time/year</h2>
                    <h3>place</h3>
                    <p>des</p>
                </div>
            </div>
            <div class="col-md-6"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #timeline {
        margin: 90px auto;
        width: 360px;
        border-left: 4px solid #fff;
        padding: 0 20px 0 30px;
    }

    .content {
        background-color: #fff;
        padding: 10px 25px;
        font-size: 16px;
        border: 2px solid white;
        line-height: 1.7;
        position: relative;
        height: 150px;
        margin-bottom: 20px;
    }

    .content::before {
        content: '';
        display: block;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: #fff;
        border: 3px solid #ddd;
        position: absolute;
        top: 10px;
        left: -40px;



    }
    /* #timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    }

    #timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: #fff;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    .container {
        padding: 10px 40px;
        position: relative;
        background-color: inherit;
        width: 50%;
    }

    .container::after {
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: #fff;
        border: 4px solid brown;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }

    .left {
        left: 0;
    }

    .left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

.content {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
} */
</style>