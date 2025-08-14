<template>
  <footer class="footer">
    <div class="footer__cord">
      <hr />
      <img src="../assets/footer/laco.png" alt="Laço" />
      <hr />
    </div>

    <nav class="footer__nav">
      <ul class="footer__nav__menu">
        <li
          class="footer__nav__menu__item"
          v-for="(link, index) in footerLinks"
          :key="index"
        >
          <RouterLink :to="link.url">
            {{ link.name }}
            <hr />
          </RouterLink>
        </li>
      </ul>
    </nav>

    <nav class="footer__social">
      <ul class="footer__social__networks">
        <li
          class="footer__social__network"
          v-for="(network, index) in socialNetworks"
          :key="index"
        >
          <a :href="network.url" target="_blank">
            <img :src="network.icon" :alt="network.name" />
          </a>
        </li>
      </ul>
    </nav>

    <p class="footer__copyright">
      Esta promoção não é patrocinada, endossada nem administrada pela Epic
      Games, Inc.
      <br /><br />
      Ao participar deste evento, na extensão permitida pela lei aplicável, os
      participantes concordam em liberar e isentar a Epic Games, Inc., seus
      licenciadores, seus respectivos afiliados e funcionários, executivos,
      diretores, agentes, contratados e outros representantes de toda e qualquer
      reclamação, exigência, ação, perda, responsabilidade e despesa relacionada
      à promoção.
      <br /><br />
      As informações dos participantes ligadas à esta promoção são entregues ao
      patrocinador, não à Epic Games, Inc.
      <br /><br />
      Participe de 11 a 25.11.24. Veja regulamento e Certificado de Autorização
      em loot.hellmanns.com.br. Imagens ilustrativas.
    </p>

    <img
      class="footer__logo"
      src="../assets/footer/unilever.png"
      alt="Unilever"
    />
  </footer>
</template>

<script setup>
const footerLinks = [
  { name: "Dúvidas", url: "/" },
  { name: "Regulamento", url: "/" },
];

const socialNetworks = [
  {
    name: "X",
    url: "https://x.com",
    icon: "/src/assets/footer/redes-twitter.png",
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: "/src/assets/footer/redes-facebook.png",
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: "/src/assets/footer/redes-instagram.png",
  },
  {
    name: "YouTube",
    url: "https://youtube.com",
    icon: "/src/assets/footer/redes-yt.png",
  },
];
</script>

<style scoped lang="scss">
.footer {
  background: $blue;
  padding: 20px 0;

  &__cord {
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    hr {
      width: 100%;
      margin: 0;
      border: none;
      height: 2px;
      background: $white;
    }
  }

  &__nav {
    margin: 30px 0;

    &__menu {
      display: flex;
      justify-content: center;
      gap: 60px;

      &__item {
        a {
          color: $white;
          font-family: $font-condensed;
          letter-spacing: 0.4px;
          text-transform: uppercase;
          font-size: 20px;

          hr {
            content: "";
            display: block;
            margin: 0;
            border: none;
            width: 0%;
            height: 2px;
            background: $white;
            transition: width 0.2s ease;
          }

          &:hover {
            hr {
              width: 100%;
            }
          }
        }
      }
    }
  }

  &__social {
    max-width: 380px;
    margin: 0 auto 30px auto;
    padding: 0 20px;

    &__networks {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }
  }

  &__copyright {
    color: $white;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 12px;
    text-align: center;
    max-width: 1080px;
    padding: 0 20px;
    margin: 0 auto;
  }

  &__logo {
    display: block;
    margin: 30px auto 0 auto;
    max-width: 60px;
    height: auto;
  }
}
</style>
