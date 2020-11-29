import { ReactElement } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'

type Props = {
  colors: string[] | undefined
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    color: {
      margin: theme.spacing(1),
      padding: theme.spacing(3, 2, 3),
      width: '14%',
    },
  })
)

export default function Result(props: Props): ReactElement {
  const { colors } = props
  if (!colors) {
    return <></>
  }
  const classes = useStyles()
  return (
    <Paper className={classes.root}>
      {colors.map((color) => {
        return (
          <div
            key={color}
            className={classes.color}
            style={{ backgroundColor: color }}
          />
        )
      })}
    </Paper>
  )
}
