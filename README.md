# The Great Gatsby Bootcamp

This is a basic blog I developed by following Andrew Mead's [Gatsby JS Bootcamp](https://www.youtube.com/watch?v=8t0vNu2fCCM&t=8700s). My goal was to become familiar with Gatsby JS and come to a deeper understanding on some of its use cases. Since I had already become familiar with React, this seemed like a great step to take in order to learn how to create websites more quickly. Learning how to pull from a CMS is also a skill that can be valuable to organizations that are already using platforms like Contenful, Wordpress, etc.

View the blog [here](https://quiet-queijadas-4a35a1.netlify.app/).

![Screenshot of bloglist on the deployed site](/screenshot.png)

## My process

### Built with

- SCSS
- React 
- Gatsby JS
- Node JS

### Challenges & Takeaways

The Gatsby bootcamp is at least 2 years old at this point, so some of the information it contained was outdated. For instance, GraphQL is now obsolete with Gatsby 5 and has been replaced with a more robust version of GraphiQL. The Gatsby react-helmet plugin will also be deprecated soon, so instead I used the Gatsby Head API to generate titles for the blog pages.

The most challenging part of this bootcamp was learning how to embed images from Contentful. The type for rich text has changed from JSON to raw since Andrew's videos, which affected my queries and render options. I used [this](https://www.gatsbyjs.com/blog/how-to-use-the-contentful-rich-text-field-with-gatsby/#gatsby-skip-here) article for guidance, but I think it would ultimately help if I took a deeper look into Contentful's rich-text-types package and the gatsbyImageData query reference. An idea for the future is to practice embedding content from a CMS after doing more research into modern methods.