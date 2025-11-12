# Installation
Installation is simple. It's not like a traditional npm create-react-app install. Simply clone this repo and run npm install.
- Includes VITE
- Includes fixes to the TRIRIGA react template to get VITE working
- Fixes the Unauthorized.js svg issue

This is beta!

## First Steps - Get the code
To create a new app using this template, follow this checklist:

### Setup Checklist
- [ ] Clone the template repository
  ```bash
  git clone https://github.com/mapembert/tri-vite-app.git your-new-app-name
  cd your-new-app-name
  ```
- [ ] Remove the connection to the template repository
  ```bash
  git remote remove origin
  ```
- [ ] Update `.env.development.local` - Replace `myTririgaApp` with your new app name in:
  - `REACT_APP_MODEL_AND_VIEW=your-new-app-name`
  - `REACT_APP_EXPOSED_NAME=your-new-app-name`
- [ ] Update `vite.config.js` - Replace `myTririgaApp` with your new app name in:
  - `REACT_APP_MODEL_AND_VIEW` (line 24)
  - `REACT_APP_EXPOSED_NAME` (line 25)
- [ ] Update credentials in both files:
  - `.env.development.local`: `TRIRIGA_USER` and `TRIRIGA_PASSWORD`
  - `vite.config.js`: `TRIRIGA_USER` and `TRIRIGA_PASSWORD`
- [ ] Install dependencies
  ```bash
  nvm use 22.14.00
  npm install
  ```
- [ ] (Optional) Push to your new repository
  ```bash
  git remote add origin https://github.com/mapembert/your-new-app-name.git
  git push -u origin master
  ```
