export interface Product {
	name: string;
	description: string;
	previewLink: string;
	price: string;
	isNew: boolean;
}

export const products: Product[] = [
	{
		name: 'Test 1',
		description: 'Desc 1',
		previewLink: 'http://test.com',
		price: '69€',
		isNew: true
	},
	{
		name: 'Test 2',
		description: 'Desc 2',
		previewLink: 'http://test2.com',
		price: '99€',
		isNew: false
	}
];
