import { Grid, Button } from '@material-ui/core'
import MaterialTable from 'material-table'
import React, { useCallback, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import StaffEditorDialog from './StaffEditorDialog'
import { searchByPage } from './StaffService'

function Staff() {
  const [staffList, setStaffList] = useState([])
  const [searchObject, setSearchObject] = useState({})
  const [openAddDialog, setOpenAddDialog] = useState(false)
  const { t } = useTranslation()

  // console.log(staffList)

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
