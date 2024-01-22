export const sampleData =
`<header id="hero">
  <nav class="navbar">
    <div class="container">
      <span id="logo">
        <a href="#">Website Title</a>
      </span>
      <ul class="nav-menu">
        <li><a class="nav-link" href="#about">소개</a></li>
        <li><a class="nav-link" href="#interests">취미</a></li>
        <li><a class="nav-link" href="#memory">추억</a></li>
        <li>
          <a class="nav-link btn btn-primary" href="#contact"
            >연락하기 <i class="fas fa-arrow-right"></i
          ></a>
        </li>
      </ul>
      <div class="hamburger">
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>
    </div>
  </nav>

  <section class="header-container">
    <img
      class="profile-image"
      src="https://assets.codefriends.net/assets/images/bio-website/hero-image.png"
      alt="hero-image"
    />
    <h1 class="intro">안녕하세요!</h1>

    <div class="content-text">
      <h2>{Name} 입니다</h2>
      <p>방문해 주셔서 감사합니다 🙂</p>
    </div>

    <a
      href="https://www.instagram.com/codefriends.korea/"
      class="social-media"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-instagram"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
        />
      </svg>
    </a>
  </section>
</header>

<div class="division"></div>

<section id="about" class="container">
  <div class="content-text">
    <h2>소개</h2>
    <p>저를 간단히 소개하겠습니다!</p>
  </div>

  <div class="bio-container">
    <div class="bio-item">
      <h4>생년월일</h4>
      <p class="bio-text">2000.01.01</p>
    </div>

    <div class="bio-item">
      <h4>MBTI</h4>
      <p class="bio-text">ENTJ</p>
    </div>

    <div class="bio-item">
      <h4>사는 곳</h4>
      <p class="bio-text">서울</p>
    </div>
  </div>
</section>

<div class="division"></div>

<section id="interests" class="container">
  <div class="content-text">
    <h2>취미</h2>
    <p>사진과 영상을 확인해 보세요 📹</p>
  </div>

  <div class="grid">
    <div onclick="gridImageClick(this)">
      <img
        src="https://assets.codefriends.net/assets/images/bio-website/gallery-1.jpeg"
        width="100%"
        height="100%"
        alt="설명 1"
        class="grid-image"
      />
    </div>
    <div onclick="gridImageClick(this)">
      <img
        src="https://assets.codefriends.net/assets/images/bio-website/gallery-2.jpeg"
        width="100%"
        height="100%"
        alt="설명 2"
        class="grid-image"
      />
    </div>
    <video
      src="https://assets.codefriends.net/assets/images/bio-website/gallery-3.mp4"
      class="grid-video"
      width="100%"
      height="100%"
      controls
    >
      Video
    </video>
    <iframe
      width="100%"
      height="100%"
      src="https://www.youtube.com/embed/Bc7OWMcA54A"
      title="iframe example"
      allow="fullscreen;"
      >Iframe
    </iframe>
  </div>
</section>
`