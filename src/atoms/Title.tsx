import { ReactElement } from 'react'
import Typography from '@material-ui/core/Typography'

export default function Title(): ReactElement {
  return (
    <Typography variant="h4" component="h1" gutterBottom>
      Get main color from your image
    </Typography>
  )
}
