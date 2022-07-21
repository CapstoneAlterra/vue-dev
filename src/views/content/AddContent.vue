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
                            <router-link to="/content" class="inline-flex items-center text-lg font-bold text-gray-700 hover:text-red-600">
                                Content
                            </router-link>
                            </li>
                            <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-6 h-6 text-gray-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                                <span class="ml-1 text-lg font-bold text-red-600 md:ml-2">Add Content</span>
                            </div>
                            </li>
                        </ol>
                    </div>
                </div>
                <div class="m-5">
                    <router-link to="/content">
                        <button class="border border-2 border-black rounded-full p-2 hover:bg-red-100">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                    </router-link>
                </div>
                <div class="m-5">
                    <div class="border border-2 border-red-600 rounded-xl p-5">
                        <p class="text-lg font-bold text-red-600 mb-6">Add Content</p>
                        <div class="mb-6">
                            <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Content Title</label>
                            <input v-model="title" type="text" id="title" class="shadow-sm bg-gray-50 border border-2 border-red-200 text-gray-900 text-sm rounded-lg hover:bg-red-100 focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="Content Title ..." required>
                        </div>
                        <div class="mb-6">
                            <label for="link" class="block mb-2 text-sm font-medium text-gray-900">Link (opsional)</label>
                            <input v-model="link" type="text" id="link" class="shadow-sm bg-gray-50 border border-2 border-red-200 text-gray-900 text-sm rounded-lg hover:bg-red-100 focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="Content Title ..." required>
                        </div>
                        <div class="mb-6">
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900">Upload Date</label>
                            <input v-model="date" type="date" id="date" class="shadow-sm bg-gray-50 border border-2 border-red-200 text-gray-900 text-sm rounded-lg hover:bg-red-100 focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="Content Title ..." required>
                        </div>
                        <div class="mb-6">
                            <label class="block mb-2 text-sm font-medium text-gray-900" for="image">Upload file</label>
                            <input @change="selectedImage" class="shadow-sm bg-gray-50 border border-2 border-red-200 text-gray-900 text-sm rounded-lg hover:bg-red-100 focus:ring-red-600 focus:border-red-600 block w-full p-2.5 "  type="file">
                        </div>
                        <div class="mb-6">
                            <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Content Description</label>
                            <textarea v-model="desc" id="message" rows="4" class="shadow-sm bg-gray-50 border border-2 border-red-200 text-gray-900 text-sm rounded-lg hover:bg-red-100 focus:ring-red-600 focus:border-red-600 block w-full p-2.5 " placeholder="Content Description..."></textarea>
                        </div>
                        <div class="flex justify-end">
                            <button @click="uploadContent()" class="p-2.5 px-3 text-sm font-medium text-white bg-red-600 rounded border border-red-600 hover:bg-red-100 hover:text-red-600" type="button">Upload Content</button>
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
            title: '',
            link: '',
            date:'',
            desc:'',
            selectedFile: null,
        }
    },
    methods: {
        uploadContent() {
            axios
            .post(`https://62d457765112e98e484e3952.mockapi.io/content`, 
            {title:this.title, link:this.link, date:this.date, desc:this.desc, image:this.selectedFile})
            .then((response) => {console.log(response)})
            .catch((error) => {console.log(error, "add")})
        },
        selectedImage(event) {
            this.selectedFile = event.target.files[0]
        }
    }
}
</script>

<style>

</style>