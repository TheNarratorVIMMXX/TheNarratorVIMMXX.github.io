/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/*                                                                  Portfolio Project Scripts                                                                                */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/
/*                                                                                                                                                                           */
/* Author: Magallanes López Carlos Gabriel                                                                                                                                   */
/* Version: 1.0                                                                                                                                                              */
/* Email: cgmagallanes23@gmail.com                                                                                                                                           */
/* Last Modified: 19/05/2026                                                                                                                                                 */
/*                                                                                                                                                                           */
/*****************************************************************************************************************************************************************************/

// i18n - Translations
const translations = {
    es: {
        navHint: "haz clic 3× para conocer a tyler",
        navAbout: "Sobre Mí",
        navWork: "Trabajo",
        navStack: "Stack",
        navContact: "Contacto",
        heroEyebrow: "EXPEDIENTE NO. 001 — CARLOS GABRIEL MAGALLANES LÓPEZ · CIUDAD JUÁREZ, MX",
        heroRule: "No hablarás de código malo",
        heroScroll: "Desplazar",
        aboutTag: "Sobre Mí / Identidad",
        aboutHeadline: "Soy el<br/> <span class=\"acc\">código</span><br/>limpio de Jack.",
        aboutP1: "Mi nombre es <strong>Carlos</strong>. Soy un Desarrollador Junior con base en Ciudad Juárez, México, y construyo cosas que <strong>realmente funcionan</strong>.",
        aboutP2: "Sólida base en <strong>Python</strong> — desde sistemas backend con Django hasta librerías personalizadas y diseño de bases de datos. Escribo software que prioriza el <strong>UX y el código bien documentado</strong>, no excusas.",
        aboutP3: "También hago juegos. <strong>Horror psicológico</strong>, matemáticas espaciales, herramientas de optimización. Cómodo desde la arquitectura de alto nivel hasta el control de bajo nivel que te hace sentir lo que la máquina está haciendo.",
        narratorLabel: "El Narrador",
        nLi1: "Arquitectura limpia",
        nLi2: "Diseño de bases de datos",
        nLi3: "Sistemas documentados",
        nLi4: "APIs UX-first",
        nLi5: "Backends Django",
        tylerLabel: "Tyler Durden",
        tLi1: "Desarrollo de juegos",
        tLi2: "Pygame · Arcade",
        tLi3: "Control en C++",
        tLi4: "Visualización de datos",
        tLi5: "Romper las reglas",
        rulesNote: '"Las cosas que posees terminan por poseerte." No dejes que la deuda técnica te posea.',
        rule1: "<strong>No envíes código sin probar.</strong> La primera regla. La única que importa cuando producción está en llamas.",
        rule2: "<strong>No envíes código sin probar.</strong> Segunda regla. Sí, la misma. No nos repetimos — excepto en esto.",
        rule3: "Si algo <strong>falla en producción</strong>, escribe el postmortem. Sin excepciones. Sin arreglos silenciosos.",
        rule4: "El usuario recuerda el <strong>fallo</strong> mucho más tiempo que tú.",
        rule5: "<strong>Un problema</strong> a la vez. Cambiar de contexto es el enemigo del flow. Protégelo como el jabón.",
        rule6: "El código <strong>tiene que funcionar</strong>. 'Lo refactorizo después' es una mentira que los developers se dicen. Hazlo bien.",
        projMeta: "06 PROYECTOS<br/>CLASIFICADOS · GITHUB",
        p1Desc: "Una aventura de horror psicológico de texto en la Torre de los Sueños. Cuatro capítulos. Puzzles intrincados. Sistemas de ansiedad. Decisiones cruciales con consecuencias reales. Construye las reglas — y luego míralas romperse.",
        p2Desc: "Sistema de estacionamiento ficticio que simula seguimiento de uso por hora y cálculos de facturación con lógica de precios fija. Estructurado. Limpio.",
        p3Desc: "Juego educativo de matemáticas para niños (grados 1–6). Temática espacial. Dificultad ajustable, jugabilidad interactiva, animaciones.",
        p4Desc: "Aplicación interactiva para calcular las dimensiones óptimas de una ventana normanda maximizando el área bajo una restricción de perímetro. El cálculo se encuentra con una interfaz limpia.",
        p5Desc: "Ejercicios de GUI en Python usando la biblioteca nativa Tkinter. Desarrollo de apps de escritorio, arquitectura orientada a eventos.",
        moreLabel: "MÁS ARCHIVOS",
        moreSub: "ARCHIVO GITHUB",
        rulesBg: "REGLAS",
        rulesTitle: "LAS REGLAS<br/>DEL CÓDIGO LIMPIO",
        caseFiles: "EXPEDIENTES",
        arsenalTitle: "EL ARSENAL",
        contactFind: "ENCONTRAR",
        statusHigh: "PRIORIDAD: ALTA",
        statusSystems: "SISTEMAS",
        statusEducation: "EDUCACIÓN",
        statusMathUx: "MATES / UX",
        statusGui: "GUI",
        skillTitleFrontend: "FRONTEND <span class=\"sk-title-num\">03</span>",
        skillTitleBackend: "BACKEND <span class=\"sk-title-num\">03</span>",
        skillTitleGameDev: "GAME DEV <span class=\"sk-title-num\">03</span>",
        skillTitleDatabases: "DATABASES <span class=\"sk-title-num\">03</span>",
        skillTitleVisualization: "VISUALIZACIÓN <span class=\"sk-title-num\">02</span>",
        skillsMeta: "HERRAMIENTAS<br/>DE ELECCIÓN",
        ctEpigraph: '"Las cosas que posees terminan por poseerte." — excepto tu portafolio.',
        ctTitle: "HABLEMOS<br/><span class=\"red\">YA.</span>",
        ctSubtitle: "Abierto a colaboraciones · Ciudad Juárez, MX",
        ftLeft: "© 2026 TheNarratorDev — Carlos Gabriel Magallanes López",
        ftRight: "Ciudad Juárez, Chihuahua · MX",
        tw: [
            { speaker: 'narrator', label: '— EL NARRADOR', text: 'Primera regla de este portafolio: construye primero, habla después.' },
            { speaker: 'tyler', label: '— TYLER DURDEN', text: 'No eres tu stack tecnológico.' },
            { speaker: 'narrator', label: '— EL NARRADOR', text: 'Python. Django. Arquitectura limpia. UX primero.' },
            { speaker: 'tyler', label: '— TYLER DURDEN', text: 'La comodidad mata más proyectos que el fracaso.' },
            { speaker: 'narrator', label: '— EL NARRADOR', text: 'Abierto a colaborar. Ciudad Juárez, MX.' },
            { speaker: 'tyler', label: '— TYLER DURDEN', text: 'El código te posee en el momento en que tienes miedo de reescribirlo.' },
        ],
        langBtn: "🌐 English"
    },
    en: {
        navHint: "click 3× to meet tyler",
        navAbout: "About",
        navWork: "Work",
        navStack: "Stack",
        navContact: "Contact",
        heroEyebrow: "FILE NO. 001 — CARLOS GABRIEL MAGALLANES LÓPEZ · CIUDAD JUÁREZ, MX",
        heroRule: "You do not talk about bad code",
        heroScroll: "Scroll",
        aboutTag: "About / Identity",
        aboutHeadline: "I am<br/> <span class=\"acc\">Jack's</span><br/>clean code.",
        aboutP1: "My name is <strong>Carlos</strong>. I am a Junior Developer based in Ciudad Juárez, México, and I build things that <strong>actually work</strong>.",
        aboutP2: "Strong foundation in <strong>Python</strong> — from backend systems with Django to custom libraries and database design. I write software that prioritizes <strong>UX and well-documented</strong> code, not excuses.",
        aboutP3: "I also make games. <strong>Psychological horror</strong>, space math, optimization tools. Comfortable from high-level architecture down to the low-level control that makes you feel what the machine is doing.",
        narratorLabel: "The Narrator",
        nLi1: "Clean architecture",
        nLi2: "Database design",
        nLi3: "Documented systems",
        nLi4: "UX-first APIs",
        nLi5: "Django backends",
        tylerLabel: "Tyler Durden",
        tLi1: "Game dev",
        tLi2: "Pygame · Arcade",
        tLi3: "C++ control",
        tLi4: "Data visualization",
        tLi5: "Break the rules",
        rulesNote: '"The things you own end up owning you." Don\'t let tech debt own you.',
        rule1: "<strong>You don't ship untested code.</strong> The first rule. The only rule that matters when production is on fire.",
        rule2: "<strong>You don't ship untested code.</strong> Second rule. Yes, same rule. We don't repeat ourselves — except for this.",
        rule3: "If something <strong>breaks in production</strong>, write the postmortem. No exceptions. No silent fixes.",
        rule4: "The user remembers the <strong>failure</strong> much longer than you do.",
        rule5: "<strong>One problem</strong> at a time. Context switching is the enemy of flow state. Guard it like soap.",
        rule6: "The code <strong>has to work</strong>. \"I'll refactor later\" is a lie developers tell themselves. Ship it right.",
        projMeta: "06 PROJECTS<br/>CLASSIFIED · GITHUB",
        p1Desc: "A text-based psychological horror adventure set in the Tower of Dreams. Four chapters. Intricate puzzles. Anxiety management systems. Crucial decisions with real consequences. Build the rules — then watch them break.",
        p2Desc: "Fictitious parking system simulating hourly usage tracking and billing calculations with fixed pricing logic. Structured. Clean.",
        p3Desc: "Educational math game for kids (grades 1–6). Space theme. Adjustable difficulty, interactive gameplay, animations.",
        p4Desc: "Interactive app to calculate optimal dimensions of a Norman window maximizing area under a perimeter constraint. Calculus meets clean interface.",
        p5Desc: "GUI exercises in Python using the native Tkinter library. Desktop app development, event-driven architecture.",
        moreLabel: "MORE FILES",
        moreSub: "GITHUB ARCHIVE",
        rulesBg: "RULES",
        rulesTitle: "THE RULES<br/>OF CLEAN CODE",
        caseFiles: "CASE FILES",
        arsenalTitle: "THE ARSENAL",
        contactFind: "FIND",
        statusHigh: "PRIORITY: HIGH",
        statusSystems: "SYSTEMS",
        statusEducation: "EDUCATION",
        statusMathUx: "MATH / UX",
        statusGui: "GUI",
        skillTitleFrontend: "FRONTEND <span class=\"sk-title-num\">03</span>",
        skillTitleBackend: "BACKEND <span class=\"sk-title-num\">03</span>",
        skillTitleGameDev: "GAME DEV <span class=\"sk-title-num\">03</span>",
        skillTitleDatabases: "DATABASES <span class=\"sk-title-num\">03</span>",
        skillTitleVisualization: "VISUALIZATION <span class=\"sk-title-num\">02</span>",
        skillsMeta: "WEAPONS<br/>OF CHOICE",
        ctEpigraph: '"The things you own end up owning you." — except your portfolio.',
        ctTitle: "LET'S<br/><span class=\"red\">WORK.</span>",
        ctSubtitle: "Open to collaborations · Ciudad Juárez, MX",
        ftLeft: "© 2026 TheNarratorDev — Carlos Gabriel Magallanes López",
        ftRight: "Ciudad Juárez, Chihuahua · MX",
        tw: [
            { speaker: 'narrator', label: '— THE NARRATOR', text: 'First rule of this portfolio is: build first, talk later.' },
            { speaker: 'tyler', label: '— TYLER DURDEN', text: 'You are not your tech stack.' },
            { speaker: 'narrator', label: '— THE NARRATOR', text: 'Python. Django. Clean architecture. UX first.' },
            { speaker: 'tyler', label: '— TYLER DURDEN', text: 'Comfort kills more projects than failure ever will.' },
            { speaker: 'narrator', label: '— THE NARRATOR', text: 'Open to collaborate. Ciudad Juárez, MX.' },
            { speaker: 'tyler', label: '— TYLER DURDEN', text: 'The code owns you the moment you\'re afraid to rewrite it.' },
        ],
        langBtn: "🌐 Español"
    }
};

