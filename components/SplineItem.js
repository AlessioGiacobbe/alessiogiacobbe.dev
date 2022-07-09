import React, { Suspense, useEffect, useRef } from "react";
import { isMobile } from 'react-device-detect';
import Image from 'next/image'

const Spline = React.lazy(() => import('@splinetool/react-spline'));

function SplineItem({ splineLink, imageFallback = null, splineItemName, hovered, customClasses = "!inline h-16 w-32" }) {
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

    const useFallback = (isMobile && imageFallback != null)

    return <Suspense fallback={<></>}>
                <div className={useFallback ? "visible" : "!hidden"}>
                    <Image  src={`/imagesFallback/${imageFallback}`} width="66" height="58" />
                </div>
                <Spline onLoad={onLoad} className={`${customClasses} ${useFallback ? "!hidden" : ""}`} scene={splineLink} />
    </Suspense>
}

export default SplineItem