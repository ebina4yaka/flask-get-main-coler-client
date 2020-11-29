import renderer from 'react-test-renderer'
import UploadImage from '../UploadImage'

jest.mock('../../atoms/InputImage', () => 'MockedInputImage')
jest.mock('../../atoms/PreviewImage', () => 'MockedPreviewImage')
jest.mock('../../atoms/Result', () => 'MockedResult')
jest.mock('@material-ui/core/Backdrop', () => 'MockedBackdrop')
jest.mock('@material-ui/core/CircularProgress', () => 'MockedCircularProgress')

test('Snapshot test for UploadImage', () => {
  const tree = renderer.create(<UploadImage />).toJSON()
  expect(tree).toMatchSnapshot()
})
