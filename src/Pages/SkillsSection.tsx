import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/personal-info'

gsap.registerPlugin(ScrollTrigger)

const SkillsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const categoryRefs = useRef<(HTMLDivElement | null)[]>([])


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, ...categoryRefs.current], {
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
                .to(categoryRefs.current, {
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
            id="skills"
            className={cn(
                "py-20 lg:py-28",
                "max-w-6xl mx-auto px-6"
            )}
        >
            <h2
                ref={titleRef}
                className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 opacity-0"
            >
                技術 <span className="text-primary">技能</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {personalInfo.skills.categories.map((category, index) => (
                    <Card
                        key={category.id}
                        ref={el => {
                            categoryRefs.current[index] = el;
                        }}
                        className={cn(
                            "p-6 border-border/20 hover:border-primary/30 transition-colors",
                            "opacity-0"
                        )}
                    >

                    <h3 className="text-xl font-semibold mb-4">{category.name}</h3>

                        <div className="space-y-4">
                            {category.skills.map((skill, i) => (
                                <div key={i} className="space-y-1">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-2 font-medium">
                                            {skill.icon}
                                            <span>{skill.name}</span>
                                        </div>
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-muted rounded-full h-2.5">
                                        <div
                                            className="bg-primary h-2.5 rounded-full"
                                            style={{ width: `${skill.level}%` }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                    </Card>
                ))}
            </div>
        </section>
    )
}

export default SkillsSection