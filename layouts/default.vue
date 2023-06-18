<template>
  <main>
    <slot/>
  </main>
</template>

<script setup lang="ts">
useHead({
  script: [
    // Vendor JS Files
    { src: 'vendor/bootstrap/js/bootstrap.bundle.min.js', defer: true, async: true },
    { src: 'vendor/glightbox/js/glightbox.min.js', defer: true, async: true },
    { src: 'vendor/isotope-layout/isotope.pkgd.min.js', defer: true, async: true },
    { src: 'vendor/swiper/swiper-bundle.min.js', defer: true, async: true },
    { src: 'vendor/php-email-form/validate.js', defer: true, async: true },

    // Template Main JS File
    { src: 'js/main.js', defer: true, async: true },
  ]
})
</script>
