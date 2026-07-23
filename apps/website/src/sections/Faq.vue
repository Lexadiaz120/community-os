<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon } from "../icons";

const faqs = [
  {
    q: "¿Necesito tarjeta de crédito para empezar?",
    a: "No. El plan Gratis no pide tarjeta y te permite crear tu primer evento y probar el check-in con QR sin coste.",
  },
  {
    q: "¿El check-in funciona sin conexión a internet?",
    a: "Sí. El escáner guarda los check-in localmente si no hay red y los sincroniza automáticamente en cuanto vuelve la conexión, así que nunca se detiene la fila en la puerta.",
  },
  {
    q: "¿Puedo migrar los eventos que ya tengo en otra herramienta?",
    a: "Sí, podemos ayudarte a importar tu lista de asistentes actual. Escríbenos desde el plan Empresas y te acompañamos en la migración.",
  },
  {
    q: "¿Hay límite de personas escaneando entradas a la vez?",
    a: "No. Puedes tener a todo tu equipo de voluntarios escaneando entradas al mismo tiempo desde distintos móviles; el estado se sincroniza para todos.",
  },
  {
    q: "¿Qué pasa si alguien intenta entrar con una entrada ya usada?",
    a: "El escáner lo detecta al instante y muestra un aviso claro de \"ya registrado\" con la hora del primer check-in, para que decidas en el momento.",
  },
  {
    q: "¿Puedo cancelar cuando quiera?",
    a: "Sí. El plan Pro se paga por evento, sin permanencia ni renovación automática de un plan anual.",
  },
];

const openIndex = ref<number | null>(0);

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i;
}
</script>

<template>
  <section id="faq" class="border-t border-border bg-muted/30 py-20">
    <div class="mx-auto max-w-3xl px-4 sm:px-6">
      <h2 class="text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Preguntas frecuentes
      </h2>

      <div class="mt-10 flex flex-col divide-y divide-border rounded-xl border border-border bg-background">
        <div v-for="(item, i) in faqs" :key="item.q" class="px-5 sm:px-6">
          <button
            type="button"
            class="flex w-full items-center justify-between gap-4 py-5 text-left"
            :aria-expanded="openIndex === i"
            @click="toggle(i)"
          >
            <span class="text-sm font-semibold text-foreground sm:text-base">{{ item.q }}</span>
            <ChevronDownIcon
              class="h-5 w-5 shrink-0 text-muted-foreground transition-transform"
              :class="{ 'rotate-180': openIndex === i }"
            />
          </button>
          <p v-if="openIndex === i" class="pb-5 text-sm leading-relaxed text-muted-foreground">
            {{ item.a }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
