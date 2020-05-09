{"changed":true,"filter":false,"title":"index.js","tooltip":"/server/index.js","value":"const express = require(\"express\")\nconst app = express()\n\n//app.use('/',express.static('frontend'))\n\n\napp.get('/hello',(request,response)=>{\n    \n    response.status(200).json({hello:\"world\"})\n})\n//app.get('/test', (req,res) =>{\n    \n//})\napp.listen(8080)\n","undoManager":{"mark":83,"position":90,"stack":[[{"start":{"row":0,"column":0},"end":{"row":2,"column":0},"action":"insert","lines":["const express=require(\"express\")","const app=express()",""],"id":1}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["a"],"id":2},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["p"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["p"]}],[{"start":{"row":1,"column":9},"end":{"row":1,"column":10},"action":"insert","lines":[" "],"id":3}],[{"start":{"row":1,"column":11},"end":{"row":1,"column":12},"action":"insert","lines":[" "],"id":4}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"insert","lines":[" "],"id":5}],[{"start":{"row":0,"column":12},"end":{"row":0,"column":13},"action":"remove","lines":[" "],"id":6}],[{"start":{"row":0,"column":13},"end":{"row":0,"column":14},"action":"insert","lines":[" "],"id":7}],[{"start":{"row":0,"column":15},"end":{"row":0,"column":16},"action":"insert","lines":[" "],"id":8}],[{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["."],"id":9},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["l"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["i"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["s"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["t"]},{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":11},"action":"insert","lines":["()"],"id":10}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":["8"],"id":11},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["0"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["8"]},{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":["0"]}],[{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["n"],"id":12}],[{"start":{"row":1,"column":21},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":13},{"start":{"row":2,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":["/"]},{"start":{"row":2,"column":1},"end":{"row":2,"column":2},"action":"insert","lines":["/"]},{"start":{"row":2,"column":2},"end":{"row":2,"column":3},"action":"insert","lines":["d"]},{"start":{"row":2,"column":3},"end":{"row":2,"column":4},"action":"insert","lines":["e"]},{"start":{"row":2,"column":4},"end":{"row":2,"column":5},"action":"insert","lines":["f"]},{"start":{"row":2,"column":5},"end":{"row":2,"column":6},"action":"insert","lines":["i"]},{"start":{"row":2,"column":6},"end":{"row":2,"column":7},"action":"insert","lines":["n"]},{"start":{"row":2,"column":7},"end":{"row":2,"column":8},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":8},"end":{"row":2,"column":9},"action":"insert","lines":["s"],"id":14},{"start":{"row":2,"column":9},"end":{"row":2,"column":10},"action":"insert","lines":["c"]}],[{"start":{"row":2,"column":10},"end":{"row":2,"column":11},"action":"insert","lines":[" "],"id":15},{"start":{"row":2,"column":11},"end":{"row":2,"column":12},"action":"insert","lines":["u"]},{"start":{"row":2,"column":12},"end":{"row":2,"column":13},"action":"insert","lines":["n"]}],[{"start":{"row":2,"column":13},"end":{"row":2,"column":14},"action":"insert","lines":[" "],"id":16},{"start":{"row":2,"column":14},"end":{"row":2,"column":15},"action":"insert","lines":["e"]},{"start":{"row":2,"column":15},"end":{"row":2,"column":16},"action":"insert","lines":["n"]},{"start":{"row":2,"column":16},"end":{"row":2,"column":17},"action":"insert","lines":["d"]},{"start":{"row":2,"column":17},"end":{"row":2,"column":18},"action":"insert","lines":["p"]},{"start":{"row":2,"column":18},"end":{"row":2,"column":19},"action":"insert","lines":["o"]},{"start":{"row":2,"column":19},"end":{"row":2,"column":20},"action":"insert","lines":["i"]},{"start":{"row":2,"column":20},"end":{"row":2,"column":21},"action":"insert","lines":["t"]}],[{"start":{"row":2,"column":21},"end":{"row":2,"column":22},"action":"insert","lines":[" "],"id":17},{"start":{"row":2,"column":22},"end":{"row":2,"column":23},"action":"insert","lines":["d"]},{"start":{"row":2,"column":23},"end":{"row":2,"column":24},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":24},"end":{"row":2,"column":25},"action":"insert","lines":[" "],"id":18},{"start":{"row":2,"column":25},"end":{"row":2,"column":26},"action":"insert","lines":["t"]},{"start":{"row":2,"column":26},"end":{"row":2,"column":27},"action":"insert","lines":["i"]},{"start":{"row":2,"column":27},"end":{"row":2,"column":28},"action":"insert","lines":["p"]}],[{"start":{"row":2,"column":28},"end":{"row":2,"column":29},"action":"insert","lines":[" "],"id":19},{"start":{"row":2,"column":29},"end":{"row":2,"column":30},"action":"insert","lines":["g"]},{"start":{"row":2,"column":30},"end":{"row":2,"column":31},"action":"insert","lines":["e"]},{"start":{"row":2,"column":31},"end":{"row":2,"column":32},"action":"insert","lines":["t"]},{"start":{"row":2,"column":32},"end":{"row":2,"column":33},"action":"insert","lines":["/"]},{"start":{"row":2,"column":33},"end":{"row":2,"column":34},"action":"insert","lines":["h"]},{"start":{"row":2,"column":34},"end":{"row":2,"column":35},"action":"insert","lines":["e"]}],[{"start":{"row":2,"column":35},"end":{"row":2,"column":36},"action":"insert","lines":["l"],"id":20},{"start":{"row":2,"column":36},"end":{"row":2,"column":37},"action":"insert","lines":["l"]},{"start":{"row":2,"column":37},"end":{"row":2,"column":38},"action":"insert","lines":["o"]}],[{"start":{"row":2,"column":38},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":21},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["a"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["p"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["p"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["."]},{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["g"]},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["t"],"id":22}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":9},"action":"insert","lines":["()"],"id":23}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":10},"action":"insert","lines":["''"],"id":24}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["/"],"id":25}],[{"start":{"row":3,"column":10},"end":{"row":3,"column":11},"action":"insert","lines":["h"],"id":26},{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":["e"]},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["l"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["l"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["o"]}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["."],"id":27}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"remove","lines":["."],"id":28}],[{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":[","],"id":29}],[{"start":{"row":3,"column":17},"end":{"row":3,"column":19},"action":"insert","lines":["()"],"id":30}],[{"start":{"row":3,"column":18},"end":{"row":3,"column":19},"action":"insert","lines":["r"],"id":31},{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["e"]},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["q"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["u"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["e"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["s"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["t"]}],[{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":[","],"id":32},{"start":{"row":3,"column":26},"end":{"row":3,"column":27},"action":"insert","lines":["r"]},{"start":{"row":3,"column":27},"end":{"row":3,"column":28},"action":"insert","lines":["e"]},{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["s"]},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["p"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["o"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["n"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["s"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["="],"id":33},{"start":{"row":3,"column":36},"end":{"row":3,"column":37},"action":"insert","lines":[">"]}],[{"start":{"row":3,"column":37},"end":{"row":3,"column":39},"action":"insert","lines":["{}"],"id":34}],[{"start":{"row":3,"column":38},"end":{"row":5,"column":0},"action":"insert","lines":["","    ",""],"id":35}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["r"],"id":36},{"start":{"row":4,"column":5},"end":{"row":4,"column":6},"action":"insert","lines":["e"]},{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["s"]},{"start":{"row":4,"column":7},"end":{"row":4,"column":8},"action":"insert","lines":["p"]},{"start":{"row":4,"column":8},"end":{"row":4,"column":9},"action":"insert","lines":["o"]},{"start":{"row":4,"column":9},"end":{"row":4,"column":10},"action":"insert","lines":["n"]},{"start":{"row":4,"column":10},"end":{"row":4,"column":11},"action":"insert","lines":["s"]},{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["e"]},{"start":{"row":4,"column":12},"end":{"row":4,"column":13},"action":"insert","lines":["."]}],[{"start":{"row":4,"column":13},"end":{"row":4,"column":14},"action":"insert","lines":["s"],"id":37},{"start":{"row":4,"column":14},"end":{"row":4,"column":15},"action":"insert","lines":["t"]},{"start":{"row":4,"column":15},"end":{"row":4,"column":16},"action":"insert","lines":["a"]},{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["t"]},{"start":{"row":4,"column":17},"end":{"row":4,"column":18},"action":"insert","lines":["u"]},{"start":{"row":4,"column":18},"end":{"row":4,"column":19},"action":"insert","lines":["s"]}],[{"start":{"row":4,"column":19},"end":{"row":4,"column":21},"action":"insert","lines":["()"],"id":38}],[{"start":{"row":4,"column":20},"end":{"row":4,"column":21},"action":"insert","lines":["2"],"id":39},{"start":{"row":4,"column":21},"end":{"row":4,"column":22},"action":"insert","lines":["0"]},{"start":{"row":4,"column":22},"end":{"row":4,"column":23},"action":"insert","lines":["0"]}],[{"start":{"row":4,"column":24},"end":{"row":4,"column":25},"action":"insert","lines":["."],"id":40},{"start":{"row":4,"column":25},"end":{"row":4,"column":26},"action":"insert","lines":["j"]},{"start":{"row":4,"column":26},"end":{"row":4,"column":27},"action":"insert","lines":["s"]},{"start":{"row":4,"column":27},"end":{"row":4,"column":28},"action":"insert","lines":["o"]},{"start":{"row":4,"column":28},"end":{"row":4,"column":29},"action":"insert","lines":["n"]}],[{"start":{"row":4,"column":29},"end":{"row":4,"column":31},"action":"insert","lines":["()"],"id":41}],[{"start":{"row":4,"column":30},"end":{"row":4,"column":32},"action":"insert","lines":["{}"],"id":42}],[{"start":{"row":4,"column":31},"end":{"row":4,"column":32},"action":"insert","lines":["h"],"id":43},{"start":{"row":4,"column":32},"end":{"row":4,"column":33},"action":"insert","lines":["e"]},{"start":{"row":4,"column":33},"end":{"row":4,"column":34},"action":"insert","lines":["l"]},{"start":{"row":4,"column":34},"end":{"row":4,"column":35},"action":"insert","lines":["l"]},{"start":{"row":4,"column":35},"end":{"row":4,"column":36},"action":"insert","lines":["o"]},{"start":{"row":4,"column":36},"end":{"row":4,"column":37},"action":"insert","lines":[":"]}],[{"start":{"row":4,"column":37},"end":{"row":4,"column":39},"action":"insert","lines":["\"\""],"id":44}],[{"start":{"row":4,"column":38},"end":{"row":4,"column":39},"action":"insert","lines":["w"],"id":45},{"start":{"row":4,"column":39},"end":{"row":4,"column":40},"action":"insert","lines":["o"]},{"start":{"row":4,"column":40},"end":{"row":4,"column":41},"action":"insert","lines":["r"]},{"start":{"row":4,"column":41},"end":{"row":4,"column":42},"action":"insert","lines":["l"]},{"start":{"row":4,"column":42},"end":{"row":4,"column":43},"action":"insert","lines":["d"]}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":["n"],"id":46},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["o"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["d"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["e"]},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["m"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":["a"]}],[{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"remove","lines":["a"],"id":47},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"remove","lines":["m"]},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["e"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["d"]},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":["o"]},{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"remove","lines":["n"]}],[{"start":{"row":2,"column":0},"end":{"row":2,"column":38},"action":"remove","lines":["//definesc un endpoit de tip get/hello"],"id":48}],[{"start":{"row":5,"column":2},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":49},{"start":{"row":6,"column":0},"end":{"row":6,"column":1},"action":"insert","lines":["a"]},{"start":{"row":6,"column":1},"end":{"row":6,"column":2},"action":"insert","lines":["p"]},{"start":{"row":6,"column":2},"end":{"row":6,"column":3},"action":"insert","lines":["p"]},{"start":{"row":6,"column":3},"end":{"row":6,"column":4},"action":"insert","lines":["."]},{"start":{"row":6,"column":4},"end":{"row":6,"column":5},"action":"insert","lines":["g"]},{"start":{"row":6,"column":5},"end":{"row":6,"column":6},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":6},"end":{"row":6,"column":7},"action":"insert","lines":["t"],"id":50}],[{"start":{"row":6,"column":7},"end":{"row":6,"column":9},"action":"insert","lines":["()"],"id":51}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"insert","lines":["\\"],"id":52}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":9},"action":"remove","lines":["\\"],"id":53}],[{"start":{"row":6,"column":8},"end":{"row":6,"column":10},"action":"insert","lines":["''"],"id":54}],[{"start":{"row":6,"column":9},"end":{"row":6,"column":10},"action":"insert","lines":["/"],"id":55},{"start":{"row":6,"column":10},"end":{"row":6,"column":11},"action":"insert","lines":["t"]},{"start":{"row":6,"column":11},"end":{"row":6,"column":12},"action":"insert","lines":["e"]},{"start":{"row":6,"column":12},"end":{"row":6,"column":13},"action":"insert","lines":["s"]},{"start":{"row":6,"column":13},"end":{"row":6,"column":14},"action":"insert","lines":["t"]}],[{"start":{"row":6,"column":15},"end":{"row":6,"column":16},"action":"insert","lines":[","],"id":56}],[{"start":{"row":6,"column":16},"end":{"row":6,"column":17},"action":"insert","lines":[" "],"id":57},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"insert","lines":["r"]},{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["e"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["e"],"id":58},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":["r"]}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["r"],"id":59}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"remove","lines":["r"],"id":60},{"start":{"row":6,"column":17},"end":{"row":6,"column":18},"action":"remove","lines":[")"]}],[{"start":{"row":6,"column":17},"end":{"row":6,"column":19},"action":"insert","lines":["()"],"id":61}],[{"start":{"row":6,"column":18},"end":{"row":6,"column":19},"action":"insert","lines":["r"],"id":62},{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["q"]}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["q"],"id":63}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["w"],"id":64}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"remove","lines":["w"],"id":65}],[{"start":{"row":6,"column":19},"end":{"row":6,"column":20},"action":"insert","lines":["e"],"id":66},{"start":{"row":6,"column":20},"end":{"row":6,"column":21},"action":"insert","lines":["q"]},{"start":{"row":6,"column":21},"end":{"row":6,"column":22},"action":"insert","lines":[","]},{"start":{"row":6,"column":22},"end":{"row":6,"column":23},"action":"insert","lines":["r"]},{"start":{"row":6,"column":23},"end":{"row":6,"column":24},"action":"insert","lines":["e"]},{"start":{"row":6,"column":24},"end":{"row":6,"column":25},"action":"insert","lines":["s"]}],[{"start":{"row":6,"column":26},"end":{"row":6,"column":27},"action":"insert","lines":[" "],"id":67},{"start":{"row":6,"column":27},"end":{"row":6,"column":28},"action":"insert","lines":["="]},{"start":{"row":6,"column":28},"end":{"row":6,"column":29},"action":"insert","lines":[">"]},{"start":{"row":6,"column":29},"end":{"row":6,"column":30},"action":"insert","lines":["{"]}],[{"start":{"row":6,"column":30},"end":{"row":6,"column":31},"action":"insert","lines":["}"],"id":68}],[{"start":{"row":6,"column":30},"end":{"row":8,"column":0},"action":"insert","lines":["","    ",""],"id":69}],[{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":[")"],"id":70}],[{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""],"id":71},{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["a"]},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["p"]},{"start":{"row":3,"column":2},"end":{"row":3,"column":3},"action":"insert","lines":["p"]},{"start":{"row":3,"column":3},"end":{"row":3,"column":4},"action":"insert","lines":["."]}],[{"start":{"row":3,"column":4},"end":{"row":3,"column":5},"action":"insert","lines":["u"],"id":72},{"start":{"row":3,"column":5},"end":{"row":3,"column":6},"action":"insert","lines":["s"]},{"start":{"row":3,"column":6},"end":{"row":3,"column":7},"action":"insert","lines":["e"]}],[{"start":{"row":3,"column":7},"end":{"row":3,"column":9},"action":"insert","lines":["()"],"id":73}],[{"start":{"row":3,"column":8},"end":{"row":3,"column":10},"action":"insert","lines":["''"],"id":74}],[{"start":{"row":3,"column":9},"end":{"row":3,"column":10},"action":"insert","lines":["/"],"id":75}],[{"start":{"row":3,"column":11},"end":{"row":3,"column":12},"action":"insert","lines":[","],"id":76},{"start":{"row":3,"column":12},"end":{"row":3,"column":13},"action":"insert","lines":["e"]},{"start":{"row":3,"column":13},"end":{"row":3,"column":14},"action":"insert","lines":["x"]},{"start":{"row":3,"column":14},"end":{"row":3,"column":15},"action":"insert","lines":["p"]},{"start":{"row":3,"column":15},"end":{"row":3,"column":16},"action":"insert","lines":["r"]},{"start":{"row":3,"column":16},"end":{"row":3,"column":17},"action":"insert","lines":["e"]},{"start":{"row":3,"column":17},"end":{"row":3,"column":18},"action":"insert","lines":["s"]}],[{"start":{"row":3,"column":12},"end":{"row":3,"column":18},"action":"remove","lines":["expres"],"id":77},{"start":{"row":3,"column":12},"end":{"row":3,"column":19},"action":"insert","lines":["express"]}],[{"start":{"row":3,"column":19},"end":{"row":3,"column":20},"action":"insert","lines":["."],"id":78},{"start":{"row":3,"column":20},"end":{"row":3,"column":21},"action":"insert","lines":["s"]},{"start":{"row":3,"column":21},"end":{"row":3,"column":22},"action":"insert","lines":["t"]},{"start":{"row":3,"column":22},"end":{"row":3,"column":23},"action":"insert","lines":["a"]},{"start":{"row":3,"column":23},"end":{"row":3,"column":24},"action":"insert","lines":["t"]},{"start":{"row":3,"column":24},"end":{"row":3,"column":25},"action":"insert","lines":["i"]},{"start":{"row":3,"column":25},"end":{"row":3,"column":26},"action":"insert","lines":["c"]}],[{"start":{"row":3,"column":26},"end":{"row":3,"column":28},"action":"insert","lines":["()"],"id":79}],[{"start":{"row":3,"column":27},"end":{"row":3,"column":29},"action":"insert","lines":["''"],"id":80}],[{"start":{"row":3,"column":28},"end":{"row":3,"column":29},"action":"insert","lines":["f"],"id":81},{"start":{"row":3,"column":29},"end":{"row":3,"column":30},"action":"insert","lines":["r"]},{"start":{"row":3,"column":30},"end":{"row":3,"column":31},"action":"insert","lines":["o"]},{"start":{"row":3,"column":31},"end":{"row":3,"column":32},"action":"insert","lines":["n"]},{"start":{"row":3,"column":32},"end":{"row":3,"column":33},"action":"insert","lines":["t"]},{"start":{"row":3,"column":33},"end":{"row":3,"column":34},"action":"insert","lines":["e"]},{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["d"]}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"remove","lines":["d"],"id":82}],[{"start":{"row":3,"column":34},"end":{"row":3,"column":35},"action":"insert","lines":["n"],"id":83},{"start":{"row":3,"column":35},"end":{"row":3,"column":36},"action":"insert","lines":["d"]}],[{"start":{"row":3,"column":39},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":84},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":6,"column":38},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":85},{"start":{"row":7,"column":0},"end":{"row":7,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":3,"column":0},"end":{"row":3,"column":1},"action":"insert","lines":["/"],"id":86},{"start":{"row":3,"column":1},"end":{"row":3,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":1},"action":"insert","lines":["/"],"id":87},{"start":{"row":10,"column":1},"end":{"row":10,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":1},"action":"insert","lines":["/"],"id":88},{"start":{"row":12,"column":1},"end":{"row":12,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":13,"column":16},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":89},{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"insert","lines":["j"],"id":90},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"insert","lines":["t"]},{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"insert","lines":["t"]}],[{"start":{"row":15,"column":2},"end":{"row":15,"column":3},"action":"remove","lines":["t"],"id":91},{"start":{"row":15,"column":1},"end":{"row":15,"column":2},"action":"remove","lines":["t"]},{"start":{"row":15,"column":0},"end":{"row":15,"column":1},"action":"remove","lines":["j"]},{"start":{"row":14,"column":0},"end":{"row":15,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":14,"column":0},"end":{"row":14,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1588612753055}