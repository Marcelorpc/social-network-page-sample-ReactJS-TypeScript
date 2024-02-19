import { Post, PostType } from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import './css/global.css'

import styles from "./css/App.module.css"
import { Header } from "./components/Header"

// author: {avatar_url: "", name: "", role: ""}
//publishedAt: Date
// content: ""

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/105247533?v=4",
      name: "Marcelo Paiva",
      role: "Web Developer"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-30 16:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://avatars.githubusercontent.com/u/19692032?v=4",
      name: "Poke API",
      role: "Profile for tests"
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2024-01-20 17:00:00')
  },
]

function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Sidebar />
        <div>
          {posts.map(post => {
            return (<Post 
              key={post.id}
              post={post}
            />)
          })}
        </div>
      </main>
    </div>
  )
}
export default App