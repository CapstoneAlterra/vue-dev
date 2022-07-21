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
          <router-link to="../onlineClass">
            <button class="border-2 border-solid rounded-full">
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
          <!-- title -->
          <h1 class="text-5xl font-medium my-5">Add New Class</h1>
          <!-- form -->
          <div class="my-10">
            <div>
              <div class="grid my-5 grid-cols-3 gap-2">
                <div>
                  <!-- Category Option -->
                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-xl font-medium text-gray-900"
                      >Category</label
                    >
                    <select
                      v-model="category_id"
                      id="category"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                    >
                      <option selected>Choose a category</option>
                      <option
                        v-for="category in listCategory"
                        :key="category.id"
                        :value="category.id"
                      >
                        {{ category.name }}
                      </option>
                    </select>
                  </div>

                  <div class="my-5">
                    <!-- date picker -->
                    <div class="relative">
                      <label
                        for="datepicker"
                        class="block mb-2 text-xl font-medium text-gray-900"
                        >Date</label
                      >

                      <input
                        v-model="date"
                        datepicker
                        datepicker-format="yyyy-mm-dd"
                        type="date"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 pl-10 p-2.5"
                        placeholder="Select date"
                      />
                    </div>
                    <div class="my-5">
                      <!-- Price Input -->
                      <div>
                        <label class="font-medium block text-xl">Price</label>
                        <input
                          v-model="price"
                          class="text-gray-800 bg-gray-50 border border-gray-300 mt-3 text-center rounded w-max h-max p-3"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <!-- Class Option -->
                  <div>
                    <label
                      for="category"
                      class="block mb-2 text-xl font-medium text-gray-900"
                      >Class</label
                    >
                    <select
                      v-model="class_name_id"
                      id="class"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                    >
                      <option selected>Choose a class name</option>
                      <option
                        v-for="class_name in listClass_name"
                        :key="class_name.id"
                        :value="class_name.id"
                      >
                        {{ class_name.name }}
                      </option>
                    </select>
                  </div>
                  <!-- time picker -->
                  <div class="my-5">
                    <label
                      for="time"
                      class="block mb-2 text-xl font-medium text-gray-900"
                      >Time Start</label
                    >
                    <div class="relative w-80">
                      <input
                        v-model="time_start"
                        type="time"
                        id="time"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-60 p-2.5 text-left"
                      />
                    </div>
                  </div>
                  <!-- add image -->
                  <div>
                    <h1 class="block mb-2 text-xl font-medium text-gray-900">
                      Add Image Class
                    </h1>
                    <div
                      class="block items-center p-2 border border-red-400 w-52"
                    >
                      <div class="flex justify-center items-center">
                        <label
                          for="dropzone-file"
                          class="flex flex-col justify-center items-center w-full h-full bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:bg-gray-300"
                        >
                          <div
                            class="flex flex-col justify-center items-center pt-5 pb-6"
                          >
                            <svg
                              class="mb-3 w-10 h-10 text-gray-400"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                              ></path>
                            </svg>
                            <p class="mb-2 text-sm text-gray-500">
                              <span class="font-semibold"
                                >Click to upload Image</span
                              >
                              or drag and drop
                            </p>
                          </div>
                          <input
                            id="dropzone-file"
                            type="file"
                            class="hidden"
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Trainer Option -->
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-xl font-medium text-gray-900"
                    >Trainer</label
                  >
                  <select
                    v-model="trainer_id"
                    id="class"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5"
                  >
                    <option selected>Choose a Trainer</option>
                    <option
                      v-for="trainer in listTrainer"
                      :key="trainer.id"
                      :value="trainer.id"
                    >
                      {{ trainer.name }}
                    </option>
                  </select>
                  <div class="my-5">
                    <label
                      for="time"
                      class="block mb-2 text-xl font-medium text-gray-900"
                      >Time End</label
                    >
                    <div class="relative w-80">
                      <input
                        v-model="time_end"
                        type="time"
                        id="time"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-60 p-2.5 text-left"
                      />
                    </div>
                  </div>
                  <!-- things -->
                  <div class="my-5">
                    <label class="block mb-2 text-xl font-medium text-gray-900">
                      Zoom Link
                    </label>
                    <input
                      v-model="zoom_link"
                      type="text"
                      class="w-52 h-10 text-sm text-gray-900 bg-gray-50 border border-gray-300 text-start align-text-top"
                    />
                  </div>
                </div>
              </div>
              <div class="my-5">
                <div class="mb-5">
                  <label
                    for="large-input"
                    class="block mb-2 text-xl font-medium text-gray-900"
                    >Description</label
                  >
                  <input
                    v-model="description"
                    type="text"
                    id="large-input"
                    class="block w-full h-28 text-gray-900 border-2 border-red-600 bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <button
                  @click="addClass()"
                  class="absolute-right-200 bg-red-600 text-white rounded-md gap-1 h-14 w-24 text-center px-1"
                >
                  <span class="text-xl">SAVE</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/SideBar.vue";
import NavbarAdmin from "../../components/NavbarAdmin.vue";
import axios from "axios";

export default {
  components: { SideBar, NavbarAdmin },
  name: "addOfflineClass",
  data() {
    return {
      category_id: null,
      class_name_id: null,
      date: null,
      image: null,
      trainer_id: null,
      price: null,
      description: "",
      zoom_link: "",
      time_start: null,
      time_end: null,
    };
  },
  computed: {
    listTrainer() {
      return this.$store.state.trainer.trainerList;
    },
    listCategory() {
      return this.$store.state.category.categoryList;
    },
    listClass_name() {
      return this.$store.state.classname.class_nameList;
    },
  },
  methods: {
    fetchtrainer() {
      this.$store.dispatch(`trainer/fetchList`);
    },
    fetchCategory() {
      this.$store.dispatch(`category/fetchList`);
    },
    fetchClassName() {
      this.$store.dispatch(`classname/fetchList`);
    },
    async addClass() {
      await axios
        .post("https://gym-capstone.hasura.app/api/rest/addclass", {
          class_name_id: this.class_name_id,
          type_id: 2,
          date: this.date,
          time_start: this.time_start,
          time_end: this.time_end,
          image: this.image,
          trainer_id: this.trainer_id,
          price: this.price,
          description: this.description,
          zoom_link: this.zoom_link,
        })
        .then((response) => {
          this.alertAddSucces(response);
          this.$router.push({ name: "onlineClass" });
        })
        .catch((error) => {
          this.alertAddError(error);
        });
    },
    alertAddSucces() {
      this.$swal({
        position: "center",
        icon: "success",
        title: "Berhasil Menambahkan",
        showAlertLoginSucces: false,
        timer: 1500,
      });
    },
    alertAddError() {
      this.$swal({
        position: "center",
        icon: "error",
        title: "Gagal!!!",
        showAlertLoginError: false,
        timer: 1500,
      });
    },
  },
  mounted() {
    this.fetchtrainer();
    this.fetchCategory();
    this.fetchClassName();
  },
};
</script>
