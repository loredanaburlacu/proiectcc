# Proiect cloud computing 
## Introducere si descriere problema

In criza actuala generata de pandemie, foarte multi oameni lucreaza de acasa. In cadrul companiilor este o provocare sa mentina starea de spirit si productivitatea angajatilor la cote maixme.
Pentru asta, anumiti angajatori au pornit un brainstorming despre modurile in care un angajat poate avea acces la diverse tipuri de divertisment in timpul orelor de munca, de acasa, la resurse puse la dispozitie de angajator.
Cateva idei au fost Dj live in pauza de pranz, concursuri cu poze din activitatile pe care le fac acasa, o sursa de inspiratie pentru filme, o pagina de glume. Pentru a usura accesul la astfel de informatii, angajatorul are nevoie de o platforma unde sa afiseze aceste informatii si sa o publice intr-un spatiu accesibil usor. 
In aplicatia pe care am dezvoltat-o am oferit angajatilor posibilitatea de a accesa o pagina cu 10 glume care se actualizeaza la fiecare incarcare si la o pagina unde au trimiteri catre anumite seriale de pe un canal TVMaze unde angajatii vor avea conturi de vizualizare. 
Pentru a dezvolta aplicatia, este necesar un mediu accesibil mai multor dezvoltatori, astfel s-a ales Cloud 9. Pentru a fi o aplicatie colaborativa, s-a ales ca source code repository GitHub unde pot fi deployate versiuni ale aplicatiei  la care sa aiba acces mai multe persoane sis a poata integra mai multe module sau sa aduca modificari, fiind un proiect ce se doreste sa aduca un beneficiu intregii companii.

## Prezentare API-uri utilizate

Datele din aplicatie sunt preluate prin integrarea a 2 API, unul care  returneaza o lista de glume si altul care returneaza o lista de episoade pentru anumite seriale. 

## API Jokes 
Este api-ul prin care populez datele din pagina de Jokes si este un API public.
Endpoint-ul folosit:
https://official-joke-api.appspot.com/random_ten 

Exista de asemenea si alte endpoint-uri : in functie de tipul de glume(programming) sau sa primesti doar o gluma/request. 
Lista lor completa este aici:
https://github.com/15Dkatz/official_joke_api/blob/master/README.md
Informatiile sunt disponibile datorita ajutorului unei comunitati de dezvoltatori pasionati. 

Din punct de vedere autorizare si autentificare, nu foloseste nicio metoda (api key sau oauth)


## API TVMaze 
Toate endpoint-urile sunt accesiible folosind si HTTPS. 
Raspunsurile vor fi returnate in HTTP dar pot fi accesate si ca HTTPS daca schimbi manual in url. 
Din punct de vedere autorizare si autentificare, nu foloseste nicio metoda (api key sau oauth). Licenta apartine CC BY SA si se poate folosi acest api cu orice scop atat tip cat este specificat ca apartine TVMaze. Request-urile sunt limitate la un numar de 20 la 10 secunde per adresa IP. Daca depasesti aceasta rata, e posibil sa primesti o eroare HTTP 429.
Resursele din API au o proprietate pentru imagine care reprezinta imaginea fiecarui element.
Pentru seriale, persoane si caractere, imaginea e in format portret, pentru episoade in format landscape. Proprietatile medium si original fac referire la imaginea cu dimensiuni schimbate sau imaginea originala. Daca nu exista imagini atunci proprietatea va fi NULL. 
Exista foarte multe endpoint-uri definite pentru acest api. 
Lista lor completa este aici:
http://www.tvmaze.com/api
Eu am folosit: 
http://api.tvmaze.com/shows/1/episodes  
,unde 1 reprezinta id-ul show-ului si am ales sa ofer posibilitatea sa inlocuiesti acea valoare cu o valoare tastata de la tastatura. 

## Descriere arhitectura 

## Exemple de request/response 
API Jokes – accepta doar request-uri GET. Endpoint: 
Response-ul este in format Json  si este formatat astfel, continand 10 informatii (glume) generate automat si aleator:
```json
[
    {
        "id": 285,
        "type": "general",
        "setup": "What's the difference between a hippo and a zippo?",
        "punchline": "One is really heavy, the other is a little lighter."
    },
    {
        "id": 12,
        "type": "knock-knock",
        "setup": "Knock knock. \n Who's there? \n A broken pencil. \n A broken pencil who?",
        "punchline": "Never mind. It's pointless."
    },
    {
        "id": 136,
        "type": "general",
        "setup": "How does a penguin build it’s house?",
        "punchline": "Igloos it together."
    },
    {
        "id": 43,
        "type": "general",
        "setup": "A ham sandwhich walks into a bar and orders a beer. The bartender says...",
        "punchline": "I'm sorry, we don't serve food here"
    },
    {
        "id": 385,
        "type": "programming",
        "setup": "3 SQL statements walk into a NoSQL bar. Soon, they walk out",
        "punchline": "They couldn't find a table."
    },
    {
        "id": 347,
        "type": "general",
        "setup": "Why did the opera singer go sailing?",
        "punchline": "They wanted to hit the high Cs."
    },
    {
        "id": 371,
        "type": "general",
        "setup": "Why does a chicken coop only have two doors?",
        "punchline": "Because if it had four doors it would be a chicken sedan."
    },
    {
        "id": 254,
        "type": "general",
        "setup": "What is a tornado's favorite game to play?",
        "punchline": "Twister!"
    },
    {
        "id": 374,
        "type": "general",
        "setup": "Why does Norway have barcodes on their battleships?",
        "punchline": "So when they get back to port, they can Scandinavian."
    },
    {
        "id": 379,
        "type": "programming",
        "setup": "A programmer puts two glasses on his bedside table before going to sleep.",
        "punchline": "A full one, in case he gets thirsty, and an empty one, in case he doesn’t."
    }
]

```
Unde id= este id-ul glumei din fisierul index.json al api-ului
Type= tipul de audienta pentru care este destinata gluma ( general, programatorilor)
Setup= partea 1 gluma
Punchline = partea 2 gluma

 API TVMaze
