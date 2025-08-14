<template>
  <a class="button" :href="link">{{ title }}</a>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});
</script>

<style scoped lang="scss">
.button {
  background: $yellow;
  color: $blue;
  font-family: $font-expanded;
  text-transform: uppercase;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 1px;
  padding: 16px 32px;
  border-radius: 30px;
  box-shadow: 2px 8px 8px rgba(0, 0, 0, 0.2);
  transition: 0.2s;

  &:hover {
    background: $blue;
    color: $yellow;
  }

  @include mobile {
    font-size: 20px;
    line-height: 24px;
  }
}
</style>
