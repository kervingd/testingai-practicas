# Reglas para Tests (Playwright)
- Utilizá locators semánticos (`getByRole`, `getByLabel`).
- Prohibido usar esperas fijas (`waitForTimeout`).
- Incluí siempre el ID del caso en el nombre del test (ej. `PAGO-01`).
- Realizá assertions robustas de UI (evitar `toBeTruthy()` genéricos).