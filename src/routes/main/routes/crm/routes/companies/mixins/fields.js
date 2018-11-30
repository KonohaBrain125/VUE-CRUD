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
          column: 'name',
          text: this.$t('fields.name'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'name',
        },
        {
          type: 'input',
          column: 'common_name',
          text: this.$t('fields.commonName'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'commonName',
          apiObject: {
            name: 'common_name',
          },
        },
        {
          type: 'select',
          url: 'crm/company-types',
          list: {
            value: 'id',
            text: 'name',
            data: []
          },
          column: 'company_type_id',
          text: this.$t('fields.companyType'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'companyType',
          apiObject: {
            name: 'company_type.name',
          }
        },
        {
          text: this.$t('fields.businessAreas'),
          name: 'businessAreas',
          apiObject: {
            name: 'company_business_areas',
            functions: ['list']
          },
          details: false,
          hidden: true
        },
        {
          type: 'input',
          column: 'nip',
          text: this.$t('fields.nip'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          name: 'nip',
          details: false
        },
        {
          type: 'input',
          column: 'regon',
          text: this.$t('fields.regon'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'krs',
          text: this.$t('fields.krs'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'select',
          url: 'crm/street-prefixes',
          list: {
            value: 'id',
            text: 'description',
            data: []
          },
          column: 'street_prefix_id',
          text: this.$t('fields.streetPrefix'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          name: 'streetPrefix',
          apiObject: {
            name: 'street_prefix.name',
          },
          details: false
        },
        {
          text: this.$t('fields.address'),
          name: 'address',
          details: false,
          hidden: true
        },
        {
          type: 'input',
          column: 'street',
          text: this.$t('fields.street'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'house_number',
          text: this.$t('fields.houseNumber'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'apartment_number',
          text: this.$t('fields.apartmentNumber'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'zip_code',
          text: this.$t('fields.zipCode'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'city',
          text: this.$t('fields.city'),
          grid: 'xs12 sm6 md4 lg6 xl3',
          name: 'city',
          details: false
        },
        {
          type: 'input',
          column: 'borough',
          text: this.$t('fields.borough'),
          grid: 'xs12 sm6 md4 lg6 xl3',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'county',
          text: this.$t('fields.county'),
          grid: 'xs12 sm6 md4 lg6 xl3',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'voivodship',
          text: this.$t('fields.voivodship'),
          grid: 'xs12 sm6 md4 lg6 xl3',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'email',
          text: this.$t('fields.email'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'web_page',
          text: this.$t('fields.webPage'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'fax',
          text: this.$t('fields.fax'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'phone',
          text: this.$t('fields.phone'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'coordinates_lat',
          text: this.$t('fields.coordinatesLat'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'coordinates_lng',
          text: this.$t('fields.coordinatesLng'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'checkbox',
          column: 'coordinates_checked',
          text: this.$t('fields.coordinatesChecked'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'google_map_place',
          text: this.$t('fields.googleMapPlace'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'select',
          url: 'crm/street-prefixes',
          list: {
            value: 'id',
            text: 'description',
            data: []
          },
          column: 'correspondence_street_prefix_id',
          text: this.$t('fields.correspondenceStreetPrefix'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_street',
          text: this.$t('fields.correspondenceStreet'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_house_number',
          text: this.$t('fields.correspondenceHouseNumber'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_apartment_number',
          text: this.$t('fields.correspondenceApartmentNumber'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_zip_code',
          text: this.$t('fields.correspondenceZipCode'),
          grid: 'xs6 sm3 md2 lg3 xl2',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_city',
          text: this.$t('fields.correspondenceCity'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_borough',
          text: this.$t('fields.correspondenceBorough'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_county',
          text: this.$t('fields.correspondenceCounty'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
        {
          type: 'input',
          column: 'correspondence_voivodship',
          text: this.$t('fields.correspondenceVoivodship'),
          grid: 'xs12 sm6 md4 lg6 xl4',
          table: false,
          details: false
        },
      ]
    },
  },
}
