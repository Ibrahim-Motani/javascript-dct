const menuItems = [
    {
        id: 1,
        name: 'chicken kebab',
        price: 290,
        isVeg: false
    },

    {
        id: 2,
        name: 'paneer chilly',
        price: 210,
        isVeg: true
    },

    {
        id: 3,
        name: 'chicken biryani',
        price: 350,
        isVeg: false
    },

    {
        id: 2,
        name: 'veg biryani',
        price: 300,
        isVeg: true
    }
];

console.log(`---------------------------`);
// find all items veg
const allVeg = menuItems.filter((ele) => ele.isVeg === true);
console.log(allVeg);
console.log(`---------------------------`);

// all items in range 200-300
const priceRange = menuItems.filter((ele) => ele.price >= 200 && ele.price <= 300);
console.log(priceRange);
console.log(`---------------------------`);

// id=3
const id3 = menuItems.find((ele) => ele.id === 3);
console.log(id3);
console.log(`---------------------------`);

// term biryani
const allBiryani = menuItems.filter((ele) => ele.name.includes('biryani'));
console.log(allBiryani);