<script setup lang="ts">
import { computed } from "vue";
import { cn } from "../utils/cn";

type Variant = "draft" | "live" | "paid" | "pending" | "refunded" | "outline";

const props = withDefaults(
  defineProps<{
    variant?: Variant;
    dot?: boolean;
  }>(),
  {
    variant: "draft",
    dot: false,
  },
);

const variantClasses: Record<Variant, string> = {
  draft: "bg-muted text-muted-foreground",
  live: "bg-primary/10 text-primary",
  paid: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  refunded: "bg-danger/10 text-danger",
  outline: "border border-border text-foreground",
};

const dotClasses: Record<Variant, string> = {
  draft: "bg-muted-foreground",
  live: "bg-primary",
  paid: "bg-success",
  pending: "bg-warning",
  refunded: "bg-danger",
  outline: "bg-foreground",
};

const classes = computed(() =>
  cn(
    "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
    variantClasses[props.variant],
  ),
);
</script>

<template>
  <span :class="classes">
    <span v-if="dot" :class="cn('h-1.5 w-1.5 rounded-full', dotClasses[props.variant])" />
    <slot />
  </span>
</template>
