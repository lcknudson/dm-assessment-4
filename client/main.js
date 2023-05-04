const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const encouragementBtn = document.getElementById("encouragementButton")
const inspirationBtn = document.getElementById("inspirationSubmit")
const form = document.querySelector('form')

const inspirationContainer = document.querySelector('#inspiration-container')
const inspriationForm = document.querySelector('#inspiration-form')

const inspirationURL = `http://localhost:4000/api/inspiration`

const inspirationCallback = ({ data: inspiration }) => displayInspiration(inspiration)
const errCallback = err => console.log(err)

const getAllInspiration = () => axios.get(inspirationURL).then(inspirationCallback).catch(errCallback)

const createNewInspirationMeme = body => axios.post(inspirationURL, body).then(inspirationCallback).catch(errCallback)

const deleteMeme = id => axios.delete(`${inspirationURL}/${id}`).then(inspirationCallback).catch(errCallback)

//Incomplete update feature
// const updateInspiration = (id, type) => axios.put(`${inspirationURL}/${id}`, {type}).then(inspirationCallback).catch(errCallback)


//musings of a dropdown feature. 
// var inspirationOptions = document.getElementById("inspirationForm")
// var inspirationElmts = ['blank','Grogu', 'Blue', 'Smurf', 'Mater']


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


function submitMemeHandler(e) {
    e.preventDefault()

    let title = document.querySelector('#title')
    let imageURL = document.querySelector('#img')

    let bodyObj = {
        title: title.value,
        imageURL: imageURL.value
    }

    createInspirationMeme(bodyObj)
    createNewInspirationMeme(bodyObj)

    title.value = ''
    imageURL.value = ''
}


function createInspirationMeme(inspiration) {
    const inspirationMeme = document.createElement('div')
    inspirationMeme.classList.add('meme-card')

    inspirationMeme.innerHTML = `<img alt='meme' src=${inspiration.imageURL} class="meme" width="500" height="500"/>
    <p class="meme-title">${inspiration.title}</p>
    <div class="btns-container">
        
        </div>
    <button onclick="deleteMeme(${inspiration.id})">delete ${inspiration.title}</button> <br><br><br>
    `
    inspirationContainer.appendChild(inspirationMeme)
}


function displayInspiration(arr) {
    inspirationContainer.innerHTML = ``;
    for (let i = 0; i < arr.length; i++) {
        createInspirationMeme(arr[i])
    }
    console.log(`Did display run?`)
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
encouragementBtn.addEventListener('mouseover', getEncouragement)


inspriationForm.addEventListener('submit', submitMemeHandler)

getAllInspiration()

console.log(`This is the end.`)
