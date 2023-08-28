


export default function About() {


  return (
    <>
     <div className="container my-3 d-flex">
  <div className="text-center row">
    <h1>About iNoteBook</h1>
    <p>iNoteBook is a web app that helps you store your information with privacy...</p>
    <p>iNoteBook provides you the facility to create, update, read, and delete notes.</p>
  </div>
</div>

<h2 className="text-center">Our Team</h2>

<div className="row my-2">
  <div className="col-md-4 my-2">
    <div className="card">
      <img src="https://iheartcraftythings.com/wp-content/uploads/2021/05/Drawing-Music-Notes-in-10-Easy-Steps.jpg" alt="Jane" className="card-img-top"  style={{ height:'500px'}} />
      <div className="card-body">
        <h2 className="card-title">Jane Doe</h2>
        <p className="card-text">CEO & Founder</p>
        <p className="card-text">Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className="card-text">jane@example.com</p>
        <button className="btn btn-primary">Contact</button>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card my-2">
      <img src="https://iheartcraftythings.com/wp-content/uploads/2021/05/Drawing-Music-Notes-in-10-Easy-Steps.jpg" alt="Mike" className="card-img-top"  style={{ height:'500px'}} />
      <div className="card-body">
        <h2 className="card-title">Mike Ross</h2>
        <p className="card-text">Art Director</p>
        <p className="card-text">Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className="card-text">mike@example.com</p>
        <button className="btn btn-primary">Contact</button>
      </div>
    </div>
  </div>

  <div className="col-md-4">
    <div className="card my-2">
      <img src="https://iheartcraftythings.com/wp-content/uploads/2021/05/Drawing-Music-Notes-in-10-Easy-Steps.jpg" alt="John" className="card-img-top" style={{ height:'500px'}} />
      <div className="card-body">
        <h2 className="card-title">John Doe</h2>
        <p className="card-text">Designer</p>
        <p className="card-text">Some text that describes me lorem ipsum ipsum lorem.</p>
        <p className="card-text">john@example.com</p>
        <button className="btn btn-primary">Contact</button>
      </div>
    </div>
  </div>
</div>

</>

  )
}
 