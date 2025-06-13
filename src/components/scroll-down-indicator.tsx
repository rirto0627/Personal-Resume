'use client'

import {ChevronsDown} from 'lucide-react'
import {gsap} from 'gsap'
import {useEffect, useRef} from 'react'

export const ScrollDownIndicator = () => {
    const indicatorRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            const target = indicatorRef.current?.children[0];
            if (target) {
                return gsap.to(target, {
                    y: 10,
                    duration: 1.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });
            }
        });

        return () => ctx.revert();
    }, []);


    return (
        <div
            ref={indicatorRef}
            className={`
        absolute bottom-20
        left-1/2 -translate-x-1/2
        lg:left-[calc(50%+140px)]
      `}
        >
            <div className="flex flex-col items-center text-muted-foreground">
                <span className="text-xs mb-1">Scroll Down</span>
                <ChevronsDown className="h-5 w-5 animate-pulse"/>
            </div>
        </div>
    )
}