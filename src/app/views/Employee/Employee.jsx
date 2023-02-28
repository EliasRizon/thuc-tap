import { Grid, Button } from '@material-ui/core'
import { fetchEmployees } from 'app/redux/actions/EmployeeActions'
import MaterialTable from 'material-table'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import EmployeeEditorDialog from './EmployeeEditorDialog'

function Employee() {
  const [searchObject, setSearchObject] = useState({})
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { employees } = useSelector((store) => store.employee)

  let columns = [
    {
      title: 'Tùy chọn',
      field: 'custom',
      align: 'left',
    },
    {
      title: 'Code',
      field: 'code',
    },
    {
      title: 'Họ tên',
      field: 'name',
    },
    {
      title: 'Email',
      field: 'email',
    },
    {
      title: 'Số điện thoại',
      field: 'phone',
    },
    {
      title: 'Tuổi',
      field: 'age',
    },
    {
      title: 'Xã',
      field: 'commune.name',
    },
    {
      title: 'Huyện',
      field: 'district.name',
    },
    {
      title: 'Tỉnh',
      field: 'province.name',
    },
  ]

  const handleClose = () => {
    setOpenAddDialog(false)
  }

  useEffect(() => {
    dispatch(fetchEmployees({ searchObject }))
  }, [dispatch, searchObject])

  return (
    <div className="m-sm-30">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button
            variant="contained"
            onClick={() => {
              setOpenAddDialog(true)
            }}
          >
            Thêm nhân viên
          </Button>

          {openAddDialog && (
            <EmployeeEditorDialog handleClose={handleClose} t={t} />
          )}
        </Grid>
        <Grid item xs={12}>
          <MaterialTable
            columns={columns}
            data={employees}
            title="Danh sách nhân viên"
            options={{
              search: true,
            }}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Employee
