<template>
  <section class="how-to-participate" id="como-participar">
    <img
      class="how-to-participate__title"
      src="../assets/how-to-participate/titulo-como-jogar.webp"
      alt="Título da seção como participar"
    />

    <div class="how-to-participate__items">
      <div class="how-to-participate__items__inner">
        <div class="how-to-participate__items__inner__item">
          <img
            src="../assets/how-to-participate/como-participar-1.webp"
            alt="Passo 1: Acesse a ilha"
          />
        </div>

        <div class="how-to-participate__items__inner__item">
          <img
            src="../assets/how-to-participate/como-participar-2.webp"
            alt="Passo 2: Jogue e receba seu código"
          />
        </div>

        <div class="how-to-participate__items__inner__item">
          <RouterLink to="/">
            <img
              src="../assets/how-to-participate/como-participar-3.webp"
              alt="Passo 3: Inscreva-se"
            />
          </RouterLink>
        </div>
      </div>
    </div>

    <img
      class="how-to-participate__text -desktop"
      src="../assets/how-to-participate/box-texto.webp"
      alt="Título da seção como participar mobile"
    />
    <img
      class="how-to-participate__text -mobile"
      src="../assets/how-to-participate/box-texto-mob.webp"
      alt="Título da seção como participar mobile"
    />
  </section>
</template>

<style scoped lang="scss">
.how-to-participate {
  background: $dark-blue;
  position: relative;
  padding: 70px 20px 40px 20px;

  &__title {
    max-width: 100%;
    height: auto;
    display: block;
    position: absolute;
    padding: 0 20px;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }

  &__items {
    display: block;
    background: $yellow;
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px 20px;
    border-radius: 20px;

    &__inner {
      display: flex;
      justify-content: space-between;
      padding: 20px;
      border: 4px solid $blue;
      border-radius: 20px;

      &__item {
        img {
          max-width: 100%;
          height: auto;
          display: block;
        }
      }
    }
  }

  &__text {
    max-width: 100%;
    height: auto;
    display: block;
    margin: 40px auto 0 auto;

    &.-mobile {
      display: none;
    }
  }

  @include mobile {
    &__items {
      &__inner {
        flex-direction: column;
        align-items: center;
        gap: 40px;
      }
    }

    &__text {
      &.-desktop {
        display: none;
      }

      &.-mobile {
        display: block;
      }
    }
  }
}
</style>
