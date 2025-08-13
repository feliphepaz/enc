<template>
  <section class="home">
    <img
      class="home__logo-promo"
      src="../assets/home/logo-promo.webp"
      alt="Logo da promoção"
    />
  </section>
</template>

<style scoped lang="scss">
.home {
  background: url("../assets/home/bg-home.webp") no-repeat center center;
  margin-top: $header-height-desktop;
  height: 648px;

  &__logo-promo {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 700px;
    animation: moveUpDown 2s ease-in-out infinite;
  }

  @include mobile {
    background: url("../assets/home/bg-home-mob.webp") no-repeat left bottom;
    margin-top: 0;
    height: 800px;

    &__logo-promo {
      top: 40%;
    }
  }
}

@keyframes moveUpDown {
  50% {
    transform: translate(-50%, -53%);
  }
  100% {
    transform: translate(-50%, -50%);
  }
}
</style>
