<template>
  <div class="flex flex-wrap md:flex-nowrap m-4 md:justify-between sm:justify-end">
    <div class="form-control sm:w-full">
      <div class="input-group">
        <input type="text" placeholder="Search…" class="input-bordered input" />
        <button class="btn-square btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="dropdown dropdown-hove mb-2 md:dropdown-end">
  <label tabindex="0" class="btn btn-md btn-wide m-1">Sort By</label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Price: Low to High</a></li>
    <li><a>Price: High to Low</a></li>
    <li><a>Customer Ratings</a></li>
    <li><a>Newesr Arrivals</a></li>
  </ul>
</div>
      </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
