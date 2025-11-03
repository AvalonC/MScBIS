import { defineClientConfig } from 'vuepress/client'
import { defineAsyncComponent } from 'vue'

export default defineClientConfig({
  enhance({ app }) {
    app.component(
      'EnterpriseApplication',
      defineAsyncComponent(() => import('./components/EnterpriseApplication.vue'))
    )
  }
})