<template>
    <section>
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-md-9 col-lg-6 col-xl-5">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                    class="img-fluid" alt="Sample image">
                </div>

                <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                    <form v-if="isForgotPassword" @submit.prevent="onSubmitForgotPassword">
                        <div class="divider d-flex align-items-center my-4">
                            <h2 class="text-center fw-bold mx-3 mb-0">Quên mật khẩu</h2>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example3">Email</label>
                            <input type="email" 
                                id="form3Example3" 
                                class="form-control form-control-md"
                                v-model="user.email" 
                                :class="{ 'is-invalid': errors.email }"
                                />
                            <div class="invalid-feedback">{{ errors.email }}</div>
                        </div>

                        <div class="text-center pt-2 mb-2">
                            <button type="submit" class="btn btn-primary btn-md w-100" >Lấy lại mật khẩu</button>
                        </div>

                        <div class="text-center">
                            <button type="button" class="btn btn-md w-100" @click="onForgotPassword">Quay lại đăng nhập</button>
                        </div>
                    </form>


                    <form v-else @submit.prevent="onSubmit">
                        <div class="divider d-flex align-items-center my-4">
                            <h2 class="text-center fw-bold mx-3 mb-0">Đăng nhập</h2>
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="form3Example3">Tài khoản</label>
                            <input type="text" 
                                id="form3Example3" 
                                class="form-control form-control-md"
                                v-model="user.username" 
                                :class="{ 'is-invalid': errors.username }"
                                />
                            <div class="invalid-feedback">{{ errors.username }}</div>
                        </div>

                        <div class="form-outline mb-3">
                            <label class="form-label" for="form3Example4">Mật khẩu</label>
                            <input type="password" 
                                id="form3Example4" 
                                class="form-control form-control-md"
                                v-model="user.password" 
                                :class="{ 'is-invalid': errors.password }"
                                />
                            <div class="invalid-feedback">{{ errors.password }}</div>
                        </div>

                        <div class="d-flex justify-content-between align-items-center">
                            <div class="form-check mb-0">
                                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                                <label class="form-check-label" for="form2Example3">
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            <!-- <a href="#!" class="text-body" @click="onForgotPassword">Quên mật khẩu?</a> -->
                        </div>

                        <div class="text-center mt-4 mb-3 pt-2">
                            <button type="submit" class="btn btn-primary btn-md w-100" style="padding-left: 2.5rem; padding-right: 2.5rem;">Đăng nhập</button>
                        </div>

                        <div class="text-center">
                            <button type="button" class="btn btn-md w-100" @click="onForgotPassword">Quên mật khẩu?</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'LoginPage',
    data() {
        return {
            isForgotPassword: false,
            user: {
                username: '',
                password: '',
                email: '',
                isRemember: true,
            },
            errors: {
                username: '',
                password: '',
                email: ''
            }
        }
    },
    methods: {
        validate () {
            this.errors = {
                username: '',
                password: ''
            };

            if (!this.user.username) {
                this.errors.username = 'Tên đăng nhập không được bỏ trống!';
            }
            if (!this.user.password) {
                this.errors.password = 'Mật khẩu không được bỏ trống!';
            }
        },
        onSubmit () {
            
            this.validate()
            console.log(this.user);
            console.log(this.errors);
            {
                this.$router.push('dashboard')
            }
        },
        onSubmitForgotPassword () {

        },
        onForgotPassword () {
            this.isForgotPassword = !this.isForgotPassword;
        }
    },
}
</script>

<style scoped>
.divider:after,
.divider:before {
    content: "";
    flex: 1;
    height: 1px;
    background: #eee;
}
</style>