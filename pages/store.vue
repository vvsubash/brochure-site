<template>
  <div>
    <StoreSearchBar />
    <div class="product-section ml-4">
      <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between" >
        <div v-for="i in 10">

            <ProductCard />
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
