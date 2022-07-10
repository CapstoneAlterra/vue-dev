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
            </div>
        </div>
    </div>
</template>

<script>
import SideBar from '../../components/SideBar.vue'
import NavbarAdmin from '../../components/NavbarAdmin.vue'
export default {
    components: { SideBar, NavbarAdmin }
}
</script>

<style>

</style>