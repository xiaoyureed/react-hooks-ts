import React from 'react'
import { FaPaperclip, FaPlay } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ss from './index.module.scss'

interface IWork {
  id: number
  title: string
  intro: string
  tags: string[]
  cover: string
}
const Works = ({ works }: { works: Array<IWork> }) => {
  return (
    <div className={ss.works}>
      {works.map((w) => (
        <div className={ss.work} key={w.id}>
          <div className={ss.projImgWrapper}>
            <FaPaperclip className={ss.projImg} />
          </div>
          <div className={ss.brief}>
            <h3>
              <Link to={`/works/${w.id}`}>{w.title}</Link>
            </h3>
            <p>{w.intro}</p>
            <div>{w.tags && w.tags.map((t) => <span>{t}</span>)}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Works
