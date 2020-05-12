---
layout: post
title: Introduction
permalink: /jekyll/introduction
---
<p align="center"><img src="{{ 'assets/jekyll.png' | relative_url }} " width="420" height="140"></p>

{% assign beatles = page.permalink | split: "/"  %}


### Jekyll

Jekyll is a static site generator. It uses markdown and layouts to create beautiful looking websites. It is built on Ruby framework.

### Terminologies

1. **Gems** : A gem is code you can include in Ruby projects. It allows you to package up functionality and share it across other projects or with other people. Gems can perform functionality such as:

* Converting a Ruby object to JSON
* Pagination
* Interacting with APIs such as GitHub
* Jekyll itself is a gem as well as many Jekyll plugins including *jekyll-feed*, *jekyll-seo-tag* and *jekyll-archives*.

2. **Gemfile** : A **Gemfile** is a list of gems required for your site. For a simple Jekyll site it might look something like this.


```ruby
    
    source "https://rubygems.org"

    gem "jekyll"

    group :jekyll_plugins do
    gem "jekyll-feed"
    gem "jekyll-seo-tag"
    end
```
