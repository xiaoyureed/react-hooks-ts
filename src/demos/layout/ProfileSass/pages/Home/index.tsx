import React from 'react'
import Works from '../Works'
import ss from './index.module.scss'
import worksJson from '../../data.json'

const Home = () => {
  return (
    <div className={ss.container}>
      <section className={ss.brief}>
        <img src={require('./avatar.jpg').default} alt="img" />
        <h2>Xiao Yu</h2>
        <ul>
          <li>software engineer</li>
          <li>full-stack developer</li>
          <li>DevOps</li>
        </ul>
        <div>
          <p>
            I design applications, interactive systems and websites. I love
            using technology in creative contexts.
          </p>
          <p>I use Javascript, Java and Rust in my work</p>
          <p>Contact me at 775000738#qq.com</p>
        </div>
      </section>
      <section className={ss.works}>
        <div className={ss.title}>
          <h3>Works</h3>
          <p>A collections of different things that I have worked on</p>
        </div>
        <Works works={worksJson.data} />
      </section>
    </div>
  )
}

export default Home
