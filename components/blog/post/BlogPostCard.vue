<template>
  <div class="single-blog">
    <div class="single-blog-img">
      <NuxtLink :to="`/blog/${post.id}`">
        <img :src="post.image" alt="post image">
      </NuxtLink>
    </div>

    <div class="blog-meta">
      <span class="comments-type">
        <i class="bi bi-chat"></i>
        <a href="#">11 comments</a>
      </span>

      <span class="date-type">
        <i class="bi bi-calendar"></i>{{ createdAt }}
      </span>
    </div>

    <div class="blog-text">
      <h4>
        <NuxtLink :to="`/blog/${post.id}`">
          {{ post.title }}
        </NuxtLink>
      </h4>

      <p>
        {{ post.preview }}
      </p>
    </div>

    <span>
      <NuxtLink class="ready-btn" :to="`/blog/${post.id}`">
        Read more
      </NuxtLink>
    </span>
  </div>
</template>

<script setup lang="ts">
import type { IBlogPost } from "./types";
import { formatDateTime } from "~/utils/format/date";

const props = defineProps<{
  post: IBlogPost
}>()

const createdAt = computed(() => formatDateTime(props.post.createdAt))
</script>

<style scoped>

</style>
