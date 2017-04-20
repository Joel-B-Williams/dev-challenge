# Starchup Web Developer Challenge

In this challenge we'll gauge your ability to work independently on a project given a set of requirements. You're welcome to use any resources at your disposal, and don't be afraid to ask questions.  The code you'll write in this challenge is similar to what you might expect to work on while at Starchup.

## Part 1: Static Web Page 

Our client, Geoff's Dry Cleaning, is struggling to convert their webpage views into actual orders. This might be because their company webpage hasn't been updated since 1999, has a neon green and pink color scheme, and is written largely in Comic Sans. Your job will be to produce a new site for them based on a design.

In this repo, you'll find `desktop.png` that our designer produced- it will be your guide for building the site. Now go build it! 

When you're done building the site, push it to this repo on Github on a separate branch called "yourname-part1".

Tips:
- You don't need to set up a server or any hosting for the site- just push the raw files up to github so we can take a look at them.
- Use whatever tool you're most comfortable to build the site, as long as you've actually coded it yourself- no Wix, Squarespace, Wordpress, etc.
- We use HTML, SCSS, and jQuery to build static web pages. You don't have to use these tools, but it would be nice to know you're proficient in them.
- We've included the image files you need to build the site. 

## Part 2: Templating

Congratulations! Thanks to your hard work, Geoff's Dry Cleaning is the most popular dry cleaner in Paris, and customers are raving about the new site. However, due to its popularity, Geoff's competitors want in on the action. 

Clients are contacting us left and right about building websites for them, but creating static web pages is time consuming, and we're lazy! We want you to create a templating engine that will take care the tedious work for us. This time we'll ask you to use some specific technologies. 

Create an `express.js` app that uses `ejs` templates to serve `HTML` content to `localhost`. 
YOU DON'T HAVE TO BUILD A WHOLE SITE. Just show us a basic version of the app using the tools we mentioned. 

Your app should have the following:
- Two distinct pages
- A navbar that allows you to navigate between the pages
- A header and footer that are the same on both pages 
- an unordered list of "services" the cleaner offers (hint- each cleaner might have a different number of services)

Tips:
- You may find this article helpful. https://scotch.io/tutorials/use-ejs-to-template-your-node-application
- You don't need to write any kind of backend system for your app- just give it some data you've hard-coded.
- Assume for now that all of the websites will have the same style (including colors and fonts). 

Push this part of the challenge to github on a branch called `yourname-part2`. 


## Part 3: Stretch Challenge (Optional!)

You've proved the concept that your app can produce websites with dynamic content. Now figure out how to produce sites with dynamic colors.

Tips:
- Start by thinking about how to make ONE of the colors on the site dynamic. How would the app know which color to use? What specifically would need to change for the color to be different?
- If you're using a tool like SCSS, it will be helpful to have access to a variable that represents the color you want to change. 
- If you figure out how to make the colors dynamic, try to do the same with fonts! With images?

Push this part of the challenge to github on a branch called `yourname-part3`. 



