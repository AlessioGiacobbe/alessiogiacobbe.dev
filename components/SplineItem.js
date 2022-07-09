import React, { Suspense, useEffect, useRef } from "react";
import Image from 'next/image'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function SplineItem({ splineLink, imageFallback = null, splineItemName, hovered, customClasses = "h-16 w-32" }) {
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


    return <Suspense fallback={<></>}>
        <div className="visible md:!hidden">
            <Image src={`/imagesFallback/${imageFallback}`} width="66" height="58" />
        </div>
        <div className="hidden md:!inline">
            <Spline onLoad={onLoad} className={customClasses} scene={splineLink} />
        </div>
    </Suspense>
}

export default SplineItem