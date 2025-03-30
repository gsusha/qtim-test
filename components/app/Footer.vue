<template>
  <div class="footer">
    <div class="footer__content container">
      <div class="footer__cta">
        <div class="footer__overline">
          {{ t('footer.cta.overline') }}
        </div>
        <div class="footer__title">
          {{ t('footer.cta.title') }}
        </div>
      </div>

      <div class="footer__contacts">
        <div class="footer__contact">
          <div class="footer__contact-title">{{ t('footer.contacts.for_questions') }}</div>
          <div class="footer__contact-content">
            <p><a href="tel:89202780068">+7 (920) 278—00—68</a></p>
            <p><a href="mailto:qtim@agency.com">qtim@agency.com</a></p>
          </div>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">{{ t('footer.contacts.office_russia') }}</div>
          <div class="footer__contact-content">
            {{ t('footer.contacts.russia_address') }}
          </div>
          <a href="#" class="footer__contact-button"><LocationIcon /></a>
        </div>
        <div class="footer__contact">
          <div class="footer__contact-title">{{ t('footer.contacts.office_dubai') }}</div>
          <div class="footer__contact-content">
            {{ t('footer.contacts.dubai_address') }}
          </div>
          <a href="#" class="footer__contact-button"><LocationIcon /></a>
        </div>
      </div>

      <div class="footer__bottom">
        <div class="footer__links">
          <a class="footer__link" href="#">Facebook</a>
          <a class="footer__link" href="#">Instagram</a>
          <a class="footer__link" href="#">Telegram</a>
        </div>
        <div class="footer__go">

          {{ t('footer.buttons.go') }}
        </div>
        <div class="footer__links">
          <a class="footer__link" href="#">Behance</a>
          <a class="footer__link" href="#">LinkedIn</a>
          <a class="footer__link" href="#">{{ t('footer.buttons.privacy_policy') }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import LocationIcon from '~/assets/images/location.svg';
const { t } = useI18n();
</script>

<style lang="scss" scoped>
@use "assets/styles/colors" as colors;

.footer {
  height: 900px;

  background: colors.$purple-accent;
  padding: 140px 0 40px 0;

  overflow: hidden;

  position: relative;

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }

  &__cta {
    width: 464px;
  }

  &__overline {
    font-size: 16px;
    margin-bottom: 56px;
  }

  &__title {
    font-size: 112px;
    text-decoration: underline 1px;
    text-underline-offset: 14px;
    line-height: 100%;
  }

  &__contacts {
    position: absolute;
    top: 215px;
    right: 26%;

    width: 152px;

    display: flex;
    flex-direction: column;
    gap: 36px;
  }

  &__contact {
    font-size: 16px;

    display: flex;
    flex-direction: column;
    gap: 12px;

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 32px;
      height: 32px;
      background: colors.$dark;
      border-radius: 50%;
    }

    a {
      color: colors.$dark;
    }
  }

  &__bottom {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }

  &__links {
    display: flex;
    align-items: center;
    gap: 32px;
  }

  &__link {
    font-size: 16px;
    color: colors.$dark;
    text-decoration: underline 1px;
    text-underline-offset: 4px;
  }

  &__go {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    color: colors.$lightest;

    &::before {
      content: "";
      display: block;

      width: 360px;
      height: 360px;
      border-radius: 50%;
      background: colors.$dark;

      position: absolute;
      top: -100px;
      left: 50%;
      transform: translateX(-50%);

      z-index: -1;
    }
  }
}
</style>