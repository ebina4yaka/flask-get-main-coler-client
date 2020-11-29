import { ChangeEvent, ReactElement } from 'react'

type Props = {
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function InputImage(props: Props): ReactElement {
  const { handleChange } = props
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleChange} />
    </div>
  )
}
