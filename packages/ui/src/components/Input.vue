<script setup lang="ts">
import { computed, useId } from "vue";
import { cn } from "../utils/cn";

const props = withDefaults(
  defineProps<{
    modelValue?: string;
    label?: string;
    hint?: string;
    error?: string;
    required?: boolean;
    type?: string;
    placeholder?: string;
  }>(),
  {
    modelValue: "",
    type: "text",
    required: false,
  },
);

defineEmits<{ "update:modelValue": [value: string] }>();

const id = useId();
const describedBy = computed(() =>
  props.error ? `${id}-error` : props.hint ? `${id}-hint` : undefined,
);
</script>

<template>
  <div class="flex flex-col gap-1.5">
    <label v-if="label" :for="id" class="text-sm font-medium text-foreground">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <div class="relative">
      <span
        v-if="$slots.icon"
        class="pointer-events-none absolute inset-y-0 left-3 flex items-center text-muted-foreground"
      >
        <slot name="icon" />
      </span>
      <input
        :id="id"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        :required="required"
        :aria-invalid="!!error"
        :aria-describedby="describedBy"
        :class="
          cn(
            'h-10 w-full rounded-md border border-border bg-background px-3 text-sm text-foreground',
            'placeholder:text-muted-foreground',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
            $slots.icon && 'pl-9',
            error && 'border-danger focus-visible:ring-danger',
          )
        "
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      >
    </div>
    <p v-if="error" :id="`${id}-error`" class="text-xs text-danger">{{ error }}</p>
    <p v-else-if="hint" :id="`${id}-hint`" class="text-xs text-muted-foreground">{{ hint }}</p>
  </div>
</template>
