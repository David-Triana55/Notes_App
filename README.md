Con la información de los endpoints que proporcionaste, aquí tienes el README actualizado con los detalles de la API:

---

# 📒 Notas App

Una aplicación de notas creada con **React** para el frontend y **Node.js/Express** para el backend. La aplicación está completamente testeada con **Cypress** para pruebas E2E.

## 📑 Tabla de Contenidos
- [Características](#-características)
- [Tecnologías Utilizadas](#-tecnologías-utilizadas)
- [Uso](#-uso)
- [API Endpoints](#-api-endpoints)

## ✨ Características
- Creación y eliminación de notas.
- Marcar notas como favoritas.
- Autenticación de usuarios utilizando **JWT** (JSON Web Tokens) y **bcrypt** para el manejo de contraseñas.
- Integración con **Mongoose** para la gestión de datos en **MongoDB**.
- Funcionalidad de búsqueda de notas.
- Diseño responsivo para dispositivos móviles y de escritorio.
- Totalmente testeada para garantizar su correcto funcionamiento.

## 💻 Tecnologías Utilizadas
### Frontend
- [React](https://reactjs.org/)
- [Cypress](https://www.cypress.io/) para pruebas E2E

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Mongoose](https://mongoosejs.com/) para la gestión de datos en MongoDB
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) para autenticación JWT
- [bcrypt](https://www.npmjs.com/package/bcrypt) para el manejo seguro de contraseñas

## 🧭 Uso
- Para agregar una nueva nota, haz clic en el botón "Agregar Nota".
- Puedes editar o eliminar una nota existente utilizando los botones correspondientes en cada tarjeta de nota.
- Marca una nota como favorita haciendo clic en el ícono correspondiente.
- La autenticación de usuarios se maneja a través de JWT, lo que permite un acceso seguro a las funciones de la aplicación.

## 🔗 API Endpoints

| Método | Endpoint             | Descripción                                   |
|--------|----------------------|-----------------------------------------------|
| GET    | `/api/notes`        | Obtiene todas las notas                       |
| GET    | `/api/notes/:id`    | Obtiene una nota por ID                       |
| POST   | `/api/notes`        | Crea una nueva nota                           |
| PUT    | `/api/notes/:id`    | Actualiza una nota por ID                     |
| DELETE | `/api/notes/:id`    | Elimina una nota por ID                       |
| POST   | `/api/users`        | Registra un nuevo usuario                     |
| GET    | `/api/users`        | Obtiene los detalles del usuario autenticado  |
| POST   | `/api/login`        | Inicia sesión de usuario                      |

---

Si deseas realizar más modificaciones o agregar información adicional, ¡házmelo saber!
