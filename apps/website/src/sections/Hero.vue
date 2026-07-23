<script setup lang="ts">
import { Button, Badge } from "@community-os/ui";
import { ArrowRightIcon, CheckIcon } from "../icons";

const trustPoints = [
  "Sin tarjeta de crédito",
  "Listo en menos de 10 minutos",
  "Funciona sin conexión en la puerta",
];
</script>

<template>
  <section id="top" class="relative overflow-hidden">
    <div
      class="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[480px] bg-[radial-gradient(60%_60%_at_50%_0%,hsl(var(--primary)/0.14),transparent)]"
    />

    <div class="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-16 sm:px-6 sm:pb-24 sm:pt-20 lg:grid-cols-2 lg:items-center lg:pt-28">
      <div>
        <Badge variant="live" class="mb-5">Nuevo · Check-in con QR y modo offline</Badge>

        <h1 class="text-4xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem]">
          El sistema operativo para gestionar tus eventos, de principio a fin
        </h1>

        <p class="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Community OS reúne la página pública de tu evento, el panel de control del organizador
          y el escáner de entradas en la puerta en un solo lugar. Deja de saltar entre hojas de
          cálculo, formularios y apps sueltas.
        </p>

        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button as="a" href="#cta-final" variant="primary" size="lg">
            Crea tu primer evento gratis
            <ArrowRightIcon class="h-4 w-4" />
          </Button>
          <Button as="a" href="#como-funciona" variant="outline" size="lg">
            Ver cómo funciona
          </Button>
        </div>

        <ul class="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
          <li
            v-for="point in trustPoints"
            :key="point"
            class="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <CheckIcon class="h-4 w-4 shrink-0 text-success" />
            {{ point }}
          </li>
        </ul>
      </div>

      <div class="relative">
        <div class="overflow-hidden rounded-xl border border-border bg-background shadow-soft">
          <div class="flex items-center gap-1.5 border-b border-border bg-muted/50 px-4 py-3">
            <span class="h-2.5 w-2.5 rounded-full bg-danger/60" />
            <span class="h-2.5 w-2.5 rounded-full bg-warning/60" />
            <span class="h-2.5 w-2.5 rounded-full bg-success/60" />
            <span class="ml-3 text-xs text-muted-foreground">community-os.app/dashboard</span>
          </div>

          <div class="grid gap-4 p-5">
            <div class="grid grid-cols-3 gap-3">
              <div class="rounded-lg border border-border p-3">
                <p class="text-xs text-muted-foreground">Entradas</p>
                <p class="mt-1 text-xl font-bold text-foreground">1,248</p>
              </div>
              <div class="rounded-lg border border-border p-3">
                <p class="text-xs text-muted-foreground">Ingresos</p>
                <p class="mt-1 text-xl font-bold text-foreground">18.940€</p>
              </div>
              <div class="rounded-lg border border-border p-3">
                <p class="text-xs text-muted-foreground">Check-in</p>
                <p class="mt-1 text-xl font-bold text-success">76%</p>
              </div>
            </div>

            <div class="rounded-lg border border-border">
              <div
                v-for="i in 3"
                :key="i"
                class="flex items-center justify-between border-b border-border px-4 py-3 last:border-b-0"
              >
                <div class="flex items-center gap-3">
                  <span class="h-8 w-8 rounded-full bg-muted" />
                  <div class="h-2 w-24 rounded bg-muted" />
                </div>
                <span
                  class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                  :class="i === 1 ? 'bg-success/10 text-success' : 'bg-muted text-muted-foreground'"
                >
                  {{ i === 1 ? "Checked-in" : "Pendiente" }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="absolute -bottom-6 -left-6 hidden w-48 rounded-lg border border-border bg-background p-4 shadow-soft sm:block">
          <p class="text-xs font-medium text-muted-foreground">Escaneado en la puerta</p>
          <p class="mt-1 flex items-center gap-1.5 text-sm font-semibold text-success">
            <CheckIcon class="h-4 w-4" /> Valid Ticket
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
