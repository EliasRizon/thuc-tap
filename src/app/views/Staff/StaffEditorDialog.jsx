import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Icon,
  IconButton,
} from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab'
import {
  fetchDistricts,
  fetchProvinces,
} from 'app/redux/actions/LocationActions'
import React, { useEffect, useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useDispatch, useSelector } from 'react-redux'

function StaffEditorDialog({ handleClose, t }) {
  const [inputs, setInputs] = useState({})
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { provinceList, districtList } = useSelector((store) => store.location)

  console.log({ inputs, provinceList, districtList })

  const handleSubmit = () => {}

  const handleChange = (e) => {
    const { name, value } = e.target

    setInputs((prev) => {
      return { ...prev, [name]: value }
    })
  }

  useEffect(() => {
    dispatch(fetchProvinces({}))
    dispatch(fetchDistricts({}))
  }, [dispatch])

  useEffect(() => {}, [])

  return (
    <Dialog open={true} maxWidth={'xs'} fullWidth={true}>
      <DialogTitle>
        <span>Thêm mới nhân viên</span>
        <IconButton
          style={{ position: 'absolute', right: '10px', top: '10px' }}
          onClick={handleClose}
        >
          <Icon color="error" title="Đóng">
            close
          </Icon>
        </IconButton>
      </DialogTitle>
      <ValidatorForm
        onSubmit={handleSubmit}
        style={{
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <DialogContent dividers>
          <Grid className="mb-16" container spacing={1}>
            <Grid item xs={12}>
              <TextValidator
                className="w-100 mb-12"
                label={
                  <span className="font">
                    <span style={{ color: 'red' }}> * </span>
                    {t('user.displayName')}
                  </span>
                }
                onChange={handleChange}
                type="text"
                name="name"
                value={inputs.name}
                validators={['required']}
                errorMessages="Họ và tên không được để trống"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                className="w-100 mb-12"
                label={
                  <span className="font">
                    <span style={{ color: 'red' }}> * </span>
                    {t('user.email')}
                  </span>
                }
                onChange={handleChange}
                type="text"
                name="email"
                value={inputs.email}
                validators={['required', 'isEmail']}
                errorMessages={[
                  'Vui lòng nhập email',
                  'Email phải nhập đúng định dạng',
                ]}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <TextValidator
                className="w-100 mb-12"
                label={
                  <span className="font">
                    <span style={{ color: 'red' }}> * </span>
                    Số điện thoại
                  </span>
                }
                onChange={handleChange}
                type="text"
                name="phone"
                value={inputs.phone}
                validators={['required', 'isNumber']}
                errorMessages={[
                  'Vui lòng nhập số điện thoại',
                  'Số điện thoại chỉ có thể là số.',
                ]}
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                variant="outlined"
                size="small"
                style={{ width: '100%' }}
                id="combo-box-demo"
                options={provinceList}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.name}
                onChange={(event, value) => {
                  setInputs((prev) => {
                    return { ...prev, province: value }
                  })
                }}
                renderInput={(params) => (
                  <TextValidator
                    {...params}
                    value={inputs.province}
                    label={
                      <span className="font">
                        <span style={{ color: 'red' }}> * </span>
                        Tỉnh
                      </span>
                    }
                    fullWidth
                    validators={['required']}
                    errorMessages="Vui lòng chọn tỉnh"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions spacing={4} className="flex flex-end flex-middle">
          <Button
            variant="contained"
            color="primary"
            type="submit"
            disabled={loading}
          >
            {t('Save')}
          </Button>
        </DialogActions>
      </ValidatorForm>
    </Dialog>
  )
}

export default StaffEditorDialog
