let contadorOperaciones = 0;

function log(mensaje, tipo = 'normal') {
    const logElement = document.getElementById('log');
    const timestamp = new Date().toLocaleTimeString();
    const entry = document.createElement('div');
    entry.className = `log-entry ${tipo}`;
    entry.textContent = `[${timestamp}] ${mensaje}`;
    logElement.appendChild(entry);
    logElement.scrollTop = logElement.scrollHeight;
}

function limpiarLog() {
    document.getElementById('log').innerHTML = '<div class="log-entry">💡 Log limpiado. Presiona los botones para ver más ejemplos...</div>';
}

// Operaciones asíncronas de la cafetería
function prepararCafe() {
    const operacionId = ++contadorOperaciones;
    log(`🔸 [Op ${operacionId}] Iniciando preparación de café...`, 'start');

    setTimeout(() => {
        log(`✅ [Op ${operacionId}] ¡Café listo! Tiempo total: 2 segundos`, 'complete');
    }, 2000);

    log(`⏳ [Op ${operacionId}] Café en preparación... (no bloquea otras operaciones)`, 'process');
}

function prepararTe() {
    const operacionId = ++contadorOperaciones;
    log(`🔸 [Op ${operacionId}] Iniciando preparación de té...`, 'start');

    setTimeout(() => {
        log(`✅ [Op ${operacionId}] ¡Té listo! Tiempo total: 1 segundo`, 'complete');
    }, 1000);

    log(`⏳ [Op ${operacionId}] Té en preparación... (más rápido que el café)`, 'process');
}

function prepararCapuchino() {
    const operacionId = ++contadorOperaciones;
    log(`🔸 [Op ${operacionId}] Iniciando preparación de capuchino...`, 'start');

    setTimeout(() => {
        log(`✅ [Op ${operacionId}] ¡Capuchino listo! Tiempo total: 3 segundos`, 'complete');
    }, 3000);

    log(`⏳ [Op ${operacionId}] Capuchino en preparación... (el más elaborado)`, 'process');
}

function prepararVariasBebidas() {
    log(`🎯 Preparando pedido múltiple: Café, Té y Capuchino simultáneamente`, 'start');
    log(`📝 Nota: Observa cómo terminan en diferente orden al que empezaron`, 'process');

    // Todas se inician al mismo tiempo
    prepararCafe();
    prepararTe();        // Terminará primero (1s)
    prepararCapuchino(); // Terminará último (3s)

    log(`⚡ Las tres bebidas están preparándose en paralelo!`, 'process');
}

// Operación síncrona para comparar
function operacionSincrona() {
    const operacionId = ++contadorOperaciones;
    log(`🔸 [Op ${operacionId}] INICIO operación síncrona (bloquea todo)`, 'sync');

    // Simulamos una operación que bloquea
    const inicio = Date.now();
    while (Date.now() - inicio < 2000) {
        // Bucle que bloquea durante 2 segundos
        // Durante este tiempo, NO se puede hacer nada más
    }

    log(`✅ [Op ${operacionId}] Operación síncrona COMPLETADA (después de bloquear 2s)`, 'sync');
    log(`❌ Durante esos 2 segundos, JavaScript no pudo hacer NADA más`, 'sync');
}

function demostrarDiferencia() {
    log(`🎯 DEMOSTRACIÓN: Diferencia entre Síncrono y Asíncrono`, 'start');
    log(`📝 Ejecutando ambos tipos para comparar...`, 'process');

    // Código síncrono
    log(`1️⃣ Ejecutando código ANTES de setTimeout`, 'process');

    // Código asíncrono
    setTimeout(() => {
        log(`3️⃣ Código DENTRO de setTimeout ejecutado (después de 1s)`, 'complete');
    }, 1000);

    // Más código síncrono
    log(`2️⃣ Ejecutando código DESPUÉS de setTimeout (¡pero antes que el callback!)`, 'process');
    log(`💡 ¿Viste? El código siguió ejecutándose sin esperar al setTimeout`, 'process');
}

// Mensaje inicial
setTimeout(() => {
    log('🎉 ¡Cafetería lista! Prueba los botones para ver el asincronismo en acción', 'start');
}, 500);