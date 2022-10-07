---
title: How To Integrate Utterances With Astro
author: Vincent Taneri
datetime: 2022-10-07T09:53:35Z
slug: how-to-integrate-utterances-with-astro
featured: true
draft: false
tags:
  - Astro
  - Utterances
description: "Let's take a look at how I integrated Utterances with my Astro blog without any additional UI library (Using Astro component)"
---

In this post, we're going to take a look at how I integrated Utterances with my Astro blog without any additional UI library. We'll create an Astro component that handle calling the Utterances script, and also see how we can change the theme of the Utterances' IFrame dynamically.

## Table of contents

## What Is Utterances

First, let's get to know [Utterances](https://utteranc.es/). Utterances is a lightweight comments widget build on GitHub issues. It's also completely free and open source. I'm using Utterances as the comment system of my blog, you can scroll down to the comments section below to see Utterances in action.

> You can read more about Utterances in its [official website](https://utteranc.es/).

## Generating Utterances Script

Before we can put Utterances in our site, we have to generate a script to call the Utterances IFrame. You can do it by following the instructions in the [official website](https://utteranc.es/). Or the instructions below if you don't want to leave the site :satisfied:.

First, you have to [install Utterances in your GitHub account](https://github.com/apps/utterances). Give Utterances to your site's repository. Also make sure that the repository is public.

Next, fill in the template below with your informations.

```html
<script
  src="https://utteranc.es/client.js"
  repo="[ENTER REPO HERE]"
  issue-term="[ISSUE TERM]"
  label="[LABEL NAME]"
  theme="[THEME NAME]"
  crossorigin="anonymous"
  async
></script>
```

Leave `src` as it is.

The `repo` structure is: `owner/repo`. For example: `repo=tanerijun/vitaneri-v3`.

For `issue-term`, you can choose among: `pathname`, `url`, `title`, `og:title`, `[ISSUE NUMBER]`, `[SPECIFIC TERM]`.

Fill `label` with the label that'll be assigned to issues created by Utterances. `label` is optional. If you don't need it, just remove the `label` attribute from the `script` tag. But if you do need it, make sure that the label exist in your repo. To create your own label, you can read the instructions [here](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/managing-labels#creating-a-label).

As for `theme`, you can choose among these options: `github-light`, `github-dark`, `preferred-color-scheme`, `github-dark-orange`, `icy-dark`, `dark-blue`, `photon-dark`, `boxy-light`, `gruvbox-dark`.

The next step is to call that script from your Astro app.

## Creating Utterances Astro component

Let's create a component that can call that Utterances script for reusability. Start by creating an Astro component. I named mine `Utterances.astro`. Next, put a single `div` element in the component with whatever `id` you like.

```html
<div id="utterances"></div>
```

To send the script to the client, we have to write our JavaScript in a `<script>` tag, not frontmatter(`---`). Inside the `<script>` tag, let's put in these code:

```js
const script = document.createElement("script");
const utterances = document.querySelector("#utterances"); // your id in your html above

// Replace the value of each key with yours
Object.entries({
  src: "https://utteranc.es/client.js",
  repo: "tanerijun/vitaneri-v3",
  "issue-term": "pathname",
  label: "post comments", // omit this line, if you don't need label
  theme: "github-dark",
  crossorigin: "anonymous",
}).forEach(([key, value]) => {
  script.setAttribute(key, value);
});

utterances?.parentNode?.insertBefore(script, utterances);
```

So basically, we're creating a `script` element, then we assign it all our Utterances` attributes, and finally, we insert the script.

Your `Utterances.astro` should now look something like this:

```astro
<div id="utterances"></div>

<script>
  const script = document.createElement("script");
  const utterances = document.querySelector("#utterances");
  const currentTheme = localStorage.getItem("theme");

  // Set configurations
  Object.entries({
    src: "https://utteranc.es/client.js",
    repo: "tanerijun/vitaneri-v3",
    "issue-term": "pathname",
    label: "post comments",
    theme: currentTheme == "light" ? "github-light" : "github-dark",
    crossorigin: "anonymous",
  }).forEach(([key, value]) => {
    script.setAttribute(key, value);
  });

  utterances?.parentNode?.insertBefore(script, utterances);
</script>
```
