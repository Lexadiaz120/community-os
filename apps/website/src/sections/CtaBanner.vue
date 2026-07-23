<script setup lang="ts">
import { Button } from "@community-os/ui";
import { ArrowRightIcon } from "../icons";
</script>

<template>
  <section id="cta-final" class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
    <div class="relative overflow-hidden rounded-2xl bg-primary px-6 py-16 text-center sm:px-12">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,rgba(255,255,255,0.14),transparent)]"
      />
      <h2 class="relative text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
        Tu próximo evento merece algo mejor que un Excel
      </h2>
      <p class="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
        Crea tu página de evento, activa el panel y prepara el check-in en el mismo día.
        Sin tarjeta, sin compromiso.
      </p>
      <div class="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Button as="a" href="#top" variant="secondary" size="lg" class="bg-background text-foreground hover:bg-background/90">
          Crear mi primer evento gratis
          <ArrowRightIcon class="h-4 w-4" />
        </Button>
      </div>
    </div>
  </section>
</template>
