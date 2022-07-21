<template>
    <div>
        <div class="flex text-start">
            <SideBar/>
                <div class="w-full">
                <div>
                    <NavbarAdmin/>
                </div>
                <div class="flex flex-col">
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
                    <div class="m-5 h-96 max-h-xs border border-2 border-red-600 text-red-600 font-semibold">
                        <vue-cal :time-from="8 * 60" :time-to="19 * 60" :time-step="30" hide-weekends ></vue-cal>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import SideBar from '../../components/SideBar.vue'
import NavbarAdmin from '../../components/NavbarAdmin.vue'
export default {
    components: { SideBar, NavbarAdmin, VueCal },
    data() {
        return {
            
        }
    },
}
</script>

<style
SideBar>

</style>