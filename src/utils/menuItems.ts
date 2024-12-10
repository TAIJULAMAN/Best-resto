export const MenuItem = {
  _id: "627c7fe488f7d2eac04f578b",
  id: "pasta-001",
  name: "Creamy Alfredo Pasta",
  description:
    "A rich and creamy Alfredo pasta made with fresh cream, Parmesan cheese, and garlic.",
  shortDescription: "Creamy, cheesy pasta dish.",
  price: 12.99,
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
  discount: 10, // discount as a percentage
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
        name: "John Doe",
        image: "/profileImage.png",
      },
      comment: "Absolutely delightful!",
      rating: 5,
      date: "2024-11-01",
    },
    {
      user: {
        _id: "user123",
        name: "John Doe",
        image: "/profileImage.png",
      },
      comment: "A bit too creamy for my taste.",
      rating: 3,
      date: "2024-11-02",
    },
  ],
  quantity: 0, // Not required but optional
};
