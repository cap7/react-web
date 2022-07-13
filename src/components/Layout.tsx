import * as React from "react"

type Props = {
  children: React.ReactNode
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="container mx-auto sm:px-6 lg:px-0">{children}</div>
}

export default Layout
