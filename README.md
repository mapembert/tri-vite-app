# Installation
Installation is simple. It's not like a traditional npm create-react-app install. Simply clone this repo and run npm install.
- Includes VITE
- Includes fixes to the TRIRIGA react template to get VITE working
- Fixes the Unauthorized.js svg issue

This is beta!

## First Steps - Get the code
To create a new app using this template, replace 'your-new-app-name' with your application name:
```bash
git clone https://github.com/mapembert/tri-vite-app.git your-new-app-name
cd your-new-app-name
git remote remove origin
npm install
```

If you want to push to a new repository:
```bash
git remote add origin https://github.com/mapembert/your-new-app-name.git
git push -u origin master
```
## Optional - Running the demo app
If you want to run the demo app it requires you to set up the TRIRIGA application in your environment. If you are using this template for a new application you may want to skip to step 2 and update the configuration accordingly.
1. Install the TRIRIGA Object Migration Package
Object migrate the file "TRIRIGA_OM_ImportMeFirst.zip" into your TRIRIGA instance. This will create the necessary objects for the demo app to work.

2. Update some configurations
Open the "./vite.config.js" file and update these settings to match your environment. If you are using the OM package below just update the username and password for your account.
```bash
    define: {
      'process.env': {
        "REACT_APP_INSTANCE_ID": "-1",
        "REACT_APP_TRIRIGA_URL": "http://localhost:9080",
        "REACT_APP_TRIRIGA_DEPLOY_URL": "http://localhost:9080",
        "REACT_APP_CONTEXT_PATH": "/",
        "REACT_APP_MODEL_AND_VIEW": "triViteApp",
        "REACT_APP_EXPOSED_NAME": "triViteApp",
        "REACT_APP_TRIRIGA_OAUTH_PROFILE_NAME": "",
        "REACT_APP_SSO": "false",
        "TRIRIGA_USER": "system",
        "TRIRIGA_PASSWORD": "password",
        "BROWSER": "none"
      },
    },
```
4. Run the app
```bash
npm run dev
```
