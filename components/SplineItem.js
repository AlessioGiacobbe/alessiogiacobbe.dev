import React, { Suspense, useEffect, useRef } from "react";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function SplineItem({ splineLink, splineItemName, hovered, customClasses = "!inline h-16 w-32" }) {
    const spline = useRef();

    function onLoad(splineApp) {
        spline.current = splineApp;
    }

    useEffect(() => {
        const triggerAnimation = () => {
            spline.current.emitEvent('mouseDown', splineItemName);
        };
        const resetAnimation = () => {
            spline.current.emitEvent('mouseUp', splineItemName);
        }
        if (spline.current) {
            hovered ? triggerAnimation() : resetAnimation()
        }
    }, [hovered]);

    return <Suspense fallback={<div></div>}>
            <Spline onLoad={onLoad} className={customClasses} scene={splineLink} />
    </Suspense>
}

export default SplineItem