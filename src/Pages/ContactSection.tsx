// ContactSection.tsx
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Mail, Phone } from 'lucide-react'
import { personalInfo } from '@/data/personal-info'

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)
    const cardRef = useRef<HTMLDivElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    const infoRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set([titleRef.current, cardRef.current, infoRef.current], {
                y: 50,
                opacity: 0,
            })

            const tl = gsap.timeline({
                defaults: { ease: 'power3.out' },
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: 'top 70%',
                    toggleActions: 'play none none none',
                },
            })

            tl.to(titleRef.current, {
                y: 0,
                opacity: 1,
                duration: 0.6,
            })
                .to(
                    cardRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                    },
                    '-=0.3'
                )
                .to(
                    infoRef.current,
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.5,
                    },
                    '-=0.4'
                )
        }, sectionRef)

        return () => ctx.revert()
    }, [])

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // 這裡你可以做表單送出邏輯
    }

    return (
        <section
            ref={sectionRef}
            id="contact"
            className={cn('py-20 lg:py-28', 'max-w-6xl mx-auto px-6')}
        >
            <h2
                ref={titleRef}
                className="text-3xl md:text-4xl font-bold tracking-tight text-center mb-12 opacity-0"
            >
                聯絡 <span className="text-primary">方式</span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <Card
                    ref={cardRef}
                    className={cn(
                        'p-8 border-border/20 hover:border-primary/30 transition-colors',
                        'opacity-0'
                    )}
                >
                    <h3 className="text-xl font-semibold mb-6">發送訊息</h3>
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-1">
                                    姓名
                                </label>
                                <Input id="name" placeholder="您的姓名" required />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-1">
                                    電子郵件
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="您的電子郵件"
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="subject" className="block text-sm font-medium mb-1">
                                主題
                            </label>
                            <Input id="subject" placeholder="訊息主題" required />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-1">
                                訊息內容
                            </label>
                            <Textarea id="message" placeholder="您的訊息內容" rows={5} required />
                        </div>
                        <Button type="submit" disabled className="w-full">
                            發送訊息
                        </Button>
                    </form>
                </Card>

                <div ref={infoRef} className="space-y-6 opacity-0">
                    <Card className="p-8 border-border/20 hover:border-primary/30 transition-colors">
                        <h3 className="text-xl font-semibold mb-6">聯絡資訊</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Mail className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">電子郵件</p>
                                    <p>{personalInfo.contact.email}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10 text-primary">
                                    <Phone className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">電話</p>
                                    <p>{personalInfo.contact.phone}</p>
                                </div>
                            </div>
                        </div>
                    </Card>

                    <Card className="p-8 border-border/20 hover:border-primary/30 transition-colors">
                        <h3 className="text-xl font-semibold mb-6">社交媒體</h3>
                        <div className="flex gap-4">
                            {Object.values(personalInfo.contact.social).map((link, index) => (
                                <Button
                                    key={index}
                                    variant="outline"
                                    size="icon"
                                    className="border-primary/30 hover:bg-primary/5"
                                    asChild
                                >
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.icon}
                                    </a>
                                </Button>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default ContactSection
