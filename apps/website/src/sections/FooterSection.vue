<script setup lang="ts">
const columns = [
  {
    title: "Producto",
    links: [
      { label: "Página de evento", href: "#producto" },
      { label: "Panel de organizador", href: "#producto" },
      { label: "Check-in con QR", href: "#producto" },
      { label: "Precios", href: "#precios" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Cómo funciona", href: "#como-funciona" },
      { label: "Preguntas frecuentes", href: "#faq" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Términos del servicio", href: "#" },
      { label: "Privacidad", href: "#" },
    ],
  },
];
</script>

<template>
  <footer class="border-t border-border">
    <div class="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <a href="#top" class="flex items-center gap-2 font-semibold text-foreground">
            <span class="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              C
            </span>
            Community OS
          </a>
          <p class="mt-3 max-w-xs text-sm text-muted-foreground">
            El sistema operativo para gestionar la página, el panel y el check-in de tus eventos.
          </p>
        </div>

        <div v-for="col in columns" :key="col.title">
          <p class="text-sm font-semibold text-foreground">{{ col.title }}</p>
          <ul class="mt-3 flex flex-col gap-2.5">
            <li v-for="link in col.links" :key="link.label">
              <a :href="link.href" class="text-sm text-muted-foreground hover:text-foreground">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row">
        <p>© {{ new Date().getFullYear() }} Community OS. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>
