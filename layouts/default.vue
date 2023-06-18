<template>
  <TheHeader />
  <main>
    <slot/>
  </main>
  <TheFooter />
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
    { src: 'vendor/bootstrap/js/bootstrap.bundle.min.js', ...options },
    { src: 'vendor/glightbox/js/glightbox.min.js', ...options },
    { src: 'vendor/isotope-layout/isotope.pkgd.min.js', ...options },
    { src: 'vendor/swiper/swiper-bundle.min.js', ...options },
    { src: 'vendor/php-email-form/validate.js', ...options },

    // Template Main JS File
    { src: 'js/main.js', ...options },
  ]
})
</script>
