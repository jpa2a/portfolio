/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

// highlight
/*
const buttons = document.querySelectorAll('.nav-btn');
const highlight = document.querySelector('.highlight');

function moveHighlight(target){

  const rect = target.getBoundingClientRect();
  const navbarRect = target.parentElement.getBoundingClientRect();
  highlight.style.width = `${rect.width}px`;
  highlight.style.left= `${rect.left-navbarRect.left}px`;
  highlight.style.top= `${rect.top-navbarRect.top}px`;

}

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    moveHighlight(btn);
  });
});

// Init highlight

window.addEventListener('load', () => {
  const active = document.querySelector('.nav-btn.active');
  if(active) moveHighlight(active);
});

window.addEventListener('resize', () => {
  const active = document.querySelector('.nav-btn.active');
  if(active) moveHighlight(active);
});
*/

// scroll navbar

let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
   const navbar = document.getElementById('navbar');

   if(window.scrollY > lastScrollY){
      //down
      navbar.classList.add('hide');
   }
   else{
      //up
      navbar.classList.remove('hide');
   }
   lastScrollY = window.scrollY;

});

//fade in

document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // optional: remove observer after trigger
        }
      });
    },
    {
      threshold: 0.1 // 10% of element must be visible to trigger
    }
  );

  document.querySelectorAll(".fade-inY").forEach(el => {
    observer.observe(el);
  });
    document.querySelectorAll(".fade-inX").forEach(el => {
    observer.observe(el);
  });
});

//function animation

function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // optional
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  document.querySelectorAll(".fade-inY").forEach(el => observer.observe(el));
  document.querySelectorAll(".fade-inX").forEach(el => observer.observe(el));
}
/*
document.addEventListener("DOMContentLoaded", () => {
  const groups = document.querySelectorAll(".fade-in-group");

  groups.forEach(group => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const children = entry.target.querySelectorAll(".fade-in");
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add("visible");
              }, index * 150); // stagger delay per item (in ms)
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(group);
  });
});
*/

/*
function content(page, push = true) {
  const allowedPages = ['home', 'proprio','villas','services', 'contact'];
  if (!allowedPages.includes(page)) {
    console.warn('Unauthorized page:', page);

    return;
  }

  fetch(`${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      return response.text();
    })
    .then(data => {
      document.getElementById('content').innerHTML = data;
      initScrollAnimations();
      window.scrollTo({ top: 0, behavior: "smooth" });
      updateActiveLink(page);
      if (push) {
        history.pushState({ page }, "", `?page=${page}`);
      }
    })
    .catch(error => console.log('Error loading content:', error));
    navMenu.classList.remove('show-menu');
}

*/

/*
function content(page, push = true) {
  const contentDiv = document.getElementById('content');
  const loader = document.getElementById('loader');

  loader.style.display = 'block';
  contentDiv.classList.remove('visible');

  fetch(`${page}.html`)
    .then(response => {
      if (!response.ok) throw new Error("404");
      return response.text();
    })
    .then(data => {
      contentDiv.innerHTML = data;
      initScrollAnimations();
      updateActiveLink(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
       void contentDiv.offsetWidth; // this forces a reflow

      contentDiv.classList.add('visible');
      if (push) {
        history.pushState({ page }, "", `?page=${page}`);
      }

      // Delay fade-in just after DOM update
      requestAnimationFrame(() => {
        contentDiv.classList.add('visible');
      });
    })
    .catch(error => {
      contentDiv.innerHTML = "<h2>Page not found (404)</h2>";
      contentDiv.classList.add('visible');
    })
    .finally(() => {
      loader.style.display = 'none';
    });
}
*/
function content(page, push = true) {
  const loader = document.getElementById('loader');
  const pageDiv = document.getElementById('page');

 // loader.style.display = 'block';
updateActiveLink(page);
  // STEP 1: Fade out
  pageDiv.style.opacity = '0';

  // STEP 2: Wait for fade-out before loading new content
  setTimeout(() => {
    fetch(`${page}.html`)
      .then(response => {
        if (!response.ok) throw new Error("404");
        return response.text();
      })
      .then(data => {
        pageDiv.innerHTML = data;

        // Trigger fade-in
        requestAnimationFrame(() => {
          pageDiv.style.opacity = '1';
        });

        initScrollAnimations();
       
        window.scrollTo({ top: 0, behavior: "smooth" });

        if (push) {
          history.pushState({ page }, "", `?page=${page}`);
        }
      })
      .catch(error => {
        pageDiv.innerHTML = "<h2>Page not found (404)</h2>";
        pageDiv.style.opacity = '1';
      })
      .finally(() => {
        if (page === 'villas'){
          vignets();
        }
      //  loader.style.display = 'none';
      // sleep(500).then(() => { loader.style.display = 'none'; });
       setTimeout(() => {  navMenu.classList.remove('show-menu'); }, 300);
      });
  }, 500); // Match your fade-out transition time
 // navMenu.classList.remove('show-menu');
}


// function to read url

function getPageFromURL() {
   const params = new URLSearchParams(window.location.search);
  return params.get("page") || "home";
}

    document.addEventListener("DOMContentLoaded", () => {
      const pageToLoad = getPageFromURL();
      content(pageToLoad);
      moveHighlightToActive();
    });

