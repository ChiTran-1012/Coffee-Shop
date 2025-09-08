export const categories = [
  {
    id: 1,
    name: 'Coffee',
    image: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce915822fd2280e71c105_Black%20Coffee.avif'
  },
  {
    id: 2,
    name: 'Cold Drinks',
    image: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce92633545aae0dbbf527_Virgin%20Mojito.avif'
  },
  {
    id: 3,
    name: 'Bakery',
    image: 'https://cdn.prod.website-files.com/67fcb54501dc826cf4f8bfe9/67fce93b81d27502589462e9_Package.avif'
  }
];

export const menuItems = [
  {
    id: 1,
    name: 'Colds Brew',
    categoryId: 1,
    price: '29.000',
    description: 'Traditional phin-brewed coffee with condensed milk',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd01b440397f6137e3f9b9_Cold%20Brew.avif',
    famous: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 2,
    name: 'Espresso',
    categoryId: 1,
    price: '35.000',
    description: 'Strong Italian-style espresso shot',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd00f9df872f25d8b7eea0_Espresso.avif',
    famous: true,
    sizes: ['S', 'M']
  },
  {
    id: 3,
    name: 'Latte',
    categoryId: 1,
    price: '39.000',
    description: 'Refreshing tea with peach slices and lemongrass',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fcfffa690fa1c5625f9949_Latte.avif',
    famous: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 4,
    name: 'Capuchino',
    categoryId: 1,
    price: '42.000',
    description: 'Black tea, fresh milk, and chewy tapioca pearls',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd0074a442e06fe8ff1625_Cappuccino.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 5,
    name: 'Americano',
    categoryId: 1,
    price: '45.000',
    description: 'Fresh avocado blended with ice and condensed milk',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fcff777e95bf43c4d0d4ff_Americano.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 6,
    name: 'Mocha',
    categoryId: 1,
    price: '30.000',
    description: 'Crispy croissant with rich French butter',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fcffc6295f5be859d0cefc_Mocha.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 7,
    name: 'Virgin Mojito',
    categoryId: 2,
    price: '37.000',
    description: 'Smooth matcha blended with creamy milk',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd04cbb5cedbf8a4bdc97f_Virgin%20Mojito.avif',
    famous: true,
    sizes: ['S', 'M', 'L']
  },
  {
    id: 8,
    name: 'Iced Latte',
    categoryId: 2,
    price: '43.000',
    description: 'Fresh mango blended with ice and yogurt',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd049c7c79769f25f3aa38_Iced%20Latte.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 9,
    name: 'Iced Mocha',
    categoryId: 2,
    price: '39.000',
    description: 'Espresso with chocolate syrup and steamed milk',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd04345361f75441035e4e_Iced%20Mocha.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 10,
    name: 'Iced Americano',
    categoryId: 2,
    price: '32.000',
    description: 'Espresso diluted with cold water and ice',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd046c9110863a46eecb0b_Iced%20Americano.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 11,
    name: 'Iced Tea',
    categoryId: 2,
    price: '48.000',
    description: 'Rich cheesecake topped with blueberry jam',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd03d917528c381b23700c_Iced%20Tea.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 12,
    name: 'Bubble Tea',
    categoryId: 2,
    price: '28.000',
    description: 'Soft muffin with chocolate chips and cocoa',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd034379940dd014d85cb4_Bubble%20Tea.avif',
    sizes: ['S', 'M', 'L']
  },
  {
    id: 13,
    name: 'Brownie',
    categoryId: 3,
    price: '21.500',
    description: 'Rich chocolate brownie with a moist and fudgy center',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05e5c4e8544dae9d2bb2_Brownie.avif',
    sizes: ['M', 'L']
  },
  {
    id: 14,
    name: 'Macaroon',
    categoryId: 3,
    price: '26.000',
    description: 'Colorful French meringue-based cookies with creamy filling',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd05beb993a3a0bcef1685_Macaroon.avif',
    sizes: ['M', 'L']
  },
  {
    id: 15,
    name: 'Donut',
    categoryId: 3,
    price: '14.000',
    description: 'Soft and fluffy donuts topped with chocolate and nuts',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd0596a73e259b444a33b1_Donut.avif',
    sizes: ['M', 'L']
  },
  {
    id: 16,
    name: 'Muffin',
    categoryId: 3,
    price: '18.000',
    description: 'Light and fluffy muffin perfect for a quick snack',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd056125cc1a257a6abad1_Maffin.avif',
    sizes: ['M', 'L']
  },
  {
    id: 17,
    name: 'Biscotti',
    categoryId: 3,
    price: '15.000',
    description: 'Crunchy Italian almond biscuit, perfect with coffee',
    image: 'https://cdn.prod.website-files.com/67fcfead5089856eab1c644d/67fd053599ec31dc3b175bca_Biscotti.avif',
    sizes: ['M', 'L']
  }
];