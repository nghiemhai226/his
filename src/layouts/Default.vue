<template>
    <nav class="navbar navbar-expand-sm navbar-light border-bottom">
        <div class="container-fluid">
            <img src="../assets/logo.png" width="30"/>
            <a class="navbar-brand ms-2" href="#">Hospital information system</a>

            <button type="button"
                class="btn btn-outline-primary btn-sm ms-auto ps-4 pe-4"
                @click="onSignIn">
                Đăng nhập
            </button>


            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="#">About us</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Products & Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>  
                </ul>

                <button class="btn btn-outline-primary btn-sm ms-auto">
                    Đăng nhập
                </button>
            </div> -->

            <!-- <button class="d-flex justify-content-end">hahaha</button> -->
        </div>
    </nav>

    <slot></slot>
</template>

<script>
export default {
    name: 'DefaultLayout',
    methods: {
        onSignIn() {
            this.$router.push('login')
        }
    },
}
</script>