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
    const knownRootDirs = ['web', 'ar', 'games', 'houdini', 'about'];
    for (let i = 0; i < segments.length; i++) {
      if (knownRootDirs.includes(segments[i].toLowerCase())) {
        rootDepth = segments.length - i;
        break;
      }
    }
    return '../'.repeat(rootDepth);
  }

  const rootPath = getRootPath();

  // Determine current active category from window URL
  function getCurrentCategory() {
    const path = window.location.pathname.toLowerCase();
    if (path.includes('/web')) return 'web';
    if (path.includes('/ar')) return 'ar';
    if (path.includes('/games')) return 'games';
    if (path.includes('/houdini')) return 'houdini';
    if (path.includes('/about')) return 'about';
    return '';
  }

  // Initialize navigation DOM elements on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', function () {
    injectNavigationHTML();
    setupActiveTab();
    setupMobileMenu();
  });

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

    // 4. Return to 3D Canvas Site Toggle Button (Matches #plaintext-link styling exactly, reads '3D')
    if (!document.getElementById('plaintext-toggle-link')) {
      const toggleLink = document.createElement('a');
      toggleLink.id = 'plaintext-toggle-link';
      toggleLink.href = `${rootPath}index.html${panelParam}`;
      toggleLink.innerHTML = '3D';
      document.body.appendChild(toggleLink);
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
})();
