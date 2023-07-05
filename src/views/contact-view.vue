<template>
    <div class="container-fluid p-5" id="container">
        <div class="row">
            <div class="col">
                <label for="first name" class="form-label text-black fw-bolder">First Name</label>
                <input type="text" class="form-control" id="first name" name="first name" placeholder="First name" aria-label="First name" required>
            </div>
            <div class="col">
                <label for="last name" class="form-label text-black fw-bolder">Last Name</label>
                <input type="text" class="form-control" id="last name" name="last name" placeholder="Last name" aria-label="Last name" required>
            </div>
        </div>
        <div class="mb-3">
                <label for="email" class="form-label text-black fw-bolder">Email address</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Enter email here" required>
        </div>
        <div class="mb-3">
                <label for="message" class="form-label text-black fw-bolder">Message</label>
                <textarea class="form-control" id="message" name="message" placeholder="Enter message here" rows="3"></textarea>
                <button class="btn bg-black text-bg-primary mt-3" type="submit">Submit</button>
        </div>
    </div>      
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #container {
        margin-top: 150px !important;
        border: 1px solid #fff;
        border-radius: 20px;
        background: rgba(255, 255, 255, 0.5);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        width: 1000px;
    }

    .form-control {
        background: rgba(255, 255, 255, 0.1);
        box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
        border: 1px solid #fff;
    }

    button {
        border-radius: 30px;
        background-color: #fff !important;
        color:black !important;
    }

    button:hover {
        background-color: black !important;
        color: #fff !important;
    }
</style>