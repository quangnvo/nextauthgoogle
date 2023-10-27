"use client"

import { useSession } from 'next-auth/react'
import { signOut, signIn } from "next-auth/react"
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


const SigninButton = () => {

    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div className='flex flex-col justify-center items-center gap-4'>
                <div className='flex justify-between items-center gap-3'>
                    <p>{session.user.name}</p>
                    <Avatar>
                        <AvatarImage src={session.user.image ?? ""} />
                        <AvatarFallback>{session.user.name}</AvatarFallback>
                    </Avatar>
                </div>
                <Button onClick={() => signOut()}>
                    Sign Out
                </Button>
            </div>
        )
    }

    return (
        <Button onClick={() => signIn()}>
            Sign In
        </Button >
    )
}

export default SigninButton