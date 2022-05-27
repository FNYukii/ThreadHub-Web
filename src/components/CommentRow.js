function CommentRow(props) {
  return (
    <div>
      <span>{props.dailyUserId}</span>
      <span>2022-05-27</span>
      <p>{props.text}</p>
    </div>
  )
}

export default CommentRow