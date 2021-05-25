const { Book } = require("../models");
const express = require("express");

const router = express.Router();


router.post('/', async (req, res) => {

    try {
        const { title, authors, description, image, link } = req.body;
        const book = await Book.create({
            title,
            authors,
            description,
            image,
            link
        });
        console.log(book)
        res.json(book);

    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

router.get('/', async (req, res) => {

    try {

        const bookData = await Book.find({

        })
        res.json(bookData)

    } catch (error) {
        console.error(error);
        res.sendStatus(400);
    }
});

module.exports = router;