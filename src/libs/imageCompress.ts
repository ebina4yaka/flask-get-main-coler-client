import imageCompression from 'browser-image-compression'

export default {
  async getCompressImageFile(file: File): Promise<File> {
    const options = {
      maxWidthOrHeight: 600,
    }
    return (await imageCompression(file, options)) as File
  },
}
