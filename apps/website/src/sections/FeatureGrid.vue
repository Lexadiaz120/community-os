<script setup lang="ts">
import { WifiOffIcon, ClockIcon, UsersIcon, DownloadIcon, ShieldIcon, BoltIcon } from "../icons";

const features = [
  {
    icon: WifiOffIcon,
    title: "Modo offline",
    description: "El check-in sigue funcionando sin cobertura y sincroniza en cuanto vuelve la conexión.",
  },
  {
    icon: ClockIcon,
    title: "Datos en tiempo real",
    description: "Ventas, aforo y llegadas actualizados al segundo, sin refrescar ni recalcular nada.",
  },
  {
    icon: UsersIcon,
    title: "Equipos en la puerta",
    description: "Varios voluntarios escaneando a la vez, todos viendo el mismo estado actualizado.",
  },
  {
    icon: DownloadIcon,
    title: "Exporta cuando quieras",
    description: "Descarga tu lista de asistentes y ventas en un clic, sin depender de nadie más.",
  },
  {
    icon: ShieldIcon,
    title: "Entradas verificables",
    description: "Cada QR se valida contra tu evento: detecta duplicados y entradas no reconocidas al instante.",
  },
  {
    icon: BoltIcon,
    title: "Listo en minutos",
    description: "Sin instalaciones ni onboarding largo. Creas el evento y ya puedes compartirlo.",
  },
];
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Todo lo que necesitas, nada de lo que sobra
      </h2>
    </div>

    <div class="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="f in features" :key="f.title" class="flex gap-4">
        <span class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground">
          <component :is="f.icon" class="h-5 w-5" />
        </span>
        <div>
          <h3 class="text-sm font-semibold text-foreground">{{ f.title }}</h3>
          <p class="mt-1 text-sm leading-relaxed text-muted-foreground">{{ f.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
