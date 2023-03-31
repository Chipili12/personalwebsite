import '../../styles/App.css';
function Navbar() {
  return (
<nav className="row navbar navbar-expand-lg navbar-light navbar-m d-flex justify-content-center">
  <div className="col-5 d-flex justify-content-center">
  <a className="navbar-brand" href="#">Your Name</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  </div>
  <div className="collapse navbar-collapse col-7" id="navbarNav">
  <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link text-white" href="#">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#">About Me</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#">Projects</a>
    </li>
    <li className="nav-item">
      <a className="nav-link text-white" href="#">Resume</a>
    </li>
    <li>
    <a role="button" tabindex="0" href="https://github.com/chipili12/" target="_blank" class="btn btn-primary">
      <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" style={{width:"50px"}}/>
    </a>
    </li>
  </ul>
</div>

</nav>

  );
}

export default Navbar;