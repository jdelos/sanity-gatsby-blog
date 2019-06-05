export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cf7a4192f9d8f1f30f3b3f4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a8jc7d6y',
                  apiId: 'b7c0009f-8bac-4bd0-883a-22055c213bb8'
                },
                {
                  buildHookId: '5cf7a419e28c4ed78aeb87f9',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mdf8nq4i',
                  apiId: '7630f0e5-6456-4329-a990-bd84d2964bd1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jdelos/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mdf8nq4i.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
