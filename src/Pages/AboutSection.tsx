import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/personal-info'


const AboutSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const contentRef = useRef<HTMLDivElement>(null)
    const imageRef = useRef<HTMLDivElement>(null)
    const skillsRef = useRef<HTMLDivElement>(null)
    const skills = personalInfo.skills.categories
        .flatMap(category => category.skills.map(skill => skill.name))
        // .slice(0, 10) // 只顯示前10個技能標籤

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, contentRef.current, imageRef.current, skillsRef.current], {
                y: 30,
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
                .to(imageRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5
                }, '-=0.3')
                .to(contentRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.6
                }, '-=0.2')
                .to(skillsRef.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1
                }, '-=0.3')
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="about"
            className={cn(
                "py-20 lg:py-28",
                "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center",
                "max-w-6xl mx-auto px-6"
            )}
        >
            <div
                ref={imageRef}
                className="flex justify-center opacity-0"
            >
                <div className="relative">
                    <Avatar className="h-64 w-64 md:h-80 md:w-80 border-4 border-primary/20 rounded-lg">
                        <AvatarImage src={personalInfo.basicInfo.aboutAvatar} />
                        <AvatarFallback className="bg-primary/10 text-primary text-4xl font-bold">
                            RX
                        </AvatarFallback>
                    </Avatar>
                    <div className="absolute -bottom-4 -right-4 bg-background px-4 py-2 rounded-full border shadow-sm">
                        <span className="font-mono text-sm">{personalInfo.basicInfo.nickname.split(',')[0]}</span>
                    </div>
                </div>
            </div>

            <div className="space-y-6">
                <h2
                    ref={titleRef}
                    className="text-3xl md:text-4xl font-bold tracking-tight opacity-0"
                >
                    關於 <span className="text-primary">我</span>
                </h2>

                <div ref={contentRef} className="space-y-4 opacity-0">
                    {personalInfo.basicInfo.bio.split('。').filter(Boolean).map((paragraph, i) => (
                        <p key={i} className="text-muted-foreground leading-relaxed">
                            {paragraph}。
                        </p>
                    ))}
                </div>

                <div ref={skillsRef} className="flex flex-wrap gap-2 pt-2 opacity-0">
                    {skills.map((skill, index) => (
                        <Badge
                            key={index}
                            variant="outline"
                            className="border-primary/20 bg-primary/5 text-primary hover:bg-primary/10"
                        >
                            {skill}
                        </Badge>
                    ))}
                </div>

                <div className="flex gap-4 pt-6">
                    <Button className="bg-primary hover:bg-primary/90">
                        {personalInfo.actions.downloadResume}
                    </Button>
                    <Button variant="outline" className="border-primary/30 hover:bg-primary/5">
                        {personalInfo.actions.learnMore}
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default AboutSection