// Language Detection
function detectLanguage() {
    const saved = localStorage.getItem('lang');
    if (saved) return saved;
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('es') ? 'es' : 'en';
}

// Apply Translations to the DOM
function applyLanguage(lang) {
    const t = translations[lang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
            if (el.hasAttribute('data-original')) {
                el.dataset.original = t[key];
            }
        }
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key]) el.innerHTML = t[key];
    });
    document.documentElement.setAttribute('lang', lang);
    const btn = document.getElementById('langToggleBtn');
    if (btn) btn.textContent = t.langBtn;
    localStorage.setItem('lang', lang);
}

// Create Floating Language Toggle Button
function createLangButton() {
    const btn = document.createElement('button'); // Create Element
    btn.id = 'langToggleBtn'; // ID for CSS Styling
    btn.addEventListener('click', () => { // Add Click Callback
        const current = localStorage.getItem('lang') || detectLanguage(); // Get Current Language
        const next = current === 'es' ? 'en' : 'es'; // Toggle between Spanish and English
        applyLanguage(next); // Apply Language
    });
    document.body.appendChild(btn); // Append Button to Document
}
// Film Grain Animation
(function(){
  
    // Define the canvas and context constants
    const canvas = document.getElementById('grain-canvas');
    const context = canvas.getContext('2d');
    
    // Assign the canvas dimensions and styles
    canvas.width = canvas.height = 256;
    Object.assign(canvas.style, {width: '100vw', height: '100vh', imageRendering: 'pixelated'});
    
    // Define de Frame Counter
    let frameCounter = 0;
    
    // Animation loop to create the grain effect
    function tick(){
        frameCounter++;
        if(frameCounter % 2 === 0){
            
            // Create the image and get the image data
            const img = context.createImageData(256, 256);
            const imageData = img.data;

            // Assign random colors with 255 alpha channel
            for(let i = 0;i < imageData.length; i += 4){
                const colorValue = (Math.random()*255) | 0;
                imageData[i] = imageData[i + 1] = imageData[i + 2] = colorValue;
                imageData[i + 3] = 255;
            }

            // Put the image in the 2D Context
            context.putImageData(img, 0, 0);

        }
        requestAnimationFrame(tick);
    
      }

    tick();

})();

