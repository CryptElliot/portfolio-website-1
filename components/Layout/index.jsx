import React from 'react'

import Header from "./Header"
import Footer from "./Footer"

import { useTheme } from 'next-themes'
import { useRouter } from 'next/router'

const Layout = (props) => {
    const { children } = props
    const router = useRouter()
    const { systemTheme, theme, setTheme } = useTheme();

    const themeToggle = () => {
        const currentTheme = theme == 'system' ? systemTheme : theme
        if (currentTheme === 'dark') {
            setTheme("light");
        }
        else {
            setTheme("dark")
        }
    }

    return (
        <div>
            <div id="top"/>
            <div className="relative flex flex-col min-h-screen bg-default text-textPrimary dark:text-textDarkPrimary">
                {router.pathname !== "/404" && <Header themeToggle={themeToggle} theme={theme == 'system' ? systemTheme : theme} />}
                <main className="flex-grow bg-default">
                    {children}
                </main>
                {router.pathname !== "/404" && <Footer />}
            </div>
        </div>
    )
}

export default Layout