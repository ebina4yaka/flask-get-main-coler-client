import renderer from 'react-test-renderer'
import Result from '../Result'

test('Snapshot test for Result', () => {
  const tree = renderer.create(<Result colors={['#fff', '#555']} />).toJSON()
  expect(tree).toMatchSnapshot()
})

test('Snapshot test for Result color empty', () => {
  const tree = renderer.create(<Result colors={undefined} />).toJSON()
  expect(tree).toMatchSnapshot()
})
