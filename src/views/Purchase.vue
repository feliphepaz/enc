<template>
  <section class="purchase">
    <img
      class="purchase__product -left"
      src="../assets/purchase/maionese.webp"
      alt="Maionese Hellmann's"
    />

    <div class="purchase__content">
      <h2 class="purchase__content__title">
        Garanta aqui o sabor irresistível para a sua gameplay
      </h2>

      <Button title="Compre agora" link="/" />
    </div>

    <img
      class="purchase__product -right"
      src="../assets/purchase/maionese.webp"
      alt="Maionese Hellmann's"
    />
  </section>
</template>

<script setup>
import Button from "@/components/Button.vue";
</script>

<style scoped lang="scss">
.purchase {
  background: $white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  text-align: center;
  padding: 20px;

  &__content {
    &__title {
      font-family: $font-expanded;
      color: $blue;
      text-transform: uppercase;
      font-size: 36px;
      line-height: 42px;
      max-width: 800px;
      margin: 0 auto 20px auto;
      text-align: center;
    }
  }

  @include mobile {
    &__product {
      &.-right {
        display: none;
      }
    }

    &__content {
      &__title {
        font-size: 28px;
        line-height: 32px;
      }
    }
  }
}
</style>
