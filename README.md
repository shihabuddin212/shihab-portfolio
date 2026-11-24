# Shihab Portfolio

A single-page portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm ci
npm run build
npm run start
```

The app listens on port `3000` by default. To choose another port, run `npm run start -- -p 3001`.

## Deploy to a VPS

This app runs as a Node.js server. Use a supported Node.js LTS release (20.9 or newer) and put Nginx in front of the app as a reverse proxy.

1. Install Git, Node.js, Nginx, and PM2 on the VPS.
2. Clone the repository and build it:

   ```bash
   git clone https://github.com/shihabuddin212/shihab-portfolio.git
   cd shihab-portfolio
   npm ci
   npm run build
   ```

3. Start the production server with PM2 and save its process list:

   ```bash
   pm2 start npm --name shihab-portfolio -- start
   pm2 save
   pm2 startup
   ```

   Follow the command printed by `pm2 startup` so the app starts after a VPS reboot.

4. Configure the Nginx site for your domain to proxy requests to `http://127.0.0.1:3000`, then enable HTTPS with your certificate provider.

To deploy updates, run `git pull origin main`, `npm ci`, `npm run build`, then `pm2 restart shihab-portfolio`.

## Portfolio content

The page content is currently maintained in the components under `components/`. Admin-managed dynamic content is not included yet; the current setup keeps the single-page site simple to deploy and can be extended later.
