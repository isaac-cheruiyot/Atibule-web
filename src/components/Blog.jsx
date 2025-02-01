import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

const Blog = ({ category }) => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Reference to 'Blogs' collection
        let blogQuery = collection(db, 'Blogs');

        // Apply category filter if a specific category is selected
        if (category) {
          blogQuery = query(blogQuery, where('category', '==', category));
        }

        // Fetch the blog posts
        const blogSnapshot = await getDocs(blogQuery);
        const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        
        setBlogs(blogList);
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [category]); // Re-run when category changes

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (blogs.length === 0) return <div className="text-gray-600">No blogs found in this category.</div>;

  return (
    <div className="blog-page w-5/6 mx-auto">
      <div className="blog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item border p-4 rounded-md shadow-md">
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-40 object-cover rounded-md" 
            />
            <h2 className="text-xl font-semibold mt-3">{blog.title}</h2>
            <p className="text-gray-700 mt-2 line-clamp-3">{blog.content}</p>
            <a href={`/blog/${blog.category}/${blog.id}`} className="text-lime-500 mt-4 inline-block">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
