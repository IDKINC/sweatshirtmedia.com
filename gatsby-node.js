const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')
const { attachFields } = require(`gatsby-plugin-node-fields`)

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
  {
    allMarkdownRemark(limit: 1000, filter: {internal: {}, frontmatter: {templateKey: {ne: "team-member"}}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            templateKey
            featuredImage {
              childImageSharp {
                resize(width: 600, height: 600, cropFocus: CENTER) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(({node, index}) => {
      const id = node.id
      let related = []
      if(node.frontmatter.templateKey === "project"){
        
        let filteredPosts = posts.filter(({node: post}) => post.frontmatter.templateKey === node.frontmatter.templateKey && node.id !== post.id)
        const edgeCount = filteredPosts.length
        const relatedIndexes = randomNum(0, edgeCount);
        
        related = [filteredPosts[relatedIndexes[0]].node,
        filteredPosts[relatedIndexes[1]].node,
        filteredPosts[relatedIndexes[2]].node, filteredPosts[relatedIndexes[3]].node,
        filteredPosts[relatedIndexes[4]].node,
        filteredPosts[relatedIndexes[5]].node]
      }

      createPage({
        path: node.fields.slug,
        tags: node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
          related
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}


function isProjectNode(node) {
  if (node.internal.type !== "MarkdownRemark") {
    return false
  }

  return true
}

function randomNum(min, max, currentIndex = null) {
  var n = [];
  var i = 0;
  while (i < 6) {
    var num = Math.floor(Math.random() * max) + min;
    if (num !== currentIndex && n.indexOf(num) === -1) {
      n.push(num);
      i++;
    }
  }
  return n;
}

const descriptors = [
  {
    predicate: isProjectNode,
    fields: [
      {
        name: "weight",
        getter: node => node.frontmatter.weight,
        defaultValue: 0,
      },
      {
        name: "ogImage",
        getter: node => node.frontmatter.ogImage,
        defaultValue: "",
      },
      {
        name: "youtubeLink",
        getter: node => node.frontmatter.youtubeLink,
        defaultValue: "",
      },
      {
        name: "embedYouTube",
        getter: node => node.frontmatter.embedYouTube,
        defaultValue: true,
      },
      {
        name: "externalLink",
        getter: node => node.frontmatter.externalLink,
        defaultValue: "",
      },
      {
        name: "clients",
        getter: node => node.frontmatter.clients,
        defaultValue: [],
      },
      {
        name: "type",
        getter: node => node.frontmatter.type,
        defaultValue: "Project",
      },
      {
        name: "quote",
        getter: node => node.frontmatter.quote,
        defaultValue: "",
      },
    ],
  },
]




exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })

    createNodeField({
      name: `teamID`,
      node,
      value: (node.frontmatter.name ? slugify(node.frontmatter.name) : ""),
    })
  }

  attachFields(node, actions, getNode, descriptors)
}

function slugify(string) {
  const a = 'àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;'
  const b = 'aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------'
  const p = new RegExp(a.split('').join('|'), 'g')

  return string.toLowerCase()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(p, c => b.charAt(a.indexOf(c))) // Replace special characters
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}


