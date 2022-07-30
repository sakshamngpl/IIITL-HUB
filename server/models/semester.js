import mongoose from "mongoose";

var NoteSchema = new mongoose.Schema({
  name: String,
  type: String
});

var SubjectSchema = new mongoose.Schema({
  notes: [NoteSchema],
  name: String
});

var SemesterSchema = new mongoose.Schema({
  subjects: [SubjectSchema],
  name: String
});

export default mongoose.model('Semester', SemesterSchema)