import renderer from 'react-test-renderer'
import Copyright from '../Copyright'

test('Snapshot test for Copyright', () => {
  const tree = renderer.create(<Copyright />).toJSON()
  expect(tree).toMatchSnapshot()
})
