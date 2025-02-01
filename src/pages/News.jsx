import React, { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import Blog from '../components/Blog';

const News = () => {
  const [categories, setCategories] = useState(["All"]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const blogCollectionRef = collection(db, 'Blogs');
        const blogSnapshot = await getDocs(blogCollectionRef);
        
        // Extract categories from blog posts
        const categoryList = blogSnapshot.docs
          .map(doc => doc.data().category)
          .filter(Boolean); // Remove undefined/null values

        // Get unique categories
        const uniqueCategories = [...new Set(categoryList)];

        // Update state with unique categories
        setCategories(["All", ...uniqueCategories]);
      } catch (err) {
        console.error('Error fetching categories:', err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-[#10b981] via-[#10b981] to-transparent py-20 h-[60vh] mx-auto">
        <div className="w-5/6 pt-20 mx-auto">
          <h1 className="text-white text-4xl font-semibold">News</h1>
          <p className="text-white text-lg">
            Stay updated with the latest news, events, and announcements.
          </p>
        </div>
        <span className="w-5/6 mx-auto h-2 mt-10 bg-black"></span>
      </div>

      {/* Category Filter */}
      <div className="w-5/6 mx-auto my-8 flex gap-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 border rounded-md transition-colors ${
              selectedCategory === cat
                ? 'bg-lime-500 text-white'
                : 'bg-white text-lime-500 hover:bg-lime-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Component with Category Filter */}
      <Blog category={selectedCategory === "All" ? undefined : selectedCategory} />
    </div>
  );
};

export default News;
