<script setup lang="ts">
const audiences = [
  "Meetups y comunidades tech",
  "Conferencias y congresos",
  "Hackathons",
  "Cursos y formaciones",
  "Networking y afterworks",
];
</script>

<template>
  <section class="border-y border-border bg-muted/30 py-8">
    <div class="mx-auto max-w-6xl px-4 sm:px-6">
      <p class="text-center text-sm font-medium text-muted-foreground">
        Pensado para organizadores de:
      </p>
      <div class="mt-4 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
        <span
          v-for="a in audiences"
          :key="a"
          class="text-sm font-semibold text-foreground/70"
        >
          {{ a }}
        </span>
      </div>
    </div>
  </section>
</template>
