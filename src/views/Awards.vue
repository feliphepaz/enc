<template>
  <section class="awards" id="premios">
    <img
      src="../assets/awards/premios-balao-1.webp"
      alt="Balão da seção de prêmios"
      class="awards__balloon -left"
    />

    <div class="container">
      <img
        class="awards__title -desktop"
        src="../assets/awards/titulo-premios.webp"
        alt="Título da seção de prêmios"
      />
      <img
        class="awards__title -mobile"
        src="../assets/awards/titulo-premios-mob.webp"
        alt="Título da seção de prêmios"
      />

      <div class="awards__items">
        <div class="awards__items__item">
          <img src="../assets/awards/premios-1.webp" alt="Prêmio 1" />
        </div>

        <div class="awards__items__item">
          <img src="../assets/awards/premios-2.webp" alt="Prêmio 2" />
        </div>

        <div class="awards__items__item">
          <img src="../assets/awards/premios-3.webp" alt="Prêmio 3" />
        </div>

        <div class="awards__items__item">
          <img src="../assets/awards/premios-4.webp" alt="Prêmio 4" />
        </div>
      </div>
    </div>

    <img
      src="../assets/awards/premios-balao-2.webp"
      alt="Balão da seção de prêmios"
      class="awards__balloon -right"
    />
  </section>
</template>

<style scoped lang="scss">
.awards {
  background: url("../assets/awards/bg-premios.webp") no-repeat center center;
  background-size: cover;
  padding: 40px 0 120px 0;
  position: relative;

  &__balloon {
    position: absolute;
    z-index: 9;

    &.-left {
      top: -120px;
      left: 0;
      animation: floatBalloonLeft 2s ease-in-out infinite;
    }

    &.-right {
      bottom: 10px;
      right: 10px;
      animation: floatBalloonRight 6s ease-in-out infinite;
    }
  }

  &__title {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;

    &.-mobile {
      display: none;
    }
  }

  &__items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    &__item {
      img {
        width: 100%;
        height: auto;
        display: block;
      }
    }
  }

  @include mobile {
    &__balloon {
      display: none;
    }

    &__title {
      margin: 0 auto 40px auto;

      &.-desktop {
        display: none;
      }
      &.-mobile {
        display: block;
      }
    }

    &__items {
      grid-template-columns: 1fr;
    }
  }
}

@keyframes floatBalloonLeft {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0px);
  }
}

@keyframes floatBalloonRight {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-80px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
