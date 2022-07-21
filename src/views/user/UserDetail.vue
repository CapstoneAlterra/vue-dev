<template>
    <div>
        <div class="flex text-start">
            <SideBar/>
                <div class="w-full">
                <div>
                    <NavbarAdmin/>
                </div>
                <div class="m-5">
                    <div class="flex" aria-label="Breadcrumb">
                        <ol class="inline-flex items-center space-x-1 md:space-x-3">
                            <li class="inline-flex items-center">
                            <router-link to="/user" class="inline-flex items-center text-lg font-bold text-gray-700 hover:text-red-600">
                                User
                            </router-link>
                            </li>
                            <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-1 text-lg font-bold text-red-600 md:ml-2">User Detail</span>
                            </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="m-5">
                    <router-link to="/user">
                        <button class="border border-2 border-black rounded-full p-2 hover:bg-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </router-link>
                </div>
                <div>
                    <div class="m-5 max-w-xl border border-4 border-red-600 p-4">
                        <div>
                            <p class="text-black text-3xl font-bold text-start">{{ user.name }}</p>
                            <div class="relative overflow-x-auto my-3 ">
                                <table class="w-full text-left font-semibold">
                                    <tbody class="text-xl text-gray-400 ">
                                    <td>
                                        <tr scope="col" class="">
                                            ID
                                        </tr>
                                        <tr scope="col" class="">
                                            ID Membership
                                        </tr>
                                        <tr scope="col" class="">
                                            Contact
                                        </tr>
                                        <tr scope="col" class="">
                                            Email
                                        </tr>
                                        <tr scope="col" class="">
                                            Membership
                                        </tr>
                                        <tr scope="col" class="">
                                            Exp Membership
                                        </tr>
                                    </td>
                                    <td class="text-black">
                                        <tr class=" ">
                                            ID-00{{ user.id }}
                                        </tr>
                                        <tr class="">
                                            -
                                        </tr>
                                        <tr class="">
                                            {{ user.number }}
                                        </tr>
                                        <tr class="">
                                            {{ user.email }}
                                        </tr>
                                        <tr class="">
                                            -
                                        </tr>
                                        <tr class="">
                                            -
                                        </tr>
                                    </td>
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div class="m-5">
                        <p class="text-black text-3xl text-start font-bold">Class</p>
                            <div class="relative overflow-x-auto ">
                            <table class=" border-separate border-spacing-y-2 w-full text-sm text-left text-gray-900 font-semibold ">
                                <tbody>
                                    <tr class="border border-black">
                                        <td class="border-y border-l border-black px-3 py-2">
                                            Cardio
                                        </td>
                                        <td class="border-y border-black py-2">
                                            Body Combat
                                        </td>
                                        <td class="border-y border-black px-3 py-2">
                                            Trainer Irwan
                                        </td>
                                        <td class="flex border-y border-black px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p class="px-1.5">21.00</p>
                                        </td>
                                        <td class="border-y border-black px-3 py-2">
                                            27/02/2022
                                        </td>
                                        <td class="border-y border-r border-black px-9 py-2">
                                            Offline
                                        </td>
                                    </tr>
                                    <tr class="border border-black">
                                        <td class="border-y border-l border-black px-3 py-2">
                                            Cardio
                                        </td>
                                        <td class="border-y border-black py-2">
                                            Body Combat
                                        </td>
                                        <td class="border-y border-black px-3 py-2">
                                            Trainer Irwan
                                        </td>
                                        <td class="flex border-y border-black px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p class="px-1.5">21.00</p>
                                        </td>
                                        <td class="border-y border-black px-3 py-2">
                                            27/02/2022
                                        </td>
                                        <td class="border-y border-r border-black px-9 py-2">
                                            Offline
                                        </td>
                                    </tr>
                                    <tr class="border border-black">
                                        <td class="border-y border-l border-black px-3 py-2">
                                            Cardio
                                        </td>
                                        <td class="border-y border-black py-2">
                                            Body Combat
                                        </td>
                                        <td class="border-y border-black px-3 py-2">
                                            Trainer Irwan
                                        </td>
                                        <td class="flex border-y border-black px-3 py-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <p class="px-1.5">21.00</p>
                                        </td>
                                        <td class="border-y border-black px-3 py-2">
                                            27/02/2022
                                        </td>
                                        <td class="border-y border-r border-black px-9 py-2">
                                            Offline
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import NavbarAdmin from '../../components/NavbarAdmin.vue'
import axios from 'axios'
export default {
    components: { SideBar, NavbarAdmin },
    data() {
        return {
        user: [],
        }
    },
    mounted() {
      axios
        .get(`https://62d457765112e98e484e3952.mockapi.io/users/${this.$route.params.id}`)
        .then((response) => {this.user = response.data
        })
        .catch((error) => {console.log(error)
        })
    },
    computed: {
        detail() {
            return this.user.find(
                (user) => user.id === this.$route.params.id
            )
        }
    }
}
</script>

<style>

</style>