import {useRef, useEffect, useState} from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {  Menu } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { cn } from '@/lib/utils'
import {personalInfo} from "@/data/personal-info.tsx";

gsap.registerPlugin(ScrollTrigger)

const Navbar = () => {
    const isDesktop = useMediaQuery('(min-width: 1024px)')
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const navbarRef = useRef<HTMLDivElement>(null)
    const itemRefs = useRef<(HTMLButtonElement | null)[]>([])
    const socialRefs = useRef<(HTMLAnchorElement | null)[]>([])

    // GSAP 动画效果 - 修复版本
    useEffect(() => {
        if (!isDesktop || !navbarRef.current) return

        // 确保所有 ref 都已设置
        const items = itemRefs.current.filter(Boolean)
        const socials = socialRefs.current.filter(Boolean)

        if (items.length === 0 || socials.length === 0) return

        const ctx = gsap.context(() => {
            // 初始状态 - 添加安全检查
            gsap.set(navbarRef.current, { x: -40, opacity: 0 })
            items.forEach(item => gsap.set(item, { y: 20, opacity: 0 }))
            socials.forEach(social => gsap.set(social, { y: 10, opacity: 0 }))

            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
            tl.to(navbarRef.current, {
                x: 0,
                opacity: 1,
                duration: 0.8
            })
                .to(items, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                }, "-=0.4")
                .to(socials, {
                    y: 0,
                    opacity: 1,
                    duration: 0.4,
                    stagger: 0.1,
                }, "-=0.3")
        }, navbarRef)

        return () => ctx.revert()
    }, [isDesktop])


    const navItems = [
        { id: 'hero', label: '首頁' },
        { id: 'about', label: '關於我' },
        { id: 'experience', label: '經歷' },
        { id: 'skills', label: '技能' },
        { id: 'projects', label: '專案' },
        { id: 'contact', label: '聯絡' },
    ]

    const socialLinks = Object.values(personalInfo.contact.social);


    const handleNavClick = (id: string) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        setMobileMenuOpen(false)
    }

    return (
        <>
            {isDesktop ? (
                <nav className="fixed left-0 top-0 h-full w-72 p-6 z-50">
                    <Card className="h-full flex flex-col bg-background/90 backdrop-blur-md border-border/20 shadow-lg">
                        <div className="flex flex-col items-center gap-4 pt-8 pb-6">
                            <Avatar className="h-20 w-20 border-2 border-primary/30">
                                <AvatarImage src={personalInfo.basicInfo.avatar} />
                                <AvatarFallback className="bg-primary/10 text-primary font-bold">RX</AvatarFallback>
                            </Avatar>
                            <div className="text-center">
                                <h2 className="font-bold text-lg tracking-tight">{personalInfo.basicInfo.name}</h2>
                                <p className="text-sm text-muted-foreground">@{personalInfo.basicInfo.nickname.split(',')[1]}</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-1 px-2 flex-grow">
                            {navItems.map((item, index) => (
                                <Button
                                    key={item.id}
                                    ref={el => { itemRefs.current[index] = el }}
                                    variant="ghost"
                                    className="w-full justify-start px-4 py-5 hover:bg-primary/5 hover:text-primary"
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </Button>
                            ))}
                        </div>

                        <div className="flex justify-center gap-4 pb-6 pt-4">
                            {socialLinks.map((link, index) => (
                                <a
                                    key={index}
                                    ref={el => { socialRefs.current[index] = el }}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center h-10 w-10 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </Card>
                </nav>
            ) : (
                <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-border/20 z-50 lg:hidden">
                    <div className="container flex items-center justify-between h-16 px-4">
                        <div className="flex items-center gap-2">
                            <Avatar className="h-8 w-8 border border-primary/30">
                                <AvatarImage src={personalInfo.basicInfo.avatar} />
                                <AvatarFallback className="bg-primary/10 text-primary text-xs">RX</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{personalInfo.basicInfo.nickname.split(',')[1]}</span>
                        </div>

                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>

                    <div
                        className={cn(
                            "overflow-hidden transition-all duration-300 ease-in-out",
                            mobileMenuOpen ? "max-h-96 py-2" : "max-h-0"
                        )}
                    >
                        <div className="container flex flex-col gap-1 px-4">
                            {navItems.map((item) => (
                                <Button
                                    key={item.id}
                                    variant="ghost"
                                    className="w-full justify-start px-4 py-3"
                                    onClick={() => handleNavClick(item.id)}
                                >
                                    {item.label}
                                </Button>
                            ))}

                            <div className="flex justify-center gap-4 pt-2">
                                {socialLinks.map((link, index) => (
                                    <a
                                        key={index}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center h-9 w-9 rounded-full bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                                    >
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </nav>
            )}
        </>

    )
}

export default Navbar