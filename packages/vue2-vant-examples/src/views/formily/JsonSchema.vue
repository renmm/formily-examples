<template>
  <Form :form="form">
    <SchemaField :schema="schema" />
    <Submit :style="{ 'margin-top': '16px' }" round block @submit="log">
      提交
    </Submit>
  </Form>
</template>

<script lang="ts">
import { createForm } from '@formily/core'
import { createSchemaField } from '@formily/vue'
import { Form, Area, Submit } from '@formily/vant'

console.log('formily-examples/packages/vue2-vant-examples/src/views/formily/JsonSchema.vue')

const { SchemaField } = createSchemaField({
  components: {
    Area,
  },
})

export default {
  components: { Form, SchemaField, Submit },
  data() {
    const schema = {
      type: 'object',
      title: '城市',
      properties: {
        area: {
          type: 'array',
          'x-component': 'Area',
          'x-component-props': {
            formItemProps: {
              format: (val: any) =>
                (val || [])
                  .filter((item: any) => !!item)
                  .map((item: { name: any }) => item && item.name)
                  .join('/'),
              placeholder: '选择城市',
            },
            popupProps: {},
            areaProps: {
              areaList: {
                province_list: {
                  110000: '北京市',
                  120000: '天津市',
                },
                city_list: {
                  110100: '北京市',
                  120100: '天津市',
                },
                county_list: {
                  110101: '东城区',
                  110102: '西城区',
                },
              },
            },
            fieldListeners: {},
            popupListeners: {},
            areaListeners: {},
          },
        },
      },
    }

    const form = createForm()

    return {
      form,
      schema,
    }
  },
  methods: {
    log(value: any) {
      console.log(value)
    },
  },
}
</script>