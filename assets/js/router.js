// Nichirin Control Card Admin Portal Mockups - HTML5 History Routing System
(function() {
  
  // Known subdirectory modules in the portal
  const SUBFOLDERS = [
    'dashboard', 'work-orders', 'work-order-detail', 'supervisor-planning', 'qc-pending-approvals',
    'breakdown-rework', 'control-card-templates', 'workflow-configuration',
    'process-master', 'bom-picking-master', 'control-point-master',
    'standard-tolerance-master', 'method-master', 'qc-rules', 'qr-label-management',
    'traceability-search', 'production-reports', 'qc-reports', 'breakdown-reports',
    'sap-sync-reports', 'audit-reports', 'user-management', 'role-management', 
    'skill-management', 'machine-management', 'device-management',
    'csv-import', 'sap-logs', 'sap-field-mapping', 'notification-configuration',
    'system-settings', 'login-old', 'admin-prototype'
  ];

  // Helper to determine relative path depth prefix ('./' or '../')
  function getRelativePrefix() {
    const path = window.location.pathname;
    const isSub = SUBFOLDERS.some(folder => path.includes('/' + folder + '/'));
    return isSub ? '../' : './';
  }

  // Detect the currently active folder name route
  function getCurrentRoute() {
    const path = window.location.pathname;
    const activeFolder = SUBFOLDERS.find(folder => path.includes('/' + folder + '/'));
    return activeFolder || 'login-old';
  }

  // Spinner loader HTML templates are now dynamically rendered at the body level

  // Dynamically update link pathways and assets on layout when traversing directories
  function updateLayoutRelativePaths(relPrefix) {
    // Update Sidebar Logo
    const logoImg = document.querySelector('aside img');
    if (logoImg) {
      logoImg.src = relPrefix + 'assets/logo.png';
    }
    const logoLink = document.querySelector('aside a');
    if (logoLink) {
      logoLink.setAttribute('href', relPrefix + 'work-orders/index.html');
    }

    // Update all nav items href paths based on new relative prefix
    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
      const dataRoute = item.getAttribute('data-route');
      if (dataRoute) {
        item.setAttribute('href', relPrefix + dataRoute + '/index.html');
      }
    });

    // Update logout button path
    const logoutBtn = document.querySelector('#logout-btn');
    if (logoutBtn) {
      logoutBtn.setAttribute('href', relPrefix + 'login-old/index.html');
    }
  }

  // Render the structural layout wrapper
  function setupAppLayout(relPrefix) {
    const root = document.getElementById('app-root');
    root.className = "bg-background text-on-background selection:bg-secondary-container selection:text-on-secondary-container";
    
    const SIDEBAR_HTML = `
      <aside class="fixed top-0 left-0 h-full w-[260px] bg-white text-on-surface border-r border-outline-variant/30 flex flex-col z-50 -translate-x-full lg:translate-x-0 transition-transform duration-300 select-none">
        <div class="h-[64px] px-6 border-b border-outline-variant/30 bg-white flex items-center justify-center relative select-none flex-shrink-0">
          <a class="flex items-center justify-center gap-2" href="${relPrefix}work-orders/index.html">
            <img src="${relPrefix}assets/logo.png" class="h-10 w-auto object-contain select-none" alt="NICHIRIN Logo" />
          </a>
          <button class="sidebar-close-btn absolute right-4 top-1/2 -translate-y-1/2 lg:hidden text-on-surface-variant hover:text-primary" aria-label="Close Sidebar">
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>
        
        <nav class="flex-grow overflow-y-auto custom-scrollbar space-y-1 px-3 mb-4">
          <!-- OPERATIONS SECTION -->
          <div class="space-y-1">
            <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-4 pt-4 pb-2 select-none">Operations</p>
            
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}work-orders/index.html" data-route="work-orders">
              <span class="material-symbols-outlined text-[20px]">precision_manufacturing</span>
              <span>Work Order</span>
            </a>
            
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}supervisor-planning/index.html" data-route="supervisor-planning">
              <span class="material-symbols-outlined text-[20px]">edit_calendar</span>
              <span>Supervisor Planning</span>
            </a>
            
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}qc-pending-approvals/index.html" data-route="qc-pending-approvals">
              <span class="material-symbols-outlined text-[20px]">fact_check</span>
              <span>QC Pending Approvals</span>
            </a>
          </div>
  
          <!-- TRACEABILITY & REPORTS SECTION -->
          <div class="space-y-1 pt-2">
            <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-4 pt-5 pb-2 select-none">Traceability &amp; Reports</p>
            
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}traceability-search/index.html" data-route="traceability-search">
              <span class="material-symbols-outlined text-[20px]">manage_search</span>
              <span>Traceability Search</span>
            </a>
            
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}qc-reports/index.html" data-route="qc-reports">
              <span class="material-symbols-outlined text-[20px]">assignment</span>
              <span>QC Reports</span>
            </a>
  
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}audit-reports/index.html" data-route="audit-reports">
              <span class="material-symbols-outlined text-[20px]">menu_book</span>
              <span>Audit Reports</span>
            </a>
          </div>
  
          <!-- MASTER CONFIGURATION SECTION -->
          <div class="space-y-1 pt-2">
            <p class="text-[11px] font-bold text-slate-500 uppercase tracking-widest px-4 pt-5 pb-2 select-none">Master Configuration</p>
            

            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}user-management/index.html" data-route="user-management">
              <span class="material-symbols-outlined text-[20px]">person</span>
              <span>User Management</span>
            </a>
            
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}role-management/index.html" data-route="role-management">
              <span class="material-symbols-outlined text-[20px]">security</span>
              <span>Role Management</span>
            </a>

            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}skill-management/index.html" data-route="skill-management">
              <span class="material-symbols-outlined text-[20px]">badge</span>
              <span>Skill Management</span>
            </a>

            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}machine-management/index.html" data-route="machine-management">
              <span class="material-symbols-outlined text-[20px]">factory</span>
              <span>Machine Management</span>
            </a>
            <a class="nav-item flex items-center gap-3 px-4 py-2.5 rounded-xl text-on-surface-variant hover:bg-surface-container-high hover:text-primary transition-all duration-200 font-body-md text-body-md" href="${relPrefix}system-settings/index.html" data-route="system-settings">
              <span class="material-symbols-outlined text-[20px]">settings</span>
              <span>System Settings</span>
            </a>
          </div>
        </nav>
        
        <div class="px-3 mt-auto border-t border-outline-variant/30 pt-4 pb-4 flex-shrink-0 flex gap-2">
          <a href="#" class="flex items-center justify-center gap-1.5 px-3 py-2 border border-slate-200 rounded-xl text-slate-700 hover:bg-slate-50 transition-colors font-semibold text-xs flex-1">
            <span class="material-symbols-outlined text-[16px] text-slate-600">help</span>
            <span>Support</span>
          </a>
          <a id="logout-btn" href="${relPrefix}login-old/index.html" class="flex items-center justify-center gap-1.5 px-3 py-2 border border-primary/20 bg-primary/5 text-primary hover:bg-primary hover:text-white hover:border-transparent rounded-xl transition-colors font-semibold text-xs flex-1">
            <span class="material-symbols-outlined text-[16px]">logout</span>
            <span>Sign Out</span>
          </a>
        </div>
      </aside>
    `;

    const HEADER_HTML = `
      <header class="fixed top-0 right-0 h-[64px] w-full lg:w-[calc(100%-260px)] px-6 bg-white dark:bg-surface border-b border-outline-variant/30 flex items-center justify-between z-40 transition-all duration-300 rounded-none shadow-sm select-none">
        <div class="flex items-center gap-4">
          <button class="sidebar-toggle-btn flex items-center justify-center w-10 h-10 text-on-surface-variant hover:text-primary rounded-xl transition-colors" aria-label="Toggle Sidebar">
            <span class="material-symbols-outlined">menu</span>
          </button>
          <span class="text-lg sm:text-xl font-black text-primary select-none tracking-tight leading-none">Control Card Digitization System</span>
        </div>
        
        <div class="flex items-center gap-4 flex-wrap sm:flex-nowrap" id="main-header-right">
          <button class="relative text-on-surface-variant hover:text-primary transition-colors p-2 rounded">
            <span class="material-symbols-outlined">notifications</span>
            <span class="absolute top-1 right-1 w-2 h-2 bg-error rounded-full"></span>
          </button>
          
          <div class="flex items-center gap-2 ml-2 pl-4 border-l border-outline-variant/30">
            <div class="text-right hidden sm:block">
              <p class="font-label-bold text-label-bold leading-none text-primary dark:text-red-500">Vikram Malhotra</p>
              <p class="text-[10px] text-on-surface-variant uppercase mt-0.5 font-bold">Site Admin</p>
            </div>
            <span class="material-symbols-outlined text-primary dark:text-red-500 text-[32px] select-none">account_circle</span>
          </div>
        </div>
      </header>
    `;

    root.innerHTML = `
      <div class="flex h-screen overflow-hidden">
        ${SIDEBAR_HTML}
        <div class="flex-1 flex flex-col h-full overflow-hidden bg-surface relative">
          ${HEADER_HTML}
          <main id="main-wrapper" class="flex-grow ml-0 lg:ml-[260px] pt-[64px] h-screen overflow-y-auto bg-background transition-all duration-300 relative">
            <div id="app-content" class="pt-1 px-6 pb-6 flex flex-col gap-6">
              <!-- Content loaded via AJAX goes here -->
            </div>
          </main>
        </div>
      </div>
      <div id="content-loader" class="fixed inset-0 z-[100] bg-background/80 dark:bg-background/90 backdrop-blur-sm flex items-center justify-center transition-all duration-200 pointer-events-none opacity-0">
        <div class="flex items-center justify-center gap-2">
          <!-- Bouncing dots with staggered animations in brand red -->
          <div class="w-4 h-4 bg-primary rounded-full animate-bounce" style="animation-delay: 0.1s; animation-duration: 0.8s;"></div>
          <div class="w-4 h-4 bg-primary rounded-full animate-bounce" style="animation-delay: 0.2s; animation-duration: 0.8s;"></div>
          <div class="w-4 h-4 bg-primary rounded-full animate-bounce" style="animation-delay: 0.3s; animation-duration: 0.8s;"></div>
        </div>
      </div>
    `;

    // Bind event handlers for template sidebar
    const sidebar = root.querySelector('aside');
    const toggleBtn = root.querySelector('.sidebar-toggle-btn');
    const closeBtn = root.querySelector('.sidebar-close-btn');

    if (toggleBtn && sidebar) {
      toggleBtn.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          sidebar.classList.remove('-translate-x-full');
        } else {
          const mainWrapper = root.querySelector('#main-wrapper');
          const header = root.querySelector('header');
          
          sidebar.classList.toggle('sidebar-collapsed');
          if (mainWrapper) mainWrapper.classList.toggle('main-collapsed');
          if (header) header.classList.toggle('header-collapsed');
        }
      });
    }

    if (closeBtn && sidebar) {
      closeBtn.addEventListener('click', () => {
        sidebar.classList.add('-translate-x-full');
      });
    }

    // Bind theme toggler
    const themeToggles = root.querySelectorAll('.theme-toggle');
    themeToggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        if (document.documentElement.classList.contains('dark')) {
          document.documentElement.classList.remove('dark');
          localStorage.setItem('theme', 'light');
        } else {
          document.documentElement.classList.add('dark');
          localStorage.setItem('theme', 'dark');
        }
      });
    });

    // Bind logout button
    const logoutBtn = root.querySelector('#logout-btn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        localStorage.removeItem('loggedIn');
        window.history.pushState(null, '', relPrefix + 'login-old/index.html');
        loadRoute();
      });
    }
  }

  // Highlights active menu items in sidebar template
  function updateActiveNavItem(route) {
    // Map sub-routes to parent sidebar routes
    const routeMapping = {
      'work-order-detail': 'work-orders',
      'offline-prep-validation': 'work-orders',
      'offline-prep-validation-canvas': 'work-orders',
      'online-assembly-validation': 'work-orders',
      'online-assembly-validation-canvas': 'work-orders',
      'qc-approval-validation': 'work-orders',
      'qc-approval-validation-canvas': 'work-orders',
      'rework-process-validation': 'work-orders',
      'advanced-process-validation': 'work-orders',
      'workflow-canvas-overview': 'workflow-configuration',
      'workflow-stage-overview': 'workflow-configuration',
      'advanced-workflow-configuration': 'workflow-configuration',
      'stage-step-configuration': 'workflow-configuration',
      'step-configuration-offline-prep': 'workflow-configuration',
      'step-configuration-picking': 'workflow-configuration',
      'control-card-templates': 'workflow-configuration',
      'process-master': 'workflow-configuration',
      'bom-picking-master': 'workflow-configuration',
      'control-point-master': 'workflow-configuration',
      'standard-tolerance-master': 'workflow-configuration',
      'method-master': 'workflow-configuration'
    };

    const activeRoute = routeMapping[route] || route;

    const items = document.querySelectorAll('.nav-item');
    items.forEach(item => {
      const dataRoute = item.getAttribute('data-route');
      if (dataRoute && activeRoute === dataRoute) {
        item.classList.add('sidebar-active');
      } else {
        item.classList.remove('sidebar-active');
      }
    });
  }

  // Clean padding helper
  function stripPadding(el) {
    if (!el) return;
    el.className = el.className.split(' ').filter(cls => {
      return !/^(p-(?:6|5|8|container-padding))$/.test(cls);
    }).join(' ');
  }

  // Load a route's content dynamically
  async function loadRoute() {
    const isUserLoggedIn = localStorage.getItem('loggedIn') === 'true';
    const path = window.location.pathname;
    const relPrefix = getRelativePrefix();
    let route = getCurrentRoute();
    if (route === 'device-management') {
      window.history.replaceState(null, '', relPrefix + 'machine-management/index.html');
      route = 'machine-management';
    }

    // Force login if not authenticated
    if (!isUserLoggedIn && route !== 'login-old') {
      window.history.replaceState(null, '', relPrefix + 'login-old/index.html');
      loadRoute();
      return;
    }

    if (isUserLoggedIn && (route === 'login-old' || (path.endsWith('index.html') && !SUBFOLDERS.some(f => path.includes('/' + f + '/'))))) {
      // Redirect authenticated root users directly to work-orders
      window.history.replaceState(null, '', relPrefix + 'work-orders/index.html');
      loadRoute();
      return;
    }

    // Viewport containers
    const root = document.getElementById('app-root');
    
    // Case 1: Render Login view directly into root (without sidebar and header)
    if (route === 'login-old' || !isUserLoggedIn) {
      root.innerHTML = '';
      root.className = "bg-background text-on-surface h-screen overflow-hidden flex flex-col justify-center items-center p-4 sm:p-6 industrial-pattern";
      
      try {
        const loginUrl = relPrefix + 'login-old/index.html';
        const response = await fetch(loginUrl);
        if (!response.ok) throw new Error('Failed to load login card.');
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        
        // Extract the login card and inject it
        const loginCard = doc.querySelector('main > div') || doc.body.firstElementChild;
        if (loginCard) {
          root.appendChild(loginCard);
        } else {
          root.innerHTML = html;
        }

        // Apply page-specific dynamic stylesheet config (login layout adjustments)
        const styles = doc.querySelectorAll('style');
        styles.forEach(style => {
          const s = document.createElement('style');
          s.setAttribute('data-dynamic-style', 'true');
          s.textContent = style.textContent;
          document.head.appendChild(s);
        });

      } catch (err) {
        root.innerHTML = `
          <div class="bg-white p-8 rounded border border-outline-variant text-center max-w-sm">
            <h1 class="text-xl font-bold text-error mb-2">Service Offline</h1>
            <p class="text-on-surface-variant text-sm mb-4">Could not load login interface details.</p>
            <button onclick="localStorage.setItem('loggedIn', 'true'); window.location.href='./work-orders/index.html';" class="px-4 py-2 bg-primary text-on-primary font-bold">Bypass Authorization</button>
          </div>
        `;
      }
      return;
    }

    // Case 2: Render authenticated layout template if not present yet
    if (!document.getElementById('main-wrapper')) {
      setupAppLayout(relPrefix);
    } else {
      updateLayoutRelativePaths(relPrefix);
    }

    // Show loading spinner overlay inside viewport
    const loader = document.getElementById('content-loader');
    const content = document.getElementById('app-content');
    if (loader) {
      loader.classList.remove('pointer-events-none');
      loader.classList.add('opacity-100');
    }

    try {
      const response = await fetch(window.location.href);
      if (!response.ok) throw new Error(`Could not access module: ${route}`);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');

      // Update sidebar nav active state
      updateActiveNavItem(route);

      // Adjust wrapper height and scrolling for canvas-based views dynamically
      const mainWrapper = root.querySelector('#main-wrapper');
      if (route === 'workflow-configuration' || route === 'workflow-canvas-overview' || route === 'workflow-stage-overview' || route.includes('-canvas')) {
        content.className = "pt-1 px-6 pb-6 h-full overflow-hidden flex flex-col gap-6";
        if (mainWrapper) {
          mainWrapper.classList.remove('overflow-y-auto');
          mainWrapper.classList.add('overflow-hidden');
        }
      } else {
        content.className = "pt-1 px-6 pb-6 flex flex-col gap-6";
        if (mainWrapper) {
          mainWrapper.classList.remove('overflow-hidden');
          mainWrapper.classList.add('overflow-y-auto');
        }
      }

      // Clean up previous dynamically added styling rules
      document.querySelectorAll('style[data-dynamic-style]').forEach(el => el.remove());

      // Inject custom stylesheets from page head
      const styles = doc.querySelectorAll('style');
      styles.forEach(style => {
        const s = document.createElement('style');
        s.setAttribute('data-dynamic-style', 'true');
        s.textContent = style.textContent;
        document.head.appendChild(s);
      });

      // Render static header title "Control Card Digitization System" next to hamburger button
      const mainHeaderLeft = document.querySelector('header > div:first-child');
      if (mainHeaderLeft) {
        const menuBtn = mainHeaderLeft.querySelector('.sidebar-toggle-btn');
        mainHeaderLeft.innerHTML = '';
        if (menuBtn) {
          mainHeaderLeft.appendChild(menuBtn);
        }
        const defaultTitle = document.createElement('span');
        defaultTitle.className = 'text-lg sm:text-xl font-black text-primary select-none tracking-tight leading-none';
        defaultTitle.textContent = 'Control Card Digitization System';
        mainHeaderLeft.appendChild(defaultTitle);
      }

      // Merge custom header contents (badges) into the shell layout header dynamically
      const subHeader = doc.querySelector('header');
      if (subHeader) {
        // Merge right-side badge content (e.g. status badges like "Production")
        const rightContent = subHeader.lastElementChild;
        const mainHeaderRight = document.getElementById('main-header-right') || document.querySelector('header > div:last-child');
        if (rightContent && mainHeaderRight) {
          // Remove any previously injected custom badges to prevent accumulation
          const existingBadge = mainHeaderRight.querySelector('.custom-header-badge');
          if (existingBadge) {
            existingBadge.remove();
          }

          // Scan subheader right elements for status badges (such as "Production" badge)
          let badge = null;
          Array.from(rightContent.children).forEach(child => {
            const text = child.textContent.trim().toLowerCase();
            if (text === 'production' && !child.querySelector('img') && !child.querySelector('[data-icon="notifications"]')) {
              badge = child.cloneNode(true);
            }
          });

          if (badge) {
            badge.classList.add('custom-header-badge');
            // Insert badge before notifications button
            mainHeaderRight.insertBefore(badge, mainHeaderRight.firstElementChild);
          }
        }
        subHeader.remove();
      } else {
        const mainHeaderRight = document.getElementById('main-header-right') || document.querySelector('header > div:last-child');
        if (mainHeaderRight) {
          const existingBadge = mainHeaderRight.querySelector('.custom-header-badge');
          if (existingBadge) {
            existingBadge.remove();
          }
        }
      }

      // Extract and inject page core body content
      const main = doc.querySelector('main');
      let targetHtml = '';
      if (main) {
        main.classList.remove('ml-[260px]', 'pt-[64px]', 'h-screen');
        stripPadding(main);
        if (main.firstElementChild) {
          stripPadding(main.firstElementChild);
        }
        targetHtml = main.innerHTML;
      } else {
        const children = Array.from(doc.body.children);
        const coreEl = children.find(el => el.tagName !== 'HEADER' && el.tagName !== 'ASIDE' && el.tagName !== 'NAV' && el.tagName !== 'SCRIPT' && el.tagName !== 'STYLE');
        if (coreEl) {
          stripPadding(coreEl);
          if (coreEl.firstElementChild) {
            stripPadding(coreEl.firstElementChild);
          }
          targetHtml = coreEl.innerHTML;
        } else {
          targetHtml = doc.body.innerHTML;
        }
      }

      content.innerHTML = targetHtml;

      // Extract and execute page-specific JavaScript code (like charts or modals initialization)
      const scripts = doc.querySelectorAll('script');
      scripts.forEach(script => {
        if (script.id === 'tailwind-config') return;
        const s = document.createElement('script');
        s.setAttribute('data-dynamic-script', 'true');
        if (script.src) {
          s.src = script.src;
        } else {
          s.textContent = script.textContent;
        }
        document.body.appendChild(s);
        s.remove();
      });

      const pageTitle = doc.querySelector('title');
      if (pageTitle) {
        document.title = pageTitle.textContent;
      }

      const mobileSidebar = document.querySelector('aside');
      if (mobileSidebar && !mobileSidebar.classList.contains('-translate-x-full')) {
        mobileSidebar.classList.add('-translate-x-full');
      }

    } catch (err) {
      content.innerHTML = `
        <div class="bg-white dark:bg-surface-container border border-outline-variant/30 p-12 text-center rounded-2xl max-w-xl mx-auto shadow-sm">
          <span class="material-symbols-outlined text-[64px] text-primary mb-4 animate-bounce">engineering</span>
          <h2 class="font-headline-lg text-headline-lg text-primary mb-2">Module Under Construction</h2>
          <p class="font-body-md text-on-surface-variant mb-6 leading-relaxed">
            The page <strong>"${route}"</strong> is loaded as a placeholder or lacks dynamic HTML content mockup. 
          </p>
          <a href="${relPrefix}work-orders/index.html" class="px-6 py-2.5 bg-primary text-on-primary hover:opacity-90 transition-all font-label-bold text-label-bold rounded-xl shadow-sm cursor-pointer">
            RETURN TO WORK ORDERS
          </a>
        </div>
      `;
    } finally {
      setTimeout(() => {
        if (loader) {
          loader.classList.add('pointer-events-none');
          loader.classList.remove('opacity-100');
        }
      }, 300);
    }
  }

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    loadRoute();
  });

  // Handle initial page load
  window.addEventListener('DOMContentLoaded', () => {
    
    // Check if redirect query parameter exists from direct folder refresh
    const urlParams = new URLSearchParams(window.location.search);
    const targetRoute = urlParams.get('route');
    if (targetRoute) {
      // Replace the search query URL with the clean History route path
      window.history.replaceState(null, '', targetRoute);
    }

    // Intercept standard link navigation if needed to parse History paths
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a');
      if (!link) return;
      const href = link.getAttribute('href');
      
      // If href is just "#", prevent default
      if (href === '#') {
        e.preventDefault();
        return;
      }
      
      // Intercept local mockup HTML links to handle via History SPA pushState
      if (href && !href.startsWith('http') && !href.startsWith('javascript:')) {
        const urlWithoutQuery = href.split('?')[0];
        if (urlWithoutQuery.endsWith('index.html')) {
          e.preventDefault();
          window.history.pushState(null, '', href);
          loadRoute();
        }
      }
    });

    // Intercept login button click directly for bulletproof SPA transitions
    document.addEventListener('click', (e) => {
      const btn = e.target.closest('button[type="submit"]');
      if (btn && btn.closest('form') && (btn.textContent.includes('AUTHORIZE ACCESS') || btn.closest('form').querySelector('input[type="password"]'))) {
        if (localStorage.getItem('loggedIn') === 'true') return;
        e.preventDefault();
        const relPrefix = getRelativePrefix();
        const orig = btn.innerHTML;
        btn.innerHTML = `
          <span class="animate-spin material-symbols-outlined text-[18px]">sync</span>
          <span>SIGNING IN...</span>
        `;
        btn.disabled = true;
        setTimeout(() => {
          localStorage.setItem('loggedIn', 'true');
          btn.innerHTML = orig;
          btn.disabled = false;
          window.history.pushState(null, '', relPrefix + 'work-orders/index.html');
          loadRoute();
        }, 800);
      }
    });

    // Form submission handlers (interception for auth logic)
    document.addEventListener('submit', (e) => {
      const form = e.target;
      if (form) {
        const isSignIn = form.querySelector('input[type="password"]') || form.id === 'login-form';
        if (isSignIn) {
          e.preventDefault();
          const relPrefix = getRelativePrefix();
          const submitBtn = form.querySelector('button[type="submit"]');
          if (submitBtn) {
            const orig = submitBtn.innerHTML;
            submitBtn.innerHTML = `
              <span class="animate-spin material-symbols-outlined text-[18px]">sync</span>
              <span>SIGNING IN...</span>
            `;
            submitBtn.disabled = true;
            setTimeout(() => {
              localStorage.setItem('loggedIn', 'true');
              submitBtn.innerHTML = orig;
              submitBtn.disabled = false;
              window.history.pushState(null, '', relPrefix + 'work-orders/index.html');
              loadRoute();
            }, 800);
          }
        }
      }
    });

    // Trigger initial route match
    loadRoute();
  });
})();
