export const MenuItem = {
  _id: "627c7fe488f7d2eac04f578b",
  id: "pasta-001",
  name: "Delicious Tacos",
  description:
    "A rich and healthy tacos made with fresh cream, Parmesan cheese, and garlic.",
  shortDescription: "Creamy, cheesy pasta dish.",
  price: 17.28,
  category: {
    _id: "627c7fe488f7d2eac04f5790",
    name: "Pasta",
    image: "/menu.png",
  },
  images: [
    {
      key: "img123",
      url: "/menu.png",
      _id: "img001",
    },
    {
      key: "img123",
      url: "/menu.png",
      _id: "img001",
    },
  ],
  stock: 50,
  sales: 120,
  size: ["Small", "Medium", "Large"],
  discount: 10,
  color: ["White", "Cream"],
  avgRating: 4.5,
  brand: "Italian Bistro",
  isDeleted: false,
  date: "2024-11-19", // ISO 8601 date format
  averageRating: 4.5,
  reviews: [
    {
      user: {
        _id: "user123",
        name: "Shah Aman",
        image: "/profileImage.png",
      },
      comment: "Absolutely delightful!",
      rating: 5,
      date: "2024-12-11",
    },
    {
      user: {
        _id: "user123",
        name: "Md Moniruzzaman",
        image: "/bappy.png",
      },
      comment: "Great to eat!",
      rating: 5,
      date: "2024-12-11",
    },
    {
      user: {
        _id: "user123",
        name: "Mahbub Hasan",
        image: "/badhon.png",
      },
      comment: "Awsome!",
      rating: 5,
      date: "2024-12-11",
    },
    {
      user: {
        _id: "user123",
        name: "Rifat Nipa",
        image: "/opu.png",
      },
      comment: "A bit too creamy for my taste.",
      rating: 3,
      date: "2024-12-11",
    },
  ],
  quantity: 0,
};
