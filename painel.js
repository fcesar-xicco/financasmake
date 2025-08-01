let data = new Date()
let dataMes = data.getMonth();
let li = document.getElementsByClassName('meses')
let titulo = document.getElementById('titulo')
// titulo.style.display = 'none'

    

let dados = [
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=1560869295#gid=1560869295",indice:1,class:"meses",nome:'Janeiro25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=1710927950#gid=1710927950",indice:2,class:"meses",nome:'Fevereiro25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=233020248#gid=233020248",indice:3,class:"meses",nome:'Março25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=895309455#gid=895309455", indice:4,class:"meses",nome:'Abril25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=120596324#gid=120596324",indice:5,class:"meses",nome:'Maio25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=1906368807#gid=1906368807",indice:6,class:"meses",nome:'Junho25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=507251124#gid=507251124",indice:7,class:"meses",nome:'Julho25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=1762117257#gid=1762117257", indice:8,class:"meses",nome:'Agosto25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=1293778990#gid=1293778990", indice:9,class:"meses",nome:'Setembro25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=199146232#gid=199146232",indice:10,class:"meses",nome:'Outubro25'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=1842665177#gid=1842665177",indice:11,class:"meses",nome:'Novembro24'},
    {link:"https://docs.google.com/spreadsheets/d/1Sy8S48wuo8CCejl6Ant5-KRbbY14TLUnvLKKMoKaYDw/edit?gid=314243444#gid=314243444",indice:12,class:"meses",nome:'Dezembro24'},
    {link:"https://docs.google.com/spreadsheets/d/1ShWnIImJLDzYYVobUzUHwv2MO-bB3X3Vu5Xjv2HB6r4/edit?gid=818698360#gid=818698360",indice:13,class:"meses",nome:'Casal'}

]

        dados.forEach((item) =>{    

            if(dataMes+1 === item.indice){   
                mesAtual(item)
                ocultar(item)

            }
        })
        
        function mesAtual(item){
            // alert(item.indice)
            let abadestaque = document.getElementById('abadestaque')
            let li = document.createElement('li')
            let a = document.createElement('a')
            a.setAttribute('target','_blank')
            li.setAttribute("href", item.link)
            li.setAttribute('class', 'meses')
            li.setAttribute('value',item.indice)
            a.innerText = item.nome
            li.appendChild(a)
            abadestaque.appendChild(li)

        }

        function ocultar(){
            
        }
        
        dados.forEach((mes)=>{
           fechamentoMensal(mes)

        })

        function fechamentoMensal(mes){
            let abaMeses = document.getElementById('abameses');
            let li = document.createElement('li')

            let a = document.createElement('a')
            a.setAttribute("href", mes.link)
            a.setAttribute('target','blank')
            a.setAttribute('class','meses')
            a.innerText = mes.nome

            a.appendChild(li)
            abaMeses.appendChild(a)


        }





        // titulo.addEventListener('click',(){})
        // destaque.classList.add("destaqueon")
        // destaque.classList.remove('destaque')










