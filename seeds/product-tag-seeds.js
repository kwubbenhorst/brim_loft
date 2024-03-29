// The Product-Tag model is a junction table associating products and tags in a many-many relationship. 
const { ProductTag } = require('../models');

const productTagData = [
    // Beanie (product_id: 1)
    { product_id: 1, tag_id: 1 },
    { product_id: 1, tag_id: 2 },
    { product_id: 1, tag_id: 3 },
    { product_id: 1, tag_id: 4 },
    { product_id: 1, tag_id: 5 },
    { product_id: 1, tag_id: 6 },
    { product_id: 1, tag_id: 7 },
    { product_id: 1, tag_id: 8 },
    { product_id: 1, tag_id: 9 },
    { product_id: 1, tag_id: 10 },
    { product_id: 1, tag_id: 11 },
    { product_id: 1, tag_id: 12 },
    { product_id: 1, tag_id: 13 },
    { product_id: 1, tag_id: 14 },
    { product_id: 1, tag_id: 15 },
    { product_id: 1, tag_id: 29 },
    { product_id: 1, tag_id: 31 },
    { product_id: 1, tag_id: 32 },
    { product_id: 1, tag_id: 37 },
    { product_id: 1, tag_id: 81 },
    { product_id: 1, tag_id: 82 },
  
    // Baseball Hat (product_id: 2)
    { product_id: 2, tag_id: 1 },
    { product_id: 2, tag_id: 3 },
    { product_id: 2, tag_id: 4 },
    { product_id: 2, tag_id: 5 },
    { product_id: 2, tag_id: 6 },
    { product_id: 2, tag_id: 14 },
    { product_id: 2, tag_id: 15 },
    { product_id: 2, tag_id: 19 },
    { product_id: 2, tag_id: 20 },
    { product_id: 2, tag_id: 25 },
    { product_id: 2, tag_id: 30 },
    { product_id: 2, tag_id: 43 },
    { product_id: 2, tag_id: 52 },
    { product_id: 2, tag_id: 53 },
    { product_id: 2, tag_id: 67 },
    { product_id: 2, tag_id: 68 },
    { product_id: 2, tag_id: 69 },
    { product_id: 2, tag_id: 70 },
    { product_id: 2, tag_id: 71 },
    { product_id: 2, tag_id: 72 },
    { product_id: 2, tag_id: 73 },
    { product_id: 2, tag_id: 74 },
    { product_id: 2, tag_id: 75 },
    { product_id: 2, tag_id: 76 },
    { product_id: 2, tag_id: 77 },
    { product_id: 2, tag_id: 78 },
    { product_id: 2, tag_id: 79 },
    { product_id: 2, tag_id: 80 },
  
    // Beret (product_id: 3)
    { product_id: 3, tag_id: 1 },
    { product_id: 3, tag_id: 3 },
    { product_id: 3, tag_id: 4 },
    { product_id: 3, tag_id: 5 },
    { product_id: 3, tag_id: 6 },
    { product_id: 3, tag_id: 7 },
    { product_id: 3, tag_id: 10 },
    { product_id: 3, tag_id: 14 },
    { product_id: 3, tag_id: 22 },
    { product_id: 3, tag_id: 24 },
    { product_id: 3, tag_id: 25 },
    { product_id: 3, tag_id: 28 },
    { product_id: 3, tag_id: 29 },
    { product_id: 3, tag_id: 36 },
    { product_id: 3, tag_id: 38 },
    { product_id: 3, tag_id: 39 },
    { product_id: 3, tag_id: 40 },
    { product_id: 3, tag_id: 41 },
    { product_id: 3, tag_id: 42 },
    { product_id: 3, tag_id: 43 },
    { product_id: 3, tag_id: 44 },
    { product_id: 3, tag_id: 45 },
    { product_id: 3, tag_id: 46 },
    { product_id: 3, tag_id: 47 },
    { product_id: 3, tag_id: 48 },
    { product_id: 3, tag_id: 49 },
    { product_id: 3, tag_id: 50 },
    { product_id: 3, tag_id: 51 },
    { product_id: 3, tag_id: 52 },
    { product_id: 3, tag_id: 53 },
    { product_id: 3, tag_id: 54 },
    { product_id: 3, tag_id: 55 },
    { product_id: 3, tag_id: 56 },
    { product_id: 3, tag_id: 57 },
    { product_id: 3, tag_id: 58 },
    { product_id: 3, tag_id: 59 },
    { product_id: 3, tag_id: 60 },
    { product_id: 3, tag_id: 61 },
    { product_id: 3, tag_id: 62 },
    { product_id: 3, tag_id: 63 },
    { product_id: 3, tag_id: 64 },
    { product_id: 3, tag_id: 65 },
    { product_id: 3, tag_id: 66 },
  
    // Bucket Hat (product_id: 4)
    { product_id: 4, tag_id: 1 },
    { product_id: 4, tag_id: 3 },
    { product_id: 4, tag_id: 4 },
    { product_id: 4, tag_id: 5 },
    { product_id: 4, tag_id: 6 },
    { product_id: 4, tag_id: 14 },
    { product_id: 4, tag_id: 15 },
    { product_id: 4, tag_id: 19 },
    { product_id: 4, tag_id: 20 },
    { product_id: 4, tag_id: 25 },
    { product_id: 4, tag_id: 30 },
    { product_id: 4, tag_id: 43 },
    { product_id: 4, tag_id: 52 },
    { product_id: 4, tag_id: 53 },
    { product_id: 4, tag_id: 67 },
    { product_id: 4, tag_id: 68 },
    { product_id: 4, tag_id: 69 },
    { product_id: 4, tag_id: 70 },
    { product_id: 4, tag_id: 71 },
    { product_id: 4, tag_id: 72 },
  
    // Outback Hat (product_id: 5)
    { product_id: 5, tag_id: 1 },
    { product_id: 5, tag_id: 3 },
    { product_id: 5, tag_id: 4 },
    { product_id: 5, tag_id: 5 },
    { product_id: 5, tag_id: 6 },
    { product_id: 5, tag_id: 14 },
    { product_id: 5, tag_id: 15 },
    { product_id: 5, tag_id: 30 },
    { product_id: 5, tag_id: 72 },
    { product_id: 5, tag_id: 73 },
    { product_id: 5, tag_id: 74 },
    { product_id: 5, tag_id: 75 },
    { product_id: 5, tag_id: 76 },
    { product_id: 5, tag_id: 77 },
    { product_id: 5, tag_id: 78 },
    { product_id: 5, tag_id: 79 },
    { product_id: 5, tag_id: 80 },
  ];

const seedProductTags = () => ProductTag.bulkCreate(productTagData);

module.exports = seedProductTags;