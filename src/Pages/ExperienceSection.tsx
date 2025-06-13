import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/personal-info'
gsap.registerPlugin(ScrollTrigger)

const ExperienceSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const itemRefs = useRef<(HTMLDivElement | null)[]>([])


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, ...itemRefs.current], {
                y: 50,
                opacity: 0
            })

            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none'
                }
            })

            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6
            })
                .to(itemRefs.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.15
                }, '-=0.3')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="experience"
            className={cn(
                "py-20 lg:py-28",
                "max-w-6xl mx-auto px-6"
            )}
        >
            <h2
                ref={titleRef}
                className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 opacity-0"
            >
                工作 <span className="text-primary">經歷</span>
            </h2>

            <div className="space-y-8">
                {personalInfo.experiences.map((exp, index) => (
                    <Card
                        key={index}
                        ref={el => { itemRefs.current[index] = el }}
                        className={cn(
                            "p-6 border-border/20 hover:border-primary/30 transition-colors",
                            "opacity-0"
                        )}
                    >
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                            <div className="space-y-2 flex-1">
                                <h3 className="text-xl font-semibold">{exp.position}</h3>
                                <div className="flex items-center gap-2">
                                    <span className="font-medium">{exp.company}</span>
                                    <span className="text-muted-foreground text-sm">| {exp.period}</span>
                                </div>

                                <ul className="list-disc pl-5 space-y-1 mt-3">
                                    {exp.description.map((desc, i) => (
                                        <li key={i} className="text-muted-foreground">
                                            {desc}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex flex-wrap gap-2 md:max-w-xs">
                                {exp.skills.map((skill, i) => (
                                    <Badge
                                        key={i}
                                        variant="outline"
                                        className="border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ExperienceSection