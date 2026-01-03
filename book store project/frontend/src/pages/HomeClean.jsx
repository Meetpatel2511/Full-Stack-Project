import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { FiBookOpen, FiArrowRight } from "react-icons/fi";

const Home = () => {
  const { user } = useAuth();

  const categories = [
    "Fiction",
    "Self-Help",
    "Education",
    "Kids",
    "Novels",
    "Business",
  ];

  const books = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 399,
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 299,
      img: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    },
    {
      title: "Ikigai",
      author: "H. García",
      price: 350,
      img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93",
    },
    {
      title: "Rich Dad Poor Dad",
      author: "R. Kiyosaki",
      price: 349,
      img: "https://images.unsplash.com/photo-1529042410759-befb1204b468",
    },
    {
      title: "Think Like a Monk",
      author: "Jay Shetty",
      price: 320,
      img: "https://images.unsplash.com/photo-1457694587812-e8bf29a43845",
    },
    {
      title: "Harry Potter",
      author: "J.K. Rowling",
      price: 450,
      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f",
    },
    {
      title: "Psychology of Money",
      author: "Morgan Housel",
      price: 380,
      img: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    },
    {
      title: "Subtle Art",
      author: "Mark Manson",
      price: 280,
      img: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e",
    },
  ];

  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-600 via-indigo-500 to-blue-500 text-white">
        <div className="max-w-7xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium mb-4">
              📚 Online Book Store
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-5 font-[Merriweather]">
              Find Books That
              <span className="block text-yellow-300">Inspire You</span>
            </h1>


            <p className="text-white/90 mb-8 max-w-lg">
              Discover bestsellers, new arrivals, and timeless classics —
              all in one place.
            </p>

            <Link
              to={user ? "/books" : "/register"}
              className="inline-flex items-center gap-2 bg-white text-indigo-600 px-7 py-3 rounded-lg font-semibold hover:bg-gray-100 transition "
            >
              Browse Books →
            </Link>
          </div>

          <img
            src="https://static.vecteezy.com/system/resources/previews/002/232/232/original/bookstore-with-a-visor-above-the-entrance-books-in-a-shop-window-on-shelves-street-shop-illustration-flat-style-free-vector.jpg"
            alt="Books"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-semibold mb-8 font-[Merriweather]">Browse by Category</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((c) => (
            <div
              key={c}
              className="bg-white border rounded-xl py-5 text-center font-medium hover:shadow-md transition cursor-pointer"
            >
              {c}
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED BOOKS */}
      <section className="bg-white py-18">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold font-[Merriweather]">
              Popular Books
            </h2>

            <Link to="/books" className="text-indigo-600 font-medium hover:underline">
              View all
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-7">
            {books.map((b, i) => (
              <div
                key={i}
                className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
              >
                <img
                  src={b.img}
                  alt={b.title}
                  className="h-52 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="font-medium text-sm mb-1">{b.title}</h3>
                  <p className="text-xs text-gray-500 mb-2">{b.author}</p>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-indigo-600">
                      ₹{b.price}
                    </span>
                  <Link to={`/books`}>
                  <button className="text-sm text-indigo-600 hover:underline">
                      Buy Now <FiArrowRight className="inline-block ml-1" />
                    </button></Link>  
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-bold mb-4 font-[Merriweather]">
          Start Your Reading Journey Today
        </h2>

        <p className="text-gray-600 mb-6">
          Create your free account and explore thousands of books.
        </p>
        <Link
          to={user ? "/books" : "/register"}
          className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
