<template>
  <header class="header">
    <nav class="header__nav container">
      <button
        class="header__nav__menu-mobile"
        @click="isMenuOpen = !isMenuOpen"
      >
        <img src="../assets/menu-mobile.png" alt="Menu mobile" />
      </button>

      <ul
        class="header__nav__menu"
        :class="{ 'header__nav__menu--open': isMenuOpen }"
      >
        <li
          v-for="(item, index) in menuItems"
          class="header__nav__menu__item"
          :key="index"
        >
          <a class="header__nav__menu__item__link" href="#">
            {{ item }}
            <hr class="header__nav__menu__item__link__line" />
          </a>
        </li>
      </ul>

      <a href="#" class="header__nav__cta">Participe</a>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";

const menuItems = ["Home", "Prêmios", "Como participar", "Ranking"];

const isMenuOpen = ref(false);
</script>

<style scoped lang="scss">
.header {
  background: $yellow;

  &__nav {
    display: flex;
    justify-content: space-between;
    gap: 120px;

    &__menu-mobile {
      display: none;
      flex: none;
    }

    &__menu {
      display: flex;
      justify-content: space-between;
      overflow: hidden;
      transition: max-height 0.2s ease-out;
      padding: 0;
      width: 100%;

      &__item {
        &__link {
          font-family: $font-expanded;
          text-transform: uppercase;
          font-size: 16px;
          color: $blue;
          padding: 20px 0;

          &__line {
            content: "";
            display: block;
            margin: 0;
            border: none;
            width: 0%;
            height: 2px;
            background-color: $blue;
            transition: width 0.2s ease;
          }

          &:hover {
            .header__nav__menu__item__link__line {
              width: 100%;
            }
          }
        }
      }
    }

    &__cta {
      background-color: $blue;
      color: $yellow;
      padding: 20px 10px;
      font-family: $font-expanded;
      text-transform: uppercase;
      font-size: 16px;
    }
  }

  @include mobile {
    position: relative;

    &__nav {
      &__menu-mobile {
        display: block;
        background: none;
        border: none;
        cursor: pointer;
        padding: 20px 0;
      }

      &__menu {
        position: absolute;
        top: $header-height;
        display: block;
        max-height: 0;
        background: $yellow;
        margin-left: -20px;
        padding-left: 20px;

        &--open {
          max-height: 500px;
        }
      }
    }
  }
}
</style>
