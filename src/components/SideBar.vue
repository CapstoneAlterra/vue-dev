<template>
  <div class="w-64 ml-4 mr-2 mt-4" aria-label="Sidebar">
    <div class="py-4 px-3 bg-white border-r-2 border-gray-200">
      <router-link to="/dashboard" class="flex items-center mb-10">
        <img src="@/assets/logo.png" alt="" />
      </router-link>
      <ul class="space-y-2">
         <li>
            <router-link to="/dashboard" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
               <svg class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Dashboard</span>
            </router-link>
         </li>
         <li>
            <router-link to="/user" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Manage User</span>
            </router-link>
         </li>
         <li>
            <router-link to="/membership" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
               <span class="flex-1 ml-3 whitespace-nowrap">Membership</span>
            </router-link>
         </li>
         <li>
            <router-link to="/offlineClass" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 5.636a9 9 0 010 12.728m0 0l-2.829-2.829m2.829 2.829L21 21M15.536 8.464a5 5 0 010 7.072m0 0l-2.829-2.829m-4.243 2.829a4.978 4.978 0 01-1.414-2.83m-1.414 5.658a9 9 0 01-2.167-9.238m7.824 2.167a1 1 0 111.414 1.414m-1.414-1.414L3 3m8.293 8.293l1.414 1.414" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Manage offline Class</span>
            </router-link>
         </li>
         <li>
            <router-link to="/onlineClass" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 18.364a9 9 0 010-12.728m12.728 0a9 9 0 010 12.728m-9.9-2.829a5 5 0 010-7.07m7.072 0a5 5 0 010 7.07M13 12a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Manage online Class</span>
            </router-link>
         </li>
         <li>
            <router-link to="/content" class="flex items-center p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white">
               <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" viewBox="0 0 20 20" fill="currentColor">
               <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" />
               </svg>
                <span class="flex-1 ml-3 whitespace-nowrap">Add Content</span>
            </router-link>
         </li>
         <li>
            <button @click="logout()" class=" w-full flex items-start p-2 text-base font-normal text-black rounded-lg hover:bg-red-600 hover:text-white mt-12">
            <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0 w-6 h-6 text-black dark:text-gray-400 hover:text-white dark:group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap text-start">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$swal({
        title: "Logout ?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#757575",
        confirmButtonText: "Logout",
        cancelButtonText: "cancel",
        closeOnConfirm: true,
        closeOnCancel: true,
      }).then((result) => {
        if (result.value === true) {
          this.alertLogoutSucces();
          this.$store.commit("logout");
          this.$router.replace({ name: "login" });
        }
      });
    },
    alertLogoutSucces() {
      this.$swal({
        position: "center",
        icon: "success",
        title: "Logout Succes",
        showAlertLogoutSucces: false,
        timer: 1500,
      });
    },
  },
};
</script>

<style></style>
