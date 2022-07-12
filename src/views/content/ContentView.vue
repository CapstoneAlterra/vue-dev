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
                            <div class="text-center mx-auto bg-white p-1 py-5 border-4 border-red-600 max-w-lg px-10 hover:bg-red-100">
                                <p class=" mb-2 text-xl font-bold tracking-tight text-black dark:text-white px-2 ">Content</p>
                                <p class="font-normal text-4xl font-black text-black ">100</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex m-5">
                                <router-link to="/addcontent" class="p-2.5 px-3 text-sm font-medium text-white bg-red-600 rounded border border-red-600 hover:bg-red-100 hover:text-red-600">Add Content</router-link>
                            </div>
                        </div>
                        <div class="relative overflow-x-auto m-5 ">
                            <table class=" border-separate border-spacing-y-2 w-full text-sm text-left text-gray-900 font-semibold ">
                                <thead class="text-sm text-white bg-red-600 ">
                                    <tr>
                                        <th scope="col" class="border-y border-l border-black px-6 py-3">
                                            Title
                                        </th>
                                        <th scope="col" class="border-y border-black px-6 py-3">
                                            Link
                                        </th>
                                        <th scope="col" class="border-y border-black px-6 py-3">
                                            Date
                                        </th>
                                        <th scope="col" class="border-y border-black px-6 py-3">
                                            Description
                                        </th>
                                        <th scope="col" class="border-y border-r border-black px-6 py-3">
                                            image
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border border-black hover:bg-red-100">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            How to Pushup
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            -
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            22-02-2022
                                        </td>
                                        <td scope="col" class="truncate max-w-xs border-y border-black px-6 py-2">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloremque iste optio necessitatibus sint amet est officiis nisi sequi a rem, provident repellendus rerum ducimus eveniet et atque, totam cumque.
                                        </td>
                                        <td class="border-y border-r border-black px-6 py-2">
                                            <img class="w-28 h-20" src="@/assets/pushup.jpg" alt="">
                                        </td>
                                    </tr>
                                    <tr class="border border-black hover:bg-red-100">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            How to Pushup
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            -
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            22-02-2022
                                        </td>
                                        <td scope="col" class="truncate max-w-xs border-y border-black px-6 py-2">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloremque iste optio necessitatibus sint amet est officiis nisi sequi a rem, provident repellendus rerum ducimus eveniet et atque, totam cumque.
                                        </td>
                                        <td class="border-y border-r border-black px-6 py-2">
                                            <img class="w-28 h-20" src="@/assets/pushup.jpg" alt="">
                                        </td>
                                    </tr>
                                    <tr class="border border-black hover:bg-red-100">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            How to Pushup
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            -
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            22-02-2022
                                        </td>
                                        <td scope="col" class="truncate max-w-xs border-y border-black px-6 py-2">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit doloremque iste optio necessitatibus sint amet est officiis nisi sequi a rem, provident repellendus rerum ducimus eveniet et atque, totam cumque.
                                        </td>
                                        <td class="border-y border-r border-black px-6 py-2">
                                            <img class="w-28 h-20" src="@/assets/pushup.jpg" alt="">
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
export default {
    components: { SideBar, NavbarAdmin }
}
</script>

<style
SideBar>

</style>