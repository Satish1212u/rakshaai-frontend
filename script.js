// ðŸ”¥ CYBER HELP AI - ADVANCED JAVASCRIPT
// Modern, Animated, Interactive Features

// ðŸŒ Multi-language Support
const translations = {
    en: {
        title: "Cyber Help AI",
        subtitle: "Ethical, privacy-first cybersecurity guidance (defensive only)",
        mainHeading: "Stay safe onlineâ€”get clear, legal, step-by-step protection advice.",
        description: "Share what happened (message, call, payment request, login alert, etc.). I'll respond in a structured way: understanding â†’ threat explanation â†’ immediate steps â†’ prevention â†’ official reporting.",
        inputLabel: "What happened?",
        inputPlaceholder: "Example: I received an email saying my account will be closed unless I verify my password...",
        analyzeBtn: "Get safety guidance",
        safetyBoundaryTitle: "Safety boundary",
        safetyBoundaryText: "I can help you protect yourself and recover safely. I won't assist with hacking, fraud, bypassing security, malware, or illegal actions.",
        helpWith: "What I can help with",
        wontDo: "What I won't do",
        indiaHelp: "India quick help",
        emergencyBtn: "ðŸš¨ Call 1930 - Cyber Helpline",
        reportBtn: "Report on cybercrime.gov.in"
    },
    hi: {
        title: "à¤¸à¤¾à¤‡à¤¬à¤° à¤¹à¥‡à¤²à¥à¤ª AI",
        subtitle: "à¤¨à¥ˆà¤¤à¤¿à¤•, à¤—à¥‹à¤ªà¤¨à¥€à¤¯à¤¤à¤¾-à¤ªà¥à¤°à¤¾à¤¥à¤®à¤¿à¤•à¤¤à¤¾ à¤¸à¤¾à¤‡à¤¬à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ (à¤•à¥‡à¤µà¤² à¤°à¤•à¥à¤·à¤¾à¤¤à¥à¤®à¤•)",
        mainHeading: "à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤¹à¥‡à¤‚â€”à¤¸à¥à¤ªà¤·à¥à¤Ÿ, à¤•à¤¾à¤¨à¥‚à¤¨à¥€, à¤šà¤°à¤£à¤¬à¤¦à¥à¤§ à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¤²à¤¾à¤¹ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚à¥¤",
        description: "à¤•à¥à¤¯à¤¾ à¤¹à¥à¤† à¤¥à¤¾ à¤¸à¤¾à¤à¤¾ à¤•à¤°à¥‡à¤‚ (à¤¸à¤‚à¤¦à¥‡à¤¶, à¤•à¥‰à¤², à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤…à¤¨à¥à¤°à¥‹à¤§, à¤²à¥‰à¤—à¤¿à¤¨ à¤…à¤²à¤°à¥à¤Ÿ, à¤†à¤¦à¤¿)à¥¤ à¤®à¥ˆà¤‚ à¤¸à¤‚à¤°à¤šà¤¿à¤¤ à¤¤à¤°à¥€à¤•à¥‡ à¤¸à¥‡ à¤œà¤µà¤¾à¤¬ à¤¦à¥‚à¤‚à¤—à¤¾: à¤¸à¤®à¤ â†’ à¤–à¤¤à¤°à¥‡ à¤•à¥€ à¤µà¥à¤¯à¤¾à¤–à¥à¤¯à¤¾ â†’ à¤¤à¤¤à¥à¤•à¤¾à¤² à¤•à¤¦à¤® â†’ à¤°à¥‹à¤•à¤¥à¤¾à¤® â†’ à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿà¤¿à¤‚à¤—à¥¤",
        inputLabel: "à¤•à¥à¤¯à¤¾ à¤¹à¥à¤† à¤¥à¤¾?",
        inputPlaceholder: "à¤‰à¤¦à¤¾à¤¹à¤°à¤£: à¤®à¥à¤à¥‡ à¤à¤• à¤ˆà¤®à¥‡à¤² à¤®à¤¿à¤²à¤¾ à¤œà¤¿à¤¸à¤®à¥‡à¤‚ à¤•à¤¹à¤¾ à¤—à¤¯à¤¾ à¤•à¤¿ à¤®à¥‡à¤°à¤¾ à¤–à¤¾à¤¤à¤¾ à¤¬à¤‚à¤¦ à¤¹à¥‹ à¤œà¤¾à¤à¤—à¤¾ à¤œà¤¬ à¤¤à¤• à¤®à¥ˆà¤‚ à¤…à¤ªà¤¨à¤¾ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‚à¤‚à¤—à¤¾...",
        analyzeBtn: "à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤®à¤¾à¤°à¥à¤—à¤¦à¤°à¥à¤¶à¤¨ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚",
        safetyBoundaryTitle: "à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤¸à¥€à¤®à¤¾",
        safetyBoundaryText: "à¤®à¥ˆà¤‚ à¤†à¤ªà¤•à¥‹ à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¤¹à¤¨à¥‡ à¤”à¤° à¤¸à¥à¤°à¤•à¥à¤·à¤¿à¤¤ à¤°à¥‚à¤ª à¤¸à¥‡ à¤ à¥€à¤• à¤¹à¥‹à¤¨à¥‡ à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥‚à¤‚à¥¤ à¤®à¥ˆà¤‚ à¤¹à¥ˆà¤•à¤¿à¤‚à¤—, à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€, à¤¸à¥à¤°à¤•à¥à¤·à¤¾ à¤•à¥‹ à¤¬à¤¾à¤¯à¤ªà¤¾à¤¸ à¤•à¤°à¤¨à¥‡, à¤®à¥ˆà¤²à¤µà¥‡à¤¯à¤° à¤¯à¤¾ à¤…à¤µà¥ˆà¤§ à¤•à¤¾à¤°à¥à¤¯à¥‹à¤‚ à¤®à¥‡à¤‚ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‚à¤‚à¤—à¤¾à¥¤",
        helpWith: "à¤®à¥ˆà¤‚ à¤•à¤¿à¤¸à¤®à¥‡à¤‚ à¤®à¤¦à¤¦ à¤•à¤° à¤¸à¤•à¤¤à¤¾ à¤¹à¥‚à¤‚",
        wontDo: "à¤®à¥ˆà¤‚ à¤•à¥à¤¯à¤¾ à¤¨à¤¹à¥€à¤‚ à¤•à¤°à¥‚à¤‚à¤—à¤¾",
        indiaHelp: "à¤­à¤¾à¤°à¤¤ à¤¤à¥à¤µà¤°à¤¿à¤¤ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾",
        emergencyBtn: "ðŸš¨ 1930 à¤ªà¤° à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚ - à¤¸à¤¾à¤‡à¤¬à¤° à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨",
        reportBtn: "cybercrime.gov.in à¤ªà¤° à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚"
    },
    hinglish: {
        title: "Cyber Help AI",
        subtitle: "Ethical, privacy-first cybersecurity guidance (defensive only)",
        mainHeading: "Online safe rahiyeâ€”clear, legal, step-by-step protection advice paiye.",
        description: "Jo hua hai share kariye (message, call, payment request, login alert, etc.). Main structured way mein jawab dunga: samajh â†’ khatre ki vyakhya â†’ turant kadam â†’ rokthaam â†’ official reporting.",
        inputLabel: "Kya hua tha?",
        inputPlaceholder: "Example: Mujhe ek email aaya jismein kaha gaya ki mera account band ho jayega jab tak main apna password verify nahi karunga...",
        analyzeBtn: "Safety guidance paiye",
        safetyBoundaryTitle: "Safety boundary",
        safetyBoundaryText: "Main aapko protect karne aur safely recover karne mein help kar sakta hun. Main hacking, fraud, security bypass, malware ya illegal actions mein assist nahi karunga.",
        helpWith: "Main kisme help kar sakta hun",
        wontDo: "Main kya nahi karunga",
        indiaHelp: "India quick help",
        emergencyBtn: "ðŸš¨ 1930 par call kariye - Cyber Helpline",
        reportBtn: "cybercrime.gov.in par report kariye"
    }
};

