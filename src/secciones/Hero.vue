<template>
  <header class="bg-gradient-to-t from-blanco via-white to-slate-100">
    <div class="relative">
      <div class="absolute w-20 top-7 left-7">
        <img src="../assets/Logo.png" alt="" />
      </div>
      <div
        class="flex justify-center w-72 left-7 top-7 lg:top-0 lg:left-0 lg:w-auto relative"
      >
        <div class="mt-24">
          <img src="../assets/Ventana.png" alt="" />
        </div>
        <div class="absolute lg:top-48 top-36 lg:mr-40 -right-7 lg:w-auto w-72">
          <img src="../assets/Ventana (1).png" alt="" />
        </div>
        <div class="absolute lg:mr-[50rem] -bottom-36 lg:-bottom-28">
          <img
            src="../assets/Nube.png"
            class="animate-[bounce_5s_cubic-bezier(0.05,0.8,0.1,1.0)_infinite]"
            alt=""
          />
        </div>
        <div class="absolute top-[30rem] ml-[58rem]">
          <img src="../assets//Cursor.png" alt="" />
        </div>
      </div>
    </div>
    <div class="mt-48 relative z-20">
      <img src="../assets/Nubecitas.png" class="w-full" alt="" />
    </div>
  </header>
  <div
    ref="scrollContainer"
    class="-mt-7 !w-full relative overflow-hidden bg-[url(https://i.ibb.co/1Jv8FN2/Fondo-cuadriculado.png)] bg-cover h-[350px] whitespace-nowrap"
  >
    <div class="inline-block my-auto">
      <img src="../assets/bus 1.png" class="absolute bottom-0 left-56" alt="" />
      <img
        src="../assets/bus 2.png"
        class="absolute bottom-0 left-[42rem]"
        alt=""
      />
      <img
        src="../assets/auto barbie.png"
        class="absolute bottom-0 left-[68rem]"
        alt=""
      />
      <img
        src="../assets/curve text.png"
        class="absolute bottom-0 left-[88rem]"
        alt=""
      />
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const scrollContainer = ref(null);
const handleScroll = (event) => {
  if (scrollContainer.value) {
    const scrollSpeed = 1; // Ajusta la velocidad del desplazamiento horizontal
    scrollContainer.value.scrollLeft += event.deltaY * scrollSpeed;
    event.preventDefault(); // Prevenir el scroll vertical
  }
};

onMounted(() => {
  if (scrollContainer.value) {
    scrollContainer.value.addEventListener("wheel", handleScroll);
  }
});

onBeforeUnmount(() => {
  if (scrollContainer.value) {
    scrollContainer.value.removeEventListener("wheel", handleScroll);
  }
});
</script>
  