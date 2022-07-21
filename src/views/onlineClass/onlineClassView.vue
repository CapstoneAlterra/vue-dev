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
                v-for="category in listCategory"
                :key="category.id"
                class="grid place-content-start place-items-center mx-5"
              >
                <router-link
                  :to="{
                    name: 'online categories',
                    params: { id: category.id },
                  }"
                >
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
            <div class="flex justify-between my-5 mx-3">
              <div class="flex">
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
                    <li
                      v-for="category in listCategory"
                      :key="category.id"
                      class="hover:bg-red-300 py-2 px-4"
                      @click="fetchkelasbycategoryid(category.id)"
                    >
                      {{ category.name }}
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
                    <li v-for="(kelas, index) in listClass_name" :key="index">
                      <button class="block px-4 py-2 hover:bg-red-200">
                        {{ kelas.name }}
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <router-link to="/onlineCLass/addOnlineClass">
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
                    v-for="list in listKelas"
                    :key="list.id"
                    class="border border-black"
                  >
                    <td class="border-y border-l border-black px-6 py-2">
                      {{ list.id }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.trainer.name }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.trainer.contact }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.class_name.category.name }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.class_name.name }}
                    </td>
                    <td class="border-y border-black px-6 py-2">
                      {{ list.date }}
                    </td>
                    <td class="border-y border-r border-black px-6 py-2">
                      <div class="flex justify-around">
                        <button
                          @click="
                            (selectedID = list.id), (showModal = selectedID)
                          "
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
                              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                            />
                          </svg>
                        </button>
                        <div
                          v-if="showModal"
                          class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
                        >
                          <div class="relative w-auto my-6 mx-auto max-w-6xl">
                            <!--content-->
                            <div
                              class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
                            >
                              <!--header-->
                              <div
                                class="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t"
                              >
                                <h3 class="text-3xl font-semibold">
                                  Edit Class ID {{ selectedID }}
                                </h3>
                              </div>
                              <!--body-->
                              <div
                                class="relative p-6 flex-col flex gap-2 flex-wrap"
                              >
                                <!-- trainer option -->
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
                                </div>

                                <!-- Price Input -->
                                <div>
                                  <label class="font-medium block text-xl"
                                    >Price</label
                                  >
                                  <input
                                    v-model="price"
                                    class="text-gray-800 bg-gray-50 border border-gray-300 mt-2 text-center rounded w-max h-max p-3"
                                  />
                                </div>
                                <!-- Description Input -->
                                <div>
                                  <label class="font-medium block text-xl"
                                    >Description</label
                                  >
                                  <input
                                    v-model="description"
                                    class="text-gray-800 bg-gray-50 border border-gray-300 mt-2 text-center rounded w-max h-max p-3"
                                  />
                                </div>
                              </div>
                              <!--footer-->
                              <div
                                class="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b"
                              >
                                <button
                                  class="text-red-500 bg-transparent border border-solid border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  @click="
                                    (selectedID = null), (showModal = false)
                                  "
                                >
                                  Close
                                </button>
                                <button
                                  class="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  @click="editclass(selectedID)"
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <button @click="deleteclass(list.id)">
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
import axios from "axios";
export default {
  components: { SideBar, NavbarAdmin },
  data() {
    return {
      dropclass: false,
      dropcategory: false,
      showModal: false,
      selectedID: null,
      trainer_id: null,
      price: null,
    };
  },
  computed: {
    listKelas() {
      return this.$store.state.onlineclass.onlinekelasList;
    },
    listCategory() {
      return this.$store.state.category.categoryList;
    },
    listClass_name() {
      return this.$store.state.classname.class_nameList;
    },
    listTrainer() {
      return this.$store.state.trainer.trainerList;
    },
  },
  methods: {
    async deleteclass(id) {
      await axios
        .delete(
          `https://gym-capstone.hasura.app/api/rest/deleteclassbyid/${id}`,
          {
            id: id,
          }
        )
        .then((response) => {
          this.fetchkelas();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    async editclass(selectedID) {
      await axios
        .patch(
          `https://gym-capstone.hasura.app/api/rest/editclassbyid/${selectedID}`,
          {
            trainer_id: this.trainer_id,
            price: this.price,
            description: this.description,
          }
        )
        .then((response) => {
          this.fetchkelas();
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    fetchkelas() {
      this.$store.dispatch(`onlineclass/fetchonlinekelasList`);
    },
    fetchCategory() {
      this.$store.dispatch(`category/fetchList`);
    },
    fetchClassName() {
      this.$store.dispatch(`classname/fetchList`);
    },
    fetchtrainer() {
      this.$store.dispatch(`trainer/fetchList`);
    },
  },
  mounted() {
    this.fetchkelas();
    this.fetchCategory();
    this.fetchClassName();
    this.fetchtrainer();
  },
};
</script>

<style SideBar></style>
