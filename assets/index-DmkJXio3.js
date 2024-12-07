(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&e(s)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const x=document.createElement("style");x.textContent=`
  .bg-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.5);
    opacity: 0.5;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, transparent, var(--dark-bg1) 75%);
  }

  .light-theme .overlay {
    background: linear-gradient(180deg, transparent, var(--light-bg1) 75%);
  }
`;const f=document.createElement("template");f.innerHTML=`
  <video class="bg-video" src="https://videos.pexels.com/video-files/8100337/8100337-uhd_2732_1440_25fps.mp4" preload="metadata" crossorigin playsinline muted autoplay loop></video>
  <div class="overlay"></div>
`;class S extends HTMLElement{constructor(){super(),this.appendChild(x.cloneNode(!0)),this.appendChild(f.content.cloneNode(!0)),this.classList.add(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"),window.addEventListener("theme-changed",o=>{o.detail==="dark-theme"?this.classList.replace("light-theme","dark-theme"):this.classList.replace("dark-theme","light-theme")})}}customElements.define("background-video",S);const v=document.createElement("style");v.textContent=`
  img {
    max-width: 230px;
    max-height: 40vh;
    aspect-ratio: 1/1;
    border-radius: .5rem;
    user-select: none;
    -webkit-user-drag: none;
  }

`;const b=document.createElement("template");b.innerHTML=`
  <img src="/assets/images/Zama.png" alt="Hosama's picture">
`;class T extends HTMLElement{constructor(){super(),this.appendChild(v.cloneNode(!0)),this.appendChild(b.content.cloneNode(!0))}}customElements.define("profile-picture",T);const u=document.createElement("style");u.textContent=`
  .badge {
    position: relative;
    top: 7px;
    left: 17px;
    width: 297px;
    max-width: calc(90vw - 17px);
    color: var(--dark-font1);
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .light-theme .badge {
    color: var(--light-font1);
  }

  .badge > * {
    z-index: 1;
  }

  .picture-wrapper {
    margin-top: auto;
    z-index: 1;
  }

  .picture {
    margin-left: -7px;
    filter: drop-shadow(5px -1px 1px var(--primary-transparent));
  }

  .nameTag {
    margin-top: -4px;
    width: 333px;
    max-width: calc(100vw - 33px);
    padding: 7px;
    border-radius: .5rem;
    background: linear-gradient(145deg, var(--dark-bg3), var(--dark-bg1));
    box-shadow: var(--dark-box-shadow), inset 1px 1px 1px var(--dark-bg4);
  }

  .light-theme .nameTag {
    background: linear-gradient(170deg, var(--light-bg3), var(--light-bg1));
    box-shadow: var(--light-box-shadow), inset 1px 1px 1px var(--light-bg4);
  }

  .nameTag h1 {
    font-size: 1.5rem;
    background: linear-gradient(to bottom, var(--dark-font1), var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px 0px var(--dark-bg1));
  }

  .light-theme .nameTag h1 {
    background: linear-gradient(to bottom, var(--dark-font1), var(--primary-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(1px 1px 0px var(--primary));
  }

  .nameTag sup {
    display: block;
    padding: 7px 0 0 7px;
    font-size: .8rem;
  }

  .resume {
    height: fit-content;
    flex: 1;
    padding: 0 17px 17px;
    margin-top: auto;
    z-index: 0;
    position: relative;
  }

  .resume::before {
    content: '';
    position: absolute;
    top: -17vh;
    left: 7px;
    width: 100%;
    height: calc(100% + 17vh);
    background: linear-gradient(145deg, var(--dark-bg3), var(--dark-bg1));
    border-radius: .5rem;
    box-shadow: var(--dark-box-shadow), inset 1px 1px 1px var(--dark-bg4);
    z-index: -1;
  }

  .light-theme .resume::before {
    background: linear-gradient(145deg, var(--light-bg3), var(--light-bg1));
    box-shadow: var(--light-box-shadow), inset 1px 1px 1px var(--light-bg4);
  }

  .resume h2 {
    font-size: 1.2rem;
    font-weight: 700;
    margin: 7px 0;
    text-align: center;
  }

  .resume ul {
    margin-top: 17px;
    padding-left: 17px;
    list-style: circle;
    font-weight: 400;
    line-height: 1.1rem;
    font-size: .8rem;
  }

  .resume ul li {
    margin-bottom: 7px;
  }

  @media (min-width: 640px) {
    .badge {
      width: 804px;
    }

    .resume {
      padding: 17px 17px 0;
    }

    .resume::before {
      top: 7px;
      left: -333px;
      width: calc(100% + 333px);
      height: 100%;
    }
  }

  @media (min-width: 847px) {
    .resume h2 {
      text-align: right;
    }

    .resume ul li {
      margin-left: auto;
      width: fit-content;
    }
  }
  
`;const w=document.createElement("template");w.innerHTML=`
  <div class="badge">
    <div class="picture-wrapper">
      <profile-picture class="picture"></profile-picture>
      <div class="nameTag">
        <h1>Hosama Miodutzki</h1>
        <sup>Editora de vídeos e criadora de conteúdo audiovisual</sup>
        <!--  <p>Com uma paixão por contar histórias através de imagens e som, tenho me dedicado à criação de vídeos dinâmicos e de alta qualidade. Minha experiência no DaVinci Resolve me permite realizar edições precisas e criativas, desde cortes simples até correção de cor, design de som e efeitos visuais.</p>
          <p>Como criadora de conteúdo no YouTube, desenvolvi um olhar atento para a criação de vídeos envolventes, capazes de capturar e reter a atenção do público.</p>
          <p>Estou sempre em busca de novas oportunidades para expandir minhas habilidades e colaborar em projetos criativos. Se você está procurando uma editora comprometida, detalhista e apaixonada pelo que faz, ficarei feliz em ajudar a transformar suas ideias em realidade.</p>
        -->
      </div>
    </div>    
    <div class="resume">
      <h2>Pós-produção audiovisual</h2>
      <ul>
        <li>Edição de vídeos para redes sociais</li>
        <li>Criação de conteúdo educacional e de entretenimento</li>
        <li>Motion graphics e transições personalizadas</li>
        <li>Ajustes de cor avançados</li>
      </ul>
    </div>
  </div>
`;class $ extends HTMLElement{constructor(){super(),this.appendChild(u.cloneNode(!0)),this.appendChild(w.content.cloneNode(!0)),this.classList.add(window.matchMedia("(prefers-color-scheme: dark)").matches?"dark-theme":"light-theme"),window.addEventListener("theme-changed",o=>{o.detail==="dark-theme"?this.classList.replace("light-theme","dark-theme"):this.classList.replace("dark-theme","light-theme")})}}customElements.define("profile-badge",$);const k=document.createElement("style");k.textContent=`
  header {
    position: relative;
    width: 100%;
    user-select: none;
    -webkit-user-drag: none;
  }
`;const X=document.createElement("template");X.innerHTML=`
  <header>
    <profile-badge></profile-badge>
    <div class="contacts">
      <!--todo-->
    </div>
  </header>
`;class q extends HTMLElement{constructor(){super(),this.appendChild(k.cloneNode(!0)),this.appendChild(X.content.cloneNode(!0))}}customElements.define("app-header",q);const Y=document.createElement("style");Y.textContent=`
  .container {
    position: relative;
    perspective: 3000px;
  }

  .phone {
    position: absolute;
    transform-style: preserve-3d;
    transform-origin: center;
  }

  .face {
    position: absolute;
    transform-origin: center;
    pointer-events: none;
    background: #303030;
    backface-visibility: hidden;
  }

  .center {
    position: absolute;
    transform-origin: center;
    pointer-events: none;
    background: #303030;
    width: 296px;
    height: 636px;
    border-radius: 20px;
    box-sizing: border-box;
    transform: translate3d(-148px, -318px, 0);
  }

  .front,
  .back {
    width: 300px;
    height: 640px;
    border-radius: 20px;
    box-sizing: border-box;
  }

  .front {
    transform: translate3d(-150px, -320px, 10px);
    background: #1b1b1b;
    border: 3px solid #161616;
    border-top: 9px solid #161616;
  }

  .front .speaker {
    position: absolute;
    top: -7px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 5px;
    border-radius: 0 0 10px 10px;
    background: #242424;
  }

  .front .screen {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow: hidden;
    pointer-events: all;
    user-select: none;
    -webkit-user-drag: none;
  }

  .front .camera {
    position: absolute;
    top: 1px;
    left: 50%;
    transform: translateX(-50%);
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #161616;
    border: 1px solid #242424;
  }

  .back {
    transform: translate3d(-150px, -320px, -10px) rotateY(180deg);
    background: radial-gradient(50% 50%, #242424 80%,#303030 150%);
  }

  .back .camera {
    position: absolute;
    top: 63px;
    left: 70px;
    transform: translateX(-50%);
    width: 27px;
    height: 27px;
    border-radius: 50%;
    background: radial-gradient(50% 50%, #161616 0% 30%,#303030 33% 50%, #161616 60%);
    border: 1px solid #4e4e57;
    box-shadow: -1px -1px 2px 1px #ffffff20, 1px 1px 2px 1px #00000070;
  }

  .back .flashlight {
    position: absolute;
    top: 101px;
    left: 70px;
    transform: translateX(-50%);
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: radial-gradient(50% 50%, #eee 40%, #161616 70%);
    border: 1px solid #4e4e57;
    box-shadow: -1px -1px 2px 1px #ffffff20, 1px 1px 2px 1px #00000070;
  }

  .back .fingerprint-scanner {
    position: absolute;
    top: 133px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: radial-gradient(50% 50%, #161616, #202020);
    border-radius: 50%;
    border: 1px solid #4e4e57;
    box-shadow: -1px -1px 2px 1px #ffffff20, 1px 1px 2px 1px #00000070;
  }

  .back b {
    position: absolute;
    bottom: 77px;
    left: 50%;
    color: #eee;
    transform: translateX(-50%);
  }

  .top,
  .bottom {
    width: 263px;
    height: 20px;
  }

  .top {
    transform: translate3d(-131.5px, -330px, 0) rotateX(90deg);
    perspective: 500px;
  }
  
  .top-left,
  .top-right,
  .bottom-left,
  .bottom-right {
    width: 2px;
    height: 20px;
    transform-style: preserve-3d;
    transform-origin: right;
  }

  .top-right,
  .bottom-right {
    transform-origin: left;
  }

  .tl1 { transform: translate3d(-133.5px, -330px, 0) rotateX(90deg) rotateY(-8deg); }
  .tl2 { transform: translate3d(-135.45px, -329.73px, 0) rotateX(90deg) rotateY(-13deg); }
  .tl3 { transform: translate3d(-137.39px, -329.28px, 0) rotateX(90deg) rotateY(-19deg); }
  .tl4 { transform: translate3d(-139.27px, -328.63px, 0) rotateX(90deg) rotateY(-24deg); }
  .tl5 { transform: translate3d(-141.1px, -327.81px, 0) rotateX(90deg) rotateY(-29.7deg); }
  .tl6 { transform: translate3d(-142.83px, -326.82px, 0) rotateX(90deg) rotateY(-35.3deg); }
  .tl7 { transform: translate3d(-144.45px, -325.67px, 0) rotateX(90deg) rotateY(-41.5deg); }
  .tl8 { transform: translate3d(-145.94px, -324.35px, 0) rotateX(90deg) rotateY(-47.3deg); }
  .tl9 { transform: translate3d(-147.29px, -322.88px, 0) rotateX(90deg) rotateY(-52.7deg); }
  .tl10 { transform: translate3d(-148.5px, -321.3px, 0) rotateX(90deg) rotateY(-58.3deg); }
  .tl11 { transform: translate3d(-149.54px, -319.6px, 0) rotateX(90deg) rotateY(-64.1deg); }
  .tl12 { transform: translate3d(-150.41px, -317.81px, 0) rotateX(90deg) rotateY(-69.9deg); }
  .tl13 { transform: translate3d(-151.1px, -315.94px, 0) rotateX(90deg) rotateY(-75.5deg); }
  .tl14 { transform: translate3d(-151.6px, -314.01px, 0) rotateX(90deg) rotateY(-81.5deg); }
  .tl15 { transform: translate3d(-151.895px, -312.03px, 0) rotateX(90deg) rotateY(-87.1deg); }

  .top .plug-p2 {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #1b1b1b;
    margin-top: 2.5px;
    margin-left: 17px;
    border: .5px solid #6b6b6b;
  }

  .tr1 { transform: translate3d(131.5px, -330px, 0) rotateX(90deg) rotateY(8deg); }
  .tr2 { transform: translate3d(133.47px, -329.72px, 0) rotateX(90deg) rotateY(13deg); }
  .tr3 { transform: translate3d(135.42px, -329.27px, 0) rotateX(90deg) rotateY(19deg); }
  .tr4 { transform: translate3d(137.31px, -328.62px, 0) rotateX(90deg) rotateY(24deg); }
  .tr5 { transform: translate3d(139.13px, -327.81px, 0) rotateX(90deg) rotateY(30.5deg); }
  .tr6 { transform: translate3d(140.85px, -326.80px, 0) rotateX(90deg) rotateY(35.7deg); }
  .tr7 { transform: translate3d(142.47px, -325.63px, 0) rotateX(90deg) rotateY(41.5deg); }
  .tr8 { transform: translate3d(143.97px, -324.3px, 0) rotateX(90deg) rotateY(47.1deg); }
  .tr9 { transform: translate3d(145.33px, -322.84px, 0) rotateX(90deg) rotateY(52.7deg); }
  .tr10 { transform: translate3d(146.54px, -321.25px, 0) rotateX(90deg) rotateY(58.3deg); }
  .tr11 { transform: translate3d(147.58px, -319.55px, 0) rotateX(90deg) rotateY(64.1deg); }
  .tr12 { transform: translate3d(148.45px, -317.75px, 0) rotateX(90deg) rotateY(69.7deg); }
  .tr13 { transform: translate3d(149.14px, -315.88px, 0) rotateX(90deg) rotateY(75.5deg); }
  .tr14 { transform: translate3d(149.64px, -313.94px, 0) rotateX(90deg) rotateY(81.3deg); }
  .tr15 { transform: translate3d(149.94px, -311.97px, 0) rotateX(90deg) rotateY(88.2deg); }

  .bottom {
    transform: translate3d(-131.5px, 310px, 0) rotateX(-90deg);
  }

  .bl1 { transform: translate3d(-133.5px, 310px, 0) rotateX(-90deg) rotateY(-8deg); }
  .bl2 { transform: translate3d(-135.48px, 309.72px, 0) rotateX(-90deg) rotateY(-13deg); }
  .bl3 { transform: translate3d(-137.43px, 309.27px, 0) rotateX(-90deg) rotateY(-19deg); }
  .bl4 { transform: translate3d(-139.32px, 308.62px, 0) rotateX(-90deg) rotateY(-24deg); }
  .bl5 { transform: translate3d(-141.15px, 307.802px, 0) rotateX(-90deg) rotateY(-30.5deg); }
  .bl6 { transform: translate3d(-142.87px, 306.79px, 0) rotateX(-90deg) rotateY(-35.7deg); }
  .bl7 { transform: translate3d(-144.49px, 305.62px, 0) rotateX(-90deg) rotateY(-41.5deg); }
  .bl8 { transform: translate3d(-145.98px, 304.3px, 0) rotateX(-90deg) rotateY(-47deg); }
  .bl9 { transform: translate3d(-147.34px, 302.84px, 0) rotateX(-90deg) rotateY(-53.3deg); }
  .bl10 { transform: translate3d(-148.53px, 301.25px, 0) rotateX(-90deg) rotateY(-58.3deg); }
  .bl11 { transform: translate3d(-149.58px, 299.55px, 0) rotateX(-90deg) rotateY(-64.6deg); }
  .bl12 { transform: translate3d(-150.44px, 297.745px, 0) rotateX(-90deg) rotateY(-70.3deg); }
  .bl13 { transform: translate3d(-151.11px, 295.87px, 0) rotateX(-90deg) rotateY(-75.8deg); }
  .bl14 { transform: translate3d(-151.6px, 293.93px, 0) rotateX(-90deg) rotateY(-81.4deg); }
  .bl15 { transform: translate3d(-151.9px, 291.95px, 0) rotateX(-90deg) rotateY(-87.2deg); }

  .bottom .mic {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #1b1b1b;
    margin-top: 5px;
    margin-left: 17px;
    border: 1px solid #242424;
  }

  .bottom .charger {
    width: 32px;
    height: 7px;
    border-radius: 33%;
    background: #1b1b1b;
    border: 1px solid #242424;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .br1 { transform: translate3d(131.5px, 310px, 0) rotateX(-90deg) rotateY(8.5deg); }
  .br2 { transform: translate3d(133.48px, 309.705px, 0) rotateX(-90deg) rotateY(13.2deg); }
  .br3 { transform: translate3d(135.43px, 309.25px, 0) rotateX(-90deg) rotateY(18.5deg); }
  .br4 { transform: translate3d(137.32px, 308.62px, 0) rotateX(-90deg) rotateY(24.4deg); }
  .br5 { transform: translate3d(139.14px, 307.79px, 0) rotateX(-90deg) rotateY(30deg); }
  .br6 { transform: translate3d(140.87px, 306.79px, 0) rotateX(-90deg) rotateY(35.7deg); }
  .br7 { transform: translate3d(142.49px, 305.62px, 0) rotateX(-90deg) rotateY(41.5deg); }
  .br8 { transform: translate3d(143.98px, 304.3px, 0) rotateX(-90deg) rotateY(47deg); }
  .br9 { transform: translate3d(145.34px, 302.84px, 0) rotateX(-90deg) rotateY(53deg); }
  .br10 { transform: translate3d(146.545px, 301.24px, 0) rotateX(-90deg) rotateY(58.4deg); }
  .br11 { transform: translate3d(147.585px, 299.545px, 0) rotateX(-90deg) rotateY(64.6deg); }
  .br12 { transform: translate3d(148.44px, 297.745px, 0) rotateX(-90deg) rotateY(70.1deg); }
  .br13 { transform: translate3d(149.12px, 295.865px, 0) rotateX(-90deg) rotateY(75.8deg); }
  .br14 { transform: translate3d(149.61px, 293.93px, 0) rotateX(-90deg) rotateY(81.5deg); }
  .br15 { transform: translate3d(149.9px, 291.97px, 0) rotateX(-90deg) rotateY(87.15deg); }

  .left,
  .right {
    width: 20px;
    height: 600.1px;
  }

  .left {
    transform: translate3d(-160px, -300.05px, 0) rotateY(-90deg);
  }

  .volume-front {
    width: 7px;
    height: 75px;
    transform: translate3d(-156.5px, -210px, 0) rotateY(-90deg);
    background: #242424;
  }

  .volume-top {
    width: 3px;
    height: 7px;
    transform: translate3d(-153px, -213.5px, 0) rotateX(90deg);
    background: #242424;
  }

  .volume-bottom {
    width: 3px;
    height: 7px;
    transform: translate3d(-153px, -139px, 0) rotateX(-90deg);
    background: #242424;
  }

  .volume-left {
    width: 3px;
    height: 75px;
    transform: translate3d(-153px, -210px, -3.5px) rotateY(180deg);
    background: #242424;
  }

  .volume-right {
    width: 3px;
    height: 75px;
    transform: translate3d(-153px, -210px, 3.5px) rotateY(0deg);
    background: #242424;
  }

  .right {
    transform: translate3d(140px, -300.05px, 0) rotateY(90deg);
  }

  .power-front {
    width: 7px;
    height: 37px;
    transform: translate3d(149.5px, -120px, -.5px) rotateY(90deg);
    background: #242424;
  }

  .power-top {
    width: 3px;
    height: 7px;
    transform: translate3d(150px, -123.5px, -.5px) rotateX(90deg);
    background: #242424;
  }

  .power-bottom {
    width: 3px;
    height: 7px;
    transform: translate3d(150px, -86.5px, -.5px) rotateX(-90deg);
    background: #242424;
  }

  .power-left {
    width: 3px;
    height: 37px;
    transform: translate3d(150px, -120px, 3px);
    background: #242424;
  }

  .power-right {
    width: 3px;
    height: 37px;
    transform: translate3d(150px, -120px, -4px) rotateY(180deg);
    background: #242424;
  }

  @keyframes rotate-to-left {
    0% {
      transform: rotate3d(0,1,0,360deg);
    }
    70% {
      transform: rotate3d(0,1,0,0deg);
    }
  }

  @keyframes rotate-to-right {
    0% {
      transform: rotate3d(0,1,0,0deg);
    }
    70% {
      transform: rotate3d(0,1,0,360deg);
    }
  }
`;const y=document.createElement("template");y.innerHTML=`
  <div class="container">
    <div class="phone" id="phone" part="phone">
      <div class="center"></div>

      <div class="front face">
        <div class="speaker"></div>
        <div class="screen">
          <slot></slot>
        </div>
        <div class="camera"></div>
      </div>
          
      <div class="top face">
        <div class="plug-p2"></div>
      </div>

      <div class="top-left tl1 face"></div>
      <div class="top-left tl2 face"></div>
      <div class="top-left tl3 face"></div>
      <div class="top-left tl4 face"></div>
      <div class="top-left tl5 face"></div>
      <div class="top-left tl6 face"></div>
      <div class="top-left tl7 face"></div>
      <div class="top-left tl8 face"></div>
      <div class="top-left tl9 face"></div>
      <div class="top-left tl10 face"></div>
      <div class="top-left tl11 face"></div>
      <div class="top-left tl12 face"></div>
      <div class="top-left tl13 face"></div>
      <div class="top-left tl14 face"></div>
      <div class="top-left tl15 face"></div>
        
      <div class="left face"></div>

      <div class="volume-front face"></div>
      <div class="volume-top face"></div>
      <div class="volume-right face"></div>
      <div class="volume-left face"></div>
      <div class="volume-bottom face"></div>

      <div class="top-right tr1 face"></div>
      <div class="top-right tr2 face"></div>
      <div class="top-right tr3 face"></div>
      <div class="top-right tr4 face"></div>
      <div class="top-right tr5 face"></div>
      <div class="top-right tr6 face"></div>
      <div class="top-right tr7 face"></div>
      <div class="top-right tr8 face"></div>
      <div class="top-right tr9 face"></div>
      <div class="top-right tr10 face"></div>
      <div class="top-right tr11 face"></div>
      <div class="top-right tr12 face"></div>
      <div class="top-right tr13 face"></div>
      <div class="top-right tr14 face"></div>
      <div class="top-right tr15 face"></div>
        
      <div class="right face"></div>

      <div class="power-front face"></div>
      <div class="power-top face"></div>
      <div class="power-right face"></div>
      <div class="power-left face"></div>
      <div class="power-bottom face"></div>
      
      <div class="bottom face">
        <div class="mic"></div>
        <div class="charger"></div>
      </div>
      
      <div class="bottom-left bl1 face"></div>
      <div class="bottom-left bl2 face"></div>
      <div class="bottom-left bl3 face"></div>
      <div class="bottom-left bl4 face"></div>
      <div class="bottom-left bl5 face"></div>
      <div class="bottom-left bl6 face"></div>
      <div class="bottom-left bl7 face"></div>
      <div class="bottom-left bl8 face"></div>
      <div class="bottom-left bl9 face"></div>
      <div class="bottom-left bl10 face"></div>
      <div class="bottom-left bl11 face"></div>
      <div class="bottom-left bl12 face"></div>
      <div class="bottom-left bl13 face"></div>
      <div class="bottom-left bl14 face"></div>
      <div class="bottom-left bl15 face"></div>

      <div class="bottom-right br1 face"></div>
      <div class="bottom-right br2 face"></div>
      <div class="bottom-right br3 face"></div>
      <div class="bottom-right br4 face"></div>
      <div class="bottom-right br5 face"></div>
      <div class="bottom-right br6 face"></div>
      <div class="bottom-right br7 face"></div>
      <div class="bottom-right br8 face"></div>
      <div class="bottom-right br9 face"></div>
      <div class="bottom-right br10 face"></div>
      <div class="bottom-right br11 face"></div>
      <div class="bottom-right br12 face"></div>
      <div class="bottom-right br13 face"></div>
      <div class="bottom-right br14 face"></div>
      <div class="bottom-right br15 face"></div>
        
      <div class="back face">
        <div class="camera"></div>
        <div class="flashlight"></div>
        <div class="fingerprint-scanner"></div>
        <b>RAZION</b>
      </div>
    </div>
  </div>
`;class A extends HTMLElement{constructor(o,a=!1,e=!1,t=!1,r=!1){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(Y.cloneNode(!0)),this.shadowRoot.appendChild(y.content.cloneNode(!0)),this.transform=o||JSON.parse(this.getAttribute("transform")),this.allowRotation=a||this.hasAttribute("allowRotation"),this.allowMove=e||this.hasAttribute("allowMove"),this.allowZoom=t||this.hasAttribute("allowZoom"),this.autoAnimate=r||this.hasAttribute("autoAnimate")}connectedCallback(){let o=this.shadowRoot.querySelector(".phone"),a=null,e=this.transform?this.transform:sessionStorage.getItem("smartphone-3d-transform")?JSON.parse(sessionStorage.getItem("smartphone-3d-transform")):null,t=(e==null?void 0:e.translateX)!=null?e==null?void 0:e.translateX:0,r=(e==null?void 0:e.translateY)!=null?e==null?void 0:e.translateY:0,s=(e==null?void 0:e.rotateX)!=null?e==null?void 0:e.rotateX:0,l=(e==null?void 0:e.rotateY)!=null?e==null?void 0:e.rotateY:0,m=(e==null?void 0:e.rotateZ)!=null?e==null?void 0:e.rotateZ:0,n=(e==null?void 0:e.scale)!=null?e==null?void 0:e.scale:1,C=3,z=1;this.allowZoom&&window.addEventListener("wheel",i=>{i.deltaY<0?n<C&&(n+=.1):n>z&&(n-=.1),g()}),(this.allowMove||this.allowRotation)&&(window.addEventListener("mousedown",i=>{a={x:i.x,y:i.y}}),window.addEventListener("mousemove",i=>{if(a){let p={x:i.x-a.x,y:i.y-a.y};a={x:i.x,y:i.y},i.ctrlKey&&this.allowMove?(t+=p.x,r+=p.y):this.allowRotation&&(i.shiftKey?m+=p.x:(s-=p.y,l+=p.x)),g()}}),window.addEventListener("mouseup",()=>{a=null}));const g=()=>{o.style.transform=`translateX(${t}px) translateY(${r}px) rotateX(${s}deg) rotateY(${l}deg) rotateZ(${m}deg)`,this.style.transform=`scale(${n})`,sessionStorage.setItem("smartphone-3d-transform",JSON.stringify({translateX:t,translateY:r,rotateX:s,rotateY:l,rotateZ:m,scale:n}))};g();function h(){a||(l--,o.style.transform=`translateX(${t}px) translateY(${r}px) rotateX(${s}deg) rotateY(${l}deg) scale(${n})`),requestAnimationFrame(h)}this.autoAnimate&&h()}}customElements.define("smartphone-3d",A);const M=document.createElement("style");M.textContent=`
  section {
    min-height: 50vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 17px;
    align-items: center;
    padding: 33px 17px;
    position: relative;
  }

  .smartphoneMessage {
    flex: 1;
    min-width: 240px;
    padding: 33px 7px;
    font-weight: bold;
    text-align: center;
    position: relative;
  }

  .smartphoneMessage p {
    position: absolute;
    inset: 0;
    font-size: .85rem;
  }

  .oldMessage {
    animation: hide-message 1s ease-in 1;
  }

  @keyframes hide-message {
    100% {
      transform: translateY(-100px) translateX(50%) scale(0);
      opacity: 0;
    }
  }

  .newMessage {
    animation: show-message 1s ease-out 1;
  }

  @keyframes show-message {
    0% {
      transform: translateY(100px) translateX(-10%) scale(1.1);
      opacity: 0;
    }
  }

  .smartphoneWrapper {
    flex: 1;
    min-width: 240px;
    min-height: 330px;
    position: relative;
  }

  smartphone-3d {
    position: absolute;
    bottom: 50%;
    right: 130px;
    scale: .6;
    opacity: 0;
  }

  smartphone-3d.visible {
    animation: appear-from-left 1.5s ease-out 1;
    opacity: 1;
    z-index: 1;
    /*filter: drop-shadow(5px 5px 5px var(--dark-bg1-transparent));*/
  }
  
  smartphone-3d video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 17px;
    object-fit: cover;
  }

  smartphone-3d video::-webkit-media-controls-fullscreen-button {
    display: none;
  }
  
  smartphone-3d.visible::part(phone) {
    animation: rotate-to-left 2s linear 1;
  }

  @media (min-width: 400px) {
    .smartphoneMessage p {
      font-size: 1rem;
    }
  }

  @media (min-width: 800px) {
    .smartphoneMessage {
      flex: 2.7;
      text-align: right;
    }

    .smartphoneMessage p {
      font-size: 1.2rem;
    }
  }

  @media (min-width: 1180px) {
    /*header {
      height: 100lvh;
    }*/

    smartphone-3d {
      right: 170px;
      bottom: 250px;
      scale: .8;
    }
  }

  @media (min-width: 1417px) {
    .smartphoneMessage {
      flex: 3.7;
    }
  }
`;const E=document.createElement("template");E.innerHTML=`
  <section>
    <div class="smartphoneMessage"></div>
    <div class="smartphoneWrapper">
      <smartphone-3d id="smartphone" transform='{ "rotateX": 35, "rotateY": -15, "rotateZ": 10 }'>
        <iframe id="youtubeVideo" width="300" height="627" src="https://www.youtube.com/embed/UzR87WcC_pU?si=2kgFFu-M2m7LSZI4&showinfo=0&modestbranding=1&rel=0&autoplay=1&loop=1&playlist=UzR87WcC_pU" title="YouTube video player" frameborder="0" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </smartphone-3d>
    </div>
  </section>
`;class N extends HTMLElement{constructor(){super(),this.appendChild(M.cloneNode(!0)),this.appendChild(E.content.cloneNode(!0)),this.smartphoneMessage=this.querySelector(".smartphoneMessage"),this.messages=["Formatos de exportação otimizados para diferentes plataformas, como YouTube, Vimeo e redes sociais, garantindo a melhor qualidade possível dentro dos padrões técnicos exigidos.","Cortes precisos e ajustes na linha do tempo para criar uma narrativa fluida e envolvente.","Vídeos organizados e sincronizados de múltiplas câmeras para edições multicam, garantindo uma transição suave entre diferentes ângulos.","Correção de cor detalhada. Ajustando contraste, saturação e temperatura para transmitir a atmosfera desejada.","Ferramentas avançadas de color grading para criar looks cinematográficos e personalizados, alinhados à identidade visual do projeto.","Efeitos visuais e gráficos em movimento.","Gráficos em movimento, transições e efeitos especiais diretamente no Fusion, integrando elementos visuais que enriquecem a narrativa.","Composições visuais complexas, incluindo sobreposição de texto, animações e efeitos, para melhorar o impacto visual dos vídeos.","Mixagem e edição de áudio utilizando o Fairlight, garantindo que som e imagem estejam perfeitamente sincronizados e que a qualidade sonora esteja nítida.","Equalização, compressão e redução de ruído para alcançar um áudio claro e equilibrado, seja para diálogos, música ou efeitos sonoros.","Masterização final dos projetos, assegurando que a resolução e os codecs atendam às necessidades do cliente e do projeto."],this.messageIndex=0,Object.defineProperty(this,"messageIndex",{get(){return this._messageIndex},set(a){this._messageIndex=a,o()}});const o=()=>{if(Array.from(this.smartphoneMessage.children).length>1)for(let t=1;t<this.smartphoneMessage.children.length;t++){console.log("limpando "+t);try{this.smartphoneMessage.removeChild(this.smartphoneMessage.children[t])}catch{}}let a=this.smartphoneMessage.firstElementChild;a&&(a.addEventListener("animationend",()=>{this.smartphoneMessage.removeChild(a)}),a.classList.add("oldMessage"));let e=document.createElement("p");e.textContent=this.messages[this._messageIndex],e.addEventListener("animationend",()=>{e.classList.remove("newMessage")}),e.classList.add("newMessage"),this.smartphoneMessage.appendChild(e)}}connectedCallback(){this.messageIndex=0;const o={root:null,rootMargin:"0px",threshold:.1},a=(t,r)=>{t.forEach(s=>{s.isIntersecting&&(s.target.classList.add("visible"),r.unobserve(s.target))})};new IntersectionObserver(a,o).observe(document.querySelector("#smartphone")),setInterval(()=>{this.messageIndex=(this.messageIndex+1)%this.messages.length},7500)}}customElements.define("smartphone-section",N);function I(d,o){window.dispatchEvent(new CustomEvent(d,{detail:o}))}const c=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)");c.matches||L();c.addEventListener("change",()=>{L()});function L(){setTimeout(()=>{I("theme-changed",c.matches?"dark-theme":"light-theme"),c.matches?(document.documentElement.classList.replace("light-theme","dark-theme"),document.querySelector("[name=theme-color]").setAttribute("content","#1b1b1b"),document.querySelector("link[rel='icon']").setAttribute("href","/logo.svg")):(document.documentElement.classList.replace("dark-theme","light-theme"),document.querySelector("[name=theme-color]").setAttribute("content","#dddddd"),document.querySelector("link[rel=icon]").setAttribute("href","/white-logo.svg"))},0)}
