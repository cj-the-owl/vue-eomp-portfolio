<template>
  <div class="container">
    <div class="content">
                <h2>Hello!</h2>
                <h3>I'm Caryn Lodewyk</h3>
                <h4>An aspiring full stack developer</h4>
                <button type="button" class="more-button">More about me!</button>
            </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>

<style scoped>
  .container {
    position: relative;
    width: calc(100% - 400px);
    min-height: calc(100vh - 280px);
    min-height: 300px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
}

template {
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-image: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
    background-attachment: fixed;
    padding: 50px;
}


</style>
