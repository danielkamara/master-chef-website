const Contact = () => {
  return (
    <div className="form">
      <h1>Contact Page</h1>
      <form>
        <label>First Name</label>
        <input type="text" required></input>

        <label>Last Name</label>
        <input type="text" required></input>

        <label>Subject</label>
        <input type="text" required></input>

        <label>Email</label>
        <input type="email" required></input>

        <label>Message</label>
        <textarea required></textarea>
        <button className="btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
