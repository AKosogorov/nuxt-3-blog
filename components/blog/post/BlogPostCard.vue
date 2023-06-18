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
        <i class="bi bi-calendar"></i>{{ post.createdAt }} 2016-03-05 / 09:10:16
      </span>
    </div>

    <div class="blog-text">
      <h4>
        <a href="#">{{ post.title }}</a>
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
import { IBlogPost } from "./types";

defineProps<{
  post: IBlogPost
}>()
</script>

<style scoped>

</style>