// Film progress bar and sprocket holes
(function(){

    // Get the progress bar and the holes element of the CSS file
    const fill = document.getElementById('film-fill');
    const holes = document.getElementById('film-holes');
    
    // Make holes
    for(let i = 0; i < Math.ceil(window.innerWidth / 18); i++){
        const hole = document.createElement('div');
        hole.className='hole';
        holes.appendChild(hole);
    }

    // Update the progress bar 
    function update(){
        const rootDoc = document.documentElement;
        const percentage = (rootDoc.scrollTop / (rootDoc.scrollHeight - rootDoc.clientHeight)) * 100;
        fill.style.width = Math.min(percentage, 100) +'%';
        requestAnimationFrame(update);
    }

    update();

})();

// Floating bubbles (around soap)
(function(){
    
    // Get the bubble zone element and validate that exists
    const zone = document.getElementById('bubble-zone');
    if(!zone) return;
    
    // Get the style element, assign its textContent and append to the head of the DOM
    const style = document.createElement('style');
    style.textContent='@keyframes br{ 0% {opacity: 0; transform: translateY(0) scale(1)} 10% {opacity: 0.45} 90% {opacity:0.18} 100% {opacity: 0; transform: translateY(-130px) scale(0.55)}}';
    document.head.appendChild(style);

    function spawn(){
        
        // Create the buble an defines its raidus, x position and its duration
        const bubble = document.createElement('div');
        const radius = 3 + Math.random() * 9;
        const xPosition = 20 + Math.random() * 270
        const duration = 3 + Math.random() * 5;
        const size = radius * 2 + 'px'

        // Assign the style of the bubble and append to the bubble zone
        Object.assign(
            bubble.style,
            {
                position: 'absolute',
                width: size, height: size, 
                left: xPosition + 'px', 
                bottom: '0', 
                borderRadius: '50%',
                border:'1px solid rgba(255, 255, 255, 0.32)',
                background: 'rgba(255, 255, 255, 0.06)',
                animation:`br ${duration}s ease forwards`,
                pointerEvents: 'none'
            }
        );
        zone.appendChild(bubble);
        
        // Set timeout for the bubble removal
        setTimeout(() => bubble.remove(), duration * 1000);
    }

    // Set the bubble spawn interval
    setInterval(spawn,800);

})();

