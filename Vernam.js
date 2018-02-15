function Vernam() {

  var str = "" + original.value;
  var key = "" + Clave.value;
  intro.innerHTML = str;
  var bin = tobin(str);
  introbin.innerHTML = bin;
  var rand = "";
  var sol = "";
  if(key.length==str.length*7 && key.match(/^[01]*$/)) {
    for(var i = 0; i < bin.length; i++) {
      sol = sol + xor(key[i], bin[i]);
    }
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

function binVernam(){

  var bin = "" + original.value;
  var key = "" + Clave.value;
  if(bin.match(/^[01]*$/) && bin.length%7 == 0) {
    var str = frombin(bin)
    intro.innerHTML = str;
    introbin.innerHTML = bin;
    var rand = "";
    var sol = "";
    if(key.length==bin.length && key.match(/^[01]*$/)) {
      for(var i = 0; i < bin.length; i++) {
        sol = sol + xor(key[i], bin[i]);
      }
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
    console.log("Letra: "+ str[i]);
    console.log("ascii: "+ str[i].charCodeAt(0));
    var num = str[i].charCodeAt(0);
    //var num = toascii[str[i]];
    temp = "" + temp + num.toString(2);
    while(temp.length < 7){
      temp = "" + 0 + temp;
    }
    sol = "" + sol + temp;
  }
  return sol;
}

function frombin(bin) {
  var ascii = "";
  var num = bin.length/7;
  var cont = 0;
  console.log("de aqui para abajo \n \n")
  for(var i = 0; i < num; i++){
    var temp = "";
    for(var j = 0; j < 7; j++){
      temp = "" + temp + bin[cont];
      cont++;
    }
    console.log("es el numero: " + temp + " ??? "+ parseInt(temp, 2));
    var dec = parseInt(temp, 2);
    console.log("tu madre" + dec);
    ascii = "" + ascii + String.fromCharCode(dec);
    console.log("Numero "+dec);
    console.log("ASCII "+ascii);
  }
  return ascii;
}
