import React from 'react'
import {
  BrowserRouter as Router,
  Link,
  Route,
  withRouter,
} from 'react-router-dom'
import ss from './index.module.scss'
import Home from './pages/Home'
import WorkDetail from './pages/WorkDetail'
import { FaDocker } from 'react-icons/fa'
import Services from './pages/Services'

const ProfileSass = ({ location }: { location: any }) => {
  // 考虑 any 替换为 Location
  return (
    <div className={ss.container}>
      <header className={ss.header}>
        <h1 className={ss.headerLeft}>
          <Link to="/" className={ss.headerLeftLink}>
            Resume
            <FaDocker className={ss.icon} />
          </Link>
        </h1>
        <ul className={ss.headerRight}>
          <li className={ss.menuItem}>
            <Link
              className={`${ss.menuItemLink} ${
                location.pathname === '/' && ss.menuItemLinkActive
              }`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className={ss.menuItem}>
            <Link
              className={`${ss.menuItemLink} ${
                location.pathname === '/services' && ss.menuItemLinkActive
              }`}
              to="/services"
            >
              Services
            </Link>
          </li>
        </ul>
      </header>
      <section className={ss.content}>
        <Route path="/" exact component={Home} />
        <Route path="/services" exact component={Services} />
        <Route path="/works/:id" exact component={WorkDetail} />
      </section>
      <footer className={ss.footer}>
        <p>
          <b>©️2020 Xiaoyu</b>
        </p>
        <p>created with ❤️</p>
      </footer>
    </div>
  )
}

const RouterWrapper = () => {
  const With = withRouter(ProfileSass)
  return (
    <Router>
      <With />
    </Router>
  )
}

export default RouterWrapper
