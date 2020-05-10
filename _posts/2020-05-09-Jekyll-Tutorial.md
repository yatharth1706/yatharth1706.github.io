---
layout: post
title: Jekyll Static Site Generator
description: Tutorial on Jekyll for making static sites
imageurl: /assets/jekyll.png
permalink: /jekyll-tutorial
---
<p align="center"><img src="assets/jekyll.png" width="420" height="140"></p>

### Jekyll

Jekyll is a static site generator. It uses markdown and layouts to create beautiful looking websites. It is built on Ruby framework.

### Prerequisites

1. Install a full Ruby development Environment.
2. Check whether ruby is fully installed or not by checking its version with following command: ``` ruby -v ```
3. Now install jekyll and bundler which are gems actually (Short Note: Gems are just like libraries that can be shared from one platform to other to perform certain functionality). Command to install jekyll bundler: ``` gem install jekyll bundler ```. (*Bundler is like a manager which will install dependencies or gems which are mentioned in gemfile which is same like package.json in js projects*).
4. Now create a jekyll project by running ``` jekyll new <project name> ```. It will create all necessary files to make a site using jekyll.
5. Use any editor to edit this folder.
6. Build the site and make it available to local server. ``` bundle exec jekyll serve ```.
7. Short Note: By default it runs on port 4000. But you can mention other ports if you want to use, in config.yml file by just writing ``` port: <port number> ```

### Terminologies

1. **Gems** : A gem is code you can include in Ruby projects. It allows you to package up functionality and share it across other projects or with other people. Gems can perform functionality such as:

* Converting a Ruby object to JSON
* Pagination
* Interacting with APIs such as GitHub
* Jekyll itself is a gem as well as many Jekyll plugins including *jekyll-feed*, *jekyll-seo-tag* and *jekyll-archives*.

2. **Gemfile** : A **Gemfile** is a list of gems required for your site. For a simple Jekyll site it might look something like this:

```
    source "https://rubygems.org"

    gem "jekyll"

    group :jekyll_plugins do
        gem "jekyll-feed"
        gem "jekyll-seo-tag"
    end
```