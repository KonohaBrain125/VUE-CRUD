import {
  mapState,
  mapGetters,
  mapMutations,
  mapActions
} from 'vuex'
import DataTableRow from '../components/DataTableRow.vue'
import DataTableControls from '../components/DataTableControls.vue'

export default {
  components: {
    DataTableRow,
    DataTableControls
  },
  props: [
    'tableFields',
    'deleteMode',
    'customButtons',
    'itemElements',
    'editButton',
    'meta',
    'primaryKey',
    'activeColumnName',
    'createMode',
    'editMode',
    'mainFilter',
    'fieldFilters',
    'exportButton',
    'refreshButton',
    'selectManyMode',
    'updateManyMode',
    'removeManyMode'
  ],
  data () {
    return {
      selected: []
    }
  },
  computed: {
    ...mapState('app', ['page']),
    ...mapState('crud', ['filesPath', 'prefix', 'path', 'nextItem', 'moveItemRun',
      'moveItemDirection', 'currentItemIndex'
    ]),
    ...mapGetters('crud', ['itemsList']),
    selectedIds () {
      return this.selected.map(item => item.meta.id)
    },
    items () {
      return this.itemsList(
        this.tableFields,
        this.meta,
        this.primaryKey,
        this.customButtons,
        this.activeColumnName
      )
    },
    excelName () {
      return this.$t(`global.routes.${this.page}`)
    }
  },
  watch: {
    moveItemRun (val) {
      if (val) {
        const {
          moveItemDirection
        } = this
        let currentIndex = this.currentItemIndex
        let {
          page
        } = this.pagination
        const {
          rowsPerPage
        } = this.pagination
        const {
          totalItems
        } = this
        let possible = true
        if (moveItemDirection === 'previous') {
          if (currentIndex > 0) {
            currentIndex -= 1
          } else if (page > 1) {
            page -= 1
            currentIndex = rowsPerPage - 1
          } else {
            possible = false
          }
        } else if (moveItemDirection === 'next') {
          if (currentIndex < rowsPerPage - 1 && (page - 1) * rowsPerPage + currentIndex + 1 <
            totalItems) {
            currentIndex += 1
          } else if (page < Math.ceil(totalItems / rowsPerPage)) {
            page += 1
            currentIndex = 0
          } else {
            possible = false
          }
        }
        if (possible) {
          this.moveDetailsItem(page, currentIndex)
        }
        this.moveItem(['', false])
      }
    }
  },
  methods: {
    ...mapMutations('crud', [
      'showItemDetailsDialog',
      'setCurrentItem',
      'resetItems',
      'resetItem',
      'editItemDialog',
      'createItemDialog',
      'multipleEditDialog',
      'setItemElementsInfo',
      'editItemElementsDialog',
      'setSelectedIds',
      'setCurrentItem',
      'moveItem'
    ]),
    ...mapActions('crud', [
      'getItem',
      'updateItem',
      'storeItem',
      'deleteItem',
      'getItemElements',
      'mulitipleItemsUpdate',
      'mulitipleItemsDelete',
      'getItemDetails',
      'runTableRefreshing'
    ]),
    ...mapActions([
      'openAlertBox'
    ]),
    refreshTable () {
      this.runTableRefreshing()
    },
    edit (id, index) {
      this.setCurrentItem({
        id,
        index
      })
      this.getItem([id]).then((response) => {
        this.editItemDialog(id)
      })
    },
    create () {
      this.resetItem()
      this.createItemDialog()
    },
    suspend (id) {
      const obj = {}
      obj[this.activeColumnName] = 0
      this.updateItem([
        id,
        obj,
        this.$t('global.alerts.suspended'),
        this.$t('global.alerts.suspendError')
      ])
    },
    restore (id) {
      const obj = {}
      obj[this.activeColumnName] = 1
      this.updateItem([
        id,
        obj,
        this.$t('global.alerts.restored'),
        this.$t('global.alerts.restoreError')
      ])
    },
    destroy (id) {
      if (confirm(this.$t('global.alerts.confirm'))) {
        this.deleteItem([
          id,
          this.$t('global.alerts.deleted'),
          this.$t('global.alerts.deleteError')
        ])
      }
    },
    checkSelected () {
      if (this.selected.length === 0) {
        this.openAlertBox(['alertError', this.$t('global.datatable.noItemsSelected')])
        return false
      }
      if (confirm(this.$t('global.datatable.confirm'))) {
        return true
      }
      return false
    },
    editSelected () {
      if (this.selected.length === 0) {
        this.openAlertBox(['alertError', this.$t('global.datatable.noItemsSelected')])
        return false
      }

      this.setSelectedIds(this.selected)
      this.resetItem()
      this.multipleEditDialog()
    },
    suspendSelected () {
      if (this.checkSelected()) {
        this.mulitipleItemsUpdate([{
          ids: this.selectedIds,
          request: {
            active: 0
          }
        },
        this.$t('global.alerts.suspended'),
        this.$t('global.alerts.suspendError')
        ])
      }
    },
    restoreSelected () {
      if (this.checkSelected()) {
        this.mulitipleItemsUpdate([{
          ids: this.selectedIds,
          request: {
            active: 1
          }
        },
        this.$t('global.alerts.restored'),
        this.$t('global.alerts.restoreError')
        ])
      }
    },
    destroySelected () {
      if (this.checkSelected()) {
        this.mulitipleItemsDelete([{
          ids: this.selectedIds
        },
        this.$t('global.alerts.deleted'),
        this.$t('global.alerts.deleteError')
        ])
      }
    },
    custom (name, item, index) {
      this.$parent.custom(name, item, index)
    },
    editItemElements (name, id) {
      const obj = this.itemElements[name]
      this.setItemElementsInfo([id, obj])
      this.getItemElements()
    },
    rowDblclickAction (item) {
      if (this.editButton) {
        this.edit(item.meta.id)
      } else {
        let goToItemButton = false
        for (const button of this.customButtons) {
          if (button.name === 'goToItem') {
            goToItemButton = true
            break
          }
        }
        if (goToItemButton) {
          this.custom('goToItem', item)
        }
      }
    }
  }
}
