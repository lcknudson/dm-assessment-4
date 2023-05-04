let inspiration = require('../db.json')
// let globalID = 12

let nextAvailableMemeID = 5
// let nextAvailableMemeID = inspiration.length + 1
//taking movies.length + 1 works, but the better way to do this in a live application
// would be to loop through the array to find out the largest value and then build on that

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Not every cage is a prison, not every loss eternal", "Doctor, if I were able to show emotion, your new infatuation with that term 'logic' would begin to annoy me.", "Man is born to live and not prepared to live.", "Practice permanent, perfect practice makes perfect permanent."];

        //choose random fortune
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },

    getEncouragement: (req, res) => {
        const encouragement = ["In order to convince and inspire others to follow and accomplish a mission, a leader must be a true believer in the mission.", "Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it.", "How wonderful it is that nobody need wait a single moment before starting to improve the world."];

        //choose random encouragement
        let randomIndex = Math.floor(Math.random() * encouragement.length);
        let randomEncouragement = encouragement[randomIndex];
      
        res.status(200).send(randomEncouragement);
    }, 

    getAllInspiration: (_req, res) => {
        res.status(200).send(inspiration);
    },

    createInspiration(req, res) {
        let { title, imageURL } = req.body;
        // if (!title || !imageURL){
        //     return res.status(400).send(`Invalid request.`)
        // }

        let newInspiration = {
            id: nextAvailableMemeID,
            title,
            imageURL
        }

        inspiration.push(newInspiration)
        nextAvailableMemeID++

        res.status(200).send(inspiration)
    },

    deleteInspiration(req, res) {
        const id = parseInt(req.params.id, 10)
        
        checkIfinspirationByID(inspiration, id, res)
        
        inspiration = inspiration.filter(inspiration => inspiration.id !== id)
        
        res.status(200).send(inspiration)
    },
    
    
};

function checkIfinspirationByID(inspiration, id, res){
    const hasinspirationID = inspiration.map((inspiration) => inspiration.id).includes(id);
        
        if(!hasinspirationID){
            return res.status(400).send('Inspiration id does not exist.')
        }
}

