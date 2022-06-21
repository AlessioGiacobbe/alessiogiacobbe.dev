import React, { Suspense, useEffect, useRef, useState } from "react";

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function SplineItem({ splineLink, splineItemName, hovered }) {
    const spline = useRef();

    function onLoad(splineApp) {
        spline.current = splineApp;
        console.log(splineApp)
    }

    useEffect(() => {
        if (spline.current) {
            hovered ? triggerAnimation() : resetAnimation()
        }
    }, [hovered]);

    function triggerAnimation() {
        spline.current.emitEvent('mouseDown', splineItemName);
    }

    function resetAnimation() {
        spline.current.emitEvent('mouseUp', splineItemName);
    }

    return <Suspense fallback={<div></div>}>
            <Spline onLoad={onLoad} className="!inline h-16 w-32" scene={splineLink} />
    </Suspense>
}

export default SplineItem