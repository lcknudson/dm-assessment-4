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
    }

}