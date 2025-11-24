import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  file: string;
  tags: string[];
}

const getTagColor = (tag: string) => {
  switch (tag.toLowerCase()) {
    case 'technology':
      return 'bg-blue-100 text-blue-800';
    case 'poem':
      return 'bg-pink-100 text-pink-800';
    case 'react':
      return 'bg-cyan-100 text-cyan-800';
    case 'embedded':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    fetch('/blog/index.json')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((err) => console.error('Failed to load blog posts', err));
  }, []);

  return (
    <section className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <div className="space-y-4">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="block p-4 rounded-lg border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all duration-300 group"
            >
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-700 transition-colors">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-500 font-mono">{post.date}</span>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags && post.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded-full font-medium ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
