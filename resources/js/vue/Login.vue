<template>
  <div class="text-gray-600 font-body grid md:grid-cols-12">
    <div class="md:col-span-2 md:flex md:justify-end">
      <nav class="text-center">
        <div>
          <h1
            class="uppercase p-4 border-b border-gray-300 font-cursive text-2xl"
          >
            <a href="/" class="text-gray-500 hover:text-gray-700">
              goluu's foods
            </a>
          </h1>
        </div>
        <ul class="mt-2">
          <li class="py-1">
            <a
              href="#"
              class="text-gray-900 font-bold flex justify-center border-l-4 border-primary"
            >
              <svg
                class="w-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                ></path>
              </svg>
              <span> Home </span>
            </a>
          </li>
          <li class="py-1">
            <a href="#" class="flex justify-center border-l-4 border-white">
              <svg
                class="w-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span> About </span>
            </a>
          </li>
          <li class="py-1">
            <a href="#" class="flex justify-center border-l-4 border-white">
              <svg
                class="w-4 inline-block mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              <span> Contact </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <main class="px-16 py-6 bg-gray-100 col-span-10">
      <div class="flex md:justify-end sm:justify-center">
        <a
          href="#"
          class="btn text-primary border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Login
        </a>
        <a
          href="#"
          class="btn text-secondary-200 ml-3 border-primary md:border-2 hover:bg-primary hover:text-white"
        >
          Sign Up
        </a>
      </div>

      <!-- <div class="flex items-center justify-center">
        <div class="bg-red-500 h-4 w-6"></div>
        <div class="bg-blue-500 h-6 w-6"></div>
        <div class="bg-green-500 h-8 w-6"></div>
      </div> -->

      <header>
        <h2 class="text-gray-700 text-6xl font-semibold">Recipes</h2>
        <h3 class="text-3xl font-semibold mt-2">For Foodies</h3>
      </header>

      <div>
        <h4 class="font-bold mt-12 pb-2 border-b border-gray-300">
          Latest Recipes
        </h4>
        <div class="mt-8 grid lg:grid-cols-3 gap-10">
          <div class="card hover:shadow-2xl">
            <img
              src="/img/chickenchoila.jpg"
              alt="recipeImage"
              class="w-full h-70 sm:h-60 object-cover"
            />
            <div class="m-4">
              <span class="font-bold text-lg"> Chicken Choila </span>
              <span class="block text-gray-500 text-base">
                Recipe By Goluu
              </span>
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>35 mins</span>
            </div>
          </div>
          <div class="card hover:shadow-2xl">
            <img
              src="/img/potatochips.jpg"
              alt="recipeImage"
              class="w-full h-70 sm:h-60 object-cover"
            />
            <div class="m-4">
              <span class="font-bold text-lg"> Potato Chips </span>
              <span class="block text-gray-500 text-base">
                Recipe By Goluu
              </span>
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>30 mins</span>
            </div>
          </div>
          <div class="card hover:shadow-2xl">
            <img
              src="/img/chickenpizza.jpg"
              alt="recipeImage"
              class="w-full h-70 sm:h-60 object-cover"
            />
            <div class="m-4">
              <span class="font-bold text-lg"> Chicken Pizza </span>
              <span class="block text-gray-500 text-base">
                Recipe By Volpee
              </span>
            </div>
            <div class="badge">
              <svg
                class="w-5 inline-block"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>60 mins</span>
            </div>
          </div>
        </div>
      </div>

      <h4 class="font-bold mt-12 pb-2">Most Popular</h4>
      <div class="flex justify-center">
        <div
          class="btn bg-black text-white hover:shadow-inner hover:bg-pink-400 hover:text-white"
        >
          Load More
        </div>
      </div>
    </main>
  </div>
</template>
<script>
export default {
  name: "Login",
};
</script>