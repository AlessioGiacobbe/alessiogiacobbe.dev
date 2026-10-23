import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

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
            type="button"
            onClick={toggle}
            aria-label={dark ? 'light theme' : 'dark theme'}
            className="link inline-flex min-h-11 cursor-pointer items-center gap-2 border-none bg-transparent p-0"
        >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
            <span className="hidden md:inline">{dark ? 'light' : 'dark'}</span>
        </button>
    );
}
