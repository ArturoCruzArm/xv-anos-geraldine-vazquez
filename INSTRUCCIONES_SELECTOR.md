# Selector de Fotos - XV Años Geraldine Vázquez

Este sistema te permite revisar y clasificar las fotos del evento de manera fácil y organizada.

## 📋 Índice
1. [Preparación de Fotos](#preparación-de-fotos)
2. [Uso del Selector](#uso-del-selector)
3. [Exportar Resultados](#exportar-resultados)
4. [Preguntas Frecuentes](#preguntas-frecuentes)

---

## 🖼️ Preparación de Fotos

### Opción 1: Ya tienes fotos en formato WebP
Si ya tienes las fotos convertidas a formato `.webp`:
1. Copia todas las fotos a la carpeta `imagenes/`
2. Ejecuta el script para generar la lista:
   ```bash
   python generar_lista_fotos.py
   ```
3. Abre `selector.html` en tu navegador

### Opción 2: Necesitas convertir fotos a WebP
Si tus fotos están en formato JPG, PNG u otro:

1. **Edita el script de conversión:**
   - Abre `convertir_a_webp.py` con un editor de texto
   - Encuentra la línea que dice `SOURCE_DIR = r"C:\ruta\a\tus\fotos\originales"`
   - Cámbiala por la ruta donde están tus fotos, por ejemplo:
     ```python
     SOURCE_DIR = r"D:\fotos\xv_anos\originales"
     ```
   - Guarda el archivo

2. **Ejecuta la conversión:**
   ```bash
   python convertir_a_webp.py
   ```
   Este script:
   - Convertirá todas tus fotos a formato WebP
   - Las optimizará para web (reduciendo el tamaño)
   - Las guardará en la carpeta `imagenes/`

3. **Genera la lista de fotos:**
   ```bash
   python generar_lista_fotos.py
   ```

4. **Abre el selector:**
   - Abre `selector.html` en tu navegador favorito

---

## 🎯 Uso del Selector

### Categorías Disponibles

El selector te permite clasificar cada foto en una o varias de estas categorías:

- **🖼️ Ampliación**: Fotos que quieres ampliar e imprimir en grande
- **📸 Impresión**: Fotos para imprimir en tamaño estándar
- **💌 Invitación**: Fotos para usar en invitaciones o tarjetas
- **❌ Descartada**: Fotos que no te gustan y no quieres usar

### Cómo Seleccionar Fotos

1. **Haz clic en cualquier foto** para abrir el modal de selección
2. **Selecciona una o varias opciones** haciendo clic en los botones
3. **Navega entre fotos** usando:
   - Los botones ‹ y › en pantalla
   - Las flechas ← → del teclado
4. **Guarda tu selección** haciendo clic en "Guardar"
   - O presiona `Enter` para guardar
   - Presiona `Escape` para cancelar

### Filtrar Fotos

Usa los botones de filtro en la parte superior para ver solo:
- Todas las fotos
- Fotos marcadas para ampliación
- Fotos marcadas para impresión
- Fotos para invitación
- Fotos descartadas
- Fotos sin clasificar

### Estadísticas en Tiempo Real

En la parte superior verás contadores que se actualizan automáticamente:
- Total de fotos en cada categoría
- Fotos sin clasificar
- Progreso general

---

## 💾 Exportar Resultados

### Descargar Reporte JSON
Haz clic en el botón **"📥 Descargar Reporte"** para obtener un archivo JSON con:
- Todas tus selecciones
- Estadísticas completas
- Nombres de archivo de cada foto
- Categorías asignadas

Este archivo es útil para:
- Tener un respaldo de tus decisiones
- Compartir con el fotógrafo
- Importar a otros programas

### Copiar Resumen
Haz clic en **"📤 Copiar Resumen"** para copiar un resumen en texto plano con:
- Estadísticas generales
- Lista de números de foto por categoría
- Fecha de generación

Puedes pegar este resumen en:
- WhatsApp
- Email
- Documentos de texto

---

## ❓ Preguntas Frecuentes

### ¿Se guardan mis selecciones automáticamente?
**Sí.** Cada vez que guardas una selección, se almacena automáticamente en tu navegador (localStorage). Puedes cerrar la página y volver más tarde, tus selecciones seguirán ahí.

### ¿Puedo usar esto en mi teléfono o tablet?
**Sí.** El selector es totalmente responsive y funciona en:
- Computadoras de escritorio
- Laptops
- Tablets
- Smartphones

### ¿Qué pasa si borro todo por error?
Si haces clic en **"🗑️ Limpiar Todo"**, se borrarán TODAS las selecciones y no se pueden recuperar. El sistema te pedirá confirmación antes de hacerlo.

**Recomendación:** Descarga el reporte JSON periódicamente como respaldo.

### ¿Puedo seleccionar una foto para múltiples categorías?
**Sí.** Puedes marcar una misma foto para ampliación, impresión e invitación al mismo tiempo.

### ¿Las fotos se suben a internet?
**No.** Todo funciona localmente en tu computadora. Las fotos y tus selecciones nunca salen de tu dispositivo.

### ¿Necesito internet para usar el selector?
Solo para la primera carga (para cargar las fuentes de Google Fonts). Después puedes usarlo sin conexión.

### ¿En qué navegadores funciona?
El selector funciona en todos los navegadores modernos:
- Google Chrome
- Microsoft Edge
- Firefox
- Safari
- Opera

---

## 🛠️ Requisitos Técnicos

### Para convertir fotos a WebP:
- Python 3.6 o superior
- Librería Pillow (instalar con `pip install Pillow`)

### Para usar el selector:
- Navegador web moderno
- JavaScript habilitado

---

## 📞 Soporte

Si tienes problemas:
1. Verifica que las fotos estén en la carpeta `imagenes/`
2. Asegúrate de haber ejecutado `generar_lista_fotos.py`
3. Abre la consola del navegador (F12) para ver si hay errores
4. Intenta con otro navegador

---

## 🎉 ¡Disfruta seleccionando tus fotos!

Tómate tu tiempo para revisar cada foto. El selector guardará tu progreso automáticamente.
