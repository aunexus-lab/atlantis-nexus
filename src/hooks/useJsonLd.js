import { useEffect } from 'react';

/**
 * Injects a JSON-LD script into <head> and removes it on unmount.
 * @param {object} schema - The JSON-LD object to inject.
 * @param {string} id - Unique ID for the script tag.
 */
export default function useJsonLd(schema, id) {
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = `ld-${id}`;
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
        return () => {
            const existing = document.getElementById(`ld-${id}`);
            if (existing) existing.remove();
        };
    }, []);
}