// Subliminal flash
(function(){
  
    // Get the subliminal element
    const subliminal = document.getElementById('subliminal');
    
    // Function for the flash animation
    function flash(){
        subliminal.style.opacity = '1';
        setTimeout(() => {subliminal.style.opacity = '0';}, 55);
        setTimeout(flash, 8000 + Math.random() * 9000);
    }

    setTimeout(flash, 5500);

})();

// Soap Parallax on Scroll
(function(){

    // Get the soap element and validate that exists
    const soap = document.getElementById('soap-svg');
    if(!soap) return;
    
    // Define de position tansformation animation
    const transformPos = ()=> {
        const yPosition = window.scrollY;
        soap.style.transform = `translateY(calc(-50% + ${yPosition * 0.18}px)) rotate(${yPosition * 0.025}deg)`;
    }

    // Add the movement of the soap
    window.addEventListener('scroll', transformPos, {passive: true});

})();

// Narrator -> Tyler Name Corruption
(function(){
  
    // Get the Narrator Line element
    const narratorLine = document.getElementById('narrator-line');
    if(!narratorLine) return;
    
    // Define the text constants for the Name Corruption animation and the lenght of the scramble chars
    const NARRATOR = 'NARRATOR';
    const TYLER ='TYLER   ';
    const SCRAMBLE_CHARS ='ABCDEFGHIJKLMNOPQRSTUVWXYZ#@!%&?';
    const SC_CHARS_LENGHT = SCRAMBLE_CHARS.length;

    // Corrupt animation
    function corrupt(){
        
        /// Phase 1: scramble char by char toward TYLER (350ms)
        let step = 0;
        const toTyler = setInterval(()=>{
            let txt = '';
            for(let i = 0; i < 8; i++){
                if(i < step) txt += TYLER[i];
                else txt += SCRAMBLE_CHARS[Math.floor(Math.random() * SC_CHARS_LENGHT)];
            }
            narratorLine.textContent=txt;
            narratorLine.style.webkitTextStroke='1.5px #C41E0A';
            narratorLine.style.color='transparent';
            step++;
            if(step > 8){
                clearInterval(toTyler);
                holdTyler();
            }
        }, 55);

        // Phase 2: hold TYLER for 900ms
        function holdTyler(){
            narratorLine.textContent='TYLER';
            narratorLine.style.webkitTextStroke='1.5px #C41E0A';
            setTimeout(unCorrupt, 900);
        }

        // Phase 3: scramble back to NARRATOR
        function unCorrupt(){
            let step = 0;
            const toNarrator = setInterval(()=>{
                let txt = '';
                for(let i = 0;i < 8; i++){
                    if (i < step) txt += NARRATOR[i];
                    else txt += SCRAMBLE_CHARS[Math.floor(Math.random() * SC_CHARS_LENGHT)];
                }
                narratorLine.textContent = txt;
                step++;
                if(step>8){
                    clearInterval(toNarrator);
                    narratorLine.textContent = NARRATOR;
                    narratorLine.style.webkitTextStroke = '1.5px #F0EBE1';
                    setTimeout(corrupt, 18000 + Math.random() * 12000);
                }
            }, 55);
        }
    }

    // First corruption after 12 seconds
    setTimeout(corrupt,12000);

})();

