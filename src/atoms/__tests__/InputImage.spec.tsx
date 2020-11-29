import renderer from 'react-test-renderer'
import InputImage from '../InputImage'

test('Snapshot test for InputImage', () => {
  const tree = renderer.create(<InputImage handleChange={() => {}} />).toJSON()
  expect(tree).toMatchSnapshot()
})
