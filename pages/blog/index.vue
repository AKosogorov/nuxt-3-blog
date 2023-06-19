<template>
  <div class="header-bg page-area">
    <div class="container position-relative">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="slider-content text-center">
            <div class="header-bottom">
              <div class="layer2">
                <h1 class="title2">My Blog</h1>
              </div>
              <div class="layer3">
                <h2 class="title3">Profesional Blog Page</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="blog-page area-padding">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4">
          <BlogSidebar />
        </div>

        <div class="col-md-8 col-sm-8 col-xs-12">
          <div class="row">
            <div class="col-md-12 col-sm-12 col-xs-12">
              <BlogPostCard
                  v-for="post of blogPostsFiltered"
                  :key="post.id"
                  :post="post"
              />
            </div>

            <div v-if="countPages > 1" class="blog-pagination">
              <VPagination
                  to="/blog"
                  :current-page="page"
                  :count="countPages"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { BlogPostApi } from "~/api/BlogPostApi";

const route = useRoute()

const page = computed(() => route.query.page ? +route.query.page : 1)

const countOnPage = 10
const countPages = ref(0)

const blogPosts = await BlogPostApi.get()

countPages.value = Math.ceil(blogPosts.value.length / countOnPage)

const blogPostsFiltered = computed(() => {
  if (!countPages.value) return []

  const start = countOnPage * (page.value - 1)
  const end = countOnPage * page.value

  return blogPosts.value.slice(start, end)
})
</script>
