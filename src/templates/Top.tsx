import { ReactElement } from 'react'
import { Box, Container, createStyles } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Copyright from '../atoms/Copyright'
import Title from '../atoms/Title'
import UploadImage from '../organisms/UploadImage'

const useStyles = makeStyles(
  createStyles({
    component: {
      textAlign: 'center',
    },
    copyright: {
      marginTop: '10px',
    },
  })
)

export default function Top(): ReactElement {
  const classes = useStyles()
  return (
    <Container maxWidth="sm">
      <Box my={4} className={classes.component}>
        <Title />
        <UploadImage />
        <div className={classes.copyright}>
          <Copyright />
        </div>
      </Box>
    </Container>
  )
}