// ðŸŽ¯ Cyber Safety Tips for Auto-rotation
const safetyTips = [
    {
        en: "ðŸ’¡ Never share OTP with anyone - Banks never ask for OTP over phone",
        hi: "ðŸ’¡ à¤•à¤¿à¤¸à¥€ à¤•à¥‡ à¤¸à¤¾à¤¥ OTP à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚ - à¤¬à¥ˆà¤‚à¤• à¤«à¥‹à¤¨ à¤ªà¤° OTP à¤¨à¤¹à¥€à¤‚ à¤®à¤¾à¤‚à¤—à¤¤à¥‡",
        hinglish: "ðŸ’¡ Kisi ke saath OTP share na kariye - Banks phone par OTP nahi mangte"
    },
    {
        en: "ðŸ” Use strong, unique passwords for each account",
        hi: "ðŸ” à¤¹à¤° à¤–à¤¾à¤¤à¥‡ à¤•à¥‡ à¤²à¤¿à¤ à¤®à¤œà¤¬à¥‚à¤¤, à¤…à¤¨à¥‹à¤–à¥‡ à¤ªà¤¾à¤¸à¤µà¤°à¥à¤¡ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¥‡à¤‚",
        hinglish: "ðŸ” Har account ke liye strong, unique passwords use kariye"
    },
    {
        en: "ðŸš« Don't click suspicious links in SMS or emails",
        hi: "ðŸš« SMS à¤¯à¤¾ à¤ˆà¤®à¥‡à¤² à¤®à¥‡à¤‚ à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤²à¤¿à¤‚à¤• à¤ªà¤° à¤•à¥à¤²à¤¿à¤• à¤¨ à¤•à¤°à¥‡à¤‚",
        hinglish: "ðŸš« SMS ya email mein suspicious links par click na kariye"
    },
    {
        en: "âœ… Always verify requests by calling official numbers",
        hi: "âœ… à¤¹à¤®à¥‡à¤¶à¤¾ à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤¨à¤‚à¤¬à¤°à¥‹à¤‚ à¤ªà¤° à¤•à¥‰à¤² à¤•à¤°à¤•à¥‡ à¤…à¤¨à¥à¤°à¥‹à¤§à¥‹à¤‚ à¤•à¥‹ à¤¸à¤¤à¥à¤¯à¤¾à¤ªà¤¿à¤¤ à¤•à¤°à¥‡à¤‚",
        hinglish: "âœ… Hamesha official numbers par call karke requests verify kariye"
    },
    {
        en: "ðŸ¦ Banks never ask for card details or PIN over phone",
        hi: "ðŸ¦ à¤¬à¥ˆà¤‚à¤• à¤«à¥‹à¤¨ à¤ªà¤° à¤•à¤¾à¤°à¥à¤¡ à¤µà¤¿à¤µà¤°à¤£ à¤¯à¤¾ PIN à¤¨à¤¹à¥€à¤‚ à¤®à¤¾à¤‚à¤—à¤¤à¥‡",
        hinglish: "ðŸ¦ Banks phone par card details ya PIN nahi mangte"
    }
];

// ðŸŽ¨ Main Application Class
class CyberHelpAI {
    constructor() {
        this.currentLanguage = 'en';
        this.currentTipIndex = 0;
        this.isAnalyzing = false;
        this.theme = localStorage.getItem('theme') || 'dark';
        this.scrollProgress = 0;
        this.history = JSON.parse(localStorage.getItem('incidentHistory') || '[]');
        this.historyIndex = null;
        this.draftKey = 'incidentDraft';

        // Initialize all features
        this.init();
    }

    // ðŸš€ Initialize Application
    init() {
        this.setupEventListeners();
        this.startPageAnimations();
        this.startTipRotation();
        this.setupScrollProgress();
        this.setupThemeToggle();
        this.setupLanguageSwitcher();
        this.setupFormValidation();
        this.setupSmoothScrolling();
        this.setupScrollReveal();
        this.applyStoredTheme();
        this.setupIncidentHistory();
        this.restoreDraftIfAny();
        this.showPrivacyNoticeOnce();

        console.log('ðŸ”¥ Cyber Help AI - Advanced Features Loaded!');
    }

