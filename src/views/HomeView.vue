<template>
  <div id="container" class="container-fluid">
    <div class="content">
                <h2>Hello!</h2>
                <h3>I'm Caryn Lodewyk</h3>
                <h4>An aspiring full stack developer</h4>
                <button type="button" class="btn mt-2" id="more-button">More about me!</button>
            </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  
}
</script>

<style scoped>
  #container {
    width: calc(100% - 200px);
    min-height: 400px;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
    margin: 90px;
    border: 1px solid #fff;
}

template {
    display:flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 50px;
}

#more-button {
  border-radius: 30px;
  background-color: #fff;
  color: black;
  
}

#more-button:hover {
  background-color: black;
  color: #fff;
}

.content {
  transform: translateX(-50px);
  max-width: 500px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 1);
  border-radius: 20px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  border-left: 1px solid rgba(255, 255, 255, 0.5);
  padding: 40px;
  animation: animate 5s linear infinite;
}
@keyframes animate {
  0%, 100% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(20px);
  }
}



</style>
