import { useState, useEffect } from 'react';

export default function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefersDark = saved
            ? saved === 'dark'
            : window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : '');
        setDark(prefersDark);
    }, []);

    function toggle() {
        const next = !dark;
        setDark(next);
        document.documentElement.setAttribute('data-theme', next ? 'dark' : '');
        localStorage.setItem('theme', next ? 'dark' : 'light');
    }

    return (
        <button
            onClick={toggle}
            className="text-muted hover:text-ink transition-colors cursor-pointer bg-transparent border-none text-left"
            style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
        >
            <span className="block mb-1" style={{ fontSize: '12px' }}>{'//theme'}</span>
            <span>{dark ? 'light' : 'dark'}</span>
        </button>
    );
}
