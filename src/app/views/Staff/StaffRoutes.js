import { EgretLoadable } from 'egret'
import ConstantList from '../../appConfig'
import { withTranslation } from 'react-i18next'
const Agency = EgretLoadable({
  loader: () => import('./Staff'),
})
const ViewComponent = withTranslation()(Agency)
const StaffRoutes = [
  {
    path: ConstantList.ROOT_PATH + 'list/staff',
    exact: true,
    component: ViewComponent,
  },
]

export default StaffRoutes
