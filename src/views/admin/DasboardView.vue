<template>
    <div>
        <div class="flex text-start">
            <SideBar/>
                <div class="w-full">
                <div>
                    <NavbarAdmin/>
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