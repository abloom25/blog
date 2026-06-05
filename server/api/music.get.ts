import type { MusicTrack } from '~~/shared/types/music'
import { z } from 'zod'
import blogConfig from '~~/blog.config'

const httpUrl = z.url().refine(url => ['http:', 'https:'].includes(new URL(url).protocol))

const musicTrackSchema = z.object({
	name: z.string().trim().min(1),
	artist: z.string().trim().min(1),
	url: httpUrl,
	pic: httpUrl,
	lrc: httpUrl,
})

export default defineEventHandler(async (): Promise<MusicTrack[]> => {
	if (!blogConfig.music.enabled)
		return []

	const endpoint = new URL(blogConfig.music.api)
	endpoint.searchParams.set('server', blogConfig.music.server)
	endpoint.searchParams.set('type', blogConfig.music.type)
	endpoint.searchParams.set('id', blogConfig.music.id)

	try {
		const data = await $fetch<unknown>(endpoint.toString())
		if (!Array.isArray(data)) {
			console.warn('[music] Meting API 返回值不是歌曲数组')
			return []
		}

		return data.flatMap((item) => {
			const parsed = musicTrackSchema.safeParse(item)
			return parsed.success ? [parsed.data] : []
		})
	}
	catch (error) {
		console.warn('[music] 无法获取 Meting 歌单', error)
		return []
	}
})
