<template>
  <div class="header-bg page-area">
    <div class="container position-relative">
      <div class="row">
        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="slider-content text-center">
            <div class="header-bottom">
              <div class="layer2">
                <h1 class="title2">Blog Details </h1>
              </div>
              <div class="layer3">
                <h2 class="title3">profesional Blog Page</h2>
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
              <BlogPostDetails :post="post" />

              <div class="clear"></div>

              <div class="single-post-comments">
                <div class="comments-area">
                  <div class="comments-heading">
                    <h3>6 comments</h3>
                  </div>
                  <div class="comments-list">
                    <ul>
                      <li class="threaded-comments">
                        <div class="comments-details">
                          <div class="comments-list-img">
                            <img src="/img/blog/b02.jpg" alt="post-author">
                          </div>
                          <div class="comments-content-wrap">
                              <span>
                                <b><a href="#">demo</a></b>
                                Post author
                                <span class="post-time">October 6, 2014 at 4:25 pm</span>
                                <a href="#">Reply</a>
                              </span>
                            <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="comments-details">
                          <div class="comments-list-img">
                            <img src="/img/blog/b02.jpg" alt="post-author">
                          </div>
                          <div class="comments-content-wrap">
                              <span>
                                <b><a href="#">admin</a></b>
                                Post author
                                <span class="post-time">October 6, 2014 at 6:18 pm </span>
                                <a href="#">Reply</a>
                              </span>
                            <p>Quisque orci nibh, porta vitae sagittis sit amet, vehicula vel mauris. Aenean at justo dolor. Fusce ac sapien bibendum, scelerisque libero nec</p>
                          </div>
                        </div>
                      </li>
                      <li class="threaded-comments">
                        <div class="comments-details">
                          <div class="comments-list-img">
                            <img src="/img/blog/b02.jpg" alt="post-author">
                          </div>
                          <div class="comments-content-wrap">
                              <span>
                                <b><a href="#">demo</a></b>
                                Post author
                                <span class="post-time">October 6, 2014 at 7:25 pm</span>
                                <a href="#">Reply</a>
                              </span>
                            <p>Quisque semper nunc vitae erat pellentesque, ac placerat arcu consectetur</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="comment-respond">
                  <h3 class="comment-reply-title">Leave a Reply </h3>
                  <span class="email-notes">Your email address will not be published. Required fields are marked *</span>
                  <form action="#">
                    <div class="row">
                      <div class="col-lg-4 col-md-4">
                        <p>Name *</p>
                        <input type="text" />
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <p>Email *</p>
                        <input type="email" />
                      </div>
                      <div class="col-lg-4 col-md-4">
                        <p>Website</p>
                        <input type="text" />
                      </div>
                      <div class="col-lg-12 col-md-12 col-sm-12 comment-form-comment">
                        <p>Website</p>
                        <textarea id="message-box" cols="30" rows="10"></textarea>
                        <input type="submit" value="Post Comment" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "@vue/reactivity";
import type { IBlogPost } from "~/components/blog/post/types";

const { id }: { id?: string } = useRoute().params
const { data: post }: { data: Ref<IBlogPost> } = await useFetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${id}`, { key: id })

if (!post.value) {
  throw createError({ statusCode: 404, statusMessage: `Пост с id ${id} не существует` })
}
</script>
