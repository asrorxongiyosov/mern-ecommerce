import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "John",
      email: "johnny@gmail.xyz",
      password: bcrypt.hashSync("123456"),
      isAdmin: true,
    },
    {
      name: "Schon",
      email: "schon@gmail.xyz",
      password: bcrypt.hashSync("123456"),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: "1",
      name: "Sony Vaio",
      slug: "sony-vaio-laptop",
      category: "Laptops",
      image: "/images/sony.jpg",
      price: 350,
      countInStock: 0,
      brand: "Sony",
      rating: 4.3,
      numReviews: 10,
      description: "Touch screen laptop",
    },
    {
      // _id: "2",
      name: "Dell Inspiron",
      slug: "dell-inspiron-laptop",
      category: "Laptops",
      image: "/images/dell.jpg",
      price: 650,
      countInStock: 10,
      brand: "Dell",
      rating: 4.6,
      numReviews: 10,
      description: "Laptop for Office",
    },
    {
      // _id: "3",
      name: "Asus ROG",
      slug: "asus-rog-laptop",
      category: "Laptops",
      image: "/images/asus.jpg",
      price: 950,
      countInStock: 10,
      brand: "Asus",
      rating: 4.9,
      numReviews: 10,
      description: "Laptop for gaming",
    },
    {
      // _id: "4",
      name: "HP Dragonfly",
      slug: "hp-dragonfly-laptop",
      category: "Laptops",
      image: "/images/hp.jpg",
      price: 3373,
      countInStock: 10,
      brand: "HP",
      rating: 5.0,
      numReviews: 10,
      description: "Laptop for Business Persons",
    },
  ],
};

export default data;
