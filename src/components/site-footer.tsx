"use client"

import { siteConfig } from "@/config/site"
import { ThemeSwitcher } from "@/components/theme-switcher"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: React.HTMLAttributes<HTMLElement>) {
    return (
        <footer className={cn(className)}>
            <hr className="mt-4 border-gray-200 sm:mx-auto dark:border-gray-700" />
            <div className="container flex flex-col items-center justify-between gap-4 py-4 md:h-24 md:flex-row md:py-0">
                <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
                    <p className="text-center leading-loose md:text-left">
                        Built by{" "}
                        <a
                            href={siteConfig.links.twitter}
                            target="_blank"
                            rel="noreferrer"
                            className="font-medium underline underline-offset-4"
                        >
                            Glowstudent
                        </a>
                        .
                    </p>
                </div>
                <ThemeSwitcher />
            </div>
        </footer>
    )
}