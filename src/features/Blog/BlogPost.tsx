import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface BlogPostData {
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

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const [content, setContent] = useState('');
  const [meta, setMeta] = useState<BlogPostData | null>(null);

  useEffect(() => {
    fetch('/blog/index.json')
      .then((res) => res.json())
      .then((posts: BlogPostData[]) => {
        const post = posts.find((p) => p.id === id);
        if (post) {
          setMeta(post);
          // Fetch markdown content with cache buster
          return fetch(`/blog/${post.file}?t=${new Date().getTime()}`);
        }
        throw new Error('Post not found');
      })
      .then((res) => res.text())
      .then((text) => setContent(text))
      .catch((err) => console.error('Failed to load blog post', err));
  }, [id]);

  if (!content) {
    return (
      <div className="w-full max-w-3xl mx-auto p-6 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <article className="w-full max-w-3xl mx-auto space-y-6 animate-fade-in">
      <div className="p-6 bg-white rounded-lg shadow-md border border-gray-200">
        <Link
          to="/blog"
          className="inline-flex items-center text-sm text-gray-500 hover:text-green-600 mb-6 transition-colors"
        >
          <ArrowBackIcon fontSize="small" className="mr-1" />
          Back to Blog
        </Link>

        {meta && (
          <header className="mb-8 border-b border-gray-100 pb-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{meta.title}</h1>
            <div className="flex items-center gap-4 mb-4">
              <time className="text-gray-500 font-mono text-sm">{meta.date}</time>
              <div className="flex flex-wrap gap-2">
                {meta.tags && meta.tags.map(tag => (
                  <span key={tag} className={`text-xs px-2 py-1 rounded-full font-medium ${getTagColor(tag)}`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>
        )}

        <div className="prose prose-green max-w-none prose-headings:font-bold prose-a:text-green-600 hover:prose-a:text-green-700">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
