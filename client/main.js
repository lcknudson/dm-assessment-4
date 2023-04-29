const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const encouragementBtn = document.getElementById("encouragementButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
         .then(res => {
             const data = res.data;
             alert(data);
});
}

const getEncouragement = () => {
    axios.get("http://localhost:4000/api/encouragement/")
        .then(res => {
            const data = res.data;
            alert(data);
});        
}

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
encouragementBtn.addEventListener('mouseover', getEncouragement)
