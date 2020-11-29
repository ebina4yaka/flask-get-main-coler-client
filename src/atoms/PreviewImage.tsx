import { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core'

type Props = {
  image: string
}

const useStyles = makeStyles(
  createStyles({
    root: {
      maxWidth: '80%',
      maxHeight: '80%',
    },
    message: {
      fontSize: '1.5em',
    },
  })
)

export default function PreviewImage(props: Props): ReactElement {
  const { image } = props
  const classes = useStyles()
  if (image) {
    return <img className={classes.root} alt="preview" src={image} />
  }
  return <div className={classes.message}>Please select image file</div>
}
