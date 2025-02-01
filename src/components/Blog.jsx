// BlogPage.jsx

import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);

        // Reference to 'blogs' collection
        const blogCollectionRef = collection(db, 'Blogs');
        
        // Fetch the blog posts
        const blogSnapshot = await getDocs(blogCollectionRef);
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
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="blog-page">
      <div className="blog-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item border p-4 rounded-md shadow-md">
            <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-md" />
            <h2 className="text-xl font-semibold">{blog.title}</h2>
            <p className="text-gray-700 mt-2 line-clamp-3">{blog.content}</p>
            <a href={`/blog/${blog.id}`} className="text-blue-500 mt-4 inline-block">
              Read more
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPage;
