<template>
<div class="bg-cover h-screen bg-center ..." :style="{backgroundImage:'url(https://s3-alpha-sig.figma.com/img/04d6/2ff9/8a262add915d06e212b0197561135fd5?Expires=1658102400&Signature=KImt008MM9tHQskRazPRhTv9Q1-cwyT5UdcXHaMwuUnzMliiB5YSBcXMDy1yR~owkVkdRGjqIHRw4Y9mKNWfhdIwpcxHFdIHkCBhJKZPwf1NKbeTo7-TxNepqnLMtkRJZ3gmSszKLn2vOS1gHEcz44H-ncDCPy6OL7LGQnGPsq~XoFyFSY8iYXJGM8lkILRLene38ulaV9Q-4vq~fXzFyISr0wE55j9AxIHny2dRgP0Dv5nagdJljQhEUpTlrJecGPrcA-Bxr53gkqfpxDF05WtR95C0DQ0tkGsSFITDn-q9lavzDu31FhCNy-BQompBymU~8NjwJifiaBhC4FfqkQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA)'}">
    <div class="grid grid-cols-2 gap-2 h-screen ">
        <div class="flex items-center">
            <p class="uppercase text-8xl text-white font-black text-start pl-5">get ready to work</p>
        </div>
        <div class="flex items-center ">
            <div class=" mx-auto bg-white rounded-xl border border-gray-200 shadow-md p-5 py-10">
                <div class="space-y-6 text-end px-10" action="#">
                    <img class="text-center mx-auto px-16" src="../assets/logo.png" alt="">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 text-start">Your email</label>
                        <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5" placeholder="name@email.com" required>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 text-start">Your password</label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                    </div>
                    <router-link class=" text-sm text-gray-400 hover:underline" to="/register">Register ?</router-link>
                    <button @click="login()" type="button" class="w-full text-white bg-red-600 hover:bg-white hover:text-red-600 hover:shadow-lg border hover:border-red-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Login</button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios"
export default {
    data() {
        return {
            email: '',
            password: '',
        }
    },
     methods: {
        async login() {
            await axios
            .post('https://gym.stack.co.id/admin/auth/login',{email: this.email, password: this.password})
            .then((response) => {
                this.alertLoginSucces()
                this.$store.commit('loginSucces', response.data.result.token)
                this.$router.replace({ name: "dashboard" })
            })
            .catch((error) => {
                this.alertLoginError(error)
            })
        },
        alertLoginSucces(){
        this.$swal({
            position: 'center',
            icon: 'success',
            title: 'Log In Succes',
            showAlertLoginSucces: false,
            timer: 1500
            });
        },
        alertLoginError(){
        this.$swal({
            position: 'center',
            icon: 'error',
            title: 'Login Failed, Username or Password Wrong !!!',
            showAlertLoginError: false,
            timer: 1500
            });
        },
        }
}
</script>

<style>

</style>