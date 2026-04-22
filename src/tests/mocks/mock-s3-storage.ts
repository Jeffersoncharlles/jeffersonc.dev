export const s3Storage = jest.fn(() => ({
  name: 's3-storage',
  init: jest.fn(),
}))

export const S3ClientUploadHandler = jest.fn()

export default {
  s3Storage,
  S3ClientUploadHandler,
}
