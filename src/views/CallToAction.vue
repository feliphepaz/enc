<template>
  <section class="call-to-action">
    <h1 class="call-to-action__title">
      Participe do <strong>desafio Hellmann's Loot Irresistível</strong> e
      concorra a prêmios especiais
    </h1>

    <Button title="Participe" link="/" />
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style scoped lang="scss">
.call-to-action {
  background: $white;
  text-align: center;
  padding: 40px 20px;

  &__title {
    font-family: $font-expanded;
    color: $blue;
    text-transform: uppercase;
    font-size: 36px;
    line-height: 42px;
    max-width: 1180px;
    margin: 0 auto 20px auto;
    text-align: center;

    strong {
      color: $dark-blue;
    }
  }

  @include mobile {
    &__title {
      font-size: 28px;
      line-height: 32px;
    }
  }
}
</style>
