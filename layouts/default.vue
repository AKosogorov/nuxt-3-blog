<template>
  <TheHeader />

  <main id="main">
    <slot/>
  </main>

  <TheFooter />

<!--  <div id="preloader"></div>-->
<!--  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>-->
</template>

<script setup lang="ts">

interface IScript {
  defer: boolean
  tagPosition: 'bodyClose'
}
const options: IScript = {
  defer: true,
  tagPosition: 'bodyClose'
}

useHead({
  script: [
    // Vendor JS Files
    { src: '/vendor/bootstrap/js/bootstrap.bundle.min.js', ...options },
    { src: '/vendor/glightbox/js/glightbox.min.js', ...options },
    { src: '/vendor/isotope-layout/isotope.pkgd.min.js', ...options },
    { src: '/vendor/swiper/swiper-bundle.min.js', ...options },
    { src: '/vendor/php-email-form/validate.js', ...options },

    // Template Main JS File
    { src: '/js/main.js', ...options },
  ]
})
</script>
