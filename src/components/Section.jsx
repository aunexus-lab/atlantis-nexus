import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function Section({ id, title, children, content, className = "" }) {
    return (
        <section id={id} className={`py-16 md:py-24 max-w-4xl mx-auto px-6 ${className}`}>
            {title && (
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-academic-text tracking-tight border-b border-gray-200 pb-2">
                    {title}
                </h2>
            )}

            {/* If raw markdown string is provided, render it with Typography plugin */}
            {content ? (
                <article className="prose prose-lg prose-academic text-academic-sub leading-relaxed max-w-none hover:prose-a:text-black">
                    <Markdown rehypePlugins={[rehypeRaw]}>{content}</Markdown>
                </article>
            ) : (
                /* Fallback for direct children (e.g. custom React components like the Domain grid) */
                <div className="text-lg text-academic-sub leading-relaxed">
                    {children}
                </div>
            )}
        </section>
    );
}

export default Section;
