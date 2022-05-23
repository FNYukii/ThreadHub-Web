import { useParams } from 'react-router-dom'

function Thread() {

  let { threadId } = useParams()

  return (
    <main>
      <h2>Thread</h2>
      <p>threadId: {threadId}</p>
    </main>
  )
}

export default Thread