Accepta doar request GET. Endpoint: http://api.tvmaze.com/shows/1/episodes
Response este in format JSON si contine o lista de episoade pentru serialul cu id=1 in urmatorul format. Numarul de elemente ale listei este variabil in functie de numarul de episode. 
 ```json {
        "id": 1,
        "url": "http://www.tvmaze.com/episodes/1/under-the-dome-1x01-pilot",
        "name": "Pilot",
        "season": 1,
        "number": 1,
        "airdate": "2013-06-24",
        "airtime": "22:00",
        "airstamp": "2013-06-25T02:00:00+00:00",
        "runtime": 60,
        "image": {
            "medium": "http://static.tvmaze.com/uploads/images/medium_landscape/1/4388.jpg",
            "original": "http://static.tvmaze.com/uploads/images/original_untouched/1/4388.jpg"
        },
        "summary": "<p>When the residents of Chester's Mill find themselves trapped under a massive transparent dome with no way out, they struggle to survive as resources rapidly dwindle and panic quickly escalates.</p>",
        "_links": {
            "self": {
                "href": "http://api.tvmaze.com/episodes/1"
            }
        }
    },
```
Numele fiecarei proprietati sunt sugestive iar informatiile oferite sunt despre sezon si numarul episodului, data de lansare si ora, o image, o scurta descriere si un link catre un url unde gasesc mai multe informatii.
La randul sau, informatia mai integreaza un API -href": "http://api.tvmaze.com/episodes/1. 

## Dezvoltarea aplicatiei si parsarea API-urilor

Aplicatia este dezvoltata pe platforma Cloud9 integrata in AWS. Am configurat mediul sa putem rula o aplicatie folosind nodeJs. 
Folosind comanda npm-install, am instalat dependintele in folder-ul node_modules. Versiunea de NodeJs este 10.0.
Aplicatia contine un folder frontend care are o dezvoltata o pagina html pentru fiecare parte a aplicatiei. 
## In jokes.html :
- am creat un element de tip table in care sa afisez fiecare camp din response 
- am creat 2 functii JavaScript care construiesc tabelul 
-- genereaza randurile 
```
function generateTable(table, data) {
  for (let element of data) {
    let row = table.insertRow();
    for (key in element) {
      let cell = row.insertCell();
      let text = document.createTextNode(element[key]);
      cell.appendChild(text);
    }
  }
}
```
-- genereaza header-ul 
```
function generateTableHead(table, data) {
  let thead = table.createTHead();
  let row = thead.insertRow();
  for (let key of data) {
    let th = document.createElement("th");
    let text = document.createTextNode(key);
    th.appendChild(text);
    row.appendChild(th);
  }
}
```
Folosind fetch()  am accesat informatia din raspuns.  fetch()
- promise-ul returnat de fetch() nu va fi rejectat la HTTP error ( reposnse este HTTP 400 sau 500) ci va avea status ok
- fetch() nu primeste cookies 
- fetch() nu trimite cookies
  let url='https://official-joke-api.appspot.com/random_ten'
  let response = await fetch(url)
O data ce avem raspunsul, il putem parsa si folosi in structura tabelara.

## In shows.html 

Endpoint-ul api-ului ne ofera posibilitatea sa ne configuram noi un id pentru fiecare serial. Astfel, pe baza unei informatii text dintr-un textbox, vom face submit iar in spatele submit-ului se afla o functie javascirpt: getId()
Folosim si de data aceasta fetch() pentru a avea acces la datele din response si ulterior, transformam json-ul intr-un obiect de tip array folosind functia:
function json2array(json){
    var result = [];
    var keys = Object.keys(json);
    keys.forEach(function(key){
        result.push(json[key]);
    });
    return result;
}

Am facut acest pas pentru a folosi map() in parsarea informatiilor. Astfel, pentru fiecare shows din array-ul result , vom afisa informatile care ne intereseaza in interfata.

Pagina pe care o deschidem prima oara la accesare este index.html unde va fi afisat doar meniul de navigare. 

## Publicarea aplicatiei
Codul sursa al aplicatiei se afla pe github la : https://github.com/loredanaburlacu/proiectcc
Aplicatia a fost publicata pe Azure la: https://loredanaproiectcc.azurewebsites.net/
# Referinte 

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

http://www.tvmaze.com/api

https://github.com/15Dkatz/official_joke_api

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 

https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages
# Licenta
Aceasta aplicatie este dezvoltata doar pentru scopuri demonstrative si etape de invatare, fara scop comercial. 
