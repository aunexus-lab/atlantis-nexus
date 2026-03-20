import React, { useState } from 'react';

const nodes = [
    {
        id: 'sis',
        label: 'Campus Nexus SIS',
        sub: 'OData / CQRS',
        col: 3, row: 2,
        color: 'bg-gray-900 text-white',
        desc: 'Source of truth — student records, finances, enrollment, attendance, class sections.',
    },
    {
        id: 'nexussis',
        label: 'NexusSIS API',
        sub: 'Flask · Python',
        col: 2, row: 2,
        color: 'bg-blue-600 text-white',
        desc: 'Central gateway — translates OData into 15+ REST/JSON endpoints. Bearer-token secured.',
    },
    {
        id: 'campusmcp',
        label: 'CampusMCP',
        sub: 'FastAPI · Azure OpenAI',
        col: 1, row: 0,
        color: 'bg-violet-600 text-white',
        desc: 'AI campus assistant — 7 MCP tools, natural language queries, FERPA-compliant, bilingual.',
    },
    {
        id: 'attendance',
        label: 'Attendance',
        sub: 'Moodle local plugin',
        col: 0, row: 1,
        color: 'bg-emerald-600 text-white',
        desc: 'Weekly attendance grid — color-coded badges, SIS read/write, activity auto-attendance.',
    },
    {
        id: 'linkclass',
        label: 'LinkClass',
        sub: 'Moodle local plugin',
        col: 0, row: 2,
        color: 'bg-emerald-600 text-white',
        desc: 'SIS ↔ Moodle sync — course creation, enrollment, user provisioning, semester tree browser.',
    },
    {
        id: 'finstatus',
        label: 'FinStatus',
        sub: 'Moodle block plugin',
        col: 0, row: 3,
        color: 'bg-emerald-600 text-white',
        desc: 'Financial status block — enrollment badges, balance, configurable payment button.',
    },
    {
        id: 'resume',
        label: 'Campus Resume',
        sub: 'Moodle local plugin',
        col: 1, row: 4,
        color: 'bg-emerald-600 text-white',
        desc: 'AI resume builder + mock interviews with voice input, speech analytics, and PDF export.',
    },
    {
        id: 'videoclass',
        label: 'VideoClass',
        sub: 'Moodle course format',
        col: 1, row: 1,
        color: 'bg-amber-600 text-white',
        desc: 'Course format with section-focused video nav and AI tutor that reads course resources.',
    },
    {
        id: 'stripe',
        label: 'Stripe Gateway',
        sub: 'Moodle local plugin',
        col: 0, row: 4,
        color: 'bg-pink-600 text-white',
        desc: 'Shared Stripe payment infrastructure — checkout sessions, webhook routing to consumer plugins.',
    },
    {
        id: 'openai',
        label: 'Azure OpenAI',
        sub: 'gpt-4o-mini',
        col: 2, row: 0,
        color: 'bg-gray-700 text-white',
        desc: 'LLM provider — function calling for MCP tools, resume generation, AI tutoring.',
    },
    {
        id: 'stripeapi',
        label: 'Stripe API',
        sub: 'Payments',
        col: 0, row: 5,
        color: 'bg-gray-700 text-white',
        desc: 'External payment processor — checkout sessions, webhooks, billing.',
    },
];

const connections = [
    { from: 'nexussis', to: 'sis', label: 'OData' },
    { from: 'campusmcp', to: 'nexussis', label: 'REST' },
    { from: 'campusmcp', to: 'openai', label: 'Function Calling' },
    { from: 'attendance', to: 'nexussis', label: 'REST' },
    { from: 'linkclass', to: 'nexussis', label: 'REST' },
    { from: 'finstatus', to: 'nexussis', label: 'REST' },
    { from: 'resume', to: 'openai', label: 'AI Generation' },
    { from: 'videoclass', to: 'campusmcp', label: 'Chat API' },
    { from: 'stripe', to: 'stripeapi', label: 'HTTPS' },
    { from: 'resume', to: 'stripe', label: 'Credits' },
];

