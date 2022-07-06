# Andrew R. Gray's Personal Site

Thank you for taking the time to view this repository!

This is the source code repository for me, Andrew R. Gray, a veteran software developer of 10 years.  This is an Angular site that demonstrates some of my coding capabilities.

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.2, but has since been upgraded to Angular 13.

Due to the limited nature of this site, this code runs fully front-end; there's simply no need for backend API dependencies...yet.

If you have questions or ideas, or are interested in hiring me, please contact me at andrew.russel.gray -at- gmail -dot- com.  My inbox is a busy place, though, and I'm a busy man, so it may take me some time to see your message.

## Things you need to do to make this work...

Be sure that you've got Node.js's current LTS version installed at a minimum, so that `npm` is present.  If you don't know if `npm` is set up, run `npm -v` to get the current npm version.  If you see any strange error messags when you run `npm install`, it's probably your Node.js version.

*Note: On Linux, you may need to `sudo` the following commands to get them to work properly, or on Windows run them on an elevated command prompt.*

1. Run `npm install` to pull down all packages.

2. Run the following command to get the current Angular CLI installed globally... 
`npm install -g @angular/cli@latest`

3. Run the following command to install Firebase globally...
`npm install -g firebase-tools`

*Note: Run `firebase --version` to confirm that Firebase is installed!*

4. Run `ng build` to generate a dist folder

5. CD into the dist folder, and run `firebase init`.  This will create a `.firebaserc` and `firebase.json` file.

6. From there link the project to a Firebase project you control, and set the folder under `dist` with your Angular project's name as the public folder.

*Note: Your firebase.json file should look a bit like what's below.  The rewrite section allows your Angular project's subpaths to work without your end-users hitting an error page.  For my app, that would be andrewrgray.dev/cv or andrewrgray.dev/technologies.  You may need to delete a line in the `ignore` section as well.*

    {
      "hosting": {
        "public": "YourAngularProjectNameHere",
        "ignore": [
          "firebase.json",
          "**/node_modules/**"
        ],
        "rewrites": [ 
          {
            "source": "**",
            "destination": "/index.html"
          } 
        ]
      }
    }

7. You should then be able to deploy the site to Firebase with `firebase deploy`.  You should see about 20-30 files deployed.