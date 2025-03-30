<template>
  <header class="header">
    <LogoQTM class="header__logo"  />
    <div class="header__navigation">
      <nav class="header__menu">
        <ul class="header__menu-list">
          <li class="header__menu-item">{{ t('header.nav.works') }}</li>
          <li class="header__menu-item">{{ t('header.nav.about') }}</li>
        </ul>
      </nav>
      <div class="header__actions">
        <div class="header__action header__action--lang">
          <UKIcon class="header__action header__action--lang-icon" />
        </div>
        <div class="header__action header__action--button">
          {{ t('header.button') }}
        </div>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import LogoQTM from '@/assets/images/logo.svg'
import UKIcon from '@/assets/images/uk-icon.svg'

const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "assets/styles/colors" as colors;

.header {
  width: 100%;
  height: 121px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &__logo {
    width: 84px;
    height: 25px;
  }

  &__navigation {
    display: flex;
    align-items: center;
    gap: 70px;
  }

  &__menu {
    &-list {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    &-item {
      font-size: 20px;
    }
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  &__action {
    cursor: pointer;

    &--button {
      background: colors.$dark;
      color: colors.$white;

      font-size: 20px;
      border-radius: 50px;
      padding: 16px 32px;
    }

    &--lang {
      display: flex;
      align-items: center;
      justify-content: center;

      height: 52px;
      width: 52px;
      border-radius: 50%;
      border: 2px solid colors.$light;

      &-icon {
        width: 24px;
        height: 24px;
      }
    }
  }
}
</style>