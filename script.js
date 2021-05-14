const requestURL = 'https://jsonplaceholder.typicode.com/users'

function getData() {
    fetch(requestURL)
        .then((response) =>{
            return response.json();
        })
        .then((data) =>{
            console.log(data)
            let txt = "";
            for(let i = 0; i < data.length; i++){
                txt += "<tr>"
                    txt+= "<td>" + data[i].name + "</td>"
                    txt+= "<td>" + data[i].username + "</td>"
                    txt+= "<td>" + data[i].email + "</td>"
                    txt+= "<td>" + data[i].website + "</td>"
                txt+="</tr>"
                document.getElementById("first-el").innerHTML=txt;

            }
            //sorting

            const getCellValue = (tr, idx) => tr.children[idx].innerText || tr.children[idx].textContent;

            const comparer = (idx, asc) => (a, b) => ((v1, v2) =>
                    v1 !== '' && v2 !== '' && !isNaN(v1) && !isNaN(v2) ? v1 - v2 : v1.toString().localeCompare(v2)
            )(getCellValue(asc ? a : b, idx), getCellValue(asc ? b : a, idx));


            document.querySelectorAll('th').forEach(th => th.addEventListener('click', (() => {
                const table = th.closest('table');
                const tbody = table.querySelector('tbody');
                Array.from(tbody.querySelectorAll('tr'))
                    .sort(comparer(Array.from(th.parentNode.children).indexOf(th), this.asc = !this.asc))
                    .forEach(tr => tbody.appendChild(tr) );
            })));


            function getAddInfo() {
                let info = ""
                info += "<p>" + data[0].name + "</p>"
                info += "<p>" + data[0].username + "</p>"
                info += "<p>" + data[0].email + "</p>"
                info += "<p>" + data[0].address.street + "</p>"
                info += "<p>" + data[0].address.suite + "</p>"
                info += "<p>" + data[0].address.city + "</p>"
                info += "<p>" + data[0].address.zipcode + "</p>"
                info += "<p>" + data[0].phone + "</p>"
                info += "<p>" + data[0].website + "</p>"
                document.getElementById("modal-content").innerHTML = info;
            }
            getAddInfo()
        })
}
getData()





let modalBtn = document.getElementById("modal-btn")
let modal = document.querySelector(".modal")
let closeBtn = document.querySelector(".close-btn")
modalBtn.onclick = function(){
    modal.style.display = "block"
}
closeBtn.onclick = function(){
    modal.style.display = "none"
}
window.onclick = function(e){
    if(e.target === modal){
        modal.style.display = "none"
    }
}




