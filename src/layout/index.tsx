import React, { FC } from "react"

const Layout:FC = ({ children }) => (
    <div className="root">
        <div>
            { children }
        </div>
    </div>
)

export default Layout
