"use sever"

import * as auth from "@/auth"

export const signOut = async () => {
    return auth.signOut()
}