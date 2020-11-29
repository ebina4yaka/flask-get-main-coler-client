import renderer from 'react-test-renderer'
import PreviewImage from '../PreviewImage'

test('Snapshot test for PreviewImage', () => {
  const tree = renderer.create(<PreviewImage image="test" />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot test for PreviewImage empty', () => {
  const tree = renderer.create(<PreviewImage image="" />).toJSON()
  expect(tree).toMatchSnapshot()
})
