# three-js-webpack

Starter project for Three.JS. Configured with Webpack 4 as a bundler.

Great and easy way to bootstrap your Three.JS project.

## Development

Clone the project and install dependencies:

```bash
git clone https://github.com/aakatev/three-js-webpack.git
npm i
```

Start webpack development server:

```bash
npm run start
```

Webpack configuration is located in [`webpack.config.js`](webpack.config.js).

## Deployment on GitHub Pages

**Works with any other static website hosting too.**

Bundle your code, and push it in your repo:

```bash
npm run build
git add
git commit -m"Deploying on GitHub Pages"
git push
```

## Extra

The code can be formated with prettier:

```bash
npm run format
```