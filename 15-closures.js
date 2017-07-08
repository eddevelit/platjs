  function holaFamilia(apellido){
  	return function holaMiembro(nombre){
  		console.log(`Hola ${nombre} ${apellido}`)

  	}
  }

  const saludarGomez = holaFamilia("Gomez")
  const saludarPerez = holaFamilia("Perez")

  saludarGomez("Pedro")
  saludarGomez("Luis")
  saludarGomez("Lisa")
  saludarGomez("Monica")

  saludarPerez("Ernesto")
  saludarPerez("Daniela")
  saludarPerez("Ilse")
  saludarPerez("Donas")
  saludarPerez("Marco")
  ///////////////////////////////////////////////////////////////////////////////////////////
function makePrefixer(tipoPrefjo){
	return function agregaPrefijo(palabra){
		alert(tipoPrefjo+palabra)
	}
}  
const prefijoRe = makePrefixer("re")
const prefijoIn = makePrefixer("in")


