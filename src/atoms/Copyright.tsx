import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'
import MuiLink from '@material-ui/core/Link'

export default function Copyright(): ReactElement {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://github.com/ebina4yaka">
        ebina4yaka
      </MuiLink>
      {` 2020.`}
    </Typography>
  )
}
