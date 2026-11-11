# Caso PAGO-01: Completar compra con datos sintéticos válidos
* **Objetivo:** Verificar que el checkout procese una compra exitosa utilizando datos sintéticos.
* **Pasos:** 
  1. Ingresar a la tienda de MiniModa.
  2. Completar los datos de envío (Nombre: Ana Demo, Dirección: Calle Falsa 123).
  3. Ingresar tarjeta de prueba y confirmar la compra.
* **Resultado Esperado:** Mensaje de confirmación visible en pantalla (ej. caja con role="status" conteniendo "Compra confirmada").

# Caso PAGO-OX: CVV inválido
* **Objetivo:** Validar que un CVV de dos dígitos muestre error de formato.
* **Resultado Esperado:** Mensaje de error indicando que el CVV debe tener 3 o 4 dígitos.