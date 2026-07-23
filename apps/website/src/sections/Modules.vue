<script setup lang="ts">
import { CheckIcon, GlobeIcon, ChartIcon, QrIcon } from "../icons";

const modules = [
  {
    icon: GlobeIcon,
    tint: "bg-primary/10 text-primary",
    title: "Página de evento",
    description:
      "Una landing pública cuidada al detalle: portada, agenda, ponentes, tipos de entrada y registro, sin escribir una línea de código.",
    bullets: ["Diseño profesional listo para compartir", "Registro y venta de entradas integrados", "Optimizada para móvil"],
  },
  {
    icon: ChartIcon,
    tint: "bg-warning/10 text-warning",
    title: "Panel de organizador",
    description:
      "Ingresos, aforo y estado de cada asistente en tiempo real. Filtra, busca y exporta sin depender de un Excel paralelo.",
    bullets: ["Métricas en vivo (ventas, check-in, visitas)", "Tabla de asistentes con filtros y estados", "Exportación de datos con un clic"],
  },
  {
    icon: QrIcon,
    tint: "bg-success/10 text-success",
    title: "Check-in con QR",
    description:
      "Un escáner desde el móvil de cualquier voluntario en la puerta. Grande, claro y pensado para usarse con una sola mano.",
    bullets: ["Funciona sin conexión y sincroniza después", "Detecta duplicados y entradas inválidas al instante", "Búsqueda manual como respaldo"],
  },
];
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Tres módulos. Un solo sistema.
      </h2>
      <p class="mt-4 text-lg text-muted-foreground">
        Cada pieza funciona sola, pero juntas eliminan el trabajo manual entre la venta de
        entradas y la puerta del evento.
      </p>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-3">
      <article
        v-for="mod in modules"
        :key="mod.title"
        class="flex flex-col rounded-xl border border-border bg-background p-6 shadow-soft sm:p-7"
      >
        <span :class="['flex h-11 w-11 items-center justify-center rounded-lg', mod.tint]">
          <component :is="mod.icon" class="h-6 w-6" />
        </span>
        <h3 class="mt-5 text-lg font-semibold text-foreground">{{ mod.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-muted-foreground">{{ mod.description }}</p>
        <ul class="mt-5 flex flex-col gap-2.5">
          <li v-for="b in mod.bullets" :key="b" class="flex items-start gap-2.5 text-sm text-foreground">
            <CheckIcon class="mt-0.5 h-4 w-4 shrink-0 text-success" />
            {{ b }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>
