export default function Comment({slug, handleCommentSubmit}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    handleCommentSubmit(slug, data.comment);
    event.target.reset();
  }

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <div className="entry-form__field">
        <label htmlFor="comment">Add your thoughts...</label>
        <input
          type="text"
          name="comment"
          id="comment"
          placeholder="...💭"
          required
        />
        <button type="submit">Send</button>
      </div>
    </form>
  );
}
