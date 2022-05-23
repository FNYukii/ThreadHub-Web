import { useParams } from 'react-router-dom'

function Thread() {

  let { threadId } = useParams()

  return (
    <main>
      <div className='large-container'>
        <h2>Thread</h2>
        <p>threadId: {threadId}</p>
      </div>
    </main>
  )
}

export default Thread