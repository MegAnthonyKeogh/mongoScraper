# mongoScraper

[Try the application here](https://lit-plateau-18727.herokuapp.com/)

This application scrapes the html and data from the NPR's Food Section website when the user goes to the route "/scrape" and then refreshes those articles on the main page. The user can then select to comment on the article to go directly to the article page and read it. The user can also delete the comments on article. 

In a future iteration of this project, I plan on building in a button to initiate the scraping for the user. All of the articles and comments on the articles are saved in a MongoDB database.

Getting Started
You can easily re-create/reimagine this project by doing the following steps. First, copy contents of this repository by clicking the green clone or download the repository button. Next, go to your terminal window and decide where you would like this project to live(in your documents or on your desktop). Then type the command `git init` and paste the github SSH key info. 

After that, find the copy project and cd (change directory) into the copied repository run an `npm install`. This command will install the correct npm packages you need for the project to run, and the correct version of the NPM packages.


Prerequisites
In order to launch this project, you will need to already have [node.js](https://nodejs.org/en/) running on your computer. You will also need [MongoDB](https://www.mongodb.com/), [Robo T3](https://robomongo.org/) (a lightweight GUI to work with MongoDB). For my text editor, I used [vscode](https://code.visualstudio.com/) for mac. 

The directions for installing all of these development tools are extremely easy to follow. 

Scraping
Before we can develop any of the functionality of the site, we need to first pull data from NPR's food section. The First step here is to go the website and inspect the site using your developer tools. I chose to use chrome developer tools and inspected the site. After finding the tags I wanted (or believe) had the right information, I targeted those tags and 'scrape' that data to my own website. 

I wanted to pull an image, the article headline, and the link to the site. 

Say what the step will be

Give the example
And repeat

until finished
End with an example of getting some data out of the system or using it for a little demo

Running the tests
Explain how to run the automated tests for this system

Break down into end to end tests
Explain what these tests test and why

Give an example
And coding style tests
Explain what these tests test and why

Give an example
Deployment
Add additional notes about how to deploy this on a live system

Built With
Dropwizard - The web framework used
Maven - Dependency Management
ROME - Used to generate RSS Feeds
Contributing
Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

Authors
Billie Thompson - Initial work - PurpleBooth
See also the list of contributors who participated in this project.

License
This project is licensed under the MIT License - see the LICENSE.md file for details

Acknowledgments
Hat tip to anyone whose code was used
Inspiration
etc
