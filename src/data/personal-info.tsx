import MiraiIceDept from "@/assets/MiraiIceDept.webp"
import ResumeWebsite from "@/assets/ResumeWebsite.webp"
import Avatar from "@/assets/Avatar.webp"
import {

    TerminalSquare,
    Github, Twitter
} from "lucide-react";

import {FaReact, FaVuejs, FaPython, FaJava, FaNodeJs, FaHtml5, FaDocker, FaJenkins, FaLinux} from "react-icons/fa";
import {DiDjango, DiMysql, DiPostgresql, DiRedis} from "react-icons/di";
import {SiFlask, SiMariadbfoundation, SiMongodb, SiSpringboot} from "react-icons/si";
import {TbBrandTypescript} from "react-icons/tb";
import {RiJavascriptLine, RiTailwindCssFill} from "react-icons/ri";

export const personalInfo = {
    basicInfo: {
        name: "HSU MAO LIN",
        nickname: "熊熊, Rx-bear",
        title: "全端開發工程師",
        greeting: "Hi, 我是 Rx-bear 👋",
        bio: "專注於構建高效、響應式的網頁應用和穩定的後端系統，具備全端開發能力和 DevOps 自動化經驗。",
        avatar: Avatar,
        aboutAvatar: Avatar
    },
    contact: {
        email: "rirto0627@gmail.com",
        phone: "+886 981 813 705",
        social: {
            github: {
                url: "https://github.com/rirto0627",
                icon: <Github className="w-5 h-5"/>
            },
            twitter: {
                url: "https://x.com/rxbear0627",
                icon: <Twitter className="w-5 h-5"/>
            }
        }
    },
    skills: {
        categories: [
            {
                id: "frontend",
                name: "前端技術",
                skills: [
                    {name: "React", level: 70, icon: <FaReact className="w-4 h-4"/>},
                    {name: "Vue.js", level: 50, icon: <FaVuejs className="w-4 h-4"/>},
                    {name: "TypeScript", level: 60, icon: <TbBrandTypescript className="w-4 h-4"/>},
                    {name: "JavaScript", level: 70, icon: <RiJavascriptLine className="w-4 h-4"/>},
                    {name: "HTML/CSS", level: 85, icon: <FaHtml5 className="w-4 h-4"/>},
                    {name: "Tailwind CSS", level: 70, icon: <RiTailwindCssFill className="w-4 h-4"/>},
                ],
            },
            {
                id: "backend",
                name: "後端技術",
                skills: [
                    {name: "Python", level: 80, icon: <FaPython className="w-4 h-4"/>},
                    {name: "Django", level: 60, icon: <DiDjango className="w-4 h-4"/>},
                    {name: "Flask", level: 80, icon: <SiFlask className="w-4 h-4"/>},
                    {name: "Java", level: 75, icon: <FaJava className="w-4 h-4"/>},
                    {name: "Spring Boot", level: 70, icon: <SiSpringboot className="w-4 h-4"/>},
                    {name: "Node.js", level: 85, icon: <FaNodeJs className="w-4 h-4"/>},
                ],
            },
            {
                id: "devops",
                name: "DevOps",
                skills: [
                    {name: "Docker", level: 80, icon: <FaDocker className="w-4 h-4"/>},
                    {name: "GitHub Actions", level: 50, icon: <Github className="w-4 h-4"/>},
                    {name: "Jenkins", level: 60, icon: <FaJenkins className="w-4 h-4"/>},
                    {name: "CI/CD", level: 75, icon: <TerminalSquare className="w-4 h-4"/>},
                    {name: "Linux", level: 85, icon: <FaLinux className="w-4 h-4"/>},
                ],
            },
            {
                id: "database",
                name: "資料庫",
                skills: [
                    {name: "PostgreSQL", level: 50, icon: <DiPostgresql className="w-4 h-4"/>},
                    {name: "MySQL", level: 80, icon: <DiMysql className="w-4 h-4"/>},
                    {name: "MariaDB", level: 80, icon: <SiMariadbfoundation className="w-4 h-4"/>},
                    {name: "MongoDB", level: 40, icon: <SiMongodb className="w-4 h-4"/>},
                    {name: "Redis", level: 60, icon: <DiRedis className="w-4 h-4"/>},

                ],
            },
        ],
    },
    experiences: [
        {
            company: "暫無",
            position: "",
            period: "",
            description: [
                "",
                ""
            ],
            skills: [""]
        }
    ],
    projects: [
        {
            title: "未來冰淇淋販売所2025生日冰箱",
            description: "由一群粉絲架設的形象設計網頁",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            imageUrl: MiraiIceDept,
            demoUrl:"http://birthday.mirai-ice-dept.com",
            codeUrl:"https://github.com/rirto0627/miraie-ice-dept-2025"
        },
        {
            title: "個人履歷網站",
            description: "展示自我技能和作品集的地方",
            technologies: ["React", "TypeScript", "Tailwind CSS"],
            imageUrl:ResumeWebsite ,
            demoUrl:"http://resume.rx-bear.work",
            codeUrl:"https://github.com/rirto0627/Personal-Resume"
        }
    ],
    typeAnimationSequences: [
        'React/Vue 前端開發',
        1500,
        'Python/Java 後端開發',
        1500,
        '全端解決方案',
        1500,
        'DevOps 自動化',
        1500
    ],
    actions: {
        downloadResume: "暫無功能",
        learnMore: "暫無功能"
    }
}