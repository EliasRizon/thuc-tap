import { Dialog, DialogTitle } from '@material-ui/core'
import React, { useState } from 'react'

function StaffEditorDialog() {
  const [inputs, setInputs] = useState({})

  const handleSubmit = () => {}

  return (
    <Dialog open={true} maxWidth={'md'} fullWidth={true}>
      <DialogTitle>Thêm mới nhân viên</DialogTitle>
    </Dialog>
  )
}

export default StaffEditorDialog
