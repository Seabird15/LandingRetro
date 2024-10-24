<template>
  <section class="bg-crema relative">
    <div class="text-center text-4xl prociono-regular">
      <h2 class="text-negro pt-7 pb-4">Los escuchamos y yendo no, llegando</h2>
      <p class="text-negro text-base">Te spoileamos a dónde primero...</p>
    </div>
    <!--Reloj-->
    <div class="absolute right-20 hidden lg:block top-14">
      <img src="../assets/Cursor cargando.png" alt="" />
    </div>
    <!--Reloj-->
    <!--CajasPaint-->
    <div
      class="flex justify-center mx-4 lg:mx-0 flex-col lg:flex-row gap-7 py-24"
    >
      <div
        class="bg-white hover:bg-rojo hover:text-blanco transition-all duration-700 px-14 pt-12 pb-10 group"
      >
        <img
          src="../assets/Paint.png"
          alt=""
          class="mx-auto group-hover:scale-[1.05] group-hover:shadow-xl transition-all duration-500"
        />
        <img src="../assets/Logo (1).png" alt="" class="mx-auto my-4" />
        <div
          class="flex justify-center uppercase prociono-regular font-bold text-lg lg:text-2xl"
        >
          <p>Córdoba</p>
          <span class="mx-2">□</span>
          <p>Santa fé</p>
          <span class="mx-2">□</span>
          <p>Mendoza</p>
        </div>
      </div>
      <div
        class="bg-white hover:bg-rojo hover:text-blanco px-14 pt-12 pb-10 group transition-all duration-700"
      >
        <img
          src="../assets/Paint (2).png"
          alt=""
          class="mx-auto group-hover:scale-[1.05] group-hover:shadow-xl transition-all duration-500"
        />
        <img src="../assets/Logo (2).png" alt="" class="mx-auto my-4" />
        <div
          class="flex justify-center uppercase prociono-regular font-bold text-xl lg:text-2xl"
        >
          <p>Salta</p>
          <span class="mx-2">□</span>
          <p>Jujuy</p>
          <span class="mx-2">□</span>
          <p>Formosa</p>
        </div>
      </div>
    </div>
    <!--CajasPaint-->
    <Slider />
  </section>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Prociono&display=swap");

.prociono-regular {
  font-family: "Prociono", serif;
  font-weight: 400;
  font-style: normal;
}
</style>

<script setup>
import Slider from "../components/Slider.vue";
</script>