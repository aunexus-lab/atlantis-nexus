import React from 'react';

function Section({ id, title, children, className = "" }) {
    return (
        <section id={id} className={`py-16 md:py-24 max-w-4xl mx-auto px-6 ${className}`}>
            {title && (
                <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-academic-text tracking-tight border-b border-gray-200 pb-2">
                    {title}
                </h2>
            )}
            <div className="text-lg text-academic-sub leading-relaxed">
                {children}
            </div>
        </section>
    );
}

export default Section;
