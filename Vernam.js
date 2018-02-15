
function Vernam() {

  var str = "" + original.value;
  var key = "" + Clave.value;
  intro.innerHTML = str;
  //var bin = str.charCodeAt(0).toString(2);
  var bin = tobin(str);
  introbin.innerHTML = bin;
  var rand = "";
  var sol = "";
  //console.log("dasdsa");
  //console.log("key length " + key.length);
  //console.log("str length " + str.length*7);
  if(key.length==str.length*7 && key.match(/^[01]*$/)) {
    //console.log("key length " + key.length);
    //console.log("str length " + str.length*7);
    for(var i = 0; i < bin.length; i++) {
      sol = sol + xor(key[i], bin[i]);
    }
      //console.log("Clave Externa "+key);
    clave.innerHTML = key;
  }
  else {
    for(var i = 0; i < bin.length; i++) {
      rand = "" + rand + getKey();
      sol = sol + xor(rand[i], bin[i]);
    }
    clave.innerHTML = rand;
  }
  salidabin.innerHTML = sol;
  salida.innerHTML = frombin(sol);
}

function getKey() {
  var semilla = new Date;
  semilla = ((semilla.getUTCMilliseconds())%1000)/1000;
  var temp = (Math.random()+semilla)%1;
  if(temp < 0.5) return 0;
  else return 1;
}

function xor(str1, str2) {
  if(str1 == str2) return 0
  else return 1;
}

function tobin(str) {
  var sol = "";
  for( var i = 0; i< str.length; i++) {
    var temp = "";
    //console.log("Letra: "+ str[i])
    //console.log("ascii: "+ str[i].charCodeAt(0));
    var num = str[i].charCodeAt(0);
    temp = "" + temp + num.toString(2);
    while(temp.length < 7){
      temp = "" + 0 + temp;
    }
    sol = "" + sol + temp;
  }
  return sol;
}

function frombin(bin) {
  var ascii = "ººº";
  var num = bin.length/7;
  var cont = 0;
  console.log("de aqui para abajo \n \n")
  for(var i = 0; i < num; i++){
    var temp = "";
    for(var j = 0; j < 7; j++){
      temp = "" + temp + bin[cont];
      cont++;
    }
    console.log("es el numero: "+temp+" ??? "+ parseInt(temp, 2));

    var dec = parseInt(temp, 2) - 32;
    console.log("1 "+dec);
    if(dec < 0) dec = 95 + dec;
    console.log("1 "+dec);
    dec = dec + 32;

    console.log("tu madre" + dec);
    ascii = "" + ascii + String.fromCharCode(dec);
    console.log("Numero "+dec);
    console.log("ASCII "+ascii);
  }
  return ascii;
}
