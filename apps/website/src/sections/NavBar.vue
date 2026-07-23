<script setup lang="ts">
import { ref } from "vue";
import { Button } from "@community-os/ui";
import { MenuIcon, XIcon } from "../icons";

const open = ref(false);

const links = [
  { href: "#producto", label: "Producto" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "Preguntas frecuentes" },
];
</script>

<template>
  <header class="sticky top-0 z-40 border-b border-border/80 bg-background/80 backdrop-blur">
    <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
      <a href="#top" class="flex items-center gap-2 font-semibold text-foreground">
        <span class="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
          C
        </span>
        Community OS
      </a>

      <nav class="hidden items-center gap-8 md:flex">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          {{ link.label }}
        </a>
      </nav>

      <div class="hidden items-center gap-3 md:flex">
        <Button as="a" href="#faq" variant="ghost" size="sm">Iniciar sesión</Button>
        <Button as="a" href="#cta-final" variant="primary" size="sm">Empieza gratis</Button>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
        aria-label="Abrir menú"
        @click="open = !open"
      >
        <MenuIcon v-if="!open" class="h-6 w-6" />
        <XIcon v-else class="h-6 w-6" />
      </button>
    </div>

    <div v-if="open" class="border-t border-border bg-background px-4 py-4 md:hidden">
      <nav class="flex flex-col gap-4">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-sm font-medium text-foreground"
          @click="open = false"
        >
          {{ link.label }}
        </a>
        <Button as="a" href="#cta-final" variant="primary" size="md" class="mt-2 w-full" @click="open = false">
          Empieza gratis
        </Button>
      </nav>
    </div>
  </header>
</template>