function FrameworkDiagram() {
    const [active, setActive] = useState(null);

    const activeNode = nodes.find(n => n.id === active);

    // Highlight connections involving the active node
    const isConnected = (nodeId) => {
        if (!active) return true;
        if (nodeId === active) return true;
        return connections.some(
            c => (c.from === active && c.to === nodeId) || (c.to === active && c.from === nodeId)
        );
    };

    return (
        <div className="my-12">
            {/* Title */}
            <div className="text-center mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Architecture Map</h3>
                <p className="text-sm text-gray-500">Click any component to explore its connections</p>
            </div>

            {/* Grid Diagram */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                {nodes.map((node) => {
                    const connected = isConnected(node.id);
                    const isActive = active === node.id;
                    return (
                        <button
                            key={node.id}
                            onClick={() => setActive(isActive ? null : node.id)}
                            className={`
                relative p-3 md:p-4 rounded-xl border-2 text-left transition-all duration-300 cursor-pointer
                ${isActive
                                    ? 'border-black shadow-lg scale-105 ring-2 ring-black/10'
                                    : connected
                                        ? 'border-gray-200 hover:border-gray-400 hover:shadow-md'
                                        : 'border-gray-100 opacity-30'
                                }
              `}
                            style={{
                                order: node.col * 10 + node.row,
                            }}
                        >
                            <div className={`inline-block px-2 py-0.5 rounded-md text-xs font-semibold mb-2 ${node.color}`}>
                                {node.label}
                            </div>
                            <div className="text-xs text-gray-500 font-medium">{node.sub}</div>
                            {/* Connection dots */}
                            {isActive && (
                                <div className="absolute -top-1 -right-1 w-3 h-3 bg-black rounded-full animate-pulse" />
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Active Node Detail */}
            <div className={`mt-6 overflow-hidden transition-all duration-300 ${activeNode ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {activeNode && (
                    <div className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                        <div className="flex items-start justify-between mb-3">
                            <div>
                                <span className={`inline-block px-2.5 py-1 rounded-lg text-sm font-bold ${activeNode.color}`}>
                                    {activeNode.label}
                                </span>
                                <span className="ml-2 text-sm text-gray-500">{activeNode.sub}</span>
                            </div>
                            <button
                                onClick={() => setActive(null)}
                                className="text-gray-400 hover:text-gray-600 text-lg leading-none cursor-pointer"
                            >
                                ✕
                            </button>
                        </div>
                        <p className="text-sm text-gray-700 mb-4">{activeNode.desc}</p>

                        {/* Connections */}
                        <div className="space-y-1.5">
                            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Connections</div>
                            {connections
                                .filter(c => c.from === active || c.to === active)
                                .map((c, i) => {
                                    const otherId = c.from === active ? c.to : c.from;
                                    const other = nodes.find(n => n.id === otherId);
                                    const direction = c.from === active ? '→' : '←';
                                    return (
                                        <div key={i} className="flex items-center gap-2 text-sm">
                                            <span className="text-gray-400 font-mono">{direction}</span>
                                            <span className={`inline-block px-1.5 py-0.5 rounded text-xs font-semibold ${other.color}`}>
                                                {other.label}
                                            </span>
                                            <span className="text-gray-400 text-xs">({c.label})</span>
                                        </div>
                                    );
                                })}
                        </div>
                    </div>
                )}
            </div>

            {/* Legend */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center text-xs text-gray-500">
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-blue-600 inline-block" /> API Gateway
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-violet-600 inline-block" /> AI Service
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-emerald-600 inline-block" /> Moodle Plugin
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-amber-600 inline-block" /> Course Format
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-pink-600 inline-block" /> Payments
                </span>
                <span className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded bg-gray-700 inline-block" /> External Service
                </span>
            </div>
        </div>
    );
}

export default FrameworkDiagram;