    // ðŸŽ­ Page Load Animations
    startPageAnimations() {
        // Fade in animation for main elements
        const animateElements = [
            '.header',
            '.main-heading',
            '.description',
            '.input-section',
            '.quick-actions',
            '.sidebar-card'
        ];

        animateElements.forEach((selector, index) => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                element.style.opacity = '0';
                element.style.transform = 'translateY(30px)';
                element.style.transition = 'all 0.6s ease';

                setTimeout(() => {
                    element.style.opacity = '1';
                    element.style.transform = 'translateY(0)';
                }, index * 200);
            });
        });

        // Logo animation
        const logo = document.querySelector('.logo-icon');
        if (logo) {
            logo.style.transform = 'scale(0) rotate(180deg)';
            logo.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';

            setTimeout(() => {
                logo.style.transform = 'scale(1) rotate(0deg)';
            }, 300);
        }
    }

    // ðŸ“œ Scroll Reveal Animation
    setupScrollReveal() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('reveal');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.sidebar-card, .content-area').forEach(el => {
            el.classList.add('reveal-element');
            observer.observe(el);
        });
    }

    // ðŸ”„ Auto-rotating Safety Tips
    startTipRotation() {
        const tipContainer = this.createTipContainer();

        setInterval(() => {
            this.rotateTip(tipContainer);
        }, 4000);

        // Initial tip
        this.rotateTip(tipContainer);
    }

    createTipContainer() {
        const container = document.createElement('div');
        container.className = 'safety-tip-container';
        container.innerHTML = `
            <div class="tip-header">ðŸ’¡ Safety Tip</div>
            <div class="tip-content" id="rotating-tip"></div>
        `;

        // Insert after the first sidebar card
        const firstCard = document.querySelector('.sidebar-card');
        if (firstCard) {
            firstCard.parentNode.insertBefore(container, firstCard.nextSibling);
        }

        return container;
    }

    rotateTip(container) {
        const tipElement = container.querySelector('#rotating-tip');
        const currentTip = safetyTips[this.currentTipIndex];

        // Fade out
        tipElement.style.opacity = '0';
        tipElement.style.transform = 'translateX(-20px)';

        setTimeout(() => {
            tipElement.textContent = currentTip[this.currentLanguage];
            tipElement.style.opacity = '1';
            tipElement.style.transform = 'translateX(0)';
        }, 300);

        this.currentTipIndex = (this.currentTipIndex + 1) % safetyTips.length;
    }

    // ðŸŒ Language Switcher
    setupLanguageSwitcher() {
        const switcher = document.createElement('div');
        switcher.className = 'language-switcher';
        switcher.innerHTML = `
            <button class="lang-btn ${this.currentLanguage === 'en' ? 'active' : ''}" data-lang="en">EN</button>
            <button class="lang-btn ${this.currentLanguage === 'hi' ? 'active' : ''}" data-lang="hi">à¤¹à¤¿à¤‚à¤¦à¥€</button>
            <button class="lang-btn ${this.currentLanguage === 'hinglish' ? 'active' : ''}" data-lang="hinglish">Hinglish</button>
        `;

        document.querySelector('.nav-pills').appendChild(switcher);

        switcher.addEventListener('click', (e) => {
            if (e.target.classList.contains('lang-btn')) {
                this.switchLanguage(e.target.dataset.lang);
            }
        });
    }

    switchLanguage(lang) {
        this.currentLanguage = lang;
        const t = translations[lang];

        // Update all text elements with smooth transition
        const updates = [
            { selector: '.logo-text h1', text: t.title },
            { selector: '.logo-text p', text: t.subtitle },
            { selector: '.main-heading', text: t.mainHeading },
            { selector: '.description', text: t.description },
            { selector: '.input-label', text: t.inputLabel },
            { selector: '.input-area', attr: 'placeholder', text: t.inputPlaceholder },
            { selector: '.analyze-btn span:first-child', text: t.analyzeBtn },
            { selector: '.safety-boundary h3', text: t.safetyBoundaryTitle },
            { selector: '.safety-boundary p', text: t.safetyBoundaryText }
        ];

        updates.forEach(update => {
            const element = document.querySelector(update.selector);
            if (element) {
                element.style.opacity = '0.5';
                setTimeout(() => {
                    if (update.attr) {
                        element.setAttribute(update.attr, update.text);
                    } else {
                        element.textContent = update.text;
                    }
                    element.style.opacity = '1';
                }, 150);
            }
        });

        // Update active language button
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.lang === lang);
        });
    }

    // ðŸ“Š Scroll Progress Indicator
    setupScrollProgress() {
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.appendChild(progressBar);

        window.addEventListener('scroll', () => {
            const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
            progressBar.style.width = `${Math.min(scrolled, 100)}%`;
        });
    }

    // ðŸŒ™ Theme Toggle
    setupThemeToggle() {
        const themeToggle = document.createElement('button');
        themeToggle.className = 'theme-toggle';
        themeToggle.innerHTML = this.theme === 'dark' ? 'ðŸŒ™' : 'â˜€ï¸';
        themeToggle.title = 'Toggle Dark/Light Mode';

        document.querySelector('.nav-pills').appendChild(themeToggle);

        themeToggle.addEventListener('click', () => {
            this.toggleTheme();
        });
    }

    toggleTheme() {
        this.theme = this.theme === 'dark' ? 'light' : 'dark';
        document.body.classList.toggle('light-theme', this.theme === 'light');

        const themeToggle = document.querySelector('.theme-toggle');
        themeToggle.innerHTML = this.theme === 'dark' ? 'ðŸŒ™' : 'â˜€ï¸';

        // Save preference
        localStorage.setItem('theme', this.theme);
    }

    applyStoredTheme() {
        if (this.theme === 'light') {
            document.body.classList.add('light-theme');
        }
    }

    // âœ… Enhanced Form Validation
    setupFormValidation() {
        const input = document.getElementById('incident-input');
        const analyzeBtn = document.querySelector('.analyze-btn');

        input.addEventListener('input', () => {
            this.validateInput(input);
            this.saveDraft(input.value);
        });

        input.addEventListener('paste', (e) => {
            setTimeout(() => this.validateInput(input), 10);
            setTimeout(() => this.saveDraft(input.value), 20);
        });
    }

    validateInput(input) {
        const value = input.value.trim();
        const analyzeBtn = document.querySelector('.analyze-btn');

        // Remove existing validation messages
        const existingMsg = document.querySelector('.validation-message');
        if (existingMsg) existingMsg.remove();

        if (value.length === 0) {
            analyzeBtn.disabled = true;
            analyzeBtn.style.opacity = '0.6';
            return false;
        }

        if (value.length < 10) {
            this.showValidationMessage('Please provide more details (at least 10 characters)', 'warning');
            analyzeBtn.disabled = true;
            analyzeBtn.style.opacity = '0.6';
            return false;
        }

        // URL validation
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        const urls = value.match(urlPattern);
        if (urls) {
            urls.forEach(url => {
                if (this.isSuspiciousURL(url)) {
                    this.showValidationMessage('âš ï¸ Suspicious URL detected - DO NOT click it!', 'danger');
                }
            });
        }

        analyzeBtn.disabled = false;
        analyzeBtn.style.opacity = '1';
        return true;
    }

    isSuspiciousURL(url) {
        const suspiciousPatterns = [
            /bit\.ly|tinyurl|t\.co/i,
            /[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+/,
            /[a-z0-9]+-[a-z0-9]+-[a-z0-9]+\.(tk|ml|ga|cf)/i
        ];

        return suspiciousPatterns.some(pattern => pattern.test(url));
    }

    showValidationMessage(message, type) {
        const msgElement = document.createElement('div');
        msgElement.className = `validation-message ${type}`;
        msgElement.textContent = message;

        const inputSection = document.querySelector('.input-section');
        inputSection.appendChild(msgElement);

        // Animate in
        setTimeout(() => msgElement.classList.add('show'), 10);
    }

    // ðŸš¨ Enhanced Emergency Modal
    setupEmergencyModal() {
        const modal = document.createElement('div');
        modal.className = 'emergency-modal';
        modal.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <h3>ðŸš¨ EMERGENCY CYBER HELP</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="emergency-info">
                        <div class="helpline-info">
                            <h4>ðŸ‡®ðŸ‡³ India Cyber Helpline</h4>
                            <div class="phone-number">1930</div>
                            <p>Available 24x7 for cyber crime reporting</p>
                        </div>
                        
                        <div class="quick-actions-modal">
                            <a href="tel:1930" class="emergency-btn call-btn">ðŸ“ž Call 1930 Now</a>
                            <a href="https://cybercrime.gov.in" target="_blank" class="emergency-btn report-btn">ðŸŒ Report Online</a>
                        </div>
                        
                        <div class="emergency-steps">
                            <h4>Immediate Steps:</h4>
                            <ol>
                                <li>Don't panic - stay calm</li>
                                <li>Don't share any more information</li>
                                <li>Take screenshots as evidence</li>
                                <li>Contact your bank if money involved</li>
                                <li>File complaint immediately</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Event listeners
        modal.querySelector('.modal-close').addEventListener('click', () => {
            this.closeModal(modal);
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal(modal);
            }
        });

        return modal;
    }

    showEmergencyModal() {
        let modal = document.querySelector('.emergency-modal');
        if (!modal) {
            modal = this.setupEmergencyModal();
        }

        modal.classList.add('show');
        document.body.style.overflow = 'hidden';

        // Focus trap
        const focusableElements = modal.querySelectorAll('button, a, input, select, textarea');
        if (focusableElements.length > 0) {
            focusableElements[0].focus();
        }
    }

    closeModal(modal) {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    // ðŸŽ¯ Enhanced Scam Analysis
    async analyzeIncident() {
        const input = document.getElementById('incident-input');
        const value = input.value.trim();

        if (!this.validateInput(input)) {
            this.showNotification('Please provide valid details about the incident', 'error');
            return;
        }

        if (this.isAnalyzing) return;

        this.isAnalyzing = true;
        this.saveIncidentToHistory(value);
        const sanitized = this.sanitizeInputForAnalysis(value);
        this.showAnalysisSteps(sanitized);
    }

    showAnalysisSteps(text) {
        const loading = document.getElementById('loading');

        loading.classList.add('show');
        loading.innerHTML = `
        <div class="analysis-steps">
            <div class="step active" data-step="1">
                <div class="step-icon">ðŸ”</div>
                <div class="step-text">Analyzing content...</div>
            </div>
            <div class="step" data-step="2">
                <div class="step-icon">âš ï¸</div>
                <div class="step-text">Identifying threats...</div>
            </div>
            <div class="step" data-step="3">
                <div class="step-icon">ðŸ›¡ï¸</div>
                <div class="step-text">Generating safety advice...</div>
            </div>
            <div class="step" data-step="4">
                <div class="step-icon">ðŸ“‹</div>
                <div class="step-text">Preparing report...</div>
            </div>
        </div>
    `;

        // âœ… animation logic
        let currentStep = 1;

        const stepInterval = setInterval(() => {
            const prevStep = document.querySelector(`.step[data-step="${currentStep}"]`);
            if (prevStep) {
                prevStep.classList.remove('active');
                prevStep.classList.add('completed');
            }

            currentStep++;

            const nextStep = document.querySelector(`.step[data-step="${currentStep}"]`);
            if (nextStep) {
                nextStep.classList.add('active');
            }

            // âœ… finish â†’ call API
            if (currentStep > 4) {
                clearInterval(stepInterval);

                setTimeout(() => {
                    this.showAnalysisResult(text);
                }, 1000);
            }

        }, 800);
    }

    async showAnalysisResult(text) {
        const loading = document.getElementById('loading');
        const responseArea = document.getElementById('response-area');

        try {
            const response = await fetch("https://rakshaai-backend-srh2.onrender.com/analyze", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text })
            });

            if (!response.ok) throw new Error('API request failed');

            let analysis = await response.json();

            // ðŸ”¥ IMPORTANT FIX (fallback handling)
            if (analysis.raw) {
                try {
                    analysis = JSON.parse(analysis.raw);
                } catch {
                    analysis = {
                        riskLevel: "Unknown",
                        score: 0,
                        whatIsHappening: analysis.raw,
                        whyDangerous: "AI response format issue",
                        immediateSteps: [],
                        preventionTips: [],
                        reportingOptions: []
                    };
                }
            }

            // ðŸ§  ensure all fields exist (extra safety)
            analysis = {
                riskLevel: analysis.riskLevel || "Unknown",
                score: analysis.score || 0,
                whatIsHappening: analysis.whatIsHappening || "No details available",
                whyDangerous: analysis.whyDangerous || "Not specified",
                immediateSteps: analysis.immediateSteps || [],
                preventionTips: analysis.preventionTips || [],
                reportingOptions: analysis.reportingOptions || []
            };

            // âœ… Hide loading
            loading.classList.remove('show');

            // ðŸŽ¯ Show result
            responseArea.innerHTML = this.generateEnhancedResponse(analysis);
            responseArea.classList.add('show');

            this.isAnalyzing = false;

            // ðŸŽ¬ Animate response
            this.animateResponseSections();

        } catch (error) {
            console.error('Analysis error:', error);

            loading.classList.remove('show');

            this.showNotification(
                'Failed to analyze incident with AI. Please check backend connection.',
                'error'
            );

            this.isAnalyzing = false;
        }
    }

    generateEnhancedResponse(analysis) {
        const riskLevelLower = (analysis.riskLevel || 'Low').toLowerCase();
        const riskColors = {
            low: '#10b981',
            medium: '#f59e0b',
            high: '#ef4444'
        };
        const color = riskColors[riskLevelLower] || riskColors.low;

        // Get localized text based on current language
        const responseTexts = this.getResponseTexts();

        return `
            <div class="analysis-result">
                <div class="risk-assessment">
                    <div class="risk-badge" style="background: ${color}20; border-color: ${color}">
                        <span class="risk-level">${analysis.riskLevel} ${responseTexts.risk}</span>
                        <span class="risk-score">${responseTexts.score}: ${(analysis.score / 10).toFixed(1).replace('.0', '')}/10</span>
                    </div>
                </div>
                
                <div class="detected-threats">
                    <h4>ðŸŽ¯ Threat Explanation</h4>
                    <div class="threat-item">
                        <strong>What is happening</strong>
                        <div class="threat-matches" style="margin-top: 4px; line-height: 1.4;">${analysis.whatIsHappening}</div>
                    </div>
                    <div class="threat-item">
                        <strong>Why it is dangerous</strong>
                        <div class="threat-matches" style="margin-top: 4px; line-height: 1.4;">${analysis.whyDangerous}</div>
                    </div>
                </div>
                
                <div class="recommendations">
                    <h4>ðŸ›¡ï¸ Immediate Steps to Take</h4>
                    ${(analysis.immediateSteps || []).map(step => `<div class="recommendation">ðŸ›‘ ${step}</div>`).join('')}
                </div>
                
                <div class="recommendations">
                    <h4>ðŸ’¡ Prevention Tips</h4>
                    ${(analysis.preventionTips || []).map(tip => `<div class="recommendation">ðŸ›¡ï¸ ${tip}</div>`).join('')}
                </div>
                
                <div class="report-section">
                    <h4>ðŸ“ž Official Reporting Options</h4>
                    ${analysis.reportingOptions && analysis.reportingOptions.length > 0 ? `
                        <div class="recommendations" style="margin-bottom: 15px;">
                            ${analysis.reportingOptions.map(opt => `<div class="recommendation">ðŸ“‹ ${opt}</div>`).join('')}
                        </div>
                    ` : ''}
                    <div class="report-buttons">
                        <button class="report-btn emergency" onclick="cyberAI.showEmergencyModal()">
                            ðŸš¨ ${responseTexts.emergencyHelp}
                        </button>
                        <a href="https://cybercrime.gov.in" target="_blank" class="report-btn online">
                            ðŸŒ ${responseTexts.reportOnline}
                        </a>
                    </div>
                </div>
            </div>
        `;
    }

    getResponseTexts() {
        const texts = {
            en: {
                risk: 'RISK',
                score: 'Score',
                detectedThreats: 'Detected Threats',
                matchedKeywords: 'Matched keywords',
                redFlags: 'Red Flags Identified',
                immediateActions: 'Immediate Actions',
                specificRecommendations: 'Specific Recommendations',
                reportHelp: 'Report & Get Help',
                emergencyHelp: 'Emergency Help',
                reportOnline: 'Report Online',
                riskLevels: {
                    low: 'LOW',
                    medium: 'MEDIUM',
                    high: 'HIGH'
                },
                severityLevels: {
                    low: 'low',
                    medium: 'medium',
                    high: 'high'
                },
                actions: {
                    stop: 'Stop all communication',
                    dontShare: 'Don\'t share personal info',
                    callOfficial: 'Call official numbers',
                    document: 'Document everything'
                }
            },
            hi: {
                risk: 'à¤œà¥‹à¤–à¤¿à¤®',
                score: 'à¤¸à¥à¤•à¥‹à¤°',
                detectedThreats: 'à¤ªà¤¹à¤šà¤¾à¤¨à¥‡ à¤—à¤ à¤–à¤¤à¤°à¥‡',
                matchedKeywords: 'à¤®à¤¿à¤²à¤¾à¤¨ à¤•à¤¿à¤ à¤—à¤ à¤•à¥€à¤µà¤°à¥à¤¡',
                redFlags: 'à¤ªà¤¹à¤šà¤¾à¤¨à¥‡ à¤—à¤ à¤²à¤¾à¤² à¤à¤‚à¤¡à¥‡',
                immediateActions: 'à¤¤à¤¤à¥à¤•à¤¾à¤² à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ',
                specificRecommendations: 'à¤µà¤¿à¤¶à¤¿à¤·à¥à¤Ÿ à¤¸à¤¿à¤«à¤¾à¤°à¤¿à¤¶à¥‡à¤‚',
                reportHelp: 'à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚ à¤”à¤° à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤ªà¥à¤°à¤¾à¤ªà¥à¤¤ à¤•à¤°à¥‡à¤‚',
                emergencyHelp: 'à¤†à¤ªà¤¾à¤¤à¤•à¤¾à¤²à¥€à¤¨ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾',
                reportOnline: 'à¤‘à¤¨à¤²à¤¾à¤‡à¤¨ à¤°à¤¿à¤ªà¥‹à¤°à¥à¤Ÿ à¤•à¤°à¥‡à¤‚',
                riskLevels: {
                    low: 'à¤•à¤®',
                    medium: 'à¤®à¤§à¥à¤¯à¤®',
                    high: 'à¤‰à¤šà¥à¤š'
                },
                severityLevels: {
                    low: 'à¤•à¤®',
                    medium: 'à¤®à¤§à¥à¤¯à¤®',
                    high: 'à¤‰à¤šà¥à¤š'
                },
                actions: {
                    stop: 'à¤¸à¤­à¥€ à¤¸à¤‚à¤šà¤¾à¤° à¤¬à¤‚à¤¦ à¤•à¤°à¥‡à¤‚',
                    dontShare: 'à¤µà¥à¤¯à¤•à¥à¤¤à¤¿à¤—à¤¤ à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚',
                    callOfficial: 'à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤¨à¤‚à¤¬à¤°à¥‹à¤‚ à¤ªà¤° à¤•à¥‰à¤² à¤•à¤°à¥‡à¤‚',
                    document: 'à¤¸à¤¬ à¤•à¥à¤› à¤¦à¤¸à¥à¤¤à¤¾à¤µà¥‡à¤œà¤¼à¤¿à¤¤ à¤•à¤°à¥‡à¤‚'
                }
            },
            hinglish: {
                risk: 'RISK',
                score: 'Score',
                detectedThreats: 'Detected Threats',
                matchedKeywords: 'Matched keywords',
                redFlags: 'Red Flags Identify Kiye Gaye',
                immediateActions: 'Turant Actions',
                specificRecommendations: 'Specific Recommendations',
                reportHelp: 'Report Kariye & Help Liye',
                emergencyHelp: 'Emergency Help',
                reportOnline: 'Online Report Kariye',
                riskLevels: {
                    low: 'LOW',
                    medium: 'MEDIUM',
                    high: 'HIGH'
                },
                severityLevels: {
                    low: 'kam',
                    medium: 'medium',
                    high: 'zyada'
                },
                actions: {
                    stop: 'Saara communication band kar diye',
                    dontShare: 'Personal info share na kariye',
                    callOfficial: 'Official numbers par call kariye',
                    document: 'Sab kuch document kar liye'
                }
            }
        };

        return texts[this.currentLanguage] || texts.en;
    }

    getLocalizedThreatType(threatType) {
        const threatTypes = {
            en: {
                'Phishing Attack': 'Phishing Attack',
                'OTP Fraud': 'OTP Fraud',
                'Fake Job Scam': 'Fake Job Scam',
                'UPI/Payment Scam': 'UPI/Payment Scam',
                'Tech Support Scam': 'Tech Support Scam'
            },
            hi: {
                'Phishing Attack': 'à¤«à¤¿à¤¶à¤¿à¤‚à¤— à¤¹à¤®à¤²à¤¾',
                'OTP Fraud': 'OTP à¤§à¥‹à¤–à¤¾à¤§à¤¡à¤¼à¥€',
                'Fake Job Scam': 'à¤¨à¤•à¤²à¥€ à¤¨à¥Œà¤•à¤°à¥€ à¤˜à¥‹à¤Ÿà¤¾à¤²à¤¾',
                'UPI/Payment Scam': 'UPI/à¤­à¥à¤—à¤¤à¤¾à¤¨ à¤˜à¥‹à¤Ÿà¤¾à¤²à¤¾',
                'Tech Support Scam': 'à¤¤à¤•à¤¨à¥€à¤•à¥€ à¤¸à¤¹à¤¾à¤¯à¤¤à¤¾ à¤˜à¥‹à¤Ÿà¤¾à¤²à¤¾'
            },
            hinglish: {
                'Phishing Attack': 'Phishing Attack',
                'OTP Fraud': 'OTP Fraud',
                'Fake Job Scam': 'Fake Job Scam',
                'UPI/Payment Scam': 'UPI/Payment Scam',
                'Tech Support Scam': 'Tech Support Scam'
            }
        };

        return threatTypes[this.currentLanguage]?.[threatType] || threatType;
    }

    getLocalizedRedFlag(flag) {
        const redFlags = {
            en: {
                'Creates false urgency': 'Creates false urgency',
                'Suspicious links or attachments': 'Suspicious links or attachments',
                'Requests sensitive information': 'Requests sensitive information',
                'Involves money transactions': 'Involves money transactions',
                'Unprofessional communication channels': 'Unprofessional communication channels'
            },
            hi: {
                'Creates false urgency': 'à¤à¥‚à¤ à¥€ à¤¤à¤¾à¤¤à¥à¤•à¤¾à¤²à¤¿à¤•à¤¤à¤¾ à¤¬à¤¨à¤¾à¤¤à¤¾ à¤¹à¥ˆ',
                'Suspicious links or attachments': 'à¤¸à¤‚à¤¦à¤¿à¤—à¥à¤§ à¤²à¤¿à¤‚à¤• à¤¯à¤¾ à¤…à¤Ÿà¥ˆà¤šà¤®à¥‡à¤‚à¤Ÿ',
                'Requests sensitive information': 'à¤¸à¤‚à¤µà¥‡à¤¦à¤¨à¤¶à¥€à¤² à¤œà¤¾à¤¨à¤•à¤¾à¤°à¥€ à¤®à¤¾à¤‚à¤—à¤¤à¤¾ à¤¹à¥ˆ',
                'Involves money transactions': 'à¤ªà¥ˆà¤¸à¥‡ à¤•à¥‡ à¤²à¥‡à¤¨-à¤¦à¥‡à¤¨ à¤®à¥‡à¤‚ à¤¶à¤¾à¤®à¤¿à¤²',
                'Unprofessional communication channels': 'à¤—à¥ˆà¤°-à¤ªà¥‡à¤¶à¥‡à¤µà¤° à¤¸à¤‚à¤šà¤¾à¤° à¤šà¥ˆà¤¨à¤²'
            },
            hinglish: {
                'Creates false urgency': 'False urgency create karta hai',
                'Suspicious links or attachments': 'Suspicious links ya attachments',
                'Requests sensitive information': 'Sensitive information maangta hai',
                'Involves money transactions': 'Money transactions mein involve hai',
                'Unprofessional communication channels': 'Unprofessional communication channels'
            }
        };

        return redFlags[this.currentLanguage]?.[flag] || flag;
    }

    getLocalizedRecommendation(recommendation) {
        const recommendations = {
            en: {
                'ðŸš¨ Take immediate action - this appears to be a serious threat': 'ðŸš¨ Take immediate action - this appears to be a serious threat',
                'ðŸ“ž Consider calling Cyber Helpline 1930 if you are in India': 'ðŸ“ž Consider calling Cyber Helpline 1930 if you are in India',
                'ðŸ” Never share OTP with anyone - legitimate organizations never ask for it': 'ðŸ” Never share OTP with anyone - legitimate organizations never ask for it',
                'ðŸ¦ Contact your bank immediately using official numbers': 'ðŸ¦ Contact your bank immediately using official numbers'
            },
            hi: {
                'ðŸš¨ Take immediate action - this appears to be a serious threat': 'ðŸš¨ à¤¤à¤¤à¥à¤•à¤¾à¤² à¤•à¤¾à¤°à¥à¤°à¤µà¤¾à¤ˆ à¤•à¤°à¥‡à¤‚ - à¤¯à¤¹ à¤à¤• à¤—à¤‚à¤­à¥€à¤° à¤–à¤¤à¤°à¤¾ à¤ªà¥à¤°à¤¤à¥€à¤¤ à¤¹à¥‹à¤¤à¤¾ à¤¹à¥ˆ',
                'ðŸ“ž Consider calling Cyber Helpline 1930 if you are in India': 'ðŸ“ž à¤¯à¤¦à¤¿ à¤†à¤ª à¤­à¤¾à¤°à¤¤ à¤®à¥‡à¤‚ à¤¹à¥ˆà¤‚ à¤¤à¥‹ à¤¸à¤¾à¤‡à¤¬à¤° à¤¹à¥‡à¤²à¥à¤ªà¤²à¤¾à¤‡à¤¨ 1930 à¤ªà¤° à¤•à¥‰à¤² à¤•à¤°à¤¨à¥‡ à¤ªà¤° à¤µà¤¿à¤šà¤¾à¤° à¤•à¤°à¥‡à¤‚',
                'ðŸ” Never share OTP with anyone - legitimate organizations never ask for it': 'ðŸ” à¤•à¤¿à¤¸à¥€ à¤•à¥‡ à¤¸à¤¾à¤¥ OTP à¤¸à¤¾à¤à¤¾ à¤¨ à¤•à¤°à¥‡à¤‚ - à¤µà¥ˆà¤§ à¤¸à¤‚à¤—à¤ à¤¨ à¤‡à¤¸à¤•à¥‡ à¤²à¤¿à¤ à¤•à¤­à¥€ à¤¨à¤¹à¥€à¤‚ à¤ªà¥‚à¤›à¤¤à¥‡',
                'ðŸ¦ Contact your bank immediately using official numbers': 'ðŸ¦ à¤†à¤§à¤¿à¤•à¤¾à¤°à¤¿à¤• à¤¨à¤‚à¤¬à¤°à¥‹à¤‚ à¤•à¤¾ à¤‰à¤ªà¤¯à¥‹à¤— à¤•à¤°à¤•à¥‡ à¤¤à¥à¤°à¤‚à¤¤ à¤…à¤ªà¤¨à¥‡ à¤¬à¥ˆà¤‚à¤• à¤¸à¥‡ à¤¸à¤‚à¤ªà¤°à¥à¤• à¤•à¤°à¥‡à¤‚'
            },
            hinglish: {
                'ðŸš¨ Take immediate action - this appears to be a serious threat': 'ðŸš¨ Turant action liye - yeh serious threat lagta hai',
                'ðŸ“ž Consider calling Cyber Helpline 1930 if you are in India': 'ðŸ“ž Agar aap India mein hain to Cyber Helpline 1930 par call karne ka socho',
                'ðŸ” Never share OTP with anyone - legitimate organizations never ask for it': 'ðŸ” Kisi ke saath OTP share na kariye - legitimate organizations kabhi nahi mangte',
                'ðŸ¦ Contact your bank immediately using official numbers': 'ðŸ¦ Official numbers use karke turant apne bank se contact kariye'
            }
        };

        return recommendations[this.currentLanguage]?.[recommendation] || recommendation;
    }

    animateResponseSections() {
        const sections = document.querySelectorAll('.analysis-result > div');
        sections.forEach((section, index) => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'all 0.5s ease';

            setTimeout(() => {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }, index * 200);
        });
    }

    // ðŸ”” Notification System
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <span class="notification-icon">${this.getNotificationIcon(type)}</span>
                <span class="notification-message">${message}</span>
                <button class="notification-close">&times;</button>
            </div>
        `;

        document.body.appendChild(notification);

        // Animate in
        setTimeout(() => notification.classList.add('show'), 10);

        // Auto remove after 5 seconds
        setTimeout(() => {
            this.removeNotification(notification);
        }, 5000);

        // Close button
        notification.querySelector('.notification-close').addEventListener('click', () => {
            this.removeNotification(notification);
        });
    }

    getNotificationIcon(type) {
        const icons = {
            success: 'âœ…',
            error: 'âŒ',
            warning: 'âš ï¸',
            info: 'â„¹ï¸'
        };
        return icons[type] || icons.info;
    }

    removeNotification(notification) {
        notification.classList.remove('show');
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // ðŸŽ¯ Smooth Scrolling
    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ðŸŽ® Event Listeners Setup
    setupEventListeners() {
        // Enhanced button animations
        document.addEventListener('click', (e) => {
            if (e.target.matches('button, .quick-btn, .analyze-btn')) {
                this.createRippleEffect(e);
            }
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + Enter to analyze
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                this.analyzeIncident();
            }

            // Ctrl/Cmd + Shift + C to copy latest analysis
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'c' || e.key === 'C')) {
                e.preventDefault();
                this.copyLatestAnalysisToClipboard();
            }

            // Escape to close modals
            if (e.key === 'Escape') {
                const modal = document.querySelector('.emergency-modal.show');
                if (modal) {
                    this.closeModal(modal);
                }
            }
        });

        // Enhanced scroll effects
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    this.handleScroll();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    createRippleEffect(e) {
        const button = e.target;
        const rect = button.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    handleScroll() {
        const scrolled = window.scrollY;
        const header = document.querySelector('.header');

        // Header background on scroll
        if (scrolled > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Parallax effect for main heading
        const mainHeading = document.querySelector('.main-heading');
        if (mainHeading) {
            const offset = scrolled * 0.5;
            mainHeading.style.transform = `translateY(${offset}px)`;
        }
    }

    // ðŸ“ Incident History (keyboard-only, no UI changes)
    setupIncidentHistory() {
        const input = document.getElementById('incident-input');
        if (!input) return;

        input.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowUp') {
                e.preventDefault();
                this.navigateHistory(-1);
            }
            if ((e.ctrlKey || e.metaKey) && e.key === 'ArrowDown') {
                e.preventDefault();
                this.navigateHistory(1);
            }
        });
    }

    saveIncidentToHistory(text) {
        const value = text.trim();
        if (!value) return;

        // Avoid duplicating the most recent entry
        if (this.history.length && this.history[0] === value) {
            return;
        }

        this.history.unshift(value);
        // Limit history size
        this.history = this.history.slice(0, 20);
        localStorage.setItem('incidentHistory', JSON.stringify(this.history));
        this.historyIndex = null;
    }

    navigateHistory(direction) {
        if (!this.history.length) return;

        if (this.historyIndex === null) {
            this.historyIndex = 0;
        } else {
            this.historyIndex += direction;
            if (this.historyIndex < 0) this.historyIndex = 0;
            if (this.historyIndex >= this.history.length) {
                this.historyIndex = this.history.length - 1;
            }
        }

        const input = document.getElementById('incident-input');
        if (!input) return;

        input.value = this.history[this.historyIndex];
        this.validateInput(input);

        // Move cursor to end
        requestAnimationFrame(() => {
            input.selectionStart = input.selectionEnd = input.value.length;
        });
    }

    // ðŸ’¾ Draft persistence (local-only)
    saveDraft(value) {
        try {
            localStorage.setItem(this.draftKey, value || '');
        } catch (e) {
            // Ignore storage errors
        }
    }

    restoreDraftIfAny() {
        try {
            const saved = localStorage.getItem(this.draftKey);
            if (saved && saved.trim().length > 0) {
                const input = document.getElementById('incident-input');
                if (input) {
                    input.value = saved;
                    this.validateInput(input);
                    this.showNotification('Your last incident description was restored on this device only.', 'info');
                }
            }
        } catch (e) {
            // Ignore storage errors
        }
    }

    // ðŸ›¡ï¸ Local privacy notice (one per session)
    showPrivacyNoticeOnce() {
        try {
            const key = 'cyberHelpPrivacyNoticeShown';
            if (sessionStorage.getItem(key)) return;
            sessionStorage.setItem(key, '1');
            this.showNotification('Analysis runs in your browser only. Obvious personal details are masked before processing.', 'info');
        } catch (e) {
            // Ignore storage errors
        }
    }

    // ðŸ”’ Sanitize personal details before analysis (local only)
    sanitizeInputForAnalysis(text) {
        let sanitized = text;

        // Emails
        sanitized = sanitized.replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '[email hidden]');
        // Indian phone numbers (10 digits, optionally with country code)
        sanitized = sanitized.replace(/(\+?91[\s-]?)?[6-9]\d{9}\b/g, '[phone hidden]');
        // UPI IDs
        sanitized = sanitized.replace(/\b[\w.-]+@[\w.-]+\b/g, '[upi id hidden]');
        // Card-like numbers (very simple heuristic)
        sanitized = sanitized.replace(/\b(?:\d[ -]?){12,19}\b/g, '[card number hidden]');

        return sanitized;
    }

    // ðŸ“‹ Copy latest analysis to clipboard
    async copyLatestAnalysisToClipboard() {
        const responseArea = document.getElementById('response-area');
        if (!responseArea || !responseArea.textContent.trim()) {
            this.showNotification('No analysis available to copy yet.', 'warning');
            return;
        }

        const plainText = responseArea.innerText.trim();

        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(plainText);
            } else {
                const temp = document.createElement('textarea');
                temp.value = plainText;
                document.body.appendChild(temp);
                temp.select();
                document.execCommand('copy');
                document.body.removeChild(temp);
            }
            this.showNotification('Latest safety guidance copied to clipboard.', 'success');
        } catch (e) {
            this.showNotification('Unable to copy to clipboard. You can still select and copy manually.', 'error');
        }
    }
}

// ðŸš€ Initialize Application
let cyberAI;

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    initializeApp();
}

function initializeApp() {
    cyberAI = new CyberHelpAI();
}

// ðŸ”§ Global Functions (for HTML onclick handlers)
function fillQuickAction(action) {
    document.getElementById('incident-input').value = action;
    cyberAI.validateInput(document.getElementById('incident-input'));
}

function analyzeIncident() {
    cyberAI.analyzeIncident();
}

function showEmergencyHelp() {
    cyberAI.showEmergencyModal();
}

// ðŸŽ¨ Enhanced CSS Animations (injected via JavaScript)
function injectEnhancedStyles() {
    const style = document.createElement('style');
    style.textContent = `
        /* Enhanced Animations */
        .reveal-element {
            opacity: 0;
            transform: translateY(30px);
            transition: all 0.6s ease;
        }
        
        .reveal-element.reveal {
            opacity: 1;
            transform: translateY(0);
        }
        
        /* Safety Tip Container */
        .safety-tip-container {
            background: rgba(16, 185, 129, 0.1);
            border: 1px solid rgba(16, 185, 129, 0.3);
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 24px;
        }
        
        .tip-header {
            font-weight: 600;
            color: #10b981;
            margin-bottom: 8px;
            font-size: 14px;
        }
        
        .tip-content {
            color: #cbd5e1;
            font-size: 13px;
            line-height: 1.5;
            transition: all 0.3s ease;
        }
        
        /* Language Switcher */
        .language-switcher {
            display: flex;
            gap: 4px;
            margin-left: 12px;
        }
        
        .lang-btn {
            padding: 6px 12px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 16px;
            color: #e2e8f0;
            font-size: 12px;
            cursor: pointer;
            transition: all 0.3s ease;
        }
        
        .lang-btn.active {
            background: rgba(79, 70, 229, 0.3);
            border-color: rgba(79, 70, 229, 0.5);
            color: #a5b4fc;
        }
        
        .lang-btn:hover {
            background: rgba(255, 255, 255, 0.15);
        }
        
        /* Theme Toggle */
        .theme-toggle {
            padding: 8px;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            color: #e2e8f0;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-left: 8px;
        }
        
        .theme-toggle:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: scale(1.1);
        }
        
        /* Scroll Progress */
        .scroll-progress {
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #4f46e5, #7c3aed);
            z-index: 1000;
            transition: width 0.3s ease;
        }
        
        /* Light Theme */
        .light-theme {
            background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
            color: #1e293b;
        }
        
        .light-theme .content-area,
        .light-theme .sidebar-card {
            background: rgba(255, 255, 255, 0.8);
            border-color: rgba(0, 0, 0, 0.1);
        }
        
        .light-theme .input-area {
            background: rgba(255, 255, 255, 0.9);
            color: #1e293b;
            border-color: rgba(0, 0, 0, 0.2);
        }
        
        /* Validation Messages */
        .validation-message {
            margin-top: 8px;
            padding: 8px 12px;
            border-radius: 6px;
            font-size: 14px;
            opacity: 0;
            transform: translateY(-10px);
            transition: all 0.3s ease;
        }
        
        .validation-message.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .validation-message.warning {
            background: rgba(245, 158, 11, 0.1);
            border: 1px solid rgba(245, 158, 11, 0.3);
            color: #fcd34d;
        }
        
        .validation-message.danger {
            background: rgba(239, 68, 68, 0.1);
            border: 1px solid rgba(239, 68, 68, 0.3);
            color: #fca5a5;
        }
        
        /* Emergency Modal */
        .emergency-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
            transition: all 0.3s ease;
        }
        
        .emergency-modal.show {
            opacity: 1;
            visibility: visible;
        }
        
        .modal-content {
            background: #1a2332;
            border-radius: 16px;
            max-width: 500px;
            width: 90%;
            max-height: 80vh;
            overflow-y: auto;
            transform: scale(0.9);
            transition: transform 0.3s ease;
        }
        
        .emergency-modal.show .modal-content {
            transform: scale(1);
        }
        
        .modal-header {
            padding: 20px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .modal-header h3 {
            color: #ef4444;
            margin: 0;
        }
        
        .modal-close {
            background: none;
            border: none;
            color: #94a3b8;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        
        .modal-body {
            padding: 20px;
        }
        
        .helpline-info {
            text-align: center;
            margin-bottom: 20px;
        }
        
        .phone-number {
            font-size: 32px;
            font-weight: bold;
            color: #ef4444;
            margin: 10px 0;
        }
        
        .quick-actions-modal {
            display: flex;
            gap: 12px;
            margin-bottom: 20px;
        }
        
        .emergency-btn {
            flex: 1;
            padding: 12px;
            border-radius: 8px;
            text-decoration: none;
            text-align: center;
            font-weight: 600;
            transition: all 0.3s ease;
        }
        
        .call-btn {
            background: #ef4444;
            color: white;
        }
        
        .call-btn:hover {
            background: #dc2626;
            transform: translateY(-2px);
        }
        
        .report-btn.online {
            background: rgba(79, 70, 229, 0.2);
            color: #a5b4fc;
            border: 1px solid rgba(79, 70, 229, 0.4);
        }
        
        .emergency-steps ol {
            padding-left: 20px;
        }
        
        .emergency-steps li {
            margin-bottom: 8px;
            color: #cbd5e1;
        }
        
        /* Analysis Steps */
        .analysis-steps {
            display: flex;
            flex-direction: column;
            gap: 16px;
            padding: 20px;
        }
        
        .step {
            display: flex;
            align-items: center;
            gap: 12px;
            padding: 12px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.05);
            opacity: 0.5;
            transition: all 0.3s ease;
        }
        
        .step.active {
            opacity: 1;
            background: rgba(79, 70, 229, 0.2);
            border: 1px solid rgba(79, 70, 229, 0.4);
        }
        
        .step.completed {
            opacity: 0.8;
            background: rgba(16, 185, 129, 0.2);
            border: 1px solid rgba(16, 185, 129, 0.4);
        }
        
        .step-icon {
            font-size: 20px;
        }
        
        .step-text {
            font-weight: 500;
        }
        
        /* Enhanced Response Styles */
        .analysis-result {
            animation: slideInUp 0.5s ease;
        }
        
        @keyframes slideInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .risk-badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            border-radius: 20px;
            border: 1px solid;
            margin-bottom: 20px;
        }
        
        .action-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 12px;
            margin-top: 12px;
        }
        
        .action-item {
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 12px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .action-icon {
            font-size: 18px;
        }
        
        /* Notifications */
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #1a2332;
            border-radius: 8px;
            padding: 16px;
            border: 1px solid rgba(255, 255, 255, 0.1);
            z-index: 1000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 400px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 12px;
        }
        
        .notification-close {
            background: none;
            border: none;
            color: #94a3b8;
            cursor: pointer;
            margin-left: auto;
        }
        
        /* Ripple Effect */
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }

        /* Web results (internet search) */
        .web-results {
            margin-top: 20px;
            padding: 16px;
            border-radius: 12px;
            background: radial-gradient(circle at top left, rgba(59, 130, 246, 0.2), rgba(15, 23, 42, 0.9));
            border: 1px solid rgba(59, 130, 246, 0.4);
            box-shadow: 0 18px 40px rgba(15, 23, 42, 0.7);
        }

        .web-results-header {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 12px;
            font-size: 14px;
            color: #bfdbfe;
        }

        .web-results-icon {
            font-size: 16px;
        }

        .web-results-title {
            font-weight: 600;
        }

        .web-results-status {
            margin-left: auto;
            font-size: 12px;
            color: #93c5fd;
            opacity: 0.9;
        }

        .web-results-body {
            margin-top: 4px;
        }

        .web-result-item {
            padding: 10px 0;
            border-top: 1px solid rgba(148, 163, 184, 0.3);
        }

        .web-result-item:first-child {
            border-top: none;
        }

        .web-result-title {
            font-weight: 600;
            color: #e5e7eb;
            margin-bottom: 4px;
        }

        .web-result-snippet {
            font-size: 13px;
            color: #cbd5e1;
            line-height: 1.5;
            margin-bottom: 4px;
        }

        .web-result-link {
            font-size: 12px;
            color: #93c5fd;
            text-decoration: none;
        }

        .web-result-link:hover {
            text-decoration: underline;
        }

        .web-results-loading .web-skeleton-line {
            height: 8px;
            border-radius: 999px;
            background: linear-gradient(90deg, rgba(148, 163, 184, 0.2), rgba(148, 163, 184, 0.06), rgba(148, 163, 184, 0.2));
            margin-bottom: 8px;
            animation: skeleton-pulse 1.4s ease-in-out infinite;
        }

        .web-results-loading .web-skeleton-line.short {
            width: 60%;
        }

        .web-results-empty,
        .web-results-error {
            font-size: 13px;
            color: #e5e7eb;
        }

        @keyframes skeleton-pulse {
            0% { opacity: 0.4; }
            50% { opacity: 1; }
            100% { opacity: 0.4; }
        }
        
        /* Header Scroll Effect */
        .header.scrolled {
            background: rgba(15, 20, 25, 0.95);
            backdrop-filter: blur(10px);
        }
        
        /* Responsive Enhancements */
        @media (max-width: 768px) {
            .language-switcher {
                flex-direction: column;
                gap: 8px;
                margin-left: 0;
                margin-top: 12px;
            }
            
            .analysis-steps {
                padding: 16px;
            }
            
            .action-grid {
                grid-template-columns: 1fr;
            }
            
            .quick-actions-modal {
                flex-direction: column;
            }
        }
    `;

    document.head.appendChild(style);
}

// Inject enhanced styles when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectEnhancedStyles);
} else {
    injectEnhancedStyles();
}
