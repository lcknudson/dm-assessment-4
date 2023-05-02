const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const encouragementBtn = document.getElementById("encouragementButton")
const inspirationBtn = document.getElementById("inspirationSubmit")

const inspirationContainer = document.querySelector('#inspiration-container')
const inspriationForm = document.querySelector('inspiration-form')

const inspirationURL = `http://localhost:4000/api/inspiration`

const inspirationCallback = ({ data: inspiration }) => displayInspiration(inspiration)
const errCallback = err => console.log(err.response.data)
// const errCallback = err => console.log('error response issue')

// const getAllInspiration = () => axios.get(inspirationURL).then(inspirationCallback).catch(errCallback)
// const createInspirationMeme = body => axios.post(inspirationURL, body).then(inspirationCallback).catch(errCallback)

// const deleteInspiration = id => axios.delete(`${inspirationURL}/${id}`).then(inspirationCallback).catch(errCallback)
// const updateInspiration = (id, type) => axios.put(`${inspirationURL}/${id}`, {type}).then(inspirationCallback).catch(errCallback)


//beginnings of a dropdown feature. 
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

//Come back to this maybe .... Causing problems
// const getInspiration = () => {
//     // e.preventDefault(); 
//     axios.get("http://localhost:4000/api/inspiration/")
//     .then(res => {
//         const data = res.data;
//         console.log(data);
//         // alert(data);
//     });        
// }

function displayInspiration(arr) {
    inspirationContainer.innerHTML = ` `;
    for (let i = 0; i < arr.length; i++) {
        createInspirationMeme(arr[i])
    }
}

//Get inpiration revised code block. 
// function getInspiration() {
//     e.preventDefault();  
//     var value = e.value;
//     var text = e.options[e.selectedIndex].text;
//     console.log(value, text);
// }


// var e = document.getElementById("ddlViewBy");
// event.preventDefault();
// function onChange() {
//   var value = e.value;
//   var text = e.options[e.selectedIndex].text;
//   console.log(value, text);
// }
// e.onchange = onChange;
// onChange();

complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
encouragementBtn.addEventListener('mouseover', getEncouragement)
// inspirationBtn.addEventListener('click', createInspirationMeme)

getAllInspiration()

