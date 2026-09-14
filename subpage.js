/* ==========================================
   Sub-page Shared JavaScript Component
   Noah Gunther Portfolio
   ========================================== */

(function () {
  'use strict';

  // Helper to get relative path to site root from any subfolder depth
  function getRootPath() {
    const path = window.location.pathname.replace(/\/index\.html$/i, '/');
    const segments = path.split('/').filter(Boolean);
    
    if (segments.length === 0) return './';
    
    let rootDepth = segments.length;
    const knownRootDirs = ['web', 'ar', 'games', 'houdini', 'about', 'fireworks'];
    for (let i = 0; i < segments.length; i++) {
      if (knownRootDirs.includes(segments[i].toLowerCase())) {
        rootDepth = segments.length - i;
        break;
      }
    }
    return '../'.repeat(rootDepth);
  }

  const rootPath = getRootPath();

  const CATEGORY_CONFIG = {
    ar: {
      label: 'AR Work',
      path: 'ar/index.html',
    },
    games: {
      label: 'Game Work',
      path: 'games/index.html',
    },
    web: {
      label: 'Web Projects',
      path: 'web/index.html',
    },
    houdini: {
      label: 'Houdini Work',
      path: 'houdini/index.html',
    },
    about: {
      label: 'About',
      path: 'about/index.html',
    },
  };

  // Determine current active category from window URL
  function getCurrentCategory() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/houdini')) return 'houdini';
    if (path.includes('/ar')) return 'ar';
    if (path.includes('/games')) return 'games';
    if (path.includes('/about')) return 'about';
    if (path.includes('/web') || path.includes('/fireworks')) return 'web';
    return '';
  }

  // Initialize navigation DOM elements
  function initNavigation() {
    injectNavigationHTML();
    setupActiveTab();
    setupMobileMenu();
    setupDynamicBackLink();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavigation);
  } else {
    initNavigation();
  }

  function injectNavigationHTML() {
    const currentCat = getCurrentCategory();
    const panelParam = currentCat ? `?panel=${currentCat}` : '';

    // 1. Create Subpage Header Nav Container if not present
    // Top right links order: About | AR | Games | Web | Houdini
    if (!document.getElementById('subpage-header-nav')) {
      const headerNav = document.createElement('div');
      headerNav.id = 'subpage-header-nav';
      headerNav.className = 'subpage-header-nav';
      headerNav.innerHTML = `
        <a id="home" class="logolink" href="${rootPath}index.html" aria-label="Noah Gunther Portfolio Home">
          <div id="logolink-icon" class="logo-tint-mask"></div>
        </a>
        <div id="mainnavlinks">
          <a id="about" class="link" href="${rootPath}about/index.html">About</a>
          <a id="ar" class="link" href="${rootPath}ar/index.html">AR</a>
          <a id="games" class="link" href="${rootPath}games/index.html">Games</a>
          <a id="web" class="link" href="${rootPath}web/index.html">Web</a>
          <a id="houdini" class="link" href="${rootPath}houdini/index.html">Houdini</a>
        </div>
      `;
      document.body.prepend(headerNav);
    }

    // 2. Desktop LinkedIn Icon
    if (!document.getElementById('linkedin-desktop-wrapper')) {
      const liWrapper = document.createElement('div');
      liWrapper.id = 'linkedin-desktop-wrapper';
      liWrapper.innerHTML = `
        <a id="linkedin-desktop" href="https://www.linkedin.com/in/noah-gunther-3128bb185/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
          <div id="linkedin-desktop-icon" class="logo-tint-mask"></div>
        </a>
      `;
      document.body.appendChild(liWrapper);
    }

    // 3. Mobile Hamburger Button & Menu Overlay
    if (!document.getElementById('mobilenavlinksbutton')) {
      const btn = document.createElement('div');
      btn.id = 'mobilenavlinksbutton';
      btn.innerHTML = `
        <div id="mobilenavlinksbuttontop"></div>
        <div id="mobilenavlinksbuttonmiddle"></div>
        <div id="mobilenavlinksbuttonbottom"></div>
      `;
      document.body.appendChild(btn);

      const mobileMenu = document.createElement('div');
      mobileMenu.id = 'mobilenavmenu';
      mobileMenu.innerHTML = `
        <div id="mobilenavbackgroundblur"></div>
        <div id="mobilenavlinks">
          <div class="mobilemenuwrapper">
            <div class="mobilelinkwrapper"><a id="aboutmobile" class="mobilelink" href="${rootPath}about/index.html">About</a></div>
            <div class="mobilelinkwrapper"><a id="armobile" class="mobilelink" href="${rootPath}ar/index.html">AR</a></div>
            <div class="mobilelinkwrapper"><a id="gamesmobile" class="mobilelink" href="${rootPath}games/index.html">Games</a></div>
            <div class="mobilelinkwrapper"><a id="webmobile" class="mobilelink" href="${rootPath}web/index.html">Web</a></div>
            <div class="mobilelinkwrapper"><a id="houdinimobile" class="mobilelink" href="${rootPath}houdini/index.html">Houdini</a></div>
            <div id="linkedin-mobile-wrapper">
              <a id="linkedin-mobile" href="https://www.linkedin.com/in/noah-gunther-3128bb185/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                <div id="linkedin-mobile-icon" class="logo-tint-mask"></div>
              </a>
            </div>
          </div>
        </div>
      `;
      document.body.appendChild(mobileMenu);
    }

  // Check if current page has an equivalent 3D panel (only top-level category pages, not sub-pages)
  function hasEquivalent3DPanel() {
    const cleanPath = window.location.pathname
      .toLowerCase()
      .replace(/\\/g, '/')
      .replace(/\/index\.html$/i, '')
      .replace(/\/$/, '');
    const segments = cleanPath.split('/').filter(Boolean);
    const topLevelPanels = ['about', 'ar', 'games', 'web', 'houdini'];
    const panelIndex = segments.findIndex(seg => topLevelPanels.includes(seg));
    if (panelIndex === -1) return false;
    return panelIndex === segments.length - 1;
  }

  // 4. Return to 3D Canvas Site Toggle Button (Matches #plaintext-link styling exactly, reads '3D')
  // Only available on pages with an equivalent 3D panel (like AR or Web, but not their sub-pages)
  const existing3DLink = document.getElementById('plaintext-toggle-link');
  if (hasEquivalent3DPanel()) {
    if (currentCat) {
      try {
        sessionStorage.setItem('ng_last_category', currentCat);
      } catch (e) {}
    }
    if (!existing3DLink) {
      const toggleLink = document.createElement('a');
      toggleLink.id = 'plaintext-toggle-link';
      toggleLink.href = `${rootPath}index.html${panelParam}`;
      toggleLink.innerHTML = '3D';
      document.body.appendChild(toggleLink);
    }
  } else if (existing3DLink) {
    existing3DLink.remove();
  }

    // Adjust logo mask image src according to rootPath
    const logoIcons = document.querySelectorAll('.logo-tint-mask');
    logoIcons.forEach(icon => {
      if (icon.id === 'logolink-icon') {
        icon.style.webkitMaskImage = `url('${rootPath}graphics/thumbnail_ng_logo.webp')`;
        icon.style.maskImage = `url('${rootPath}graphics/thumbnail_ng_logo.webp')`;
      } else if (icon.id === 'linkedin-desktop-icon' || icon.id === 'linkedin-mobile-icon') {
        icon.style.webkitMaskImage = `url('${rootPath}graphics/li_logo_white.webp')`;
        icon.style.maskImage = `url('${rootPath}graphics/li_logo_white.webp')`;
      }
    });
  }

  // Highlight active category tab based on current location
  function setupActiveTab() {
    const activeCategory = getCurrentCategory();
    if (activeCategory) {
      const desktopLink = document.getElementById(activeCategory);
      if (desktopLink) desktopLink.classList.add('is-active');

      const mobileLink = document.getElementById(activeCategory + 'mobile');
      if (mobileLink) mobileLink.classList.add('is-active');
    }
  }

  // Hamburger Menu Open/Close Handling
  function setupMobileMenu() {
    const btn = document.getElementById('mobilenavlinksbutton');
    const menu = document.getElementById('mobilenavmenu');
    if (!btn || !menu) return;

    let isOpen = false;

    function toggleMenu() {
      isOpen = !isOpen;
      if (isOpen) {
        menu.classList.add('is-active');
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    }

    btn.addEventListener('click', toggleMenu);

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu();
      }
    });
  }

  // ==========================================
  // DYNAMIC BACK LINK COMPONENT
  // ==========================================
  function setupDynamicBackLink() {
    const backLink = document.querySelector('.subpage-back-link');
    if (!backLink) return;

    let originCat = null;

    // 1. Check URL query parameter ?from=...
    try {
      const urlParams = new URLSearchParams(window.location.search);
      const fromParam = urlParams.get('from');
      if (fromParam && CATEGORY_CONFIG[fromParam.toLowerCase()]) {
        originCat = fromParam.toLowerCase();
      }
    } catch (e) {}

    // 2. Check document.referrer
    if (!originCat && document.referrer) {
      try {
        const ref = new URL(document.referrer);
        const isSameSite = ref.origin === window.location.origin ||
                           ref.hostname === window.location.hostname ||
                           ref.hostname.includes('noahgunther.com') ||
                           ref.hostname === 'localhost' ||
                           ref.hostname === '127.0.0.1';
        if (isSameSite) {
          // Check query param in referrer: ?panel=...
          const panelParam = ref.searchParams.get('panel');
          if (panelParam && CATEGORY_CONFIG[panelParam.toLowerCase()]) {
            originCat = panelParam.toLowerCase();
          }

          // Check referrer pathname segments
          if (!originCat) {
            const refSegments = ref.pathname.toLowerCase().split('/').filter(Boolean);
            for (let i = refSegments.length - 1; i >= 0; i--) {
              const seg = refSegments[i].replace(/\.html$/i, '');
              if (CATEGORY_CONFIG[seg]) {
                originCat = seg;
                break;
              }
            }
          }
        }
      } catch (e) {}
    }

    // 3. Fallback to sessionStorage if available
    if (!originCat) {
      try {
        const stored = sessionStorage.getItem('ng_last_category');
        if (stored && CATEGORY_CONFIG[stored]) {
          originCat = stored;
        }
      } catch (e) {}
    }

    // 4. Default to current page category
    if (!originCat) {
      const curCat = getCurrentCategory();
      if (curCat && CATEGORY_CONFIG[curCat]) {
        originCat = curCat;
      } else {
        originCat = 'ar';
      }
    }

    const config = CATEGORY_CONFIG[originCat];
    if (config) {
      const targetHref = `${rootPath}${config.path}`;
      backLink.href = targetHref;
      backLink.setAttribute('aria-label', `Back to ${config.label}`);
      backLink.innerHTML = `<span aria-hidden="true">←</span> Back to ${config.label}`;

      // Smart click handling: return via history.back() when referrer matches the target
      backLink.addEventListener('click', function (e) {
        if (document.referrer && window.history.length > 1) {
          try {
            const ref = new URL(document.referrer);
            const target = new URL(targetHref, window.location.href);
            const normRef = ref.pathname.replace(/\/index\.html$/i, '').replace(/\/$/, '');
            const normTarget = target.pathname.replace(/\/index\.html$/i, '').replace(/\/$/, '');
            if (normRef === normTarget) {
              e.preventDefault();
              window.history.back();
            }
          } catch (err) {}
        }
      });
    }
  }
})();
