const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const Airtable = require('airtable');
  const base = new Airtable({apiKey: 'keymdKFE0hyZu80RQ'}).base('appHcBRyHNYvNY113');
  const results = await base('Blog').select({
    view: "Grid view",
    filterByFormula: '{status} = "publish"'
  }).all();

  const authors = await base('Authors').select({
    view: "Grid view",
  }).all();

  let categories = new Set();
  let tags = new Set();

  const findAuthor = id => authors.filter(author => author.id === id)

  results.forEach(({ fields }) => {
    if (fields.category) categories.add(fields.category)
    if (fields.tags) {
      fields.tags.forEach(tag => {
        tags.add(tag)
      })
    }
    createPage({
      path: `post/${fields.slug}`,
      component: path.resolve(`./src/components/cardDetails.js`),
      context: {
        data: {...fields, ...{ author: findAuthor(fields.author[0]) }},
      },
    })
  })
  categories = Array.from(categories);
  tags = Array.from(tags);
  createPage({
    path: '/',
    component: path.resolve(`./src/components/indexPage.js`),
    context: {
      posts: results,
      authors: authors,
      categories: categories,
      tags: tags,
    },
  })

  categories.forEach(category => {
    createPage({
      path: `category/${category}`,
      component: path.resolve(`./src/components/statusPage.js`),
      context: {
        posts: results.filter(result => result.fields.category === category),
        authors: authors,
      },
    })
  })

  tags.forEach(tag => {
    createPage({
      path: `tag/${tag}`,
      component: path.resolve(`./src/components/statusPage.js`),
      context: {
        posts: results.filter(result => result.fields.tags && (result.fields.tags.includes(tag))),
        authors: authors,
      },
    })
  })
}