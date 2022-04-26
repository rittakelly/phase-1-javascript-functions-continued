// code your solution here
function saturdayFun(activity) {
    if (activity == "bathe my dog") {
    return `This Saturday, I want to ${activity}!`
    } else {
        return 'This Saturday, I want to roller-skate!'
    }
}

function mondayWork(work) {
    switch (work) {
        case "work from home":
            return `This Monday, I will ${work}.`
            break;
    
        default:
            return "This Monday, I will go to the office."
            break;
    }
}

function wrapAdjective(adj = "*") {
    return function(secretWord = "special"){
        return `You are ${adj}${secretWord}${adj}!`
    }
}