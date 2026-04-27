import type { FeedGroup } from '../app/types/feed'
// eslint-disable-next-line unused-imports/no-unused-imports
import { getFavicon, getGithubAvatar, getGithubIcon, getOciqGroupAvatar, getOicqAvatar, OicqAvatarSize } from './utils/img'

export default [
	// #region 经常联系
	{
		name: '经常联系',
		desc: '经常联系的朋友们。',
		// @keep-sorted { "keys": ["date"] }
		entries: [
			{
				author: '纸鹿本鹿',
				sitenick: '摸鱼处',
				title: '纸鹿摸鱼处',
				desc: '纸鹿至麓不知路，支炉制露不止漉',
				link: 'https://blog.zhilu.site/',
				feed: 'https://blog.zhilu.site/atom.xml',
				icon: getFavicon('https://blog.zhilu.site/'),
				avatar: getGithubAvatar('l33z22l11'),
				archs: ['Nuxt', 'Vercel'],
				date: '2025-05-20',
				comment: '',
			},
			{
				author: 'Shenley',
				sitenick: '存档点',
				title: 'Shenley的存档点',
				desc: '随手存个档～',
				link: 'https://blog.shenley.cn/',
				feed: 'https://blog.shenley.cn/atom.xml',
				icon: 'https://blog.shenley.cn/avatar.jpg',
				avatar: 'https://blog.shenley.cn/avatar.jpg',
				archs: ['Nuxt', 'Vercel'],
				date: '2026-04-26',
				comment: '',
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
				comment: '',
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
				comment: '',
			},
		],
	},
	// #endregion
] satisfies FeedGroup[]
