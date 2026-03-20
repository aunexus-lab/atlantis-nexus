import React from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import Section from '../components/Section';
import useJsonLd from '../hooks/useJsonLd';

// Content Imports
import heroMd from '../content/hero.md?raw';
import principlesMd from '../content/principles.md?raw';
import aboutMd from '../content/about.md?raw';
import domainsMd from '../content/domains.md?raw';
import progressionMd from '../content/progression.md?raw';
import projectsMd from '../content/projects.md?raw';

function LandingPage() {
    useJsonLd({
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'EducationalOrganization',
                '@id': 'https://nexus.atlantisuniversity.edu/#org',
                name: 'Atlantis University',
                url: 'https://www.atlantisuniversity.edu',
                sameAs: [
                    'https://github.com/aunexus-lab'
                ]
            },
            {
                '@type': 'WebSite',
                '@id': 'https://nexus.atlantisuniversity.edu/#website',
                url: 'https://nexus.atlantisuniversity.edu',
                name: 'Atlantis Nexus',
                description: 'Academic Reference Model for emerging-technology education — covering AI, data engineering, systems thinking, and digital ethics.',
                publisher: { '@id': 'https://nexus.atlantisuniversity.edu/#org' }
            },
            {
                '@type': 'WebPage',
                '@id': 'https://nexus.atlantisuniversity.edu/',
                url: 'https://nexus.atlantisuniversity.edu/',
                name: 'Atlantis Nexus — Academic Reference Model',
                description: 'A structured framework for teaching emerging technologies. Covers 7 capability domains: Cognitive Architecture, Data Engineering, Digital Ethics, Systems Thinking, HCI, Computational Logic, and Adaptive Infrastructure.',
                isPartOf: { '@id': 'https://nexus.atlantisuniversity.edu/#website' },
                about: [
                    { '@type': 'Thing', name: 'Cognitive Architecture' },
                    { '@type': 'Thing', name: 'Data Engineering' },
                    { '@type': 'Thing', name: 'Digital Ethics' },
                    { '@type': 'Thing', name: 'Systems Thinking' },
                    { '@type': 'Thing', name: 'Human-Computer Interaction' },
                    { '@type': 'Thing', name: 'Computational Logic' },
                    { '@type': 'Thing', name: 'Adaptive Infrastructure' }
                ]
            }
        ]
    }, 'landing');
    return (
        <>
            {/* HERO SECTION */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center md:text-left">
                <div className="text-center md:text-left">
                    <Markdown
                        rehypePlugins={[rehypeRaw]}
                        components={{
                            h1: ({ node, ...props }) => <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-black mb-8" {...props} />,
                            p: ({ node, ...props }) => <p className="text-xl md:text-2xl text-gray-500 font-light leading-relaxed max-w-3xl" {...props} />,
                            blockquote: ({ node, ...props }) => <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 border-l-4 border-gray-900 pl-6 my-8" {...props} />
                        }}
                    >
                        {heroMd}
                    </Markdown>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-gray-100 pt-12">
                    <div className="col-span-3 text-left">
                        <Markdown
                            rehypePlugins={[rehypeRaw]}
                            components={{
                                h3: ({ node, ...props }) => <h3 className="text-xl font-bold text-black mb-2" {...props} />,
                                p: ({ node, ...props }) => <p className="text-gray-600 font-light leading-relaxed" {...props} />
                            }}
                        >{principlesMd}</Markdown>
                    </div>
                </div>
            </section>

            {/* WHAT IS NEXUS */}
            <Section id="about" title="What is Atlantis Nexus" content={aboutMd} />

            {/* DOMAINS */}
            <Section id="domains" title="Capability Domains" content={domainsMd}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-12 border-t border-gray-100">
                    {['Cognitive Architecture', 'Data Engineering', 'Digital Ethics', 'Systems Thinking', 'Human-Computer Interaction', 'Computational Logic', 'Adaptive Infrastructure'].map((domain) => (
                        <div key={domain} className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm hover:border-gray-300 transition-colors">
                            <span className="font-medium text-gray-900">{domain}</span>
                        </div>
                    ))}
                </div>
            </Section>

            {/* LEARNING PROGRESSION */}
            <Section id="progression" title="Learning Progression" content={progressionMd} />

            {/* PROJECTS */}
            <Section id="projects" title="Projects & Artifacts" content={projectsMd} />
        </>
    );
}

export default LandingPage;
