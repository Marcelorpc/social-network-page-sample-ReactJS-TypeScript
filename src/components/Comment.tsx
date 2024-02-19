import { ThumbsUp, Trash } from 'phosphor-react'
import styles from '../css/Comment.module.css'
import { Avatar } from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string,
  deleteComment: (comment: string) => void
}

export function Comment({ content, deleteComment }: CommentProps) {
  function handleDeleteComment () {
    deleteComment(content)
  }

  const [likeCount, setLikeCount] = useState(0)

  function handleLikeComment() {
    setLikeCount((state) => {
      return state + 1
    })
  }

  return (
      <div className={styles.comment}>
        <Avatar hasBorder={false} src='https://avatars.githubusercontent.com/u/105247533?v=4' />

        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Marcelo Paiva Chaves</strong>

                <time title="28 de Janeiro as 11:08h" dateTime="28-01-2024 11:08:30">Publicado ha 30min</time>
              </div>

              <button onClick={handleDeleteComment} title='Deletar comentario'>
                <Trash size={24} />
              </button>
            </header>

            <p>{content}</p>
          </div>

          <footer>
            <button onClick={handleLikeComment}>
              <ThumbsUp />
              Aplaudir <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
  )
}