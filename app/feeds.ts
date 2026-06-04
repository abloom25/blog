import type { FeedGroup } from '../app/types/feed'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region 经常联系
	{
		name: '经常联系',
		desc: '经常联系的朋友们',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '纸鹿本鹿',
				sitenick: '摸鱼处',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: 'https://www.zhilu.site/icon.png',
				avatar: 'https://www.zhilu.site/api/avatar.png',
				archs: ['Nuxt', 'Vercel'],
				date: '2025-05-20',
				comment: '我的前端老师',
			},
			{
				author: 'minc_nice_100',
				sitenick: '土拨鼠',
				title: 'Ited Blog',
				desc: 'You are good enough.',
				link: 'https://www.itedev.com',
				feed: 'https://www.itedev.com/atom.xml',
				icon: 'https://static.itedev.com/favicon.ico',
				avatar: 'https://avatars.githubusercontent.com/u/100515973?s=40&v=4',
				archs: ['Jekyll', 'Cloudflare'],
				date: '2025-06-05',
				comment: '一只很厉害的运维',
			},
			{
				author: '皓然',
				title: '皓然小站',
				sitenick: '小站',
				desc: '分享生活和技术的点滴',
				link: 'https://blog.horonlee.com/',
				feed: 'https://blog.horonlee.com/atom.xml',
				icon: getFavicon('https://blog.horonlee.com/'),
				avatar: 'https://bu.dusays.com/2023/02/05/63dfc7f2ced91.png',
				archs: ['EdgeOne'],
				date: '2026-04-26',
				comment: 'Ech0群里认识的神秘初创公司创业者',
			},
			{
				author: 'AirTouch',
				desc: '分享技术、生活、思考。',
				link: 'https://www.xsl.im/',
				feed: 'https://www.xsl.im/atom.xml',
				icon: 'https://www.xsl.im/favicon.webp',
				avatar: 'https://www.xsl.im/avatar.webp',
				archs: ['Nuxt', '服务器'],
				date: '2026-04-26',
				comment: '神秘小初中生',
			},
			{
				author: '清羽飞扬',
				desc: '柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜',
				link: 'https://blog.liushen.fun/',
				feed: 'https://blog.liushen.fun/atom.xml',
				icon: '',
				avatar: 'https://blog.liushen.fun/info/avatar.ico',
				archs: ['Astro', 'EdgeOne', '服务器'],
				date: '2026-06-05',
				comment: '大佬大佬',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
