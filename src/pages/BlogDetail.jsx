import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { doc, getDoc, collection, getDocs } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import { IoStarHalfOutline } from 'react-icons/io5';
import CTA from '../components/CTA';

const BlogDetail = () => {
  const { category, id } = useParams();  // Extract category and id from the URL
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBlogDetail = async () => {
      try {
        setLoading(true);
        setError(null);

        // Reference to the specific blog post in Firestore
        const blogDocRef = doc(db, 'Blogs', id);
        const blogDoc = await getDoc(blogDocRef);

        if (blogDoc.exists()) {
          setBlog(blogDoc.data());

          // Fetch sections from the 'sections' subcollection if applicable
          const sectionsRef = collection(blogDocRef, 'sections');
          const sectionsSnapshot = await getDocs(sectionsRef);
          const sectionsList = sectionsSnapshot.docs.map(doc => doc.data());

          setBlog(prevBlog => ({
            ...prevBlog,
            sections: sectionsList,
          }));

        } else {
          setError('Blog not found.');
        }
      } catch (err) {
        console.error('Error fetching blog details:', err);
        setError('Failed to load blog details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogDetail();
  }, [id]);

  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
  };
  
  const formattedDate = formatDate(new Date());  // Current date
  console.log(formattedDate);

  if (loading) return <div className="text-center text-gray-600">Loading...</div>;
  if (error) return <div className="text-red-500">{error}</div>;
  if (!blog) return <div className="text-gray-600">Blog not found.</div>;

  return (
    <div  className="blog-detail w-full mx-auto ">
      <div style={{backgroundImage: `url(${blog.image})`}} className="relative blog-header flex justify-center items-center bg-cover bg-center h-[70vh]">
        <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-tl from-black/50 via-black/80 to-transparent'></div>
        
        
      </div>
      <div className='bg-white w-4/5 rounded-2xl space-y-4 shadow-2xl flex flex-col items-center px-8  py-20  -translate-y-1/4 mx-auto z-10'>
      <div className='flex items-center gap-2'>
        <span className='text-gray-500 uppercase text-md font-bold'>{blog.category}</span>
        <IoStarHalfOutline size={20} className='text-[#008000] text-md font-bold'/>
        <span className='text-gray-500 text-md font-bold'>{formatDate(blog.createdAt.toDate().toLocaleDateString())}</span>
      </div>
          <h1 className="text-3xl text-center text-black font-bold ">{blog.title}</h1>
        </div>
      <div className=" w-2/3 mx-auto blog-sections">
        {blog.sections && blog.sections.length > 0 ? (
          blog.sections.map((section, index) => (
            <div key={index} className="section space-y-4 mt-6">
              <h2 className="text-2xl font-bold">{section.sectionTitle}</h2>
              <p className='text-gray-500 text-md '>{section.sectionContent}</p>
            </div>
          ))
        ) : (
          <p>No sections available for this blog.</p>
        )}
      </div>

      <div className="back-button mt-6">
        <a href={`/blog/${category}`} className="text-[#84cc16] inline-block">
          Back to {category} blogs
        </a>
      </div>
      <CTA/>
    </div>
  );
};

export default BlogDetail;