// Typewritter
(function(){

    // Get the voice and the text elements, also validate if the elementes exists
    const voiceEl = document.getElementById('tw-voice');
    const textEl = document.getElementById('tw-text');
    if(!voiceEl || !textEl) return;

    // Define the lines that will be speaking the Narrator and Tyler Durden
    const lines = [
        {speaker:'narrator', label: '— THE NARRATOR', text:'First rule of this portfolio is: build first, talk later.'},
        {speaker:'tyler', label: '— TYLER DURDEN', text:'You are not your tech stack.'},
        {speaker:'narrator', label: '— THE NARRATOR', text:'Python. Django. Clean architecture. UX first.'},
        {speaker:'tyler', label: '— TYLER DURDEN', text:'Comfort kills more projects than failure ever will'},
        {speaker:'narrator', label: '— THE NARRATOR', text:'Open to collaborate. Ciudad Juárez, MX.'},
        {speaker:'tyler', label: '— TYLER DURDEN', text:'The code owns you the moment you\'re afraid to rewrite it'},
    ];

    // Define control variables
    let idx = 0;
    let typing = false;

    // Type text function
    function typeText(text, onDone){
        
        // Assign a span label for the cursor
        textEl.innerHTML = '<span class="tw-cursor"></span>';
        
        // Define and assign control variables
        let i = 0;
        typing = true;

        // Interval for typing each character with a cursor effect        
        const interval = setInterval(() => {
            
			// Remove the previous cursor and add the new one at the end of the current text
			const cursor = textEl.querySelector('.tw-cursor');
            if(cursor) cursor.remove();
            
			// Assign the text content with the current substring and create a new cursor element
			textEl.textContent = text.slice(0, i + 1);
            const newCursor = document.createElement('span');
            
			// Assign the cursor class and append to the text element
			newCursor.className = 'tw-cursor';
            textEl.appendChild(newCursor);

			// Stop the type interval 
            i++;
            if(i >= text.length){
				clearInterval(interval);
				typing = false;
				setTimeout(onDone, 2200);
			}

        }, 45);
    }

	// Erase Text Function
    function eraseText(onDone){

        // Get the textContent and kenght of the text.
		const text = textEl.textContent;
        let len = text.length;
        
		// Defune the interval function
		const interval = setInterval(()=>{
			len--;
			
			// Assign de textContenn and create a new Cursosr
			textEl.textContent = text.slice(0, len);
			const newCursor = document.createElement('span');
			
			// Assign the class name and append de cursor element
			newCursor.className = 'tw-cursor';
			textEl.appendChild(newCursor);

			// Stop the interval
			if(len <= 0){
				clearInterval(interval);
				textEl.innerHTML = '<span class="tw-cursor"></span>';
				onDone();
			}

        }, 25);
    }

	// Generate the next line
    function nextLine(){
        
		// Get the lines of the current language and assign to the lines variable
		const lines = translations[localStorage.getItem('lang') || detectLanguage()].tw;

		// Get the next line 
		const line = lines[idx % lines.length];
        
		// Assign the textContent and the className of the voice element
		voiceEl.textContent = line.label;
		voiceEl.className = 'hero-tw-voice ' + (line.speaker === 'tyler'? 'tyler' : 'narrator');
        
		// Type text
		typeText(line.text, ()=>{
			eraseText(() => {
				idx++;
				nextLine();
			});
        });
    }

    // Start after hero animation
    setTimeout(nextLine, 2200);

})();

