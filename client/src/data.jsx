import kag from './assets/images/KAG Logo.png'
import rak from './assets/images/raklogo.jpg'
import somany from './assets/images/somany.png'
import anuj from './assets/images/anuj.jpg'
import kajaria from './assets/images/kajaria.png'
import millenium from './assets/images/millenium2.jpg'
import letina from './assets/images/letina.jpg'
import parryware from './assets/images/parryware.png'
// import orientbell from './assets/images/orientbell.jpg'
import agl from './assets/images/agl.png'


export const tileCards = [
    {
        id: 1,
        src: 'https://www.kajariaceramics.com/test_folder/mobileapp/uploads/blogs/1566891190_The-Ultimate-Guide-to-Kitchen-Wall-Tiles.jpg',
        size: '200x200',
        design: '1x1 Copper Cloudy',
        brand: 'Kag',
        brandImg: kag,
        type: 'Floor',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 2,
        src: 'https://www.kajariaceramics.com/test_folder/mobileapp/uploads/blogs/1559832624_Reinvent_Your_Kitchen_with_Inspired_Tile_Designs.jpg',
        size: '800x400',
        design: 'Katija',
        brand: 'Rak',
        brandImg: rak,
        type: 'Wall',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 3,
        src: 'https://buildingandinteriors.com/wp-content/uploads/2022/10/Qutone-tiles_Feature-image-1000x750.jpg',
        size: '1200x1200',
        design: 'Sisha',
        brand: 'Somany',
        brandImg: somany,
        type: 'Elevation',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 4,
        src: 'https://media.designcafe.com/wp-content/uploads/2020/02/21005353/latest-tiles-design-for-living-room.jpg',
        size: '1200x1200',
        design: 'Pimpa',
        brand: 'Anuj',
        brandImg: anuj,
        type: 'Parking',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 15,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 5,
        src: 'https://media.designcafe.com/wp-content/uploads/2020/02/21005353/latest-tiles-design-for-living-room.jpg',
        size: '800x1200',
        design: 'Julra',
        brand: 'Kajaria',
        brandImg: kajaria,
        type: 'Floor',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 6,
        src: 'https://media.designcafe.com/wp-content/uploads/2020/02/21005353/latest-tiles-design-for-living-room.jpg',
        size: '800x1200',
        design: 'Zurich',
        brand: 'Millenium',
        brandImg: millenium,
        type: 'Wall',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 7,
        src: 'https://www.letina.in/images/gallery/mercury-white.jpg',
        size: '600x600',
        design: 'Mercury White',
        brand: 'Letina',
        brandImg: letina,
        type: 'Floor',
        sqftRate: '250.50',
        tile_category: 'Double Charge',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1000,
        sqft_area: '450',
    },
    {
        id: 8,
        src: 'https://5.imimg.com/data5/SELLER/Default/2023/3/292239664/JF/JL/UO/96815489/venus-white-polished-tiles-1000x1000.jpg',
        size: '1200x1200',
        design: 'Venus White',
        brand: 'Letina',
        brandImg: letina,
        type: 'Floor',
        sqftRate: '450.00',
        tile_category: 'Full vertified',
        noOfBoxes: 10,
        pcsPerBox: 4,
        boxRate: 1350,
        sqft_area: '650',
    },
]

export const categories = [
    {
        id: 1,
        cat: 'brand'
    },
    {
        id: 2,
        cat: 'size'
    },
    {
        id: 3,
        cat: 'tile_category'
    },
    {
        id: 4,
        cat: 'type'
    },
    {
        id: 5,
        cat: 'sanitaryware'
    },
    {
        id: 6,
        cat: 'accessories'
    },
    {
        id: 7,
        cat: 'bathroom_fittings'
    },
];

export const filterCategories = [
    {
        id: 1,
        sizes: ['300x250', '375x250', '400x400', '450x300', '600x300', '300x300', '600x600', '800x800', '1000x1000', '1200x600', '1800x600', '2400x800', '2400x1200', '3000x800', '3000x1200', '1800x1200', '1600x800'],
    },
    {
        id: 2,
        brands: ['kag','anuj','somany','letina','rak','kajaria','millenium','agl','paragon','magna','ss','sj','mjp','pillai','tm','fa','um','sk','parryware','prince','crown'],
    },
    {
        id: 3,
        types: ['floor','wall','elevation','parking'],
    },
    {
        id: 4,
        sanitarywares: ['wash basin','ewc','iwc','bathtub'],
    },
    {
        id: 5,
        tile_categories: ['full vertified','double charge','ceramic','aathankudi','gvt','pgvt','sugar finish','matt finish','carving design','glossy'],
    },
    {
        id: 6,
        accessories: [],
    },
    {
        id: 7,
        bathroom_fittings: [],
    },
]