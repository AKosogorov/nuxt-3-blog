import type { Ref } from "@vue/reactivity";
import type { IBlogPost } from "~/components/blog/post/types";

const apiUrl = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts'

export const BlogPostApi = {
  get: async () => {
    try {
      const { data }: { data: Ref<IBlogPost[]>} = await useFetch(apiUrl)

      return data
    } catch (e: unknown) {
      throw new Error('Не удалось загрузить список статей блога')
    }
  }
}
