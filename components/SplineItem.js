import useTranslation from "next-translate/useTranslation";
import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

function SplineItem({ splineLink, splineItemName, hovered }) {
    const spline = useRef();

    function onLoad(splineApp) {
        console.log("loaded")
        spline.current = splineApp;
    }

    useEffect(() => {
        if(spline.current){
            hovered ? triggerAnimation() : resetAnimation()
        }
    }, [hovered]);

    function triggerAnimation() {
        spline.current.emitEvent('mouseDown', splineItemName);
    }

    function resetAnimation() {
        spline.current.emitEvent('mouseUp', splineItemName);
    }

    return <Spline onLoad={onLoad} className="!inline h-16 w-32" scene={splineLink} />
}

export default SplineItem