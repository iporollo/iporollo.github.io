import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = <h2>Ivan's Blog</h2>
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">
        <div>
          <Link to="/">Blog</Link>
          <span className="divider">|</span>
          <Link to="/about">About Me</Link>
          <span className="divider">|</span>
          <a href="https://twitter.com/iporollo">Twitter</a>
          <span className="divider">|</span>
          <a href="https://linkedin.com/in/iporollo">LinkedIn</a>
          <span className="divider">|</span>
          <a href="https://github.com/iporollo">Github</a>
        </div>
        {header}
      </header>
      <main>{children}</main>
      <footer>
        Follow me <a href="https://twitter.com/iporollo">@iporollo</a> on all
        the socials
      </footer>
    </div>
  )
}

export default Layout
