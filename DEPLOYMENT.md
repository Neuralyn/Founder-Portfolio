# Deployment Guide for nithin.neuralyn.health

## Prerequisites
- GitHub repository with your code
- Vercel account (free tier works)
- Access to DNS settings for neuralyn.health domain

## Step 1: Deploy to Vercel

### Option A: Via Vercel Dashboard (Recommended)
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository (`Neuralyn/Founder-Portfolio`)
4. Configure the project:
   - **Framework Preset**: Vite (should auto-detect)
   - **Root Directory**: `./` (default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `dist` (default)
5. Click "Deploy"

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production deployment
vercel --prod
```

## Step 2: Configure Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Click **Add Domain**
3. Enter: `nithin.neuralyn.health`
4. Vercel will show you the DNS records needed

## Step 3: Configure DNS Records

You need to add a CNAME record in your DNS provider (where neuralyn.health is managed):

### DNS Configuration:
- **Type**: CNAME
- **Name**: `nithin`
- **Value**: `cname.vercel-dns.com`
- **TTL**: 3600 (or default)

### Alternative (if CNAME doesn't work):
- **Type**: A
- **Name**: `nithin`
- **Value**: `76.76.21.21` (Vercel's IP - check Vercel dashboard for current IP)

## Step 4: Verify Domain

1. After adding DNS records, wait 5-60 minutes for DNS propagation
2. Vercel will automatically verify the domain
3. Once verified, your site will be live at `https://nithin.neuralyn.health`

## Step 5: SSL Certificate

Vercel automatically provisions SSL certificates via Let's Encrypt. No action needed - it happens automatically once the domain is verified.

## Troubleshooting

### Domain not verifying?
- Check DNS propagation: Use [dnschecker.org](https://dnschecker.org) to verify your DNS records are propagated globally
- Ensure CNAME points to `cname.vercel-dns.com`
- Wait up to 24 hours for full DNS propagation

### Build errors?
- Ensure all dependencies are in `package.json`
- Check that `npm run build` works locally
- Review build logs in Vercel dashboard

### Routing issues?
- The `vercel.json` file includes rewrites for React Router
- All routes should redirect to `index.html` for client-side routing

## Environment Variables (if needed)

If you need environment variables:
1. Go to **Settings** → **Environment Variables** in Vercel
2. Add any required variables (e.g., API keys)
3. Redeploy after adding variables

## Continuous Deployment

Vercel automatically deploys on every push to your main branch. To change this:
1. Go to **Settings** → **Git**
2. Configure which branches trigger deployments

## Notes

- The site will be available at both:
  - `https://nithin.neuralyn.health` (your custom domain)
  - `https://founder-portfolio-xxx.vercel.app` (Vercel's default domain)
- You can set the custom domain as primary in Vercel settings
- All deployments are automatically HTTPS-enabled