// Text Scramble Anim
(function(){
	
	// Defines the scramble chars and its length
	const SCRUMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01#@!%';
	const LENGTH = SCRUMBLE_CHARS.length;

	// Function for scramble chars
	function scramble(element, original, duration){
		
		// Define control variables 
		let start = null;
		function frame(timestamp){
			
			// Assign the start time of the animation
			if(!start) start = timestamp;
			
			// Define the progress of the animation and the number of characters revealed
			const progress = Math.min((timestamp - start) / duration, 1);
			const revealed = Math.floor(progress * original.length);
			let out = '';

			// Build the output string with revealed characters and random scramble chars
			for(let i = 0; i < original.length; i++){
				if (original[i] === ' ') out += ' ';
				else if (i < revealed) out += original[i];
				else out += SCRUMBLE_CHARS[Math.floor(Math.random()*LENGTH)];
			}

			// Assign the textContent of the element
			element.textContent = out;

			// Continue the animation if not completed, otherwise assign the original text
			if (progress<1) requestAnimationFrame(frame);
			else element.textContent=original;

		}

		// Start the animation
		requestAnimationFrame(frame);
	
	}

	const scrambleTitles=document.querySelectorAll('.scramble-title');
	const obs=new IntersectionObserver((entries)=>{
		entries.forEach(e=>{
		if(e.isIntersecting){
			const original=e.target.dataset.original||e.target.textContent;
			scramble(e.target,original,1400);
			obs.unobserve(e.target);
		}
		});
	},{threshold:0.2});
	scrambleTitles.forEach(el=>obs.observe(el));
})();

