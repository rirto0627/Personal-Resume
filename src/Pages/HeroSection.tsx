import {useRef, useEffect} from 'react'
import {gsap} from 'gsap'
import {Badge} from '@/components/ui/badge'
import {TypeAnimation} from 'react-type-animation'
import {ScrollDownIndicator} from '@/components/scroll-down-indicator'
import {cn} from '@/lib/utils'

import { personalInfo } from '@/data/personal-info'

const HeroSection = () => {
    const heroRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const subtitleRef = useRef<HTMLDivElement>(null)
    const badgeRef = useRef<HTMLDivElement>(null)
    const ctaRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, subtitleRef.current, badgeRef.current, ctaRef.current], {
                y: 30,
                opacity: 0
            })

            const tl = gsap.timeline({defaults: {ease: 'power3.out'}})
            tl.from(heroRef.current, {
                opacity: 0,
                duration: 0.8
            })
                .to(titleRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                }, '-=0.4')
                .to(subtitleRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                }, '-=0.3')
                .to(badgeRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5
                }, '-=0.2')
                .to(ctaRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5
                }, '-=0.1')
        }, heroRef)

        return () => ctx.revert()
    }, [])

    return (
        <div
            ref={heroRef}
            className={cn(
                "flex flex-col justify-center min-h-screen",
                "w-full max-w-4xl mx-auto px-6 relative",
                "lg:pl-12 lg:pr-0"
            )}
        >
            <Badge
                ref={badgeRef}
                variant="outline"
                className="w-fit mb-6 text-sm font-mono opacity-0 border-primary/30 bg-primary/5 text-primary"
            >
                {personalInfo.basicInfo.greeting}
            </Badge>

            <h1
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight opacity-0 leading-tight"
            >
                {personalInfo.basicInfo.name}
                <br />
                <span className="text-primary">{personalInfo.basicInfo.title}</span>
            </h1>

            <div ref={subtitleRef} className="mt-6 opacity-0">
                <TypeAnimation
                    sequence={personalInfo.typeAnimationSequences}
                    wrapper="h2"
                    speed={50}
                    className="text-xl md:text-2xl text-muted-foreground font-medium"
                    repeat={Infinity}
                />
            </div>

            <div ref={ctaRef} className="mt-8 opacity-0 space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                    {personalInfo.basicInfo.bio}
                </p>

                <div className="flex gap-4">
                    <a
                        href="#contact"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                    >
                        聯絡我
                    </a>
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-primary/30 bg-transparent text-primary font-medium hover:bg-primary/5 transition-colors"
                    >
                        查看作品
                    </a>
                </div>
            </div>

            <ScrollDownIndicator />
        </div>
    )
}

export default HeroSection