window.addEventListener("popstate", event => {
  const page = event.state?.page || getPageFromURL();
  content(page, false); // don't push again!
});

// active link

function updateActiveLink(page) {
  const links = document.querySelectorAll('#menu a');
  links.forEach(link => {
    link.classList.remove('active');
    if (link.dataset.page === page) {
      link.classList.add('active');
    }
  });

  moveHighlightToActive();
}

/*
function moveHighlightToActive() {
  const activeLink = document.querySelector('#menu a.active');
  const highlight = document.getElementById('highlight');

  if (activeLink) {
    const menuRect = document.getElementById('menu').getBoundingClientRect();
    const linkRect = activeLink.getBoundingClientRect();

    const offsetLeft = linkRect.left - menuRect.left;
    const width = linkRect.width;

    highlight.style.width = `${width}px`;
    highlight.style.transform = `translateX(${offsetLeft}px)`;
  }
}
*/

function moveHighlightToActive() {
  const highlight = document.getElementById('highlight');
  const activeLink = document.querySelector('.nav__link.active');

  if (!highlight || !activeLink) return;

  const linkRect = activeLink.getBoundingClientRect();
  const parentRect = activeLink.parentElement.offsetParent.getBoundingClientRect();

  const isMobile = window.innerWidth < 768; // You can adjust this breakpoint

  if (isMobile) {
    highlight.style.width = `100%`;
    highlight.style.height = `${linkRect.height}px`;
    highlight.style.transform = `translateY(${linkRect.top - parentRect.top}px)`;
  } else {
    highlight.style.width = `${linkRect.width}px`;
    highlight.style.height = `100%`;
    highlight.style.transform = `translateX(${linkRect.left - parentRect.left}px)`;
  }
}

/*

function moveHighlightToActive() {
  const highlight = document.getElementById('highlight');
  const activeLink = document.querySelector('.nav__link.active');

  if (!highlight || !activeLink) return;

  const isMobile = window.innerWidth < 768;

  const offsetParent = activeLink.offsetParent;

  // Get position relative to offset parent
  const offsetTop = activeLink.offsetTop;
  const offsetLeft = activeLink.offsetLeft;

  const width = activeLink.offsetWidth;
  const height = activeLink.offsetHeight;

  highlight.style.width = `${width}px`;
  highlight.style.height = `${height}px`;

  if (isMobile) {
    highlight.style.transform = `translateY(${offsetTop}px)`;
  } else {
    highlight.style.transform = `translateX(${offsetLeft}px)`;
  }
}
*/

// prefetch

document.querySelectorAll("nav a").forEach(link => {
  const page = link.getAttribute("data-page");
  link.addEventListener("mouseover", () => {
    fetch(`${page}.html`).catch(() => {}); // silently warm up cache
  });
});

// villas

function vignets(){
  fetch('villas.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('vignette-container');

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'vignette';
/*
      card.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      `;
*/



      card.innerHTML = `
      <div class="card js-card">
    <div class="card__content">
      <button class="card__close js-close-button">
        <i class="fa-solid fa-xmark"></i>
      </button>
      <div class="card__header">
        <img
          class="card__user-image js-animatable"
          src="${item.image}"
          alt=""
        />
        <div class="card__user-info">
          <h2 class="card__title js-animatable">${item.title}</h2>
          <div class="card__subtitle js-animatable">
            ${item.description}
          </div>
          <ul class="card__user-links js-animatable">
            <li class="card__user-link">
              <a href="" alt="Blog">
                
              </a>
            </li>
            <li class="card__user-link">
              <a href="" alt="Twitter">
               </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="card__bio js-animatable">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione,
        iusto. Sed, hic corrupti autem atque provident debitis ex modi
        facilis iusto mollitia nam maxime sit eos vitae illo nisi eligendi
        animi reiciendis laborum odit in aperiam natus! Voluptatibus
        perferendis doloribus tenetur veritatis numquam natus, iste, eaque
        dicta, magni aspernatur sunt corrupti consequatur? Porro tempora
        veritatis vitae maxime dolor, facilis quidem quae ipsam voluptatibus
        doloribus eius eum temporibus assumenda deleniti nulla minus quos
        possimus magnam adipisci dignissimos sapiente consequatur
        recusandae. Quaerat saepe adipisci, nihil, quae necessitatibus dicta
        assumenda labore blanditiis fugit similique ipsum quod culpa
        distinctio dolore ex quasi odio veritatis.
      </div>

      <div class="card__images js-animatable">
        <img
          class="card__image"
          src="assets/images/Gmail/1000010460.png"
          alt=""
        />
        <img
          class="card__image"
          src="assets/images/Gmail/1000010460.png"
          alt=""
        />
        <img
          class="card__image"
          src="assets/images/Gmail/1000010460.png"
          alt=""
        />
        <img
          class="card__image"
          src="assets/images/Gmail/1000010460.png"
          alt=""
        />
        <img
          class="card__image"
          src="assets/images/Gmail/1000010460.png"
          alt=""
        />
        <img
          class="card__image"
          src="assets/images/Gmail/1000010460.png"
          alt=""
        />
      </div>
    </div>
  </div>
      `;





      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
  });

}

window.addEventListener('resize', () => {
  moveHighlightToActive();
});