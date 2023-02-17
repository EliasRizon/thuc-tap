import { EgretLoadable } from 'egret'
import ConstantList from '../../appConfig'
import { withTranslation } from 'react-i18next'

const Agency = EgretLoadable({
  loader: () => import('./Districts'),
})

const ViewComponent = withTranslation()(Agency)

const DistrictsRoutes = [
  {
    path: ConstantList.ROOT_PATH + 'directory/districts',
    exact: true,
    component: ViewComponent,
  },
]

export default DistrictsRoutes
