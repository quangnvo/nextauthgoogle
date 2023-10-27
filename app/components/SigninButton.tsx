"use client"

import { useSession } from 'next-auth/react'
import { signOut, signIn } from "next-auth/react"

const SigninButton = () => {

    const { data: session } = useSession()

    if (session && session.user) {
        return (
            <div>
                <p>{session.user.name}</p>
                <button onClick={() => signOut()}>
                    Sign Out
                </button>
            </div>
        )
    }

    return (
        <button onClick={() => signIn()}>
            Sign In
        </button >
    )
}

export default SigninButton