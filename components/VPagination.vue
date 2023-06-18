<template>
  <ul class="pagination">
    <li v-if="currentPage !== 1" class="page-item">
      <NuxtLink class="page-link" :to="`${to}?page=${currentPage + 1}`">&lt;</NuxtLink>
    </li>

    <li
        v-for="page of count"
        :key="page"
        class="page-item"
        :class="{
          active: currentPage === page
        }"
    >
      <NuxtLink class="page-link" :to="`${to}?page=${page}`">
        {{ page }}
      </NuxtLink>
    </li>

    <li v-if="currentPage !== count" class="page-item">
      <NuxtLink class="page-link" :to="`${to}?page=${currentPage + 1}`">&gt;</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
interface IVPagination {
  currentPage: number
  count: number
  to: string
}

defineProps<IVPagination>()
</script>