// 3D Card Tilt and specular light
(function(){
    
	// Get the project cards
	const projectCards = document.querySelectorAll('.proj-card')
	
	// Aplicate the perspective and ohter styles in the hover of a card
	projectCards.forEach(card => {

		// Get the specular light element
		const specularLight = card.querySelector('.specular');
		
		card.addEventListener('mousemove', event => {
			
			// Get the bounding rect of the card and calculate the mouse position relative to the card center
			const rect = card.getBoundingClientRect();
			const xPosition = (event.clientX - rect.left) / rect.width-0.5;
			const yPosition = (event.clientY - rect.top) / rect.height-0.5;
			
			// Aplicate the 3D transform and the specular light position
			card.style.transform = `perspective(700px) rotateX(${-yPosition*7}deg) rotateY(${xPosition*7}deg) scale(1.01)`;
			card.style.boxShadow = `${-xPosition*18}px ${-yPosition*18}px 35px rgba(196,30,10,0.12)`;

			// Move the specular light element to follow the mouse position
			if(specularLight){
				specularLight.style.left = (event.clientX - rect.left) +'px';
				specularLight.style.top = (event.clientY - rect.top) +'px';
			}
		});

		// Reset the transform and shadow when the mouse leaves the card
		card.addEventListener('mouseleave',() => {
			card.style.transform = '';
			card.style.boxShadow = '';

		});
	});
})();

// Heartbeat Animation
(function(){
	
	// Get the EKG elements and validate that exists
	const wrap = document.getElementById('ekg-wrap');
	const path = document.getElementById('ekg-path');
	const dot = document.getElementById('ekg-dot');
	
	// Validate that the elements exists
	if(!wrap || !path || !dot) return;

	// Define a control variable to ensure the animation only triggers once when the EKG section enters the viewport
	let fired = false;

	// Create an IntersectionObserver to trigger the heartbeat animation when the EKG section is in view
	const observer = new IntersectionObserver((entries)=>{
		
		// Loop through the entries to find when the EKG section is intersecting
		entries.forEach(entry => {

			// If the EKG section is intersecting and the animation has not been fired yet, start the heartbeat animation
			if(entry.isIntersecting && !fired){
				fired = true;
				path.style.transition = 'stroke-dashoffset 2.2s ease';
				path.style.strokeDashoffset = '0';
				dot.style.opacity = '1';

				// Get the total length of the path for the dot animation, and define a control variable for the animation
				const length = path.getTotalLength ? path.getTotalLength() : 600;
				let time = 0;
				
				// Function to animate the dot along the path, using requestAnimationFrame for smooth animation
				const animDot=()=>{
					
					// Increment the time variable and get the point on the path
					time = (time + 1.5) % length;
					const point = path.getPointAtLength ? path.getPointAtLength(time) : {x: time * 400 / length, y: 30};
					
					// Move the dot to the current point on the path
					dot.setAttribute('cx', point.x);
					dot.setAttribute('cy', point.y);
					
					// Continue the animation if time is less than the length of the path
					if(time > 0) requestAnimationFrame(animDot);

				};

				// Program the first animation of the dot after a short delay to sync with the path animation
				setTimeout(animDot, 100);

				// Repeat heartbeat every 3s
				setInterval(()=>{
					
					// Reset the path animation 
					path.style.transition = 'none';
					path.style.strokeDashoffset = '600';
					
					// Restart the path animation after a short delay to ensure the reset takes effect
					setTimeout(()=>{

						// Restart the path animation
						path.style.transition='stroke-dashoffset 2.2s ease';
						path.style.strokeDashoffset='0';

					}, 100);

				},3500);
			}
		});
	}, {threshold: 0.4});
	
	// Start observing the EKG section to trigger the animation when it enters the viewport
	observer.observe(wrap);

})();

