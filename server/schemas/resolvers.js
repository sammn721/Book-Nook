const { User, Book } = require('../models');

const resolvers = {
    Query: {
        users: async () => {
            return await User.find({}).populate('books').populate({
                path: 'books',
                populate: 'title',
                populate: 'authors'
            })
        },
        books: async () => {
            return await Book.find({}).populate('')
        }
    }
}