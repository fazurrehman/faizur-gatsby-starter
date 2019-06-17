# Faizur Gatsby Starter

### About me

I am Full Stack Designer, I create website, app, & business applications

### Faizur Gatsby Starter

Get started your work directly from here without installing anything just one step!

Step 1

```bash
gatsby new my-project "https://github.com/fazurrehman/faizur-gatsby-starter"
```

Then Follow these steps

```bash
Install all dependencies
##### npm install

Run Gatsby
##### gatsby develop

```

## Plugins

- gatsby-plugin-sass
- gatsby-plugin-react-css-modules
- gatsby-source-filesystem
- gatsby-transformer-sharp
- gatsby-plugin-sharp
- gatsby-plugin-postcss
- gatsby-plugin-manifest
- gatsby-plugin-react-helmet

## Sass

```bash

{
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          autoprefixer({
            grid: true,
            browsers: ["last 10 version"],
          }),
          cssnano(),
        ],
        precision: 8,
        cssLoaderOptions: {
          localIdentName: "[name]__[local]--[hash:base64:5]",
          ## Class class hash value only, remove comment below and delete above line
          # localIdentName: "[hash:base64:5]",
        },
      },
    },
```

## Image loader with blur effect

- gatsby-transformer-sharp
- gatsby-plugin-sharp
- How I made image components [reference](https://noahgilmore.com/blog/easy-gatsby-image-components/)
