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
                        <div class="grid place-content-start mx-5">
                            <div class="text-center mx-auto bg-white p-1 py-5 border-4 border-red-600 max-w-xs">
                                <p class=" mb-2 text-xl font-bold tracking-tight text-black dark:text-white">Registered User</p>
                                <p class="font-normal text-black ">1000</p>
                            </div>
                        </div>
                        <div>
                            <div class="flex items-center mx-5 mt-5">   
                                <label for="simple-search" class="sr-only">Search</label>
                                <div class=" max-w-sm">
                                    <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2 " placeholder="Search" required>
                                </div>
                                <button type="button" class="p-2 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600">Search</button>
                            </div>
                        </div>
                        <div class="relative overflow-x-auto my-5 mx-5 ">
                            <table class=" border-separate border-spacing-y-2 w-full text-sm text-left text-gray-900 font-semibold">
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
                                    <tr class="border border-black ">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            ID-001
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            Sliver Fang Tong
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            08574858582
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            fangtong@gmail.com
                                        </td>
                                        <td class="border-y border-r border-black px-6 py-2">
                                            10
                                        </td>
                                    </tr>
                                    <tr class="border border-black ">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            ID-001
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            Sliver Fang Tong
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            08574858582
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            fangtong@gmail.com
                                        </td>
                                        <td class="border-y border-r border-black px-6 py-2">
                                            10
                                        </td>
                                    </tr>
                                    <tr class="border border-black ">
                                        <td class="border-y border-l border-black px-6 py-2">
                                            ID-001
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            Sliver Fang Tong
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            08574858582
                                        </td>
                                        <td class="border-y border-black px-6 py-2">
                                            fangtong@gmail.com
                                        </td>
                                        <td class="border-y border-r border-black px-6 py-2">
                                            10
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