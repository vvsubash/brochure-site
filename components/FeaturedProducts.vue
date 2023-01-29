<template>
  <div class="w-full">
    <h1 class="text-4xl  font-bold">Checkout our featured collections</h1>
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <nuxt-img src="/product-1.jpg" class="h-96 w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide4" class="btn-circle btn">❮</a>
          <a href="#slide2" class="btn-circle btn">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img src="/product-2.jpg" class="h-96 w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide1" class="btn-circle btn">❮</a>
          <a href="#slide3" class="btn-circle btn">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img src="/product-3.jpg" class="h-96 w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide2" class="btn-circle btn">❮</a>
          <a href="#slide4" class="btn-circle btn">❯</a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img src="/product-4.jpg" class="h-96 w-full" />
        <div
          class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between"
        >
          <a href="#slide3" class="btn-circle btn">❮</a>
          <a href="#slide1" class="btn-circle btn">❯</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
