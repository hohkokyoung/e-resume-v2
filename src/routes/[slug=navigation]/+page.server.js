import { error } from '@sveltejs/kit';
import { getChapter } from "$lib/api/chapter.js";

export async function load({ params, url }) {
    const chapterSlug = url.searchParams.get('chapterSlug');
    const categorySlug = url.searchParams.get('categorySlug');

	const chapter = await getChapter(params.slug, chapterSlug, categorySlug);

	if (!chapter) throw error(404);

	return {
		chapter,
	};
}
