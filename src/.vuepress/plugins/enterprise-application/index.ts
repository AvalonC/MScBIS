import { path } from 'vuepress/utils'
import type { PluginFunction, PluginObject } from 'vuepress/core'

export interface EnterprisePluginOptions {
  dataPath?: string
  defaultCompanies?: string[]
}

export const enterpriseApplicationPlugin = (
  options: EnterprisePluginOptions = {}
): PluginFunction => {
  return (app) => {
    return {
      name: 'vuepress-plugin-enterprise-application',
      clientConfigFile: path.resolve(__dirname, './client.ts'),
      define: {
        __ENTERPRISE_DATA_PATH__: options.dataPath || '/test.csv',
        // __DEFAULT_COMPANIES__: options.defaultCompanies || [
        //   "国家电网有限公司",
        //   "中国石油天然气集团有限公司",
        //   "中国建筑股份有限公司"
        // ]
      }
    } as PluginObject
  }
}