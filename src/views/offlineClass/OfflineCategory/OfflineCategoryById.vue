<template>
  <div>
    <div class="flex text-start">
      <SideBar />
      <div class="w-full flex flex-col">
        <div>
          <NavbarAdmin />
        </div>
        <div class="mx-5 my-10">
          <!-- button -->
          <router-link to="/offlineClass/">
            <button class="border rounded-full mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
          </router-link>
          <!-- divider -->
          <div class="flex justify-between mb-5">
            <h1 class="text-5xl font-medium">Classes</h1>
            <router-link to="/offlineCLass/addOfflineClass">
              <button
                class="inline-flex bg-red-600 text-white rounded-md gap-1 h-14 w-40 items-center px-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
                <span class="font-size">Add New Class</span>
              </button>
            </router-link>
          </div>
          <!-- Classes -->
          <div class="grid my-5 grid-cols-3 text-center gap-2">
            <div v-for="(category, index) in categories" :key="index">
              <h1 class="text-2xl font-semibold">
                {{ category.name }}
              </h1>
              <!-- card -->
              <div>
                <div
                  v-for="(kelas, index) in category.classes"
                  :key="index"
                  class="m-3 p-5 bg-white border-4 border-red-500 shadow-md hover:bg-red-100 text-center text-xl"
                >
                  <h1 class="font-medium">{{ category.name }}</h1>
                  <p>{{ kelas.trainer }}</p>
                  <p>{{ kelas.date }}</p>
                  <p>{{ kelas.time }}</p>
                  <div class="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5 mt-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      /></svg
                    >{{ kelas.peserta }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavbarAdmin from "@/components/NavbarAdmin.vue";
import SideBar from "@/components/SideBar.vue";
export default {
  components: { NavbarAdmin, SideBar },
  data() {
    return {
      categories: [
        {
          name: "Body Combat",
          classes: [
            {
              trainer: "Trainer Iwan",
              date: "17 June 2022",
              time: "20-00 - 21.00",
              peserta: "30",
            },
            {
              trainer: "Trainer Tulus",
              date: "17 June 2022",
              time: "21-00 - 22.00",
              peserta: "30",
            },
          ],
        },
        {
          name: "Step Up",
          classes: [
            {
              trainer: "Trainer Adi",
              date: "17 June 2022",
              time: "20-00 - 21.00",
              peserta: "30",
            },
            {
              trainer: "Trainer Wawan",
              date: "17 June 2022",
              time: "21-00 - 22.00",
              peserta: "30",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style></style>
