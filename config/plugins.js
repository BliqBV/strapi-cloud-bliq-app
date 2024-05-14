module.exports = ({env}) => ({
  slugify: {
    enabled: true,
    config: {
      shouldUpdateSlug: false,
      contentTypes: {
        'popup': {
          field: 'slug',
          references: 'title',
        }
      }
    }
  }
})
