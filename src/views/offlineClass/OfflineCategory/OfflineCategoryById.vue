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
            <div v-for="class_name in listClass_name" :key="class_name.id">
              <h1 class="text-2xl font-semibold">
                {{ class_name.name }}
              </h1>
              <!-- card -->
              <div>
                <div
                  v-for="(kelas, index) in class_name.classes"
                  :key="index"
                  class="m-3 p-5 bg-white border-4 border-red-500 shadow-md hover:bg-red-100 text-center text-xl"
                >
                  <h1 class="font-medium">{{ class_name.name }}</h1>
                  <p>{{ kelas.trainer.name }}</p>
                  <p>{{ kelas.date }}</p>
                  <p>{{ kelas.time_start }} - {{ kelas.time_end }}</p>
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
import axios from "axios";
export default {
  components: { NavbarAdmin, SideBar },
  computed: {
    listClass_name() {
      return this.$store.state.classname.class_nameList;
    },
  },
  methods: {
    getclassbycategoryid() {
      axios
        .get(
          `https://gym-capstone.hasura.app/api/rest/offlineclass/bycategoryid/${this.$route.params.id}`
        )
        .then((response) => {
          this.$store.commit(
            "classname/setClass",
            response.data.category_by_pk.class_names
          );
        });
    },
  },
  mounted() {
    this.getclassbycategoryid();
  },
};
</script>

<style></style>
