const restaurantConfig = {
    // ===== CONFIGURACIÓN DEL CARRITO DE COMPRAS =====
    // Cambia este valor a 1 para activar el carrito de compras
    // Cambia este valor a 0 para desactivar el carrito de compras
    cartEnabled: 1, // 1 = activado, 0 = desactivado

    // ===== CONFIGURACIÓN DE BARRA DE NAVEGACIÓN =====
    // Cambia este valor a 1 para activar la barra de navegación de vistas
    // Cambia este valor a 0 para desactivar la barra de navegación
    navBar: 1, // 1 = activado, 0 = desactivado

    // ===== CONFIGURACIÓN DE VISTAS =====
    // Define qué secciones del menú se muestran en cada vista
    views: {
        home: {
            id: "home",
            label: "Menú",
            icon: "🍔",
            description: "Menú completo de sandwiches y comidas",
            sections: ["milanesas", "lomitos", "hamburguesas", "papas", "milanesas-al-plato", "agregados"]
        },
        pedidos: {
            id: "pedidos",
            label: "Pedidos",
            icon: "🛍️",
            description: "Para llevar o delivery",
            sections: ["milanesas", "lomitos", "hamburguesas", "papas"]
        },
        platos: {
            id: "platos",
            label: "Platos",
            icon: "🍽️",
            description: "Platos del día",
            sections: ["milanesas-al-plato", "papas"]
        }
    },

    info: {
        name: "LO DE BAUTY",
        location: "SANDWICHERIA",
        subtitle: "🍔🍟 SANDWICHES Y COMIDAS CASERAS 🍔🍟",
        since: "2021",
        description: "Sandwicheria con las mejores milanesas, lomitos y hamburguesas caseras. ¡Hacemos delivery!",
        keywords: "sandwicheria, milanesas, lomitos, hamburguesas, delivery, comida casera",
        paymentInfo: "⚠️ RECIBIMOS TRANSFERENCIA CON EL 10% DE INTERES...!\nAlias: lodebauty.2021",
        social: {
            instagram: {
                url: "https://instagram.com/lodebauty",
                handle: "@lodebauty"
            },
            whatsapp: {
                number: "5493514000000",
                message: "Hola! Me interesa hacer un pedido: "
            }
        },
        images: {
            logo: "img/logo.png",
            favicon: "img/favicon.svg",
            decorationLeft: "img/dibujo2.png",
            decorationRight: "img/dibujo1.png"
        },
        theme: {
            primaryColor: "#FF6B35", // Naranja vibrante - energía de sandwicheria
            backgroundColor: "#FFF8DC", // Crema suave - tono pan/trigo
            textColor: "#2C1810", // Marrón oscuro - profesional y cálido
            accentColor: "#FFD23F", // Amarillo dorado - queso y mostaza
            secondaryColor: "#E63946", // Rojo vibrante - tomate y ketchup
            fonts: {
                heading: "'Courier New', Courier, monospace",
                body: "'Courier New', Courier, monospace"
            }
        }
    },
    menuSections: [
        {
            id: "milanesas",
            title: "Milanesas",
            items: [
                "mila-comun",
                "mila-comun-con-papas",
                "mila-especial-con-papas"
            ]
        },
        {
            id: "lomitos",
            title: "Lomitos",
            items: [
                "lomito-comun",
                "lomito-comun-con-papas",
                "lomito-especial-con-papas"
            ]
        },
        {
            id: "hamburguesas",
            title: "Hamburguesas",
            items: [
                "simple-burger",
                "simple-burger-con-papas",
                "special-burger",
                "house-burger",
                "triple-burger",
                "bacon-burger",
                "bauty-burger"
            ]
        },
        {
            id: "papas",
            title: "Papas",
            items: [
                "papas-fritas-chica",
                "papas-fritas-grande",
                "papas-cheddar",
                "papas-gratinadas",
                "papas-bauty",
                "conitos-de-papas"
            ]
        },
        {
            id: "milanesas-al-plato",
            title: "Milanesas al Plato",
            items: [
                "mila-al-plato-p1",
                "mila-al-plato-p2",
                "mila-a-caballo-p1",
                "mila-a-caballo-p2",
                "mila-bauty-p1",
                "mila-bauty-p2",
                "napo-p1",
                "napo-p2"
            ]
        },
        {
            id: "agregados",
            title: "Agregados",
            items: [
                "agregado-queso-huevo-jamon",
                "agregado-cheddar"
            ]
        }
    ],
    items: {
        // MILANESAS
        "mila-comun": {
            name: "Mila Común",
            price: "5.500",
            description: "Milanesa clásica en pan",
            ingredients: ["Milanesa de ternera", "Pan"],
            type: "Milanesa",
            icon: "🥩"
        },
        "mila-comun-con-papas": {
            name: "Mila Común con Papas",
            price: "6.000",
            description: "Milanesa clásica en pan con papas fritas",
            ingredients: ["Milanesa de ternera", "Pan", "Papas fritas"],
            type: "Milanesa",
            icon: "🥩"
        },
        "mila-especial-con-papas": {
            name: "Mila Especial con Papas",
            price: "6.500",
            description: "Milanesa completa con todos los agregados",
            ingredients: ["Milanesa de ternera", "Jamón", "Queso", "Huevo", "Papas fritas", "Verduras", "Aderezos"],
            type: "Milanesa",
            icon: "🥩"
        },

        // LOMITOS
        "lomito-comun": {
            name: "Lomito Común",
            price: "6.000",
            description: "Lomito clásico en pan",
            ingredients: ["Lomo de ternera", "Pan"],
            type: "Lomito",
            icon: "🥩"
        },
        "lomito-comun-con-papas": {
            name: "Lomito Común con Papas",
            price: "6.500",
            description: "Lomito clásico en pan con papas fritas",
            ingredients: ["Lomo de ternera", "Pan", "Papas fritas"],
            type: "Lomito",
            icon: "🥩"
        },
        "lomito-especial-con-papas": {
            name: "Lomito Especial con Papas",
            price: "7.000",
            description: "Lomito completo con todos los agregados",
            ingredients: ["Lomo de ternera", "Jamón", "Queso", "Huevo", "Papas fritas", "Verduras", "Aderezos"],
            type: "Lomito",
            icon: "🥩"
        },

        // HAMBURGUESAS
        "simple-burger": {
            name: "Simple Burger",
            price: "5.500",
            description: "Hamburguesa doble con verduras",
            ingredients: ["2 medallones de carne", "Verduras"],
            type: "Hamburguesa",
            icon: "🍔"
        },
        "simple-burger-con-papas": {
            name: "Simple Burger con Papas",
            price: "6.000",
            description: "Hamburguesa doble con verduras y papas",
            ingredients: ["2 medallones de carne", "Verduras", "Aderezos", "Papas fritas"],
            type: "Hamburguesa",
            icon: "🍔"
        },
        "special-burger": {
            name: "Special Burger",
            price: "6.500",
            description: "Hamburguesa completa con todos los agregados",
            ingredients: ["2 medallones de carne", "Jamón", "Queso", "Huevo", "Papas fritas", "Verduras", "Aderezos"],
            type: "Hamburguesa",
            icon: "🍔"
        },
        "house-burger": {
            name: "House Burger",
            price: "7.000",
            description: "Hamburguesa de la casa con cheddar y salsa barbacoa",
            ingredients: ["2 medallones de carne", "Huevo", "Jamón", "Cheddar", "Salsa Barbacoa", "Tomate", "Lechuga", "Papas fritas"],
            type: "Hamburguesa",
            icon: "🍔"
        },
        "triple-burger": {
            name: "Triple Burger",
            price: "7.500",
            description: "Hamburguesa triple con jamón, queso y huevo",
            ingredients: ["3 medallones de carne", "Jamón", "Queso", "Huevo", "Tomate", "Lechuga", "Papas fritas"],
            type: "Hamburguesa",
            icon: "🍔"
        },
        "bacon-burger": {
            name: "Bacon Burger",
            price: "7.500",
            description: "Hamburguesa doble con bacon y cebolla caramelizada",
            ingredients: ["2 medallones de carne", "Bacon", "Salsa barbacoa", "Cheddar en fetas", "Cebolla caramelizada"],
            type: "Hamburguesa",
            icon: "🥓"
        },
        "bauty-burger": {
            name: "Bauty Burger",
            price: "8.000",
            description: "La hamburguesa estrella de la casa con baño de cheddar",
            ingredients: ["2 medallones de carne", "Jamón", "Cheddar", "Salsa Barbacoa", "Mayonesa", "Baño de Cheddar", "Bacon", "Papas fritas"],
            type: "Hamburguesa Premium",
            icon: "🍔"
        },

        // PAPAS
        "papas-fritas-chica": {
            name: "Papas Fritas - Porción Chica",
            price: "3.000",
            description: "Papas fritas porción chica",
            type: "Guarnición",
            icon: "🍟"
        },
        "papas-fritas-grande": {
            name: "Papas Fritas - Porción Grande",
            price: "3.500",
            description: "Papas fritas porción grande",
            type: "Guarnición",
            icon: "🍟"
        },
        "papas-cheddar": {
            name: "Papas con Cheddar",
            price: "5.000",
            description: "Papas fritas con salsa cheddar",
            ingredients: ["Papas fritas", "Salsa cheddar"],
            type: "Guarnición",
            icon: "🍟"
        },
        "papas-gratinadas": {
            name: "Papas Gratinadas",
            price: "5.000",
            description: "Papas gratinadas al horno con queso",
            ingredients: ["Papas", "Queso gratinado"],
            type: "Guarnición",
            icon: "🧀"
        },
        "papas-bauty": {
            name: "Papas Bauty",
            price: "5.500",
            description: "Papas especiales de la casa",
            ingredients: ["Papas fritas", "Agregados especiales"],
            type: "Guarnición Especial",
            icon: "🍟"
        },
        "conitos-de-papas": {
            name: "Conitos de Papas",
            price: "1.500",
            description: "Mini conitos de papas fritas",
            type: "Guarnición",
            icon: "🍟"
        },

        // MILANESAS AL PLATO
        "mila-al-plato-p1": {
            name: "Mila al Plato con Fritas (1 persona)",
            price: "7.000",
            description: "Milanesa con papas fritas",
            ingredients: ["Milanesa de ternera", "Papas fritas"],
            serving: "1 persona",
            type: "Plato Principal",
            icon: "🍽️"
        },
        "mila-al-plato-p2": {
            name: "Mila al Plato con Fritas (2 personas)",
            price: "13.000",
            description: "Milanesa con papas fritas para compartir",
            ingredients: ["Milanesa de ternera", "Papas fritas"],
            serving: "2 personas",
            type: "Plato Principal",
            icon: "🍽️"
        },
        "mila-a-caballo-p1": {
            name: "Mila a Caballo (1 persona)",
            price: "8.000",
            description: "Milanesa con huevo frito y papas",
            ingredients: ["Milanesa de ternera", "Huevo frito", "Papas fritas"],
            serving: "1 persona",
            type: "Plato Principal",
            icon: "🍽️"
        },
        "mila-a-caballo-p2": {
            name: "Mila a Caballo (2 personas)",
            price: "15.000",
            description: "Milanesa con huevo frito y papas para compartir",
            ingredients: ["Milanesa de ternera", "Huevo frito", "Papas fritas"],
            serving: "2 personas",
            type: "Plato Principal",
            icon: "🍽️"
        },
        "mila-bauty-p1": {
            name: "Mila Bauty (1 persona)",
            price: "8.000",
            description: "Milanesa especial de la casa con agregados",
            ingredients: ["Milanesa de ternera", "Agregados especiales", "Papas fritas"],
            serving: "1 persona",
            type: "Plato Principal Especial",
            icon: "🍽️"
        },
        "mila-bauty-p2": {
            name: "Mila Bauty (2 personas)",
            price: "15.000",
            description: "Milanesa especial de la casa para compartir",
            ingredients: ["Milanesa de ternera", "Agregados especiales", "Papas fritas"],
            serving: "2 personas",
            type: "Plato Principal Especial",
            icon: "🍽️"
        },
        "napo-p1": {
            name: "Napo (1 persona)",
            price: "8.500",
            description: "Milanesa napolitana con jamón, queso y salsa",
            ingredients: ["Milanesa de ternera", "Jamón", "Queso", "Salsa de tomate", "Papas fritas"],
            serving: "1 persona",
            type: "Plato Principal",
            icon: "🍽️"
        },
        "napo-p2": {
            name: "Napo (2 personas)",
            price: "16.000",
            description: "Milanesa napolitana para compartir",
            ingredients: ["Milanesa de ternera", "Jamón", "Queso", "Salsa de tomate", "Papas fritas"],
            serving: "2 personas",
            type: "Plato Principal",
            icon: "🍽️"
        },

        // AGREGADOS
        "agregado-queso-huevo-jamon": {
            name: "Agregado de Queso, Huevo o Jamón",
            price: "1.000",
            description: "Agregá queso, huevo o jamón a tu comida",
            type: "Agregado",
            icon: "➕"
        },
        "agregado-cheddar": {
            name: "Agregado de Cheddar",
            price: "1.500",
            description: "Agregá cheddar a tu comida",
            type: "Agregado",
            icon: "🧀"
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = restaurantConfig;
}
