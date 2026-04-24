# 🛍️ Sistema de Gestión de Productos con IA

Sistema completo para gestión de productos con integración de IA (Ollama) para generación automática de descripciones y Supabase como base de datos.

## 📋 Tabla de Contenidos
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Instalación](#instalación)
- [Configuración](#configuración)
- [Características](#características)
- [API Endpoints](#api-endpoints)
- [Componentes](#componentes)
- [Uso](#uso)
- [Variables de Entorno](#variables-de-entorno)
- [Contribución](#contribución)

## 🚀 Tecnologías Utilizadas

- **Next.js 14** (App Router)
- **React 18**
- **Supabase** (Base de datos)
- **Ollama** (IA local para generación de productos)
- **CSS Modules** (Estilizado)
- **Axios** (Cliente HTTP)

## 📁 Estructura del Proyecto
app/
├── api/ # API Routes
│ ├── ia/ # Endpoints de IA
│ │ ├── CallOllamaService.js # Servicio de conexión con Ollama
│ │ └── prompt_post/ # Endpoint POST para IA
│ │ └── route.js
│ └── productos/ # Endpoints de productos
│ ├── [id]/ # GET por ID
│ │ └── route.js
│ ├── producto_actualizar/ # PUT actualizar producto
│ │ └── route.js
│ ├── producto_crear/ # POST crear producto
│ │ └── route.js
│ ├── producto_eliminar/ # DELETE eliminar producto
│ │ └── route.js
│ └── producto_get/ # GET listar productos
│ └── route.js
├── Component/ # Componentes React
│ ├── Botones/ # Componentes de botones
│ │ └── Botones.jsx
│ ├── Form/ # Formularios
│ │ ├── FormularioPOST.jsx # Formulario creación
│ │ └── FormularioPUT.jsx # Formulario actualización
│ ├── Navbar/ # Barra de navegación
│ │ └── Navbar.jsx
│ └── Productos/ # Lista de productos
│ └── Productos.jsx
├── delete-producto/ # Página eliminar
│ └── page.jsx
├── lib/ # Configuraciones
│ └── supabase.js # Cliente Supabase
├── send-productos/ # Página crear producto
│ └── page.jsx
├── services/ # Servicios
│ └── services.js # Lógica de negocio
├── update-producto/ # Página actualizar
│ └── page.jsx
├── layout.js # Layout principal
├── page.js # Página principal
└── globals.css # Estilos globales

___

# Instalar Ollama
curl -fsSL https://ollama.com/install.sh | sh

# Descargar modelo
ollama pull llama3.2

# Iniciar servicio
ollama serve