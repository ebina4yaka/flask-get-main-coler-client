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
      margin: 'auto',
      padding: theme.spacing(1),
    },
    palette: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },
    color: {
      margin: theme.spacing(1),
      padding: theme.spacing(4),
      width: '25%',
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
      <div className={classes.palette}>
        {colors.map((color) => {
          return (
            <div
              key={color}
              className={classes.color}
              style={{ backgroundColor: color }}
            />
          )
        })}
      </div>
    </Paper>
  )
}
