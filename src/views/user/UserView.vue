<template>
    <div>
        <div class="flex text-start">
            <SideBar/>
                <div class="w-full flex flex-col">
                <div>
                    <NavbarAdmin/>
                </div>
                <div>
                    <div class=" mx-auto py-8">
                        <div class="grid place-content-start mx-5 ">
                            <div class="text-center mx-auto bg-white p-1 py-5 border-4 border-red-600 max-w-xs hover:bg-red-100">
                                <p class=" mb-2 text-xl font-bold tracking-tight text-black dark:text-white px-2 ">Registered User</p>
                                <p class="font-normal text-4xl font-black text-black ">{{ users.length }}</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex mx-5 mt-5">   
                                <label for="simple-search" class="sr-only text-start">Search</label>
                                <div class=" max-w-sm ">
                                    <input type="text" id="simple-search" class="bg-gray-50 rounded border border-2 border-gray-400 text-gray-900 text-sm block w-full p-2.5 pr-32 hover:bg-red-100" placeholder="Search" required>
                                </div>
                                <button type="button" class="p-2.5 px-3 ml-2 text-sm font-medium text-white hover:text-red-600 bg-red-600 hover:bg-white rounded border hover:border-red-600">Search</button>
                            </div>
                        </div>
                        <div class="relative overflow-x-auto my-5 mx-5 ">
                            <table class=" border-separate border-spacing-y-2 w-full text-sm text-left text-gray-900 font-semibold ">
                                <thead class="text-sm text-white bg-red-600 ">
                                    <tr>
                                        <th scope="col" class="border-y border-l border-black px-6 py-3">
                                            ID
                                        </th>
                                        <th scope="col" class="border-y border-black px-6 py-3">
                                            Name
                                        </th>
                                        <th scope="col" class="border-y border-black px-6 py-3">
                                            Contact
                                        </th>
                                        <th scope="col" class="border-y border-black px-6 py-3">
                                            Email
                                        </th>
                                        <th scope="col" class="border-y border-r border-black px-6 py-3">
                                            Jumlah kelas yang diambil
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(user, index) in users" :key="index" class="border border-black hover:bg-red-100">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            <router-link :to="{name: 'userdetail', params: {id: user.id} }">
                                            ID-00{{ user.id }}
                                            </router-link>
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            {{ user.name }}
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            {{ user.number }}
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            {{ user.email }}
                                        </td>
                                        <td class="border-y  text-center border-r border-black px-6 py-2">
                                            -
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="flex justify-end m-5">
                            <button class="flex p-2.5 px-3 ml-2 text-sm font-medium text-white hover:text-red-600 bg-red-600 hover:bg-white rounded border hover:border-red-600">
                            <svg aria-hidden="true" class="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                            Previous
                            </button>
                            <button class="flex p-2.5 px-3 ml-2 text-sm font-medium text-white hover:text-red-600 bg-red-600 hover:bg-white rounded border hover:border-red-600">
                            Next
                            <svg aria-hidden="true" class="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            </button>
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
export default {
    components: { SideBar, NavbarAdmin },
    computed: {
        users() {
            return this.$store.state.users
        }
    },
    mounted() {
        this.getUsers()
    },
    methods: {
        getUsers() {
            this.$store.dispatch('getUsers')
        }
    },
}
</script>

<style
SideBar>

</style>