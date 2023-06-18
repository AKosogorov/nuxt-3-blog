<template>
  <article class="blog-post-wrapper">
    <div class="post-thumbnail">
      <img :src="post.image" alt="post image" />
    </div>

    <div class="post-information">
      <h2>{{ post.title }}</h2>

      <div class="entry-meta">
        <span class="author-meta"><i class="bi bi-person"></i> <a href="#">admin</a></span>
        <span><i class="bi bi-clock"></i>{{ createdAt }}</span>
        <span class="tag-meta">
          <i class="bi bi-folder"></i>
          <a href="#">painting</a>,
          <a href="#">work</a>
        </span>

        <span>
          <i class="bi bi-tags"></i>
          <a href="#">tools</a>,
          <a href="#"> Humer</a>,
          <a href="#">House</a>
        </span>
        <span><i class="bi bi-chat"></i> <a href="#">6 comments</a></span>
      </div>

      <div class="entry-content">
        <p>{{ post.description }}</p>

        <blockquote>
          <p>{{ post.preview}}</p>
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { IBlogPost } from "./types";
import { formatDateLong } from "~/utils/format/date";

const props = defineProps<{
  post: IBlogPost
}>()

const createdAt = computed(() => formatDateLong(props.post.createdAt))
</script>
