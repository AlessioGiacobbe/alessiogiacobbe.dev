import { useState, useEffect, useRef } from 'react';

const PRESETS = [
    { hue: 36,  label: 'Amber'   },
    { hue: 24,  label: 'Clay'    },
    { hue: 340, label: 'Rose'    },
    { hue: 262, label: 'Violet'  },
    { hue: 195, label: 'Slate'   },
    { hue: 152, label: 'Sage'    },
];

function easeOutCubic(t) {
    return 1 - Math.pow(1 - t, 3);
}

export default function TonePicker() {
    const [open, setOpen]       = useState(false);
    const [hue, setHue]         = useState(36);
    const containerRef          = useRef(null);
    const currentHueRef         = useRef(36);
    const rafRef                = useRef(null);

    function pick(targetHue) {
        // Cancel any in-progress transition
        if (rafRef.current) cancelAnimationFrame(rafRef.current);

        const startHue  = currentHueRef.current;
        const delta     = targetHue - startHue;
        const duration  = 600;
        const startTime = performance.now();
        const root      = document.documentElement;

        function animate(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const eased    = easeOutCubic(progress);
            const current  = startHue + delta * eased;
            root.style.setProperty('--hue', current);
            currentHueRef.current = current;
            if (progress < 1) {
                rafRef.current = requestAnimationFrame(animate);
            }
        }
        rafRef.current = requestAnimationFrame(animate);

        setHue(targetHue);
        setOpen(false);
    }

    // Close when clicking outside
    useEffect(() => {
        if (!open) return;
        function handle(e) {
            if (containerRef.current && !containerRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.addEventListener('mousedown', handle);
        return () => document.removeEventListener('mousedown', handle);
    }, [open]);

    // Soft sphere colours — lower saturation to match the palette
    const sphereGradient = `radial-gradient(circle at 38% 32%,
        hsl(${hue}, 55%, 95%) 0%,
        hsl(${hue}, 45%, 78%) 40%,
        hsl(${hue}, 35%, 60%) 100%)`;

    const sphereGlow = `
        0 0 10px 4px hsl(${hue}, 40%, 82%),
        0 0 24px 8px hsl(${hue}, 30%, 90%)
    `;

    return (
        <div ref={containerRef} className="fixed top-7 right-8 z-50 flex flex-col items-end gap-3">
            {/* Preset swatches */}
            {open && (
                <div className="flex flex-col items-end gap-2 animate-fade-in-up">
                    {PRESETS.map(p => (
                        <button
                            key={p.hue}
                            onClick={() => pick(p.hue)}
                            title={p.label}
                            style={{
                                width: 24,
                                height: 24,
                                borderRadius: '50%',
                                background: `radial-gradient(circle at 38% 36%,
                                    hsl(${p.hue}, 55%, 93%) 0%,
                                    hsl(${p.hue}, 40%, 72%) 50%,
                                    hsl(${p.hue}, 30%, 55%) 100%)`,
                                boxShadow: p.hue === hue
                                    ? `0 0 0 2px hsl(${p.hue}, 30%, 50%), 0 0 8px hsl(${p.hue}, 35%, 75%)`
                                    : `0 0 5px hsl(${p.hue}, 35%, 82%)`,
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'transform 0.15s ease',
                                filter: 'blur(0.2px)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.15)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        />
                    ))}
                </div>
            )}

            {/* Main dust sphere */}
            <button
                onClick={() => setOpen(o => !o)}
                className="animate-float-dust"
                title="Change color tone"
                style={{
                    width: 38,
                    height: 38,
                    borderRadius: '50%',
                    background: sphereGradient,
                    boxShadow: sphereGlow,
                    filter: 'blur(0.5px)',
                    border: 'none',
                    cursor: 'pointer',
                }}
            />
        </div>
    );
}
