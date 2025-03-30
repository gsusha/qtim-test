import type { BlogPost } from '~/types/blog';

export function useBlog() {
  const isLoading = ref<boolean>(false);
  const error = ref<string | null>(null);

  const apiUrl = useRuntimeConfig().public.apiUrl;

  const fetchPosts = async () => {
    isLoading.value = true;
    error.value = null;

    try {
      const response = await fetch(`${apiUrl}/posts`);
      if (!response.ok) throw new Error('Ошибка загрузки постов');

      return await response.json();
    } catch (err) {
      error.value = (err as Error).message;
    } finally {
      isLoading.value = false;
    }
  };

  const fetchPost = async (id: string) => {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/posts/${id}`)
      if (!response.ok) throw new Error('Ошибка загрузки поста')

      return await response.json();
    } catch (err) {
      error.value = (err as Error).message
      throw err;
    } finally {
      isLoading.value = false
    }
  }

  onMounted(fetchPosts);

  return { isLoading, error, fetchPosts, fetchPost };
}
