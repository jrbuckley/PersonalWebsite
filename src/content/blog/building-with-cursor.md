---
title: "A Developer's Take on Building with Cursor"
description: "I built my personal website using an AI coding agent called Cursor and a tech stack new to me. Here’s what worked, what didn’t, and what I learned."
publishDate: "2025-05-09"
author: "Jorge Buckley"
tags: ["Cursor", "Web Development", "AI Tools"]
image: "/blog-images/built-with-cursor-image.png"
slug: "building-with-cursor"
---

## Introduction
This blog post is not meant for the engineers who are well-versed in agentic tools and read up on the latest TechCrunch articles every morning. It's also not *just* for the people that code daily as part of their job. My hope is that if you read this it's because you're curious about new technology and have a desire to see your ideas come to life. I, like many others, have turned to tools like ChatGPT to simplify my life to get answers and suggestions as quickly as possible. I'm also someone who has lots of ideas of things I want to build, but in the past have not been committed to seeing them through, whether that's due to the distractions of life or simply feeling discouraged by a lack of required skills and overwhelmed by how long it might take to learn them. 

The truth is, this "skill gap" excuse doesn't really apply anymore. The technology available to us now makes creating so much easier. You don't have to be a seasoned software architect to bring your ideas to life. You don't even have to be a *software engineer*. For anyone who isn't already familiar with the term "vibe coding", it basically means you can code things without concern about doing it the "right way" or with a full understanding of what is being done. Tools like [Cursor](https://www.cursor.com/) and [Windsurf](https://windsurf.com/editor) have become popular for people who want to vibe code. They are agent coding tools that write code for you by incorporating models from companies like OpenAI, Anthropic, and Google. 

For the semi-experienced engineers like myself, you can find yourself skeptical of the capabilities of these tools and be hesitant to use them. I want to stress how much of a mistake that is. Avoiding these tools is like tying one hand behind your back, and as someone who types on a keyboard for a living, that's not ideal. I'm writing this post to share my first experience building with Cursor. If I'm being honest, it wasn't a completely smooth experience and there were things I had to learn along the way to get the outcomes I was looking for. It does, however, make my life easier and it's a tool that I will keep using as I continue my journey of building. I hope you can learn something from this post or at least are encouraged to see through your ideas. It's time to stop the excuses.

## Getting Started Creating my Personal Website
I want to briefly acknowledge why I decided to create a personal website to begin with. I was someone who continuously had ideas for different things I wanted to create, but rarely acted on them. As mentioned before, my excuses were that I didn't have the skills and didn't have the time to learn them. After attending a tech conference and meeting some awesome people who built out their passion projects and chose to share them with the world, it lit a fire in me to do the same. Building a personal website is a way to keep me accountable and sustain that motivation. I want it to be a place that not only serves as a cooler-looking resume than a PDF, but also lets me share the projects I work on with others and be able to post about some of the experiences and things I learn along the way.

With agent coding tools already being on my radar and knowing that I would want to use them to build out some of my ideas, I decided to use Cursor to build out my website. I honestly only chose Cursor because it was the most popular tool being discussed at the time on my Twitter feed. I haven't had a chance to experiment with other agent coding tools yet, but Cursor has worked well for me. I leaned into letting it do the heavy lifting and use a web framework ([Astro](https://astro.build/)) that I was unfamiliar with at the time.

While building out a static site is a fairly straight-forward thing to do, using Cursor definitely sped up the development and allowed me to leverage other technology that I otherwise would not have attempted to use. If you are interested in seeing the code behind this website you can find it [here](https://github.com/jrbuckley/PersonalWebsite).

## Where Cursor Made Life Easier
Using Cursor was a game-changing experience for me. In the past I have used tools like ChatGPT and GitHub Copilot to write out code that formats data into a specific structure. 95% of the code would still be written by me. With Cursor I opened up an empty folder, asked it to build out a personal website for me using Astro, and it created everything. It took care of the file structure, installed the required packages, and gave me a functional site complete with home, about, and contact pages already formatted and styled. 

When prompted to add additional features like dynamic blog routing and changing the home page layout, it created the necessary additional files and modified the existing code to make things work. There is even an option to have Cursor show you the changes and let you confirm them before they are made. This allows you to verify the work and better understand what's happening at each step.

In the chat view you can toggle between the `"Agent"` and `"Ask"` modes. `Agent` does the work for you but `Ask` serves more like ChatGPT in that you can ask questions related to your code, such as, "What steps do I need to take to get my code ready to deploy?". For people who may have a preference in the LLM (Large Language Model) being used behind the scenes, you can toggle between options like `claude-3.5-sonnet` or `gpt-4o`, or use the default Auto option where Cursor manages what is used.

## Where Cursor Fell Short
While Cursor did a great job setting most things up for me, there were some pain points throughout the process that did create some frustrating situations. One of the issues that many people experience is what's called a "hallucination". This is where the tool will perform tasks irrelevant to what you ask it to do. I asked to change the style of a card in my contact page and while it did do that, it also decided to change the entire layout of my home page. While in this case it wasn't a catastrophic issue, it can be annoying and lead to impactful changes you aren't aware of unless you're paying close attention.

Another issue which sounds serious and potentially detrimental is the "Loop of Death" that a lot of these coding tools can face. Basically it produces broken code or an error, and as you prompt it to fix its mistake it only continues to encounter more issues. This can be a real problem because it not only leads to errors in a lot of different files, but also uses up a lot of prompt requests, which you may have a limited amount of depending on your tool plan. 

The final big issue I want to bring up is more for the people who don't have much context when it comes to developing, and it isn't necessarily that the tool does something wrong. These tools are good at building what you ask, but you might not think to ask everything you should. You could build out a sleek looking website that does exactly what you want, but it could be filled with security vulnerabilities, not be an accessible site, or display sensitive things like API keys which can all lead to costly consequences if you were to deploy these for others to access. While you can't blame the tool for not considering these things, ideally they should be accounted for.

## Tips I Learned to Make Creating Smoother
Probably the most important tip I can give when using a tool like Cursor is to make commits early and often. Every time the code is at a point where you hit a milestone, regardless of how significant, commit your changes. This makes it easy to go back if you experience the hallucinations or loop of death challenges to restart from a fresh point. It should be noted that Cursor has an option to go back to a previous prompt and `"restore checkpoint"`. This provides similar functionality, but I find stashing easier for backtracking.

Cursor Rules are a newer feature as well that allow you to provide guidelines for the tool to follow which do help resolve a lot of potential issues. You can find examples of `.cursorrules` templates all over the internet or create your own, but I found this [github repository](https://github.com/PatrickJS/awesome-cursorrules) useful for some other projects I've been working on.

## Is AI an Asset or a Replacement?
This is a question that was talked about a lot at the tech conference I was recently at, and the consensus was that these AI tools are absolutely an asset that we should all be leveraging. Yes, they "replace" our need for some basic knowledge, but that encourages us to learn more in order to get the most out of these tools. 

If you have zero understanding of what you're doing you can still create some interesting things, but if you take the time to learn more, technology will give you access to endless possibilities.

## Closing Thoughts
This experience has continued to open my eyes to the work that can be done with minimal resources. AI isn't going to disappear, it's only going to get more powerful, so why not use it for your benefit. I would advise anyone who has ever thought "it would be great if there was a website or app that could do *this*" to try and build it. There are plenty of free tools to do so. Go and create. Someone out there will be grateful that you did.

I hope you enjoyed reading this, and while I'm an engineer and not a writer, I will keep making posts like this when I come across something worth sharing.

