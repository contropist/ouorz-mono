<div align="center">
  <h1>OUORZ-NEXT</h1>
  <p>Front-end code that powers <a href="https://www.ouorz.com" target="_blank">www.ouorz.com</a></p>

  <a href="https://github.com/HelipengTony/ouorz-next">
    <img src="https://github.com/HelipengTony/ouorz-next/workflows/Tests/badge.svg?branch=main" alt="build status">
  </a>
  
  <a href="https://codeclimate.com/github/HelipengTony/ouorz-next/maintainability">
    <img src="https://api.codeclimate.com/v1/badges/241ce6373b176b12f511/maintainability" alt="maintainability" />
  </a>

  <a href="https://github.com/HelipengTony/ouorz-next">
    <img src="https://img.shields.io/github/license/HelipengTony/ouorz-next.svg" alt="license">
  </a>
</div>

<br/>

![Thumbnail_index](https://static.ouorz.com/screen-shot-ouorz-next.png)

<br/>

## Foreword
New site is in planning, stay tuned :)

<br/>

## See Also
- Antony-Nuxt [https://github.com/HelipengTony/antony-nuxt](https://github.com/HelipengTony/antony-nuxt)
- Antony [https://github.com/HelipengTony/antony](https://github.com/HelipengTony/antony)
- Tony [https://github.com/HelipengTony/tony](https://github.com/HelipengTony/tony)

<br/>

## Development
### Gitflow
![git_branching_workflow](https://user-images.githubusercontent.com/21199796/135544887-50b1e78b-aa72-4e98-8f08-baac092cf393.jpg)

\* Only applies to non-major changes (vX.X.X to vX.X.Y)

<br/>

### Project Setup
```bash
git clone git@github.com:HelipengTony/ouorz-next.git
cd ouorz-next
```

Create a `.env` file with your configuration, see below for a list of environmental variables used in this project:

+ LeanCloud:
  - NEXT_PUBLIC_LC_KEY
  - NEXT_PUBLIC_LC_ID
+ Buttondown:
  - NEXT_PUBLIC_BUTTONDOWN_TOKEN
+ Sentry:
  - NEXT_PUBLIC_SENTRY_DSN 
  - SENTRY_AUTH_TOKEN
  - SENTRY_PROJECT
  - SENTRY_ORG
+ On-demand ISR:
  - REVALIDATION_REQUEST_TOKEN

```
yarn install
yarn run dev
```

<br/>

## Deployment
### Next.js
This project utilizes a combination of Server-side Rendering (SSR) and Incremental Static Generation (ISG):

```bash
yarn run build
yarn run start
```

<br/>

### Deploy with Vercel / Netlify

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/HelipengTony/ouorz-next)

[![Deploy with Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/HelipengTony/ouorz-next)

<br/>

### WordPress REST API configurations

Copy the codes in `wordpress/functions.php` and add to your WordPress theme's `functions.php`
