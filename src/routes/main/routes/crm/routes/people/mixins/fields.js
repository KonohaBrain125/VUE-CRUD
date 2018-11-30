export default {
  computed: {
    fieldsInfo () {
      return [
        {
          text: this.$t('fields.id'),
          name: 'id',
          details: false,
          hidden: true
        },
        {
          type: 'input',
          column: 'lastname',
          text: this.$t('fields.lastname'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'lastname',
        },
        {
          type: 'input',
          column: 'firstname',
          text: this.$t('fields.firstname'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'firstname',
        },
        {
          type: 'input',
          column: 'distinction',
          text: this.$t('fields.distinction'),
          required: false,
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'distinction',
        },
        {
          type: 'select',
          url: 'crm/languages',
          list: {
            value: 'id',
            text: 'name',
            data: []
          },
          column: 'language_id',
          text: this.$t('fields.language'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'language',
          apiObject: {
            name: 'language.name',
          },
        },
        {
          type: 'select',
          url: 'crm/sexes',
          list: {
            value: 'id',
            text: 'name',
            data: []
          },
          column: 'sex_id',
          text: this.$t('fields.sex'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'sex',
          apiObject: {
            name: 'sex.name',
          },
        },
        {
          type: 'input',
          column: 'email',
          text: this.$t('fields.email'),
          required: false,
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'email',
        },
        {
          type: 'input',
          column: 'phone',
          text: this.$t('fields.phone'),
          required: false,
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'phone',
        },
      ]
    },
  }
}
