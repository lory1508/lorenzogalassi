const avatar = '/images/lorenzo.jpg'

const routes = [
  [
		{
			id: 'home',
			label: 'Home',
			icon: 'i-heroicons-home',
			to: '/',
			href: '/',
		},
		{ 
			id: 'contact', 
			label: 'Contattami', 
			icon: 'mdi:message-fast', 
			to: '/contact',
			href: '/contact',
		},
		{ 
			id: 'portfolio', 
			label: 'Portfolio', 
			icon: 'mdi:image-album', 
			to: '/portfolio',
			href: '/portfolio',
		},
		{ 
			id: 'services', 
			label: 'Servizi', 
			icon: 'mdi:hand-peace', 
			to: '/services',
			href: '/services',
		}
	],
	[
		{
			id: 'lorenzo',
			label: 'Chi sono',
			to: '/lorenzo',
			href: '/lorenzo',
			avatar: { src: avatar }
		}
	]
]

export { routes }