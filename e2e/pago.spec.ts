import { test, expect } from '@playwright/test';

const checkoutUrl = 'https://minimoda-navy.vercel.app/checkout';

async function completarDatosDeCheckout(
  page: import('@playwright/test').Page,
  cvv: string,
) {
  await page.getByLabel('Nombre').fill('Ana Demo');
  await page.getByLabel('Dirección').fill('Calle Falsa 123');
  await page.getByLabel('Email').fill('ana.demo@example.test');
  await page.getByLabel('Número de tarjeta').fill('4242424242424242');
  await page.getByLabel('Vencimiento (MM/AA)').fill('12/30');
  await page.getByLabel('CVV').fill(cvv);
}

test('PAGO-01 compra exitosa con datos sintéticos válidos', async ({ page }) => {
  await page.goto(checkoutUrl);
  await completarDatosDeCheckout(page, '123');

  await page.getByRole('button', { name: 'Confirmar compra' }).click();

  await expect(page.getByRole('status')).toContainText('Compra confirmada');
});

test('PAGO-OX muestra error con CVV inválido de dos dígitos', async ({ page }) => {
  await page.goto(checkoutUrl);
  await completarDatosDeCheckout(page, '12');

  await page.getByRole('button', { name: 'Confirmar compra' }).click();

  await expect(page.getByTestId('error-cvv')).toContainText(
    /CVV.*3 o 4 dígitos/i,
  );
});