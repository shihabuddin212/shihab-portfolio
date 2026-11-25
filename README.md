# Md Shihab Uddin Munsi — Portfolio

A single-page portfolio built with Next.js, TypeScript, Tailwind CSS, and a Node.js contact API. It defaults to night mode and includes the CV, projects, experience, skills, structured metadata, sitemap, and robots rules.

## Run locally

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Create a production build with `npm run build`, then serve it with `npm start`.

## Deploy to the Namecheap domain and Ubuntu VPS

This site uses a Node.js server and Nginx; cPanel is not required. The steps below connect `mdshihabuddin.me` and `www.mdshihabuddin.me` to the VPS at `20.219.16.12`.

### 1. Point Namecheap DNS to the VPS

1. In Namecheap, open **Domain List → Manage** beside `mdshihabuddin.me` → **Advanced DNS**.
2. Confirm the domain uses Namecheap BasicDNS/PremiumDNS. If it uses custom nameservers, add these records at the DNS provider for those nameservers instead.
3. Add or update these records:

   | Type | Host | Value | TTL |
   | --- | --- | --- | --- |
   | A Record | `@` | `20.219.16.12` | Automatic |
   | CNAME Record | `www` | `mdshihabuddin.me` | Automatic |

4. Remove only conflicting `@`/`www` A, AAAA, ALIAS, or URL Redirect records that point somewhere else. Keep any MX/TXT records used for email or domain verification.
5. Wait for DNS propagation, then check from your computer:

   ```powershell
   nslookup mdshihabuddin.me
   nslookup www.mdshihabuddin.me
   ```

   Both names should ultimately resolve to the VPS. DNS changes may take several hours to propagate.

### 2. Prepare the Ubuntu VPS

Connect over SSH:

```bash
ssh techrevail@20.219.16.12
```

Install Git, Nginx, Certbot, and Node.js 22 LTS. The NodeSource setup script is downloaded first so you can inspect it before running it:

```bash
sudo apt update
sudo apt install -y ca-certificates curl git nginx certbot python3-certbot-nginx
curl -fsSL https://deb.nodesource.com/setup_22.x -o /tmp/nodesource_setup.sh
less /tmp/nodesource_setup.sh
sudo -E bash /tmp/nodesource_setup.sh
sudo apt install -y nodejs
node --version
npm --version
```

Allow inbound TCP ports 80 and 443 in the VPS provider firewall/security group. If using UFW, allow SSH before enabling it so you do not lock yourself out:

```bash
sudo ufw allow OpenSSH
sudo ufw allow 'Nginx Full'
sudo ufw status
sudo ufw enable
```

Keep SSH (port 22) restricted to trusted source addresses where possible.

### 3. Clone, configure, and start the portfolio

```bash
sudo mkdir -p /var/www
sudo chown techrevail:techrevail /var/www
git clone https://github.com/shihabuddin212/shihab-portfolio.git /var/www/shihab-portfolio
cd /var/www/shihab-portfolio
cp .env.example .env.local
nano .env.local
```

Set `SITE_URL=https://mdshihabuddin.me`. Add real SMTP settings if you want the contact form to send email; do not commit `.env.local` or put SMTP passwords in GitHub. Then install and build:

```bash
npm ci
npm run build
sudo npm install --global pm2
pm2 start npm --name shihab-portfolio -- start
pm2 save
pm2 startup
```

Run the command printed by `pm2 startup` to enable startup after a reboot. The Next.js server listens on port `3000`; Nginx will expose it through standard HTTP/HTTPS ports.

### 4. Configure Nginx for the apex and `www`

Create `/etc/nginx/sites-available/shihab-portfolio`:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name mdshihabuddin.me www.mdshihabuddin.me;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
    }
}
```

Enable the site and validate the Nginx configuration:

```bash
sudo ln -sfn /etc/nginx/sites-available/shihab-portfolio /etc/nginx/sites-enabled/shihab-portfolio
sudo nginx -t
sudo systemctl reload nginx
```

Do not remove other enabled Nginx sites unless you have confirmed they are unused.

### 5. Issue an SSL certificate and enable HTTPS

After both DNS names resolve to the VPS and HTTP is reachable from the internet, request one certificate covering both names:

```bash
sudo certbot --nginx --redirect -d mdshihabuddin.me -d www.mdshihabuddin.me
sudo certbot renew --dry-run
```

Choose the HTTPS redirect when prompted if Certbot asks. Both `https://mdshihabuddin.me` and `https://www.mdshihabuddin.me` will then use HTTPS. Check certificate renewal with `certbot renew --dry-run` periodically; Certbot also installs a renewal timer on supported Ubuntu packages.

### 6. Deploy updates

```bash
cd /var/www/shihab-portfolio
git pull --ff-only origin main
npm ci
npm run build
pm2 restart shihab-portfolio
```

Keep `.env.local` on the VPS only. The repository's `.env.example` contains placeholders, not credentials.
