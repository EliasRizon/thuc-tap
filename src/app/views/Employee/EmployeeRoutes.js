import { EgretLoadable } from 'egret'
import ConstantList from '../../appConfig'
import { withTranslation } from 'react-i18next'
const Agency = EgretLoadable({
  loader: () => import('./Employee'),
})
const ViewComponent = withTranslation()(Agency)
const EmployeeRoutes = [
  {
    path: ConstantList.ROOT_PATH + 'list/employee',
    exact: true,
    component: ViewComponent,
  },
]

export default EmployeeRoutes
