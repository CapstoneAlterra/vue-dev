<template>
  <div>
    <div class="flex text-start">
      <SideBar />
      <div class="w-full flex flex-col">
        <div>
          <NavbarAdmin />
        </div>
        <div>
          <div class="mx-auto py-8">
            <h1 class="text-5xl font-semibold mb-8">Category</h1>
            <!-- card -->
            <div class="flex">
              <div
                v-for="(category, index) in categories"
                :key="index"
                class="grid place-content-start place-items-center mx-5"
              >
                <router-link :to="`/offlineClass/Categories/${index}`">
                  <div
                    class="text-center bg-white border-4 border-red-600 w-48 h-32 hover:bg-red-100"
                  >
                    <h1 class="text-2xl font-bold mx-auto text-black">
                      {{ category.name }}
                    </h1>
                  </div>
                </router-link>
              </div>
            </div>
            <!-- search box -->
            <div>
              <div class="flex items-center mx-5 mt-5">
                <label for="simple-search" class="sr-only">Search</label>
                <div class="max-w-sm">
                  <input
                    type="text"
                    id="simple-search"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2"
                    placeholder="Search"
                    required
                  />
                </div>
                <button
                  type="button"
                  class="p-2 ml-2 text-sm font-medium text-white bg-red-600 rounded-lg border border-red-600"
                >
                  Search
                </button>
              </div>
            </div>
            <!-- dropdown -->
            <div class="my-5 mx-3 flex">
              <button
                @click="(dropcategory = !dropcategory), (dropclass = false)"
                class="flex text-black w-60 bg-white border border-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center space-x-40"
                type="button"
              >
                <p>ALL</p>
                <svg
                  v-if="dropcategory"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke-width="2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-else
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div
                v-show="dropcategory"
                id="dropdown"
                class="z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-60 mt-12"
              >
                <ul class="py-3 text-sm text-gray-700">
                  <li v-for="(category, index) in categories" :key="index">
                    <a href="#" class="block px-4 py-2 hover:bg-red-200">{{
                      category.name
                    }}</a>
                  </li>
                </ul>
              </div>

              <button
                @click="(dropclass = !dropclass), (dropcategory = false)"
                class="flex mx-5 text-black w-60 bg-white border border-red-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center items-center space-x-40"
                type="button"
              >
                <p>ALL</p>
                <svg
                  v-if="dropclass"
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  stroke-width="2"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <svg
                  v-else
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              <div
                v-show="dropclass"
                id="dropclass"
                class="ml-64 z-10 absolute bg-white divide-y divide-gray-100 rounded shadow w-60 mt-12"
              >
                <ul class="py-1 text-sm text-gray-700">
                  <li v-for="(kelas, index) in classes" :key="index">
                    <a href="#" class="block px-4 py-2 hover:bg-red-200">{{
                      kelas.name
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <!-- table -->
            <div class="relative overflow-x-auto my-5 mx-5">
              <table
                class="border-separate border-spacing-y-2 w-full text-sm text-left text-gray-900 font-semibold"
              >
                <thead class="text-sm text-white bg-red-600">
                  <tr>
                    <th
                      scope="col"
                      class="border-y border-l border-black px-6 py-3"
                    >
                      ID
                    </th>
                    <th scope="col" class="border-y border-black px-6 py-3">
                      Name
                    </th>
                    <th scope="col" class="border-y border-black px-6 py-3">
                      Contact
                    </th>
                    <th scope="col" class="border-y border-black px-6 py-3">
                      Category
                    </th>
                    <th scope="col" class="border-y border-black px-6 py-3">
                      Class
                    </th>
                    <th scope="col" class="border-y border-black px-6 py-3">
                      Date
                    </th>

                    <th
                      scope="col"
                      class="border-y border-r border-black px-6 py-3"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(list, index) in lists"
                    :key="index"
                    class="border border-black"
                  >
                    <td class="border-y border-l border-black px-6 py-2">
                      {{ list.id }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.name }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.contact }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.category }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.class }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.date }}
                    </td>
                    <td class="border-y border-r border-black px-6 py-2">
                      <div class="flex justify-around">
                        <button>
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <button>
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
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
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
import SideBar from "../../components/SideBar.vue";
import NavbarAdmin from "../../components/NavbarAdmin.vue";
export default {
  components: { SideBar, NavbarAdmin },
  data() {
    return {
      dropclass: false,
      dropcategory: false,
      categories: [
        { name: "Cardio", class: 3, classes: ["Body Combat", "Step Up"] },
        {
          name: "Strength",
          class: 3,
          classes: ["Power", "Muscular", "Endurance"],
        },
        { name: "Dance", class: 3, classes: ["Zumba", "Pilates", "Yoga"] },
      ],
      lists: [
        {
          id: "0001",
          name: "Rici Januardi",
          contact: "081290778977",
          category: "Cardio",
          class: "Body Combat",
          date: "25-Juni-2022",
        },
        {
          id: "0002",
          name: "Rici Januardi",
          contact: "081290778977",
          category: "Cardio",
          class: "Body Combat",
          date: "25-Juni-2022",
        },
        {
          id: "0003",
          name: "Rici Januardi",
          contact: "081290778977",
          category: "Cardio",
          class: "Body Combat",
          date: "25-Juni-2022",
        },
      ],
    };
  },
};
</script>

<style SideBar></style>
