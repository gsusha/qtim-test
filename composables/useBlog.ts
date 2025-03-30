import type { BlogPost } from '~/types/blog';

export function useBlog() {
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const posts = ref<BlogPost[]>([]);
  const displayedPosts = ref<BlogPost[]>([]);

  const currentPage = ref<number>(1);

  const postsPerPage = 8;
  const totalPosts = ref<number>(0);
  const totalPages = ref<number>(0);

  const apiUrl = useRuntimeConfig().public.apiUrl;

  const fetchPosts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${apiUrl}/posts`);
      if (!response.ok) throw new Error('Ошибка загрузки постов');

      const data: BlogPost[] = await response.json();

      posts.value = data;
      totalPosts.value = data.length;
      totalPages.value = Math.ceil(totalPosts.value / postsPerPage);

      updateDisplayedPosts();
      return data;
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPost = async (id: string) => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${apiUrl}/posts/${id}`);
      if (!response.ok) throw new Error('Ошибка загрузки поста');

      const data: BlogPost = await response.json();

      return data;
    } catch (err) {
      error.value = (err as Error).message;
      throw err;
    } finally {
      isLoading.value = false;
    }
  };

  const updateDisplayedPosts = () => {
    const startIndex = (currentPage.value - 1) * postsPerPage;
    displayedPosts.value = posts.value.slice(startIndex, startIndex + postsPerPage);
  };

  const setPageNumber = (number: number) => {
    if (currentPage.value !== number) {
      currentPage.value = number;
      updateDisplayedPosts();
    }
  };

  const setNextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value += 1;
      updateDisplayedPosts();
    }
  };

  onMounted(fetchPosts);

  return { isLoading, error, currentPage, displayedPosts, totalPages, fetchPost, setNextPage, setPageNumber };
}
