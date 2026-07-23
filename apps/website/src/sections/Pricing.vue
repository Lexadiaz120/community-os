<script setup lang="ts">
import { Button, Badge } from "@community-os/ui";
import { CheckIcon } from "../icons";

const plans = [
  {
    name: "Gratis",
    price: "0€",
    period: "siempre",
    description: "Para probar Community OS con tu próximo evento.",
    cta: "Empieza gratis",
    variant: "outline" as const,
    featured: false,
    features: ["1 evento activo", "Hasta 100 asistentes", "Check-in con QR", "Panel de organizador básico"],
  },
  {
    name: "Pro",
    price: "29€",
    period: "/ evento",
    description: "Para comunidades que organizan eventos con regularidad.",
    cta: "Elegir Pro",
    variant: "primary" as const,
    featured: true,
    features: [
      "Eventos activos ilimitados",
      "Asistentes ilimitados",
      "Analíticas en tiempo real",
      "Varios organizadores por evento",
      "Exportación de datos",
    ],
  },
  {
    name: "Empresas",
    price: "A medida",
    period: "",
    description: "Para organizaciones con varios equipos y eventos en paralelo.",
    cta: "Hablar con ventas",
    variant: "outline" as const,
    featured: false,
    features: ["Todo lo de Pro", "Marca personalizada", "Soporte prioritario", "Acuerdo de nivel de servicio"],
  },
];
</script>

<template>
  <section id="precios" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        Precios simples, sin sorpresas
      </h2>
      <p class="mt-4 text-lg text-muted-foreground">
        Empieza gratis. Paga solo cuando tu evento crezca.
      </p>
    </div>

    <div class="mt-12 grid gap-6 lg:grid-cols-3">
      <div
        v-for="plan in plans"
        :key="plan.name"
        :class="[
          'relative flex flex-col rounded-xl border p-6 sm:p-7',
          plan.featured ? 'border-primary shadow-soft' : 'border-border bg-background',
        ]"
      >
        <Badge v-if="plan.featured" variant="live" class="absolute -top-3 left-6">Más elegido</Badge>

        <h3 class="text-lg font-semibold text-foreground">{{ plan.name }}</h3>
        <p class="mt-1 text-sm text-muted-foreground">{{ plan.description }}</p>

        <p class="mt-5 flex items-baseline gap-1">
          <span class="text-3xl font-bold text-foreground">{{ plan.price }}</span>
          <span v-if="plan.period" class="text-sm text-muted-foreground">{{ plan.period }}</span>
        </p>

        <Button as="a" href="#cta-final" :variant="plan.variant" size="md" class="mt-6 w-full">
          {{ plan.cta }}
        </Button>

        <ul class="mt-6 flex flex-col gap-2.5">
          <li v-for="f in plan.features" :key="f" class="flex items-start gap-2.5 text-sm text-foreground">
            <CheckIcon class="mt-0.5 h-4 w-4 shrink-0 text-success" />
            {{ f }}
          </li>
        </ul>
      </div>
    </div>

    <p class="mt-8 text-center text-sm text-muted-foreground">
      Precios de referencia mientras cerramos el lanzamiento — sujetos a cambios.
    </p>
  </section>
</template>
