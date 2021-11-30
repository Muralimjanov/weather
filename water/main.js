// let btn = document.getElementById('btn');

// btn.onkeyup = (e) =>{
//     if(e.keyCode === 13){
//         btn = input.value + (e.key)
//     }

// }

// const keyData = () => {
//     return fetch('https://api.openweathermap.org/data/2.5/weather?q=London&appid=7b80a3ec5469c110b02bf48f2fc6127f').then((res) => {
//         return res.json()
//     }).then(data =>{

//     })
// }
// keyData()
let btn = document.getElementById('btn');
let input = document.getElementById('input');
let p1 = document.getElementById('degree');
let p2 = document.getElementById('humidity');
let p3 = document.getElementById('speed');
let h2 = document.getElementById('h2');
let h3 = document.getElementById('h3')


const getData = async (city) =>{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7b80a3ec5469c110b02bf48f2fc6127f`)
    return res.json()
}

btn.onclick = () =>{
    getData(input.value).then (data =>{
        console.log(data);
        h3.innerHTML = `${data.name}`
        p1.innerHTML = Math.round(data)
        data.wind.speed + 'km/h'
    })
}