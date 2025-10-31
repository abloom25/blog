/* eslint-disable command/command */
import type { FeedGroup } from '~/types/feed'
import { getFavicon, getGhAvatar, getGhIcon, getQqAvatar, QqAvatarSize } from './utils/img'

export default [
	{
		name: '相谈甚多',
		desc: '',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '纸鹿本鹿',
				sitenick: 'Zhilu',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: getGhIcon('l33z22l11'),
				avatar: getGhAvatar('l33z22l11'),
				archs: ['Nuxt', 'Vercel'],
				date: '2019-07-19',
				comment: '我生活和编程上的“老师”，也是此博客主题的作者。',
			},
			{
				author: 'minc_nice_100',
				sitenick: 'Minc',
				title: 'Ited Blog',
				desc: 'You\'re good enough!!',
				link: 'https://www.itedev.com/',
				feed: 'https://www.itedev.com/atom.xml',
				icon: getGhIcon('minc-nice-100'),
				avatar: getGhAvatar('minc-nice-100'),
				archs: ['Jekyll', 'Cloudflare'],
				date: '2022-05',
				comment: '人品超级超级好，运维能力超级强👍',
			},
			{
				author: 'L1nSn0w',
				sitenick: '林雪',
				title: 'L1nSn0w\'s Site',
				desc: '无限进步.🎈',
				link: 'https://log.vaaat.com/',
				feed: 'https://log.vaaat.com/index.xml',
				icon: 'https://log.vaaat.com/favicon.ico',
				avatar: getGhAvatar('lin-snow'),
				archs: ['Hugo', '国内 CDN'],
				date: '2024-02-14',
				comment: '大佬，Ech0的作者。',
			},
			{
				author: '栖童',
				sitenick: 'の小站',
				title: '栖童の小站',
				desc: '越努力,越幸运',
				link: 'https://blog.linux-qitong.top',
				feed: 'https://blog.linux-qitong.top/atom.xml',
				icon: 'https://blog.linux-qitong.top/img/avatar.webp',
				avatar: 'https://blog.linux-qitong.top/img/avatar.webp',
				archs: ['Nuxt', 'Vercel'],
				date: '2023-03-15',
				comment: '原名青稚，博客记录Linux使用、博客部署、生活反思。',
			},
		],
	},
] satisfies FeedGroup[]
