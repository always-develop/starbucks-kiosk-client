type MenuItemType = {
	id: number;
	name: string;
	price: number;
	image: string;
};

type MenuType = {
	id: number,
	name: {
		ko: string,
		en: string
	},
}

export type {
	MenuItemType,
	MenuType
}