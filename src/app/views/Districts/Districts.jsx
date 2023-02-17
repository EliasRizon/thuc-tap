import { Grid } from '@material-ui/core'
import MaterialTable from 'material-table'
import React from 'react'

function District() {
  return (
    <div className="m-sm-30">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <MaterialTable
            columns={[
              { title: 'Adı', field: 'name' },
              { title: 'Soyadı', field: 'surname' },
              { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
              {
                title: 'Doğum Yeri',
                field: 'birthCity',
                lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
              },
            ]}
            data={[
              {
                name: 'Mehmet',
                surname: 'Baran',
                birthYear: 1987,
                birthCity: 63,
              },
            ]}
            title="Demo Title"
          />
        </Grid>
      </Grid>
    </div>
  )
}

export default District