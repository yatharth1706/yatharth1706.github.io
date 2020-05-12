---
layout: post
permalink: /jekyll/installation
---

### Prerequisites

1. Install a full Ruby development Environment.
2. Check whether ruby is fully installed or not by checking its version with following command: ``` ruby -v ```
3. Now install jekyll and bundler which are gems actually (Short Note: Gems are just like libraries that can be shared from one platform to other to perform certain functionality). Command to install jekyll bundler: ``` gem install jekyll bundler ```. (*Bundler is like a manager which will install dependencies or gems which are mentioned in gemfile which is same like package.json in js projects*).
4. Now create a jekyll project by running ``` jekyll new <project name> ```. It will create all necessary files to make a site using jekyll.
5. Use any editor to edit this folder.
6. Build the site and make it available to local server. ``` bundle exec jekyll serve ```.
7. Short Note: By default it runs on port 4000. But you can mention other ports if you want to use, in config.yml file by just writing ``` port: <port number> ```
