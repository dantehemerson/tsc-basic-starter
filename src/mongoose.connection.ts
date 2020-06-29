import mongoose from 'mongoose'

export const executeScript = async (baby: () => Promise<unknown>) => {
  try {
    await mongoose.connect('mongodb://dante:SoNEfaxEMPEr4@ds111138.mlab.com:11138/temp-fix-gm', {
      useNewUrlParser: true
    })

    await baby()
  } catch (error) {
    console.error(error)
    process.exit(1)
  } finally {
    await mongoose.connection.close()
  }
}
