<script setup lang="ts">
import { CheckIcon, XIcon } from "../icons";

const before = [
  "Una landing improvisada en Canva o Notion que no vende",
  "Excel compartido por email que nadie actualiza a tiempo",
  "Cola en la puerta revisando nombres en una lista de papel",
  "Cero visibilidad de cuántos han llegado hasta el día después",
];

const after = [
  "Página de evento profesional lista en minutos",
  "Panel con ventas, aforo y estado de pago en tiempo real",
  "Check-in con QR desde el móvil, incluso sin wifi",
  "Un solo lugar para vender, controlar y medir el evento",
];
</script>

<template>
  <section id="producto" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Organizar un evento no debería ser un mosaico de herramientas
      </h2>
      <p class="mt-4 text-lg text-muted-foreground">
        La mayoría de comunidades gestionan sus eventos con 4 o 5 herramientas distintas que no
        se hablan entre sí. Community OS las reemplaza por una sola.
      </p>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-2">
      <div class="rounded-xl border border-border bg-background p-6 sm:p-8">
        <p class="text-sm font-semibold uppercase tracking-wide text-muted-foreground">Antes</p>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="item in before" :key="item" class="flex items-start gap-3">
            <XIcon class="mt-0.5 h-5 w-5 shrink-0 text-danger" />
            <span class="text-sm text-muted-foreground">{{ item }}</span>
          </li>
        </ul>
      </div>

      <div class="rounded-xl border border-primary/30 bg-primary/[0.03] p-6 shadow-soft sm:p-8">
        <p class="text-sm font-semibold uppercase tracking-wide text-primary">Con Community OS</p>
        <ul class="mt-4 flex flex-col gap-3">
          <li v-for="item in after" :key="item" class="flex items-start gap-3">
            <CheckIcon class="mt-0.5 h-5 w-5 shrink-0 text-success" />
            <span class="text-sm font-medium text-foreground">{{ item }}</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
