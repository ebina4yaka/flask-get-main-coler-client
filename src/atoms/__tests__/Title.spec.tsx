import renderer from 'react-test-renderer'
import Title from '../Title'

test('Snapshot test for Title', () => {
  const tree = renderer.create(<Title />).toJSON()
  expect(tree).toMatchSnapshot()
})
