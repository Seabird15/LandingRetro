<template>
  <section class="my-7">
    <div>
      <div
        class="ml-10 lg:ml-36 -rotate-12 mb-7 p-2 border-solid border-[1px] w-fit bg-blanco border-black"
      >
        <p class="uppercase font-bold tracking-wider">invitados especiales</p>
      </div>
      <div class="flex flex-col items-center py-7">
        <!-- Slider superior -->
        <div class="flex items-center container lg:w-10/12 h-2/4">
          <!-- Botón de retroceder -->
          <button
            @click="prevSlide"
            class="hidden p-2 lg:block text-primary text-7"
          >
            PREV
          </button>

          <!-- Contenedor del slider -->
          <div class="w-full lg:overflow-hidden overflow-x-scroll">
            <div class="flex transition-transform duration-500" ref="slider">
              <div
                v-for="(item, index) in items"
                :key="index"
                class="flex-shrink-0 p-1 mx-2 rounded-lg shadow-md w-[200px] h-[140px] bg-rojo cursor-pointer"
                :class="{
                  'bg-primary text-white transition-all ease-out duration-200':
                    currentIndex === index,
                  ' bg-azul ': currentIndex !== index,
                }"
                @click="goToSlide(index)"
              >
                <button
                  class="flex items-center hover:scale-[1.30] group transition-all duration-500"
                >
                  <img
                    class="object-cover group-hover:rounded-xl"
                    :src="item.image"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>

          <!-- Botón de avanzar -->
          <button
            @click="nextSlide"
            class="hidden p-2 lg:block text-primary text-7 rounded-ful icos-line-circle-right"
          >
            NEXT
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";

const items = ref([
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-nina-joven-sonriente_23-2149260597.jpg?t=st=1729722842~exp=1729726442~hmac=d67111183998570849c66c65a386fcf12eb975f5ccc0f0f950d228f2600f1cfe&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/apuesto-hombre-sonriente-confiado-manos-cruzadas-sobre-pecho_176420-18743.jpg?t=st=1729723552~exp=1729727152~hmac=2a5d57f6173d5ff43576c70a10f77d6670f45481586e515683dc4d49016289b4&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-primer-plano-hombre-sonriente_23-2148221703.jpg?t=st=1729724085~exp=1729727685~hmac=7d21adfac023dd040952b8cfe4fcaa494537818edfe331c2d016c910348534e1&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-nina-joven-sonriente_23-2149260597.jpg?t=st=1729722842~exp=1729726442~hmac=d67111183998570849c66c65a386fcf12eb975f5ccc0f0f950d228f2600f1cfe&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/apuesto-hombre-sonriente-confiado-manos-cruzadas-sobre-pecho_176420-18743.jpg?t=st=1729723552~exp=1729727152~hmac=2a5d57f6173d5ff43576c70a10f77d6670f45481586e515683dc4d49016289b4&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-primer-plano-hombre-sonriente_23-2148221703.jpg?t=st=1729724085~exp=1729727685~hmac=7d21adfac023dd040952b8cfe4fcaa494537818edfe331c2d016c910348534e1&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-nina-joven-sonriente_23-2149260597.jpg?t=st=1729722842~exp=1729726442~hmac=d67111183998570849c66c65a386fcf12eb975f5ccc0f0f950d228f2600f1cfe&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/apuesto-hombre-sonriente-confiado-manos-cruzadas-sobre-pecho_176420-18743.jpg?t=st=1729723552~exp=1729727152~hmac=2a5d57f6173d5ff43576c70a10f77d6670f45481586e515683dc4d49016289b4&w=1480",
  },
  {
    image:
      "https://img.freepik.com/foto-gratis/retrato-primer-plano-hombre-sonriente_23-2148221703.jpg?t=st=1729724085~exp=1729727685~hmac=7d21adfac023dd040952b8cfe4fcaa494537818edfe331c2d016c910348534e1&w=1480",
  },
]);

const currentIndex = ref(0);
const cardWidth = 100; // Establecer un ancho fijo para las tarjetas

// Función para obtener el ancho de una tarjeta
const slider = ref(null);
onMounted(() => {
  updateSlider();
});

// Función para avanzar a la siguiente tarjeta
const nextSlide = () => {
  if (currentIndex.value < items.value.length - 1) {
    currentIndex.value++;
    updateSlider();
  }
};

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--;
    updateSlider();
  }
};
const goToSlide = (index) => {
  currentIndex.value = index;
};
const updateSlider = () => {
  if (slider.value) {
    slider.value.style.transform = `translateX(-${
      currentIndex.value * cardWidth
    }px)`;
  }
};
</script>
  
  <style scoped>
</style>
  