// Fist punch on rules section
(function(){
	
	// Get and validate the fist element
	const fist = document.getElementById('fist-wrap');
	if(!fist) return;
	
	// Create an IntersectionObserver to trigger the punch animation when the fist enters the viewport
	const observer = new IntersectionObserver((entries)=>{
		entries.forEach(entry=>{
			
			// If the fist is intersecting, start the punch animation and unobserve to ensure it only happens once
			if(entry.isIntersecting){
				
				// Vibration of the fist with a short delay to sync with the punch effect
				setTimeout(() => {
					fist.classList.add('punched');
					setTimeout(() => fist.classList.add('vibrate'), 650);
					setTimeout(() => fist.classList.remove('vibrate'), 950);
				}, 300);
				
				// Unobserve the fist element to prevent the animation from triggering again
				observer.unobserve(entry.target);
			}

		});
	},{threshold:0.3});
	
	// Start observing the fist element to trigger the punch animation when it enters the viewport
	observer.observe(fist);

})();

// Tyler Mode
(function(){

	// Get the logo, overlay and message elements, also validate if the logo element exists
	const logo = document.getElementById('nav-logo');
	const overlay = document.getElementById('tyler-mode');
	const msg = document.getElementById('tyler-msg');

	// Validate that the logo element exists, if not, return to prevent errors
	if(!logo) return;

	// Define control variables 
	let clicks = 0, timer = null;
	
	// Add a click event listener to the logo element to trigger the Tyler Mode animation on multiple clicks
	logo.addEventListener('click', event => {
		
		// Prevent the default click behavior and increment the click counter
		event.preventDefault();
		clicks++;
		
		// Reset the click counter after a short delay to allow for multiple clicks within a certain time frame
		clearTimeout(timer);
		timer = setTimeout(() => {clicks =0 ;}, 800);

		// If the click counter reaches 3, trigger the Tyler Mode animation
		if(clicks>=3){
			clicks=0;
			
			// TYLER TAKES OVER
			document.body.classList.add('tyler-active');
			
			// Shake everything
			document.body.style.animation='tylerShake .4s ease';
			
			// Grain goes crazy
			const grain=document.getElementById('grain-canvas');
			if(grain) grain.style.opacity='.18';
			
			// Flash subliminal several times
			const subliminal = document.getElementById('subliminal');
			for(let i=0;i<6;i++){
				setTimeout(()=>{subliminal.style.opacity = '1';},i * 180);
				setTimeout(()=>{subliminal.style.opacity = '0';},i * 180+90);
			}

			// Show the overlay message for a few seconds
			setTimeout(()=>{
				document.body.classList.remove('tyler-active');
				document.body.style.animation='';
				if(grain) grain.style.opacity='0.055';
			}, 3000);

		}
  });

  // Shake keyframe
  const st=document.createElement('style');
  st.textContent='@keyframes tylerShake{0%,100%{transform:none}10%{transform:translateX(-4px) rotate(-.5deg)}20%{transform:translateX(4px)}30%{transform:translateX(-3px) rotate(.5deg)}40%{transform:translateX(3px)}50%{transform:translateX(-2px)}60%{transform:translateX(2px)}70%,90%{transform:translateX(0)}}';
  document.head.appendChild(st);
})();

// Fade-In
(function(){
	
	// Create an IntersectionObserver 
	const observer = new IntersectionObserver((entries) => {
		
		// Loop through the entries to find the elements that are intersecting with the viewport
		entries.forEach(element => {

			// If the element is intersecting, add the 'visible' class and unobserve the element
			if(element.isIntersecting){
				element.target.classList.add('visible');
				observer.unobserve(element.target);
			}

		});
	},{threshold: 0.1, rootMargin: '0px 0px -60px 0px'});

	// Start observing all elements with the class 'fi' to trigger the fade-in animation when they enter the viewport
	document.querySelectorAll('.fi').forEach(element => observer.observe(element));
})();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link=>{
	
	// Add a click event listener 
	link.addEventListener('click',event => {

		// Get the target element based on the href attribute of the clicked link
		const reference = document.querySelector(link.getAttribute('href'));
		if(reference){event.preventDefault();reference.scrollIntoView({behavior:'smooth'});}

	});
});

// Inicialización del Idioma
createLangButton();
applyLanguage(detectLanguage());

/*****************************************************************************************************************************************************************************/