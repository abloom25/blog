<script setup lang="ts">
import { sort } from 'radash'

const layoutStore = useLayoutStore()
// 保持侧边栏配置，如需调整可自行修改
layoutStore.setAside(['blog-stats', 'blog-tech', 'blog-log'])

const appConfig = useAppConfig()
const title = '合集'
const description = `${appConfig.title}的所有文章合集。`
useSeoMeta({ title, description })

const { data: listRaw } = await useArticleIndex()

// 按合集分组文章
const articlesBycategories = computed(() => {
	const result: Record<string, any[]> = {}
	// 按发布日期排序文章（最新在前）
	const articles = sort(listRaw.value, a => new Date(a.date || 0).getTime(), true)
	for (const article of articles) {
		if (article.categories) {
			const categories = article.categories
			if (!result[categories]) {
				result[categories] = []
			}
			result[categories].push(article)
		}
	}
	return result
})

// 按合集中的文章数量排序（从多到少）
const sortedcategories = computed(() => {
	return Object.keys(articlesBycategories.value).sort((a, b) => {
		const aCount = articlesBycategories.value[a]?.length || 0
		const bCount = articlesBycategories.value[b]?.length || 0
		return bCount - aCount
	})
})
</script>

<template>
<div class="categories proper-height">
	<section
		v-for="categories in sortedcategories"
		:key="categories"
		class="categories-group"
	>
		<div class="categories-title text-creative">
			<h2 class="categories-name">
				{{ categories }}
			</h2>
			<div class="categories-info">
				<span>{{ articlesBycategories[categories]?.length }}篇</span>
			</div>
		</div>

		<menu class="archive-list">
			<TransitionGroup appear name="float-in">
				<ZArchive
					v-for="article, index in articlesBycategories[categories]"
					:key="article.path"
					v-bind="article"
					:to="article.path"
					:style="{ '--delay': `${index * 0.03}s` }"
				/>
			</TransitionGroup>
		</menu>
	</section>
</div>
</template>

<style lang="scss" scoped>
.categories {
    margin: 1rem;
}

.categories-group {
    margin: 1rem 0 3rem;
}

.categories-title {
    display: flex;
    justify-content: space-between;
    gap: 1em;
    position: sticky;
    opacity: .5;
    top: 0;
    font-size: min(1.5em, 5vw);
    color: transparent;
    transition: color .2s;

    &::selection, :hover > & {
        color: var(--c-text-3);
    }

    > .categories-name {
        margin-bottom: -.3em;
        mask-image: linear-gradient(#FFF 50%, transparent);
        font-size: 3em;
        font-weight: 800;
        line-height: 1;
        z-index: -1;
        -webkit-text-stroke: 1px var(--c-text-3);
    }

    > .categories-info {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        column-gap: .5em;
    }
}
</style>
