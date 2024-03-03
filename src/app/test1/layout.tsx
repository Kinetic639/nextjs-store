import React, {type ReactNode} from 'react'

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div>Layout {children}</div>
    )
}
