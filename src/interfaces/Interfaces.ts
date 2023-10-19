export interface CardAdResponse {
	status?: boolean
	card_ads_1: CardAd[]
	card_ads_2: CardAd[]
	card_no_ads: CardAd[]
}

export interface CardAd {
	ads: boolean
	caption: string
	category: string
	city: string
	description: string
	email: string
	id_card: number
	id_user: string
	path_file: string
	phone: string
	price: string
	subcategory: string
	tariff: string
	telephone: string
	telephone_two: null | string
	username: string
}