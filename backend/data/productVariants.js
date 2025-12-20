const productVariants = [
	{
		// Quill mittens,
		sku: "QL-MT",
		price: 54000,
		discountPrice: 39000,
		countInStock: 199, // just for dev, because we seeded 1 order of quill mittens
		category: "Utensils",
		images: [
			{
				url: "https://picsum.photos/seed/quillMittens1/500/500",
				altText: "Picture of Quill Mittens only",
			},
			{
				url: "https://picsum.photos/seed/quillMittens2/500/500",
				altText: "Picture of Quill Mittens and Kid",
			},
		],
	},
	{
		// Stork - Natural
		sku: "ST-NA",
		price: 2368000,
		discountPrice: 1319000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Natural",
		images: [
			{
				url: "https://picsum.photos/seed/stork1/500/500",
				altText: "Picture of Stork only",
			},
			{
				url: "https://picsum.photos/seed/stork2/500/500",
				altText: "Picture of Stork and Kid",
			},
		],
	},
	{
		// Stork - Cerulean
		sku: "ST-CE",
		price: 2368000,
		discountPrice: 1319000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Cerulean",
		images: [
			{
				url: "https://picsum.photos/seed/stork1/500/500",
				altText: "Picture of Stork only",
			},
			{
				url: "https://picsum.photos/seed/stork2/500/500",
				altText: "Picture of Stork and Kid",
			},
		],
	},
	{
		// Stork - Silver
		sku: "ST-SI",
		price: 2368000,
		discountPrice: 1319000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Silver",
		images: [
			{
				url: "https://picsum.photos/seed/stork1/500/500",
				altText: "Picture of Stork only",
			},
			{
				url: "https://picsum.photos/seed/stork2/500/500",
				altText: "Picture of Stork and Kid",
			},
		],
	},
	{
		// Stork - Snow
		sku: "ST-SN",
		price: 2368000,
		discountPrice: 1319000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Snow",
		images: [
			{
				url: "https://picsum.photos/seed/stork1/500/500",
				altText: "Picture of Stork only",
			},
			{
				url: "https://picsum.photos/seed/stork2/500/500",
				altText: "Picture of Stork and Kid",
			},
		],
	},
	{
		// Quill (utensils only)
		sku: "QL-UT",
		price: 224000,
		discountPrice: 119000,
		countInStock: 200,
		category: "Utensils",
		images: [
			{
				url: "https://picsum.photos/seed/quill1/500/500",
				altText: "Picture of Quill only",
			},
			{
				url: "https://picsum.photos/seed/quill2/500/500",
				altText: "Picture of Quill and Kid",
			},
		],
	},
	{
		// Talon - Stork
		sku: "TA-ST",
		price: 119000,
		discountPrice: 69000,
		countInStock: 200,
		category: "Accessories",
		variant: "Stork",
		images: [
			{
				url: "https://picsum.photos/seed/talon1/500/500",
				altText: "Picture of Talon Stork only",
			},
			{
				url: "https://picsum.photos/seed/talon2/500/500",
				altText: "Picture of Talon Stork and Kid",
			},
		],
	},
	{
		// Talon - Falcon
		sku: "TA-FL",
		price: 119000,
		discountPrice: 69000,
		countInStock: 200,
		category: "Accessories",
		variant: "Falcon",
		images: [
			{
				url: "https://picsum.photos/seed/talon1/500/500",
				altText: "Picture of Talon Stork only",
			},
			{
				url: "https://picsum.photos/seed/talon2/500/500",
				altText: "Picture of Talon Stork and Kid",
			},
		],
	},
	{
		// Sparrow - Natural
		sku: "SP-NA",
		price: 1099000,
		discountPrice: 669000,
		countInStock: 200,
		category: "Stool",
		color: "Natural",
		images: [
			{
				url: "https://picsum.photos/seed/sparrow1/500/500",
				altText: "Picture of Sparrow only",
			},
			{
				url: "https://picsum.photos/seed/sparrow2/500/500",
				altText: "Picture of Sparrow and Kid",
			},
		],
	},
	{
		// Sparrow - Snow
		sku: "SP-SN",
		price: 1099000,
		discountPrice: 669000,
		countInStock: 200,
		category: "Stool",
		color: "Snow",
		images: [
			{
				url: "https://picsum.photos/seed/sparrow1/500/500",
				altText: "Picture of Sparrow only",
			},
			{
				url: "https://picsum.photos/seed/sparrow2/500/500",
				altText: "Picture of Sparrow and Kid",
			},
		],
	},
	{
		// Beak
		sku: "BE",
		price: 129000,
		discountPrice: 84000,
		countInStock: 200,
		category: "Utensils",
		images: [
			{
				url: "https://picsum.photos/seed/beak1/500/500",
				altText: "Picture of Beak only",
			},
			{
				url: "https://picsum.photos/seed/beak2/500/500",
				altText: "Picture of Beak and Kid",
			},
		],
	},
	{
		// Falcon - Natural
		sku: "FL-NA",
		price: 3028000,
		discountPrice: 1579000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Natural",
		images: [
			{
				url: "https://picsum.photos/seed/falcon1/500/500",
				altText: "Picture of Falcon only",
			},
			{
				url: "https://picsum.photos/seed/falcon2/500/500",
				altText: "Picture of Falcon and Kid",
			},
		],
	},
	{
		// Falcon - Sunshine
		sku: "FL-SU",
		price: 3028000,
		discountPrice: 1579000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Sunshine",
		images: [
			{
				url: "https://picsum.photos/seed/falcon1/500/500",
				altText: "Picture of Falcon only",
			},
			{
				url: "https://picsum.photos/seed/falcon2/500/500",
				altText: "Picture of Falcon and Kid",
			},
		],
	},
	{
		// Falcon - Silver
		sku: "FL-SI",
		price: 3028000,
		discountPrice: 1579000,
		countInStock: 200,
		category: "Learning Tower",
		color: "Silver",
		images: [
			{
				url: "https://picsum.photos/seed/falcon1/500/500",
				altText: "Picture of Falcon only",
			},
			{
				url: "https://picsum.photos/seed/falcon2/500/500",
				altText: "Picture of Falcon and Kid",
			},
		],
	},
];

module.exports = productVariants;
