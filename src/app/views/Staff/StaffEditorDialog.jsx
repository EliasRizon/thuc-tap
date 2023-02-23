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
import { fetchCommunes } from 'app/redux/actions/CommuneActions'
import {
  clearCommuneList,
  clearDistrictList,
  fetchDistricts,
} from 'app/redux/actions/DistrictActions'
import { fetchProvinces } from 'app/redux/actions/ProvinceActions'
import React, { useEffect, useState } from 'react'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { useDispatch, useSelector } from 'react-redux'

function StaffEditorDialog({ handleClose, t }) {
  const [inputs, setInputs] = useState({ code: '' })
  const [loading, setLoading] = useState(false)
  const dispatch = useDispatch()
  const { provinces } = useSelector((store) => store.province)
  const { districts } = useSelector((store) => store.district)
  const { communes } = useSelector((store) => store.commune)

  // console.log(inputs)
  // console.log({ provinces, districts })
  // console.log(communes)

  const handleSubmit = () => {}

  const handleChange = (e) => {
    const { name, value } = e.target

    setInputs((prev) => {
      return { ...prev, [name]: value }
    })
  }

  const isPositiveNumber = (value) => {
    if (Number(value) < 0) {
      return false
    }
    return true
  }

  const isInputLengthValid = (value) => {
    if (value.length < 6 || value.length > 10) {
      return false
    }
    return true
  }

  useEffect(() => {
    dispatch(fetchProvinces({}))
  }, [dispatch])

  useEffect(() => {
    if (inputs.province != null) {
      dispatch(fetchDistricts({}))
    } else {
      setInputs((prev) => ({ ...prev, district: null }))
      dispatch(clearDistrictList())
    }
  }, [dispatch, inputs.province])

  useEffect(() => {
    if (inputs.district != null) {
      dispatch(fetchCommunes({ district: inputs.district }))
    } else {
      setInputs((prev) => ({ ...prev, commune: null }))
      dispatch(clearCommuneList())
    }
  }, [dispatch, inputs.district])

  useEffect(() => {
    ValidatorForm.addValidationRule('isPositiveNumber', isPositiveNumber)
    ValidatorForm.addValidationRule('isInputLengthValid', isInputLengthValid)
  }, [])

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
                    Code
                  </span>
                }
                onChange={handleChange}
                type="text"
                name="code"
                value={inputs.code}
                validators={[
                  'required',
                  'matchRegexp:^\\S*$',
                  'isInputLengthValid',
                ]}
                errorMessages={[
                  'Code không được để trống',
                  'Code không được chứa khoảng trắng',
                  'Code phải từ 6 đến 10 ký tự',
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
                inputProps={{ maxLength: 11 }}
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
                    Tuổi
                  </span>
                }
                onChange={handleChange}
                type="number"
                name="age"
                value={inputs.age}
                validators={['required', 'isPositiveNumber']}
                errorMessages={[
                  'Vui lòng nhập tuổi',
                  'Tuổi phải là một số dương',
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
                options={provinces}
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
                    className="w-100 mb-12"
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
            <Grid item xs={12}>
              <Autocomplete
                variant="outlined"
                size="small"
                style={{ width: '100%' }}
                id="combo-box-demo"
                options={districts}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.name}
                value={inputs.district}
                onChange={(event, value) => {
                  setInputs((prev) => {
                    return { ...prev, district: value }
                  })
                }}
                renderInput={(params) => (
                  <TextValidator
                    {...params}
                    className="w-100 mb-12"
                    label={
                      <span className="font">
                        <span style={{ color: 'red' }}> * </span>
                        Huyện
                      </span>
                    }
                    fullWidth
                    validators={['required']}
                    errorMessages="Vui lòng chọn huyện"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                variant="outlined"
                size="small"
                style={{ width: '100%' }}
                id="combo-box-demo"
                options={communes}
                getOptionSelected={(option, value) => option.id === value.id}
                getOptionLabel={(option) => option.name}
                value={inputs.commune}
                onChange={(event, value) => {
                  setInputs((prev) => {
                    return { ...prev, commune: value }
                  })
                }}
                renderInput={(params) => (
                  <TextValidator
                    {...params}
                    className="w-100 mb-12"
                    label={
                      <span className="font">
                        <span style={{ color: 'red' }}> * </span>
                        Xã
                      </span>
                    }
                    fullWidth
                    validators={['required']}
                    errorMessages="Vui lòng chọn xã"
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
