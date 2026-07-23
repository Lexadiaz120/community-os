<script setup lang="ts">
const steps = [
  {
    number: "01",
    title: "Crea tu evento",
    description: "Añade la información, la portada y los tipos de entrada. Tu página queda lista para compartir en minutos.",
  },
  {
    number: "02",
    title: "Comparte y vende",
    description: "Envía el enlace a tu comunidad. Sigue las ventas y el aforo desde el panel, en cualquier momento.",
  },
  {
    number: "03",
    title: "Controla la entrada",
    description: "El día del evento, escanea entradas desde el móvil. Cada check-in se refleja al instante en el panel.",
  },
];
</script>

<template>
  <section id="como-funciona" class="border-y border-border bg-muted/30 py-20">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          De la idea al evento, en tres pasos
        </h2>
      </div>

      <div class="relative mt-14 grid gap-10 sm:grid-cols-3 sm:gap-6">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="relative flex flex-col items-start"
        >
          <span
            class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-base font-bold text-primary-foreground"
          >
            {{ step.number }}
          </span>
          <h3 class="mt-4 text-lg font-semibold text-foreground">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ step.description }}</p>

          <span
            v-if="i < steps.length - 1"
            class="absolute right-[-1.5rem] top-6 hidden h-px w-12 bg-border sm:block"
          />
        </div>
      </div>
    </div>
  </section>
</template>
