import React, { Suspense, useEffect, useRef, useState } from "react";


function SplineItem({animationFramesLocation = null, animationFrames = 0, hovered, fps = 30, customClasses = "!inline h-16 w-32" }) {
    const [frames, setFrames] = useState([])
    const [currentFrame, setCurrentFrame] = useState(1)

    useEffect(() => {
        if (animationFramesLocation) {
            async function loadFrames() {
                let framesRequests = Array.from({ length: animationFrames }, (x, i) => i + 1)
                    .map((index) => fetch(`/imagesFrames/${animationFramesLocation}/${index}.png`)
                        .then(r => r.blob()
                            .then(blob => URL.createObjectURL(blob))))

                let framesAsBlobURL = await Promise.all(framesRequests);
                setFrames(framesAsBlobURL)
            }

            loadFrames()
        }
    }, [])

    useEffect(() => {
        let interval = null;
        if (hovered) {
            interval = setInterval(() => {
                setCurrentFrame((frame) => frame < animationFrames - 1 ? frame + 1 : frame)
            }, 1000 / fps);
        } else {
            interval = setInterval(() => {
                    setCurrentFrame((frame) => frame > 1 ? frame - 1 : frame)
            }, 1000 / fps);
        }
        return () => {
            clearInterval(interval);
        }
    }, [hovered]);


    return <div className="md:!inline">
        <img className="ml-neg20 mt-neg15" src={frames[currentFrame]} />
    </div>
}

export default SplineItem