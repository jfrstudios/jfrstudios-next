# 🚀 Deploy JFR Studios to Vercel + Connect GoDaddy Domain

> **Complete deployment guide** — Tumhari site 100% FREE pe live hogi, nk.studio jaisa. Domain: GoDaddy. Hosting: Vercel (free tier).

**Total time:** 30-45 minutes (first time)

---

## 📋 Pre-requisites

- ✅ Domain registered with GoDaddy (you have this)
- ✅ Node.js 18+ installed on your computer
  - Check: Open terminal, run `node --version` — should be 18 or higher
  - Download: https://nodejs.org
- ✅ Git installed
  - Check: `git --version`
  - Download: https://git-scm.com/downloads

---

## 🪜 Step 1: Create GitHub Account (5 min)

1. Open https://github.com/signup
2. Username suggestion: `jaweriarasheed` or `jfrstudios`
3. Use your real email (will need to verify)
4. Verify your email from inbox
5. Login to GitHub

---

## 🪜 Step 2: Create New GitHub Repository (2 min)

1. Go to https://github.com/new
2. Repository name: `jfrstudiosdigital`
3. Description: `JFR Studios — Bold digital agency website`
4. Visibility: **Public** (or Private — both work with Vercel free)
5. ❌ Do NOT check "Add README"
6. ❌ Do NOT add .gitignore
7. ❌ Do NOT choose a license
8. Click **"Create repository"**
9. **Copy the URL** — it will look like:
   ```
   https://github.com/YOUR_USERNAME/jfrstudiosdigital.git
   ```

---

## 🪜 Step 3: Push Project Code to GitHub (5 min)

Open **PowerShell** in your project folder:

```powershell
cd C:\Users\Admin\.minimax-agent\projects\jfrstudios-next
git init
git add .
git commit -m "Initial commit: JFR Studios Next.js foundation"
```

Then connect to your GitHub repo (replace `YOUR_USERNAME`):

```powershell
git remote add origin https://github.com/YOUR_USERNAME/jfrstudiosdigital.git
git branch -M main
git push -u origin main
```

**Note**: GitHub may ask for authentication. Use a Personal Access Token (not password):
- Create one at: https://github.com/settings/tokens/new
- Scopes: check `repo`
- Copy the token, use it as password when prompted

---

## 🪜 Step 4: Create Vercel Account (2 min)

1. Go to https://vercel.com/signup
2. **Sign up with GitHub** (recommended — easiest)
3. Authorize Vercel to access your GitHub
4. You'll land on the dashboard

---

## 🪜 Step 5: Deploy to Vercel (3 min)

1. Click **"Add New…"** → **"Project"**
2. Find `jfrstudiosdigital` in the "Import Git Repository" list
3. Click **"Import"**
4. Project Name: `jfrstudiosdigital` (or any name)
5. Framework Preset: **Next.js** (auto-detected)
6. Root Directory: `./` (default)
7. **Environment Variables** — Skip for now (you can add later)
8. Click **"Deploy"** 🚀
9. Wait 60-90 seconds for build
10. 🎉 **Your site is LIVE!**
11. Vercel gives you a URL like: `jfrstudiosdigital.vercel.app`
12. Click "Visit" to see your live site

---

## 🪜 Step 6: Add Custom Domain on Vercel (5 min)

1. In Vercel project dashboard → **Settings** → **Domains**
2. Type your domain: `jfrstudios.com` (or whatever you registered)
3. Click **"Add"**
4. Vercel will show you DNS records to add on GoDaddy:

   | Type | Name | Value |
   |---|---|---|
   | A | @ | `76.76.21.21` |
   | CNAME | www | `cname.vercel-dns.com` |

---

## 🪜 Step 7: Update DNS on GoDaddy (5 min)

1. Login to https://account.godaddy.com
2. Go to **"My Products"** → find Domains → click **"DNS"** next to your domain
3. Delete existing **A record** with @ (if pointing elsewhere)
5. **Add A Record**:
   - Type: `A`
   - Name: `@`
   - Value: `76.76.21.21`
   - TTL: `600` (or default)
   - Save
6. **Add CNAME Record**:
   - Type: `CNAME`
   - Name: `www`
   - Value: `cname.vercel-dns.com`
   - TTL: `600`
   - Save

---

## 🪜 Step 8: Verify on Vercel (10 min wait)

1. Go back to Vercel → Settings → Domains
2. Click the **"Refresh"** button next to your domain
3. DNS propagation takes 5-30 minutes
4. When ✅ appears — your domain is live!
5. Vercel auto-issues a free SSL certificate

---

## 🎉 DONE!

Your site is now:
- ✅ Live on your domain
- ✅ SSL secured (https)
- ✅ Free hosting via Vercel
- ✅ Fast (Vercel CDN)
- ✅ Auto-deploys when you push to GitHub

---

## 🔄 Future Updates

Whenever you want to update the site:

```powershell
cd C:\Users\Admin\.minimax-agent\projects\jfrstudios-next
# make your code changes
git add .
git commit -m "describe your change"
git push
```

Vercel will **automatically detect** the push and redeploy. Live in 60 seconds.

---

## 🆘 Troubleshooting

### "git: command not found"
→ Install Git from https://git-scm.com/downloads

### "Permission denied" on git push
→ You need a Personal Access Token, not your GitHub password
→ https://github.com/settings/tokens/new

### Build fails
→ Usually missing dependency or syntax error
→ Check Vercel → Project → "Deployments" → click failed build → see error

### Domain not working after DNS change
→ DNS takes time (5-30 min, sometimes up to 48 hours)
→ Check propagation: https://dnschecker.org

### "Invalid API version" with Sanity
→ Add Sanity env vars in Vercel → Settings → Environment Variables

---

## 📞 When You're Stuck

Just tell me which step number you're on + what error you're seeing, and I'll fix it.