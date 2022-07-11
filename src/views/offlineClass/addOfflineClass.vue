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
          <nuxt-link to="../">
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
          </nuxt-link>
          <!-- title -->
          <h1 class="text-5xl font-medium my-5">Add New Class</h1>
          <!-- form -->
          <div class="my-10">
            <form action="submit" method="post">
              <div class="grid my-5 grid-cols-3 gap-2">
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-xl font-medium text-gray-900"
                    >Category</label
                  >
                  <select
                    id="category"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a category</option>
                    <option value="1">Cardio</option>
                    <option value="2">Strength</option>
                    <option value="3">Dance</option>
                  </select>

                  <div class="my-5">
                    <div class="relative">
                      <label
                        for="datepicker"
                        class="block mb-2 text-xl font-medium text-gray-900"
                        >Date</label
                      >
                      <div
                        class="absolute left-0 flex pl-3 pointer-events-none"
                      >
                        <svg
                          class="w-5 h-5 text-gray-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <input
                        datepicker
                        datepicker-format="mm/dd/yyyy"
                        type="text"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Select date"
                      />
                    </div>
                    <div class="my-5">
                      <p class="font-medium text-xl">Price</p>
                      <p
                        class="bg-red-500 text-white mt-3 text-center rounded w-max h-max p-3"
                      >
                        Rp. 45.000
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-xl font-medium text-gray-900"
                    >Class</label
                  >
                  <select
                    id="class"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a class</option>
                    <option value="1">Cardio</option>
                    <option value="2">Strength</option>
                    <option value="3">Dance</option>
                  </select>

                  <div class="my-5">
                    <label
                      for="time"
                      class="block mb-2 text-xl font-medium text-gray-900"
                      >Time</label
                    >
                    <div class="relative w-80">
                      <input
                        type="text"
                        id="time"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-60 p-2.5 text-left"
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <label
                    for="category"
                    class="block mb-2 text-xl font-medium text-gray-900"
                    >Trainer</label
                  >
                  <select
                    id="class"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Choose a Trainer</option>
                    <option value="1">Cardio</option>
                    <option value="2">Strength</option>
                    <option value="3">Dance</option>
                  </select>
                  <!-- checkbox -->
                  <div class="my-5">
                    <p class="block mb-2 text-xl font-medium text-gray-900">
                      Things To Brings
                    </p>
                    <div class="flex items-center">
                      <input
                        id="things1"
                        type="checkbox"
                        value="air"
                        class="w-5 h-5 text-blue-500 bg-red-100 border-red-500"
                      />
                      <label
                        for="things1"
                        class="ml-2 text-base font-medium text-gray-900"
                        >Air Mineral</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="things2"
                        type="checkbox"
                        value="pakaian"
                        class="w-5 h-5 text-blue-500 bg-red-100 border-red-500"
                      />
                      <label
                        for="things2"
                        class="ml-2 text-base font-medium text-gray-900"
                        >Pakaian Ganti</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="things3"
                        type="checkbox"
                        value="handuk"
                        class="w-5 h-5 text-blue-500 bg-red-100 border-red-500"
                      />
                      <label
                        for="things3"
                        class="ml-2 text-base font-medium text-gray-900"
                        >Handuk</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="things4"
                        type="checkbox"
                        value="sepatu"
                        class="w-5 h-5 text-blue-500 bg-red-100 border-red-500"
                      />
                      <label
                        for="things4"
                        class="ml-2 text-base font-medium text-gray-900"
                        >Sepatu</label
                      >
                    </div>
                    <div class="flex items-center">
                      <input
                        id="other"
                        type="checkbox"
                        value="other"
                        class="w-5 h-5 text-blue-500 bg-red-100 border-red-500"
                      />
                      <label
                        for="other"
                        class="ml-2 text-base font-medium text-gray-900"
                        >Lainnya</label
                      >
                    </div>
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
                    type="text"
                    id="large-input"
                    class="block w-full h-28 text-gray-900 border-2 border-red-600 bg-gray-50"
                  />
                </div>
              </div>
              <div>
                <button
                  class="absolute-right-200 bg-red-600 text-white rounded-md gap-1 h-14 w-24 text-center px-1"
                >
                  <span class="text-xl">SAVE</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "../../components/SideBar.vue";
import NavbarAdmin from "../../components/NavbarAdmin.vue";
export default {
  components: { SideBar, NavbarAdmin },
  name: "addOfflineClass",
};
</script>
