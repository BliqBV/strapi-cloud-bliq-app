module.exports = ({env}) => ({
  slugify: {
    enabled: true,
    config: {
      shouldUpdateSlug: true,
      contentTypes: {
        'popup': {
          field: 'slug',
          references: 'title',
        }
      }
    }
  }
})
