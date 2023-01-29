<template>
  <div class="navbar bg-base-100">
    <div class="flex-1">
      <NuxtLink class="btn btn-ghost normal-case text-xl" to="/">Brochure Site</NuxtLink>
    </div>
    <div class="flex-none">
      <ul class="menu menu-horizontal px-1">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/store">Store</NuxtLink></li>
        <li tabindex="0" class="flow-root">
          <a>
           Select Language
            <svg
              class="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
            >
              <path
                d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"
              />
            </svg>
          </a>
          <ul class="p-2 bg-base-100 float-right">
            <li><a>English (en)</a></li>
            <li><a>French (fr)</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
