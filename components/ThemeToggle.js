import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle({ compact = false }) {
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

    if (compact) {
        return (
            <button
                onClick={toggle}
                className="text-muted hover:text-ink transition-colors cursor-pointer bg-transparent border-none p-0"
            >
                {dark ? <FiSun size={18} /> : <FiMoon size={18} />}
            </button>
        );
    }

    return (
        <button
            onClick={toggle}
            className="text-muted hover:text-ink transition-colors cursor-pointer bg-transparent border-none p-0 text-left"
            style={{ fontFamily: 'inherit', fontSize: 'inherit' }}
        >
            <span className="text-muted text-xs block mb-1">{'//theme'}</span>
            <span>{dark ? 'light' : 'dark'}</span>
        </button>
    );
}
