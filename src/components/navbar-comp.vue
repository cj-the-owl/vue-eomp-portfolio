<template>
    <nav class="navbar navbar-expand-lg lg-black" id="navBar">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Resume</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/projects">Projects</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">Testimonials</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/contact">Contact</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </template>

    <script>
        export default {

        }
    </script>

    <style>
        #navBar {
            position: relative;
            top: 20px;
            /* right: 20px; */
            /* left: 20px; */
            padding: 20px 50px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            background: rgba(255, 255, 255, 0.2);
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
            border-radius: 20px;
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.25);
            border-top: 1px solid rgba(255, 255, 255, 0.5);
            border-left: 1px solid rgba(255, 255, 255, 0.5); 
        }
        .nav-link {
            border-radius: 20px;
        }
        .nav-link:hover {
            background-color: black;
            color: #fff;
        }
    </style>