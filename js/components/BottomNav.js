/**
 * ===== COMPONENTE: BOTTOM NAVIGATION BAR =====
 * Barra de navegación inferior para cambiar entre vistas del menú
 * Solo se muestra cuando navBar está habilitado en la configuración
 */

class BottomNav {
    constructor() {
        this.currentView = 'home'; // Vista por defecto
        this.views = restaurantConfig.views || {};
        this.element = null;
        this.buttons = [];
        this.onViewChange = null; // Callback para cuando cambia la vista
    }

    /**
     * Renderizar el componente
     */
    render() {
        // Crear contenedor de la barra
        const nav = document.createElement('nav');
        nav.className = 'bottom-nav';
        nav.setAttribute('role', 'navigation');
        nav.setAttribute('aria-label', 'Navegación de vistas del menú');

        // Crear botones para cada vista
        Object.values(this.views).forEach((view, index) => {
            const button = document.createElement('button');
            button.className = 'bottom-nav-btn';
            button.setAttribute('data-view', view.id);
            button.setAttribute('aria-label', view.description);

            // Primer botón activo por defecto
            if (index === 0) {
                button.classList.add('active');
                this.currentView = view.id;
            }

            button.innerHTML = `
                <span class="bottom-nav-icon">${view.icon}</span>
                <span class="bottom-nav-label">${view.label}</span>
            `;

            button.addEventListener('click', () => this.handleViewChange(view.id));

            nav.appendChild(button);
            this.buttons.push(button);
        });

        this.element = nav;
        return nav;
    }

    /**
     * Manejar cambio de vista
     */
    handleViewChange(viewId) {
        if (this.currentView === viewId) return;

        this.currentView = viewId;
        this.updateActiveButton(viewId);
        this.filterMenuSections(viewId);

        // Resetear búsqueda si existe
        const searchInput = document.getElementById('menuSearch');
        if (searchInput && searchInput.value) {
            searchInput.value = '';
            const clearButton = document.getElementById('clearSearch');
            if (clearButton) {
                clearButton.style.display = 'none';
            }
            if (window.menuSearch) {
                window.menuSearch.resetSearch();
            }
        }

        // Llamar callback si existe
        if (this.onViewChange && typeof this.onViewChange === 'function') {
            this.onViewChange(viewId);
        }

        // Scroll al inicio
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /**
     * Actualizar botón activo
     */
    updateActiveButton(activeViewId) {
        this.buttons.forEach(button => {
            const viewId = button.getAttribute('data-view');
            if (viewId === activeViewId) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    /**
     * Filtrar secciones del menú según la vista activa
     */
    filterMenuSections(viewId) {
        const view = this.views[viewId];
        if (!view) return;

        const allowedSections = view.sections || [];
        const allSections = document.querySelectorAll('.menu-section');
        const navButtons = document.querySelectorAll('.nav-btn');

        // Filtrar secciones del menú
        allSections.forEach(section => {
            const sectionId = section.id;
            if (allowedSections.includes(sectionId)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });

        // Filtrar botones de navegación superior
        navButtons.forEach(button => {
            const sectionId = button.getAttribute('data-section');
            if (allowedSections.includes(sectionId)) {
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        });

        // Activar la primera sección visible
        const firstVisibleSection = Array.from(allSections).find(section =>
            allowedSections.includes(section.id)
        );

        if (firstVisibleSection) {
            const firstVisibleButton = Array.from(navButtons).find(button =>
                button.getAttribute('data-section') === firstVisibleSection.id
            );

            if (firstVisibleButton) {
                // Remover active de todos los botones
                navButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.setAttribute('aria-pressed', 'false');
                });

                // Activar el primer botón visible
                firstVisibleButton.classList.add('active');
                firstVisibleButton.setAttribute('aria-pressed', 'true');
            }
        }
    }

    /**
     * Obtener vista actual
     */
    getCurrentView() {
        return this.currentView;
    }

    /**
     * Establecer callback para cambio de vista
     */
    setOnViewChange(callback) {
        this.onViewChange = callback;
    }

    /**
     * Montar el componente en el DOM
     */
    mount() {
        if (!this.element) {
            this.render();
        }

        document.body.appendChild(this.element);

        // Agregar padding al body para compensar la altura de la barra
        document.body.style.paddingBottom = '70px';

        // Aplicar filtro inicial
        this.filterMenuSections(this.currentView);
    }

    /**
     * Desmontar el componente del DOM
     */
    unmount() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }

        // Remover padding del body
        document.body.style.paddingBottom = '0';

        // Mostrar todas las secciones nuevamente
        const allSections = document.querySelectorAll('.menu-section');
        const navButtons = document.querySelectorAll('.nav-btn');

        allSections.forEach(section => {
            section.style.display = 'block';
        });

        navButtons.forEach(button => {
            button.style.display = 'inline-block';
        });
    }

    /**
     * Destruir el componente
     */
    destroy() {
        this.unmount();
        this.element = null;
        this.buttons = [];
        this.currentView = 'home';
        this.onViewChange = null;
    }
}

// Exportar
if (typeof window !== 'undefined') {
    window.BottomNav = BottomNav;
}
