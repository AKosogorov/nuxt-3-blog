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
          <div class="page-head-blog">
            <div class="single-blog-page">

              <form action="#">
                <div class="search-option">
                  <input type="text" placeholder="Search...">
                  <button class="button" type="submit">
                    <i class="bi bi-search"></i>
                  </button>
                </div>
              </form>

            </div>
            <div class="single-blog-page">

              <div class="left-blog">
                <h4>recent post</h4>
                <div class="recent-post">

                  <div class="recent-single-post">
                    <div class="post-img">
                      <a href="#">
                        <img src="/img/blog/1.jpg" alt="">
                      </a>
                    </div>
                    <div class="pst-content">
                      <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                  </div>

                  <div class="recent-single-post">
                    <div class="post-img">
                      <a href="#">
                        <img src="/img/blog/2.jpg" alt="">
                      </a>
                    </div>
                    <div class="pst-content">
                      <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                  </div>

                  <div class="recent-single-post">
                    <div class="post-img">
                      <a href="#">
                        <img src="/img/blog/3.jpg" alt="">
                      </a>
                    </div>
                    <div class="pst-content">
                      <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                  </div>

                  <div class="recent-single-post">
                    <div class="post-img">
                      <a href="#">
                        <img src="/img/blog/4.jpg" alt="">
                      </a>
                    </div>
                    <div class="pst-content">
                      <p><a href="#"> Redug Lerse dolor sit amet consect adipis elit.</a></p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
            <div class="single-blog-page">
              <div class="left-blog">
                <h4>categories</h4>
                <ul>
                  <li>
                    <a href="#">Portfolio</a>
                  </li>
                  <li>
                    <a href="#">Project</a>
                  </li>
                  <li>
                    <a href="#">Design</a>
                  </li>
                  <li>
                    <a href="#">wordpress</a>
                  </li>
                  <li>
                    <a href="#">Joomla</a>
                  </li>
                  <li>
                    <a href="#">Html</a>
                  </li>
                  <li>
                    <a href="#">Website</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="single-blog-page">
              <div class="left-blog">
                <h4>archive</h4>
                <ul>
                  <li>
                    <a href="#">07 July 2016</a>
                  </li>
                  <li>
                    <a href="#">29 June 2016</a>
                  </li>
                  <li>
                    <a href="#">13 May 2016</a>
                  </li>
                  <li>
                    <a href="#">20 March 2016</a>
                  </li>
                  <li>
                    <a href="#">09 Fabruary 2016</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="single-blog-page">
              <div class="left-tags blog-tags">
                <div class="popular-tag left-side-tags left-blog">
                  <h4>popular tags</h4>
                  <ul>
                    <li>
                      <a href="#">Portfolio</a>
                    </li>
                    <li>
                      <a href="#">Project</a>
                    </li>
                    <li>
                      <a href="#">Design</a>
                    </li>
                    <li>
                      <a href="#">Website</a>
                    </li>
                    <li>
                      <a href="#">Joomla</a>
                    </li>
                    <li>
                      <a href="#">Html</a>
                    </li>
                    <li>
                      <a href="#">wordpress</a>
                    </li>
                    <li>
                      <a href="#">Masonry</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
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
import type { IBlogPost } from "~/components/blog/post/types";
import { reactive } from "@vue/reactivity";

const route = useRoute()

const page = computed(() => +route.query.page || 1)
const countOnPage = 10
const countPages = ref(0)

const blogPosts = reactive<IBlogPost[]>([])

const { data } = await useFetch<IBlogPost[]>(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts`)
blogPosts.push(...data.value)

countPages.value = Math.ceil(blogPosts.length / countOnPage)

const blogPostsFiltered = computed(() => {
  if (!countPages.value) return []

  const start = countOnPage * (page.value - 1)
  const end = countOnPage * page.value

  return blogPosts.slice(start, end)
})
</script>
