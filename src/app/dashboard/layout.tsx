import React, {type ReactNode} from 'react'

export default function Layout({children}: {children: ReactNode}) {
    return (
        <div>dashboard Layout {children}</div>
    )
}
