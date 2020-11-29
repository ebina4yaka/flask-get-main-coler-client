import renderer from 'react-test-renderer'
import Top from '../Top'

jest.mock('../../atoms/Title', () => 'MockedTitle')
jest.mock('../../organisms/UploadImage', () => 'MockedUploadImage')
jest.mock('../../atoms/Copyright', () => 'MockedCopyright')

test('Snapshot test for Top', () => {
  const tree = renderer.create(<Top />).toJSON()
  expect(tree).toMatchSnapshot()
})
