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
                <article className="prose prose-lg text-academic-sub leading-relaxed max-w-none hover:prose-a:text-black">
                    <Markdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            blockquote: ({ node, ...props }) => (
                                <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-4" {...props} />
                            ),
                            ul: ({ node, ...props }) => <ul className="list-disc pl-5 space-y-2 my-4" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-5 space-y-2 my-4" {...props} />,
                            li: ({ node, ...props }) => <li className="pl-1 leading-relaxed" {...props} />,
                            a: ({ node, ...props }) => <a className="text-gray-600 underline decoration-gray-300 hover:text-black hover:decoration-black transition-colors" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-semibold text-gray-900" {...props} />,
                            hr: ({ node, ...props }) => <hr className="my-8 border-gray-200" {...props} />,
                            h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mt-8 mb-4 tracking-tight text-black" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="text-2xl font-semibold mt-8 mb-4 tracking-tight text-gray-900" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="text-xl font-medium mt-6 mb-3 text-gray-900" {...props} />,
                            h4: ({ node, ...props }) => <h4 className="text-lg font-medium mt-4 mb-2 text-gray-800" {...props} />,
                            img: (props) => {
                                const [isZoomed, setIsZoomed] = React.useState(false);
                                return (
                                    <>
                                        {isZoomed && (
                                            <div
                                                className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out transition-opacity duration-300"
                                                onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                                            >
                                                <img
                                                    {...props}
                                                    className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
                                                />
                                            </div>
                                        )}
                                        <div className="perspective-1000 group">
                                            <img
                                                {...props}
                                                onClick={() => setIsZoomed(true)}
                                                className="w-full max-w-lg my-6 rounded-xl border border-gray-200 shadow-xl cursor-zoom-in transition-all duration-500 ease-out transform group-hover:rotate-0 group-hover:scale-105 group-hover:shadow-2xl md:rotate-y-12 md:rotate-z-2 md:translate-x-4 bg-white"
                                                style={{ transformStyle: 'preserve-3d' }}
                                            />
                                        </div>
                                    </>
                                );
                            }
                        }}
                    >
                        {content}
                    </Markdown>
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
