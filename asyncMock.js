const products = [
  {
    id: "1",
    name: "Earring SUN 24k",
    price: 4960,
    category: "earrings",
    img: "https://m.media-amazon.com/images/I/614zcydL1iL._AC_UX522_.jpg",
    stock: 20,
    description: "Description of earring SUN",
  },
  {
    id: "2",
    name: "Pendants SUN 24k",
    price: 10377,
    category: "pendants",
    img: "https://m.media-amazon.com/images/I/71vw3wgsVSL._AC_UX679_.jpg",
    stock: 10,
    description: "Description of pendant SUN",
  },
  {
    id: "3",
    name: "Necklace SUN 24k",
    price: 22599,
    category: "necklaces",
    img: "https://m.media-amazon.com/images/I/81Cia5D0K4L._AC_UY500_.jpg",
    stock: 15,
    description: "Description of necklace SUN",
  },
];

export const getProducts = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (prod) => prod.category === categoryId
      );
      resolve(filteredProducts);
    }, 500);
  });
};
