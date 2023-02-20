import { Grid, Button } from '@material-ui/core'
import MaterialTable from 'material-table'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import UserEditorDialog from '../User/UserEditorDialog'
import StaffEditorDialog from './StaffEditorDialog'
import { searchByPage } from './StaffService'

function Staff() {
  const [staffList, setStaffList] = useState([])
  const [searchObject, setSearchObject] = useState({})
  const [openAddDialog, setOpenAddDialog] = useState(true)
  const { t } = useTranslation()

  let columns = [
    {
      title: 'Tùy chọn',
      field: 'custom',
      align: 'left',
      width: '100px',
      headerStyle: {
        padding: '12px',
      },
      cellStyle: {
        padding: '12px',
      },
    },
    {
      title: 'Họ và tên',
      field: 'name',
      width: '100px',
    },
    {
      title: 'Email',
      field: 'email',
      width: '100px',
    },
    {
      title: 'Số điện thoại',
      field: 'phone',
      width: '100px',
    },
    {
      title: 'Tuổi',
      field: 'age',
      width: '100px',
    },
    {
      title: 'Xã',
      field: 'commune.name',
      width: '100px',
    },
    {
      title: 'Huyện',
      field: 'district.name',
      width: '100px',
    },
    {
      title: 'Tỉnh',
      field: 'province.name',
      width: '100px',
    },
  ]

  const updatePageData = useCallback(async () => {
    const { data } = await searchByPage(searchObject)
    setStaffList(data.data)
  }, [])

  const handleClose = () => {
    setOpenAddDialog(false)
  }

  useEffect(() => {
    updatePageData()
  }, [updatePageData])

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
            <StaffEditorDialog handleClose={handleClose} t={t} />
          )}
        </Grid>
        <Grid item xs={12}>
          <MaterialTable
            columns={columns}
            data={staffList}
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

export default Staff
