# RNBaseApp

***************How to host a website on firebase************

Please refer the below both URL for better understanding :
* https://firebase.google.com/docs/hosting/quickstart
* https://www.youtube.com/watch?v=Gl-qlxfTJHE


——————————————————————————————————————————
# Get Started with Firebase Hosting #

Open console.firebase.gogle.com & then add your project in firebase.

(1) Install the Firebase CLI-

Installing Node.js also installs npm.
The Firebase CLI requires Node.js version 5.10.0 or greater.
Once you have Node.js and npm installed, you can install the Firebase CLI via npm:

$ npm install -g firebase-tools

(2) Access your Firebase projects
To connect your local machine to your Firebase account and obtain access to your Firebase projects, run the following command:

$ firebase login

(3)Make a public folder
 To make public folder in our project & cut all the file & paste them into the public folder.

 
(4) Initialize your site
From the root of your project directory, run the following command:

$ firebase init

Running the firebase init command creates a firebase.json configuration file in the root of your project directory. 

(5) Select a public root directory
When you initialize your site, you are prompted for a directory to use as the public root (default is "public").

(6) Deploy your site
To deploy your site, run the following command from your project's root directory:

$ firebase deploy

Your content will be deployed to your Firebase project's default Hosting site, 

URL-   your-firebase-project-id.firebaseapp.com.


———————————————————————————————————————————
You can refer the below terminal code ->

* Jio-5-tyu:Thirdeye mac$ npm install -g firebase-tools

/usr/local/bin/firebase -> /usr/local/lib/node_modules/firebase-tools/lib/bin/firebase.js
+ firebase-tools@6.2.2
updated 1 package in 49.29s
* Jio-5-tyu:Thirdeye mac$ firebase login

Already logged in as pradeeplinkites@gmail.com

* Jio-5-tyu:Thirdeye mac$ firebase init

     ######## #### ########  ######## ########     ###     ######  ########
     ##        ##  ##     ## ##       ##     ##  ##   ##  ##       ##
     ######    ##  ########  ######   ########  #########  ######  ######
     ##        ##  ##    ##  ##       ##     ## ##     ##       ## ##
     ##       #### ##     ## ######## ########  ##     ##  ######  ########

You're about to initialize a Firebase project in this directory:

  /Users/mac/Desktop/Thirdeye

* ? Which Firebase CLI features do you want to setup for this folder? Press Space 
* to select features, then Enter to confirm your choices. Hosting: Configure and d
* eploy Firebase Hosting sites

=== Project Setup

First, let's associate this project directory with a Firebase project.
You can create multiple project aliases by running firebase use --add, 
but for now we'll just set up a default project.

* ? Select a default Firebase project for this directory: [create a new project]

=== Hosting Setup

Your public directory is the folder (relative to your project directory) that
will contain Hosting assets to be uploaded with firebase deploy. If you
have a build process for your assets, use your build's output directory.

* ? What do you want to use as your public directory? public
* ? Configure as a single-page app (rewrite all urls to /index.html)? No
✔  Wrote public/404.html
* ? File public/index.html already exists. Overwrite? No
i  Skipping write of public/index.html

i  Writing configuration info to firebase.json...
i  Writing project information to .firebaserc...
i  Writing gitignore file to .gitignore...

✔  Firebase initialization complete!

Project creation is only available from the Firebase Console
Please visit https://console.firebase.google.com to create a new project, then run firebase use --add

* Jio-5-tyu:Thirdeye mac$ firebase use --add

? Which project do you want to add? thirdeye-d1229

* ? What alias do you want to use for this project? (e.g. staging) thirdeye-d1229

Created alias thirdeye-d1229 for thirdeye-d1229.
Now using alias thirdeye-d1229 (thirdeye-d1229)

* Jio-5-tyu:Thirdeye mac$ firebase deploy

=== Deploying to 'thirdeye-d1229'...

i  deploying hosting
i  hosting[thirdeye-d1229]: beginning deploy...
i  hosting[thirdeye-d1229]: found 85 files in public
✔  hosting[thirdeye-d1229]: file upload complete
i  hosting[thirdeye-d1229]: finalizing version...
✔  hosting[thirdeye-d1229]: version finalized
i  hosting[thirdeye-d1229]: releasing new version...
✔  hosting[thirdeye-d1229]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/thirdeye-d1229/overview
Hosting URL: https://thirdeye-d1229.firebaseapp.com ]

———————————————————————————————————————————

Login-ID  - Pradeep.linkites@gmail.com
Password-   Pradeep@2018
