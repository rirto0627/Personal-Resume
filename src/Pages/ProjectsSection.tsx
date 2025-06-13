import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { personalInfo } from '@/data/personal-info'

gsap.registerPlugin(ScrollTrigger)


const ProjectsSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const projectRefs = useRef<(HTMLDivElement | null)[]>([])


    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, ...projectRefs.current], {
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
                .to(projectRefs.current, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.2
                }, "-=0.3")
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    return (
        <section
            ref={sectionRef}
            id="projects"
            className={cn(
                "py-20 lg:py-28",
                "max-w-6xl mx-auto px-6"
            )}
        >
            <h2
                ref={titleRef}
                className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 opacity-0"
            >
                精選 <span className="text-primary">專案</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {personalInfo.projects.map((project, index) => (
                    <Card
                        key={index}
                        ref={el => { projectRefs.current[index] = el }}
                        className={cn(
                            "group overflow-hidden border-border/20 hover:border-primary/30 transition-colors",
                            "opacity-0"
                        )}
                    >
                        <div className="aspect-video overflow-hidden">
                            <img
                                src={project.imageUrl}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                            <p className="text-muted-foreground mb-4">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map(tech => (
                                    <span
                                        key={tech}
                                        className="text-xs px-2 py-1 bg-primary/10 text-primary rounded"
                                    >
                    {tech}
                  </span>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                {project.demoUrl && (
                                    <Button asChild variant="outline" className="border-primary/30 hover:bg-primary/5">
                                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                            查看演示
                                        </a>
                                    </Button>
                                )}
                                {project.codeUrl && (
                                    <Button asChild>
                                        <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                                            查看代码
                                        </a>
                                    </Button>
                                )}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection