const mongoose = require('mongoose');

// Osce Schema
const lessonSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    scan: {
        type: String,
        required: false
    },
    video: {
        type: String,
        required: false
    },
    quiz_question: {
        type: String,
        required: false
    },
    quiz_answers: {
        type: Array,
        required: false
    },
    slug: {
        type: String,
        required: true
    }
});

const Lesson = module.exports = mongoose.model('lesson', lessonSchema);

// Get lessons
module.exports.getLessons = (callback, limit) => {
    Lesson.find(callback).limit(limit);
}

// Get lesson
module.exports.getLessonBySlug = (s, callback) => {
    Lesson.findOne({ slug: s }, callback);
}

// Add lesson
module.exports.addLesson = (lesson, callback) => {
    Lesson.create(lesson, callback);
}
