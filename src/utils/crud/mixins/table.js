import ListItemActions from '../components/ListItemActions.vue'
import ListItemField from '../components/ListItemField.vue'
import TableFooter from '../components/TableFooter.vue'

export default {
  components: {
    ListItemActions,
    ListItemField,
    TableFooter,
  },
  data () {
    return {
      tmp: '',
      pagination: {},
    }
  },
  computed: {
    cleanHeaders () {
      const headers = this.tableFields.map((field) => {
        const header = {}
        header.text = field.text
        header.value = field.name.toLowerCase()
        if (field.sortable !== undefined) {
          header.sortable = field.sortable
        }
        return header
      })
      return headers
    },
    headers () {
      const actionHeader = [{
        text: this.$t('global.datatable.fields.action'),
        value: 'actions',
        sortable: false,
      }]
      return [...actionHeader, ...this.cleanHeaders]
    },
    itemsPerPageOptions () {
      return [
        5,
        10,
        20,
        50,
        100,
      ]
    },
    footerProps () {
      return {
        showFirstLastPage: true,
        rowsPerPageText: this.$t('global.datatable.rowsPerPageText'),
        itemsPerPageOptions: this.itemsPerPageOptions,
      }
    },
  },
  methods: {
    setPage (page) {
      this.pagination.page = parseInt(page)
    },
    clearFilters () {
      this.pagination.page = 1
    },
    setColumnTextModes (props) {
      const columnTextModes = {}
      for (const field of this.tableFields) {
        let textMode = 'cropped'
        if (field.textMode) {
          textMode = field.textMode
        }
        if (field.type === 'dynamic') {
          if (field.textModes) {
            const refField = props.item[field.typeField]
            if (field.textModes[refField]) {
              textMode = field.textModes[refField]
            }
          }
        }
        columnTextModes[field.name.toLowerCase()] = textMode
      }
      return columnTextModes
    },
    textMode (item, key) {
      const field = this.tableFields.find((field) => field.name === key) || {}
      let textMode = field.textMode || 'cropped'
      if (field.type === 'dynamic' && field.textModes) {
        const refField = item[field.typeField]
        if (field.textModes[refField]) {
          textMode = field.textModes[refField]
        }
      }
      return textMode
    },
  },
}
