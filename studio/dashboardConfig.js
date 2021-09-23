export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '614c195cf6ea63637743b673',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-oopx8imc',
                  apiId: 'cbaa5ff9-ecd1-4822-97cd-c0657c3ce027'
                },
                {
                  buildHookId: '614c195c4d1e4d5036318e9b',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-tzuypj4j',
                  apiId: '1c18fe3e-5160-4af8-905d-8a103f8bdb14'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/cloudomcs/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-tzuypj4j.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
