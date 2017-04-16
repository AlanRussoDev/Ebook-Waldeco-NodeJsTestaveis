function generateBornDateFromAge(age){
    return 2017 - age
}

function generateUserDescription(name, surName, age){
    const fullName = `${name} ${surName}`
    const bornDate = generateBornDateFromAge(age)

    return `${fullName} is ${age} old and was born in ${bornDate}` 
}

const userInformation = generateUserDescription("Alan", "Russo", 23)

console.log(userInformation)