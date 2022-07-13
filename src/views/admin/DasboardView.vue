<template>
    <div>
        <div class="flex text-start">
            <SideBar/>
                <div class="w-full">
                <div>
                    <NavbarAdmin/>
                </div>
                <div>
                    <div class="flex ml-5 my-5">
                        <div class="">
                            <p class="text-md text-black font-bold text-start">Pendapatan Juni 2022</p>
                            <div class="border border-4 border-red-600 p-3 max-w-xs text-center py-7">
                                <p class="font-black text-4xl text-black">Rp.2.500.000</p>
                            </div>
                        </div>
                        <div class="ml-10">
                            <p class="text-md text-black font-bold text-start">Pendapatan Tahun 2022</p>
                            <div class="border border-4 border-red-600 p-3 max-w-xs text-center py-7">
                                <p class="font-black text-4xl text-black">Rp.2.500.000</p>
                            </div>
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