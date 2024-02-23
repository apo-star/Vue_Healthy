<script setup lang="ts">
import Container from "./Container.vue";
import Title from "./Title.vue";

import { ref } from "vue";

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

import { Pagination, Navigation } from "swiper/modules";

const prev = ref(null);
const next = ref(null);
const modules = [Pagination, Navigation];
</script>

<template>
  <section class="about">
    <Container>
      <div class="about__inner">
        <Title
          title="About"
          subtitle="The Basics Of Healthy Food"
          className="about__title"
        />
        <p class="about__text">
          In&nbsp;aliqua ea&nbsp;ullamco ad&nbsp;est ex&nbsp;non deserunt nulla.
          Consectetur sint ea&nbsp;aliquip aliquip consectetur voluptate est.
          Eu&nbsp;minim dolore laboris enim mollit voluptate irure esse aliquip.
        </p>
        <div class="about__slider about-slider">
          <button ref="prev" class="swiper-button-prev"></button>
          <swiper
            :navigation="{
              prevEl: prev,
              nextEl: next,
            }"
            :modules="modules"
            :slides-per-view="2"
            :space-between="34"
          >
            <swiper-slide>
              <div class="about-slider__slide">
                <picture>
                  <source
                    srcset="/images/slider/slide-1.webp"
                    type="image/webp"
                  />
                  <img src="/images/slider/slide-1.png" />
                </picture>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="about-slider__slide">
                <picture>
                  <source
                    srcset="/images/slider/slide-2.webp"
                    type="image/webp"
                  />
                  <img src="/images/slider/slide-2.png" />
                </picture>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="about-slider__slide">
                <picture>
                  <source
                    srcset="/images/slider/slide-1.webp"
                    type="image/webp"
                  />
                  <img src="/images/slider/slide-1.png" />
                </picture>
              </div>
            </swiper-slide>
            <swiper-slide>
              <div class="about-slider__slide">
                <picture>
                  <source
                    srcset="/images/slider/slide-2.webp"
                    type="image/webp"
                  />
                  <img src="/images/slider/slide-2.png" />
                </picture>
              </div>
            </swiper-slide>
          </swiper>
          <button ref="next" class="swiper-button-next"></button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss" scoped>
.about {
  margin-top: rem(-240);
  margin-bottom: rem(60);
  &__inner {
    position: relative;
    padding: rem(60) 0;
    text-align: center;
    background: var(--color-dark);
    min-height: rem(736);
    box-shadow: 0 rem(2) rem(5) rgba(0, 0, 0, 0.1);
  }
  &__title {
    margin-bottom: rem(12);
  }
  &__text {
    font-weight: 400;
    font-size: rem(16);
    line-height: 1.88;
    text-align: center;
    max-width: rem(734);
    margin: 0 auto;
    margin-bottom: rem(90);
    color: var(--color-gray);
  }
  &__slider {
    position: relative;
    max-width: rem(734);
    margin: 0 auto;
  }
}

.about-slider {
  &__slide {
    min-height: rem(273);
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>
