export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e1f30afb38f91f240e6fcd4',
                  title: 'Sanity Studio',
                  name: 'taylor-sanity-gatsby-blog-studio',
                  apiId: '4ec6c34c-cf7c-4825-a187-a25282d7a0d7'
                },
                {
                  buildHookId: '5e1f30af5b060815c2fc65e5',
                  title: 'Blog Website',
                  name: 'taylor-sanity-gatsby-blog',
                  apiId: 'c4b40d72-264a-4733-8f5d-9b67b948557c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gilbster/taylor-sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://taylor-sanity-gatsby-blog.netlify.com', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
