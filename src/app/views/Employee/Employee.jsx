import { Grid, Button } from '@material-ui/core'
import {
  deleteEmployee,
  fetchEmployees,
} from 'app/redux/actions/EmployeeActions'
import MaterialTable from 'material-table'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import EmployeeEditorDialog from './EmployeeEditorDialog'

function Employee() {
  const [searchObject, setSearchObject] = useState({})
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const [openEditDialog, setOpenEditDialog] = useState(false)
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { employees } = useSelector((store) => store.employee)

  let columns = [
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
  ]

  const handleClose = () => {
    setOpenAddDialog(false)
  }

  const handleDelete = (employeeId) => {
    dispatch(deleteEmployee(employeeId))
  }

  useEffect(() => {
    dispatch(fetchEmployees({ searchObject }))
  }, [dispatch, searchObject])

  return (
    <div className="m-sm-30">
      <Grid container spacing={2}>
        {openAddDialog && (
          <EmployeeEditorDialog handleClose={handleClose} t={t} />
        )}
        <Grid item xs={12}>
          <MaterialTable
            columns={columns}
            data={employees}
            title="Danh sách nhân viên"
            options={{
              search: true,
            }}
            localization={{
              header: {
                actions: 'Tùy chọn',
              },
            }}
            actions={[
              {
                icon: 'delete',
                tooltip: 'Xóa nhân viên',
                onClick: (event, rowData) => {
                  handleDelete(rowData.id)
                },
              },
              {
                icon: 'add',
                tooltip: 'Add User',
                isFreeAction: true,
                onClick: () => {
                  setOpenAddDialog(true)
                },
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default Employee
