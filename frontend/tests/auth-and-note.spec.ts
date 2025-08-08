import { test, expect } from '@playwright/test';

const uniqueEmail = `user_${Date.now()}@example.com`;
const password = 'StrongP@ssw0rd!';

test.beforeEach(async ({ page }) => {
  // Simple in-memory fixtures to simulate a backend
  const user = { _id: 'u1', name: 'Test User', email: uniqueEmail };
  const token = 'fake-jwt-token';
  const notes: { _id: string; title: string; content: string; createdAt: string }[] = [];

  await page.route('**/api/**', async (route) => {
    const req = route.request();
    const url = new URL(req.url());
    const path = url.pathname;
    const method = req.method();

    if (method === 'POST' && path.endsWith('/api/users')) {
      return route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ _id: user._id, name: user.name, email: user.email, token })
      });
    }

    if (method === 'POST' && path.endsWith('/api/users/login')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ _id: user._id, name: user.name, email: user.email, token })
      });
    }

    if (method === 'GET' && path.endsWith('/api/users/profile')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ _id: user._id, name: user.name, email: user.email })
      });
    }

    if (method === 'GET' && path.endsWith('/api/notes')) {
      return route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(notes)
      });
    }

    if (method === 'POST' && path.endsWith('/api/notes')) {
      const body = await req.postDataJSON();
      const newNote = {
        _id: `n${Date.now()}`,
        title: body.title,
        content: body.content,
        createdAt: new Date().toISOString(),
      };
      notes.unshift(newNote);
      return route.fulfill({
        status: 201,
        contentType: 'application/json',
        body: JSON.stringify({ message: `Note ${newNote._id} created successfully` })
      });
    }

    // Fallback
    return route.fulfill({ status: 404 });
  });
});

async function register(page) {
  await page.goto('/register');
  await page.getByLabel('Name').fill('Test User');
  await page.getByLabel('Email').fill(uniqueEmail);
  await page.getByLabel('Password', { exact: true }).fill(password);
  await page.getByLabel('Confirm Password').fill(password);
  await page.getByRole('button', { name: 'Register' }).click();
}

async function login(page) {
  await page.goto('/login');
  await page.getByLabel('Email').fill(uniqueEmail);
  await page.getByLabel('Password').fill(password);
  await page.getByRole('button', { name: 'Login' }).click();
}

test('register -> create note -> see it on dashboard', async ({ page }) => {
  await register(page);
  await expect(page).toHaveURL(/\/dashboard/);

  // Navigate to create page
  await page.getByRole('link', { name: 'Create New Note' }).click();
  await expect(page).toHaveURL(/\/create/);

  const title = `Note ${Date.now()}`;
  const content = 'This is a test note created by Playwright';

  await page.getByLabel('Title').fill(title);
  await page.getByLabel('Content').fill(content);
  await page.getByRole('button', { name: 'Create Note' }).click();

  // Back on dashboard, assert the note appears
  await expect(page).toHaveURL(/\/dashboard/);
  await expect(page.getByText(title)).toBeVisible();
});