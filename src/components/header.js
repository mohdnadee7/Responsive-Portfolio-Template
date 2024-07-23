function Header() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand text-white" href="#">Nadeem</a>
          <button class="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link custom-nav-link text-white" href="#">Home</a>
              <a class="nav-link custom-nav-link text-white" href="#">About</a>
              <a class="nav-link custom-nav-link text-white" href="#">Resume</a>
              <a class="nav-link custom-nav-link text-white" href="#">Services</a>
              <a class="nav-link custom-nav-link text-white" href="#">Skills</a>
              <a class="nav-link custom-nav-link text-white" href="#">Projects</a>
              <a class="nav-link custom-nav-link text-white" href="#">Contact</a>
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Header;
