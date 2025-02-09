import { Page } from '@playwright/test';

export async function login(page: Page, email: string, password: string) {
  await page.goto('/login');
  await page.getByLabel('Email').fill(email);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Sign in' }).click();
}

export async function logout(page: Page) {
  await page.getByRole('button', { name: 'User menu' }).click();
  await page.getByRole('button', { name: 'Sign out' }).click();
}

export async function waitForAuthRedirect(page: Page) {
  await page.waitForURL('/dashboard');
} 