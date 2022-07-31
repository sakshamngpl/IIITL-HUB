import mongoose from "mongoose";

var NoteSchema = new mongoose.Schema({
  semester: String,
  subject: String,
  fileName: String,
  fileType: String,
  fileSize: Number,
  fileContent: String,
  fileUploadDate: Date
});

export default mongoose.model('Note', NoteSchema)