<template>
  <div class="container">
    <div class="p-4 p-md-5 m-4 text" id="main">
      <div class="col-md-6 px-0">
        <h1 class="display-5">
          Get to know more about me!
        </h1>
      </div>
      <div class="row">
        <div class="col-md-8">
          <!-- <h3 class="pb-4 mb-4 fst-italic border-bottom">
            something
          </h3> -->
          <p class="border-top border-dark p-2">I am a driven and hardworking person. I always enjoy learning new things and interacting with different types of people, even though I can be a bit socially awkward.<br><br> I started learning the basics of HTML and CSS during COVID to learn a new skill while I was at home. I really enjoyed and started looking for places that offer Web Development courses which is how I Found Life Choices Academy.<br><br></p>
          <h4>Here's some of my hobbies!</h4>
          <div class="hobbies">
            <div>
              <h6>Excising</h6>
              <img src="https://i.postimg.cc/q7zKkK4t/Premium-Vector-Exercise-colorful-gradient-with-line-icons-set.jpg">
            </div>
            <div>
              <h6>Drawing</h6>
              <img src="https://i.postimg.cc/cCVYj4VK/Download-free-image-of-Illustration-of-a-hand-writing-with-a-pencil-by-Tvzsu-about-writing-pencil.jpg">
            </div>
            <div>
              <h6>Reading</h6>
              <img src="https://i.postimg.cc/D0WytQT6/Cloud-Book-Logo.jpg">
            </div>
            <div>
              <h6>Mobile gaming</h6>
              <img src="https://i.postimg.cc/4NSp7wyf/Premium-Vector-Online-gaming-illustration.jpg">
            </div>
        </div>
        </div>

        <div class="col-md-4">
          <div classs="position-sticky" style="top: 2rem">
            <div class="p-4 mb-3" id="me-card">
              <img class="fst-italic" src="https://i.postimg.cc/05VgCVj7/C12-C1-Caryn-Lodewyk-1-removebg-preview.png">
              <p class="mb-0 mt-3" id="details">Caryn-Jayn Lodewyk</p>
              <p class="mb-0 mt-3" id="details"> 26/07/2000</p>
              <p class="mb-0 mt-3" id="details">Pelicah Heights</p>
              <p class="mb-0 mt-3" id="details">lodewykcarynjayn@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .fst-italic {
    width: 250px;
    border-radius: 20px;
  }

  .details {
    font-size: 20px;
  }

  #main {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
  }

  #me-card {
    background: rgba(255, 255, 255, 0.2);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 20px;
  }

  .hobbies img {
    width: 200px;
    padding: 10px;
    height: 200px;
    border-radius: 20px;
  }

  .hobbies {
    display: grid;
    grid-template-columns: auto auto;
  }

  @media screen and (max-width: 700px) {
    template {
      max-width: 100%;
    }

    .hobbies {
      display: grid;
      grid-template-columns: auto auto;
    }

    .fst-italic {
      width: 200px;
    }

    .container-fluid {
      padding: 0;
    }

    #main {
      margin-right: 70px !important;
    }
  }
  @media screen and (max-width: 600px) {
    template {
      max-width: 100%;
    }

    .hobbies {
      display: grid;
      grid-template-columns: auto auto;
    }

    .fst-italic {
      width: 200px;
    }

    .container-fluid {
      padding: 0;
    }

    /* #main {
      margin-right: 50px !important;
    } */
  }
  @media screen and (max-width: 550px) {
    template {
      max-width: 100%;
    }

    .hobbies {
      display: grid;
      grid-template-columns: auto;
    }

    .fst-italic {
      width: 200px;
    }
  }
  @media screen and (max-width: 400px) {
    template {
      max-width: 100%;
    }

    .hobbies {
      display: grid;
      grid-template-columns: auto;
    }

    .fst-italic {
      width: 100px;
    }

    #main {
      /* width: 300px; */
      margin-right: 0 !important;
    }

    #details {
      word-wrap: break-word;
    }

  }
</style>
