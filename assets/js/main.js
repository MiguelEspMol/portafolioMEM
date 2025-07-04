/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    if(window.scrollY >= 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/


/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

/* Link active work */ 
const linkWork = document.querySelectorAll('.work__item')

function activeWork(){
    linkWork.forEach(L => L.classList.remove('active-work'))
    this.classList.add('active-work');
}

linkWork.forEach(L => L.addEventListener('click', activeWork))

/*=============== SWIPER TESTIMONIAL ===============*/


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}

window.addEventListener('scroll', scrollActive)



/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById("theme-button")
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme){
    // If the validation is fulfilled, we ask what the issue was to know if we activated or desactivated the light
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
    themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / desactivate the theme manuelly with the button
themeButton.addEventListener('click', () => {
    // Add or remove the light / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)

    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true,
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay: 700})
sr.reveal(`.home__scroll`, {delay: 900, origin: 'bottom'})

/*=============== CLEAR FORM DATA ====================*/
function submitForm() {
    // Envía el formulario
    document.getElementById("contactForm").submit();
    // Redirige a la página principal local
    window.location.href = "http://localhost/portafolioMEM/?#home";
    // Limpia los campos del formulario (opcional)
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("project").value = "";
}


/*============== COPY TO CLICPBOARD ==================*/
function copyToClipboard(text) {
    const el = document.createElement('textarea');
    el.value = text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    /*alert('Text copied to clipboard!');*/
}


/* ============= CHANGE LENGUAGE =====================*/
const languageButton = document.getElementById("lenguaje-button");
const downloadBtn = document.getElementById("download-btn");
let isEnglish = true;

const toggleLanguage = () => {
    const elementsToTranslate = document.querySelectorAll('.translate');
    
    elementsToTranslate.forEach(element => {
        if (isEnglish) {
            element.textContent = element.getAttribute('data-english');
            downloadBtn.href = "assets/pdf/CV_MEM_English.pdf";
        } else {
            element.textContent = element.getAttribute('data-spanish');
            downloadBtn.href = "assets/pdf/CV_MEM_Spanish.pdf";
        }
    });
    
    isEnglish = !isEnglish;
}

toggleLanguage(); 

languageButton.addEventListener('click', toggleLanguage);


