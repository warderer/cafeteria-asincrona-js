# ☕ Cafetería Asíncrona JS - Demo de Asincronismo en JavaScript

Una aplicación web interactiva que explica los conceptos fundamentales del asincronismo en JavaScript usando una analogía práctica de cafetería, donde cada pedido puede tomar diferentes tiempos.

## 🎯 Objetivo

Este proyecto está diseñado para enseñar de manera visual e interactiva cómo funciona el asincronismo en JavaScript, específicamente usando `setTimeout()`, ANTES de avanzar a conceptos más complejos como Promises y async/await.

## 🌟 Características

### Conceptos que se enseñan:
- **Asincronismo**: Ejecución no bloqueante de código
- **Callbacks**: Funciones que se ejecutan en momentos específicos
- **Event Loop**: Manejo de operaciones asíncronas
- **Diferencia entre código síncrono y asíncrono**

### Funcionalidades interactivas:
- ☕ **Preparación de bebidas** con diferentes tiempos de espera
- 🔄 **Operaciones múltiples** ejecutándose en paralelo
- 🔒 **Comparación con código síncrono** que bloquea la ejecución
- 📝 **Log en tiempo real** mostrando el orden de ejecución
- ⚖️ **Demostraciones comparativas** sync vs async

## 🚀 Cómo usar

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/warderer/cafeteria-asincrona-js.git
   cd cafeteria-asincrona-js
   ```

2. **Abre el archivo HTML:**
   - Simplemente abre `index.html` en tu navegador
   - No requiere servidor web ni dependencias adicionales

3. **Interactúa con la demo:**
   - Presiona los botones para ejecutar diferentes operaciones
   - Observa el log para entender el orden de ejecución
   - Experimenta con operaciones múltiples simultáneas

## 📚 Ejemplos de código incluidos

### Operación Asíncrona Básica
```javascript
function prepararCafe() {
    console.log('🔸 Iniciando café...');

    setTimeout(() => {
        console.log('✅ ¡Café listo!');
    }, 2000);

    console.log('⏳ Café en preparación...');
}
```

### Múltiples Operaciones Asíncronas
```javascript
function prepararVariasBebidas() {
    prepararCafe();      // 2 segundos
    prepararTe();        // 1 segundo (terminará primero)
    prepararCapuchino(); // 3 segundos (terminará último)

    // Todas se ejecutan en paralelo, no en secuencia
}
```

### Comparación con Código Síncrono
```javascript
function operacionSincrona() {
    console.log('Inicio operación síncrona');

    // Bloquea durante 2 segundos
    const inicio = Date.now();
    while (Date.now() - inicio < 2000) {
        // JavaScript está bloqueado aquí
    }

    console.log('Operación síncrona completa');
}
```

## 🎓 Conceptos de aprendizaje

### Orden de ejecución
1. **Código síncrono** - Se ejecuta inmediatamente
2. **setTimeout** - Se programa para después
3. **Más código síncrono** - Continúa sin esperar
4. **Callbacks de setTimeout** - Se ejecutan cuando llega su momento

### Puntos clave
- `setTimeout()` **no detiene** la ejecución del código
- JavaScript puede manejar **múltiples tareas simultáneamente**
- Los **callbacks se ejecutan** cuando el tiempo especificado ha pasado
- El **Event Loop** maneja estas operaciones asíncronas

## 🔧 Tecnologías utilizadas

- **HTML5** - Estructura y semántica
- **CSS3** - Estilos modernos con gradientes y animaciones
- **JavaScript (ES6+)** - Lógica de asincronismo y manipulación del DOM
- **setTimeout()** - Mecanismo principal de asincronismo

## 🏗️ Estructura del proyecto

```
cafeteria-asincrona-js/
│
├── index.html          # Aplicación principal
├── main.js             # Lógica principal con JS
├── styles.css          # Estilos
└── README.md           # Este archivo
```

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

Creado con ❤️ por César Guerra para la comunidad de desarrolladores que aprenden JavaScript. Es de libre uso, solo recuerda dar los créditos correspondientes.

---

### 🌟 ¿Te gustó el proyecto?

Si este proyecto te ayudó a entender el asincronismo en JavaScript, no olvides darle una ⭐ en GitHub y compartirlo con otros desarrolladores que estén aprendiendo.

### 🔗 Enlaces útiles

- [MDN - setTimeout()](https://developer.mozilla.org/es/docs/Web/API/setTimeout)
- [JavaScript Event Loop explicado](https://developer.mozilla.org/es/docs/Web/JavaScript/EventLoop)
- [Asynchronous JavaScript](https://developer.mozilla.org/es/docs/Learn/JavaScript/Asynchronous)

---

**¡Happy coding!** ☕🚀