<script setup lang="ts">
import { watch } from "vue";
import { cn } from "../utils/cn";

const props = withDefaults(
  defineProps<{
    open: boolean;
    title?: string;
  }>(),
  {
    title: undefined,
  },
);

const emit = defineEmits<{ "update:open": [value: boolean] }>();

function close() {
  emit("update:open", false);
}

// Prevents background scroll while the modal is mounted over content.
watch(
  () => props.open,
  (isOpen) => {
    document.body.style.overflow = isOpen ? "hidden" : "";
  },
);
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div class="absolute inset-0 bg-foreground/40 backdrop-blur-sm" @click="close" />
        <div
          role="dialog"
          aria-modal="true"
          :class="cn('relative w-full max-w-md rounded-lg border border-border bg-background p-6 shadow-soft')"
          tabindex="-1"
          @keydown.esc="close"
        >
          <div v-if="title || $slots.header" class="mb-4 flex items-center justify-between">
            <h2 class="text-base font-semibold text-foreground">
              <slot name="header">{{ title }}</slot>
            </h2>
            <button
              type="button"
              class="text-muted-foreground hover:text-foreground"
              aria-label="Close"
              @click="close"
            >
              ✕
            </button>
          </div>
          <slot />
          <div v-if="$slots.footer" class="mt-6 flex justify-end gap-2">
            <slot name="footer" />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.15s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
