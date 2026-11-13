# Barath Portfolio – Simple Guide (easy English)

## 1. Run on your laptop
1. Install **Google Chrome** (free) and **VS Code** (free, code.visualstudio.com).
2. Unzip `barath-portfolio.zip`. Do not work inside the zip.
3. Double-click `index.html`. It opens in Chrome. (Needs internet once for fonts.)
4. To edit: open VS Code > File > Open Folder > choose `barath-portfolio`. Save with Ctrl+S, then press F5 / refresh in Chrome.

## 2. What to replace (search for `[REPLACE]` in index.html and script.js)
- `youremail@example.com` in index.html and script.js: your real email.
- Instagram, ArtStation, LinkedIn links in index.html (search `instagram.com`).
- About me text in index.html.
- Profile photo: save as `c:/Users/Admin/Documents/Barath/barath-portfolio/barath-portfolio/assets/image/profile.jpg.jpg`.
- Resume: save as `assets/resume.pdf`.

## 3. Add your projects (edit the top of script.js)
1. Put the picture in `assets/projects/` (example: `city.jpg`).
2. In `script.js`, change one project: `image:"assets/projects/city.jpg"`.
3. Video: put .mp4 in `assets/videos/`, then `video:"assets/videos/reel.mp4"`. Keep files small (under 20 MB) or upload to YouTube and use `link:`.
4. To add a project, copy one line inside `projects = [ ... ]`, paste it, and change the words. Keep the comma at the end of each line.
5. `cat` decides the section: `"3d"`, `"unreal"`, `"video"`, `"graphic"`.
Tip: use .jpg or .webp, width about 1600px, so the site loads fast.

## 4. Publish free with GitHub Pages
1. Create a free account at github.com.
2. Click **+** > **New repository**. Name: `barath-portfolio`. Choose Public. Create.
3. Click **uploading an existing file**. Drag ALL files and folders from inside `barath-portfolio`. Click **Commit changes**.
4. Go to **Settings > Pages**. Under Branch choose `main` and `/ (root)`. Save.
5. Wait 1-2 minutes. Your link: `https://YOUR-USERNAME.github.io/barath-portfolio/`

## 5. Common problems
- Image not showing: check the file name and folder spelling exactly (capital letters matter).
- Page looks broken after editing: you may have deleted a quote `"` or comma `,`. Press Ctrl+Z in VS Code.
- Empty folders do not upload to GitHub, so each has a hidden `.gitkeep` file. Leave it.
- Contact form opens the visitor's email app. For a no-email-app form, use free Formspree.io later.
