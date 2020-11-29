import { ChangeEvent, ReactElement, useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { createStyles } from '@material-ui/core'
import Backdrop from '@material-ui/core/Backdrop'
import CircularProgress from '@material-ui/core/CircularProgress'
import PreviewImage from '../atoms/PreviewImage'
import InputImage from '../atoms/InputImage'
import Result from '../atoms/Result'
import { ApiResponse } from '../libs/models'
import imageCompress from '../libs/imageCompress'

const useStyles = makeStyles((theme) =>
  createStyles({
    input: {
      margin: theme.spacing(4, 0, 2),
    },
    image: {
      margin: theme.spacing(0, 0, 2),
    },
    result: {
      margin: theme.spacing(2, 0, 4),
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff',
    },
  })
)

export default function UploadImage(): ReactElement {
  const [open, setOpen] = useState(false)
  const [imageBase64, setImageBase64] = useState('')
  const [colors, setColors] = useState<string[]>()

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target
    if (files && files.length > 0) {
      const file = files[0]
      if (!file) {
        return
      }
      const reader = new FileReader()
      reader.readAsDataURL(await imageCompress.getCompressImageFile(file))
      reader.onload = (progressEvent: ProgressEvent<FileReader>) => {
        if (
          progressEvent.target &&
          typeof progressEvent.target.result === 'string'
        ) {
          setImageBase64(progressEvent.target.result)
        }
      }
    }
  }

  useEffect(() => {
    if (imageBase64 === '') {
      return
    }
    setOpen(true)
    fetch('/api/upload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        image: imageBase64.split(',')[1],
      }),
    })
      .then((response) => response.json())
      .then((jsonResponse: ApiResponse) => {
        setColors(jsonResponse.colors)
        setOpen(false)
      })
  }, [imageBase64])

  const classes = useStyles()
  return (
    <div>
      <div className={classes.input}>
        <InputImage handleChange={handleChange} />
      </div>
      <div className={classes.image}>
        <PreviewImage image={imageBase64} />
      </div>
      <div className={classes.result}>
        <Result colors={colors} />
      </div>
      <Backdrop className={classes.backdrop} open={open}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
