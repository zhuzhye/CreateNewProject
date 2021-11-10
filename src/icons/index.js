
import Vue from 'vue'
import SvgIcon from '@/components/svgIcon.vue'// svg组件

// register globally

const requireAll = requireContext => requireContext.keys().map(requireContext)
/**
 * require.context(directory,useSubdirectories,regExp)
 * require.context():需要一次性的引入某个文件夹下的所有文件
 形参：
 directory：需要引入文件的目录
 useSubdirectories：是否查找该目录下的子级目录
 regExp：匹配引入文件的正则表达式
 */
Vue.component('svg-icon', SvgIcon)

const req = require.context('./svg', false, /\.svg$/)
requireAll(req)


