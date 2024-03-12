let actualStep = 1
let topics = []

const regexEmail = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/


function nextStep() {

    if(stepOne() || (actualStep > 1 && !stepTwo())) return

    document.querySelector(`#step-${actualStep}`).style.border = 'none'
    const formStep = `.formStep-${actualStep++}`
    
    if(actualStep == 3) {
        stepThree()
    }else if(actualStep == 4) {
        window.alert('✅ Success')
        
        return
    }
    
    document.querySelector(`.steps span`).innerHTML = `Step ${actualStep} of 3`
    document.querySelector(`#step-${actualStep}`).classList.add('activeStep')
    document.querySelector(`.formStep-${actualStep}`).style.display = "block"
    
    document.querySelector(formStep).style.display = "none"
    
}

function stepOne() {
    return !document.forms['myForm']['name'].value || 
    !document.forms['myForm']['email'].value || 
    !regexEmail.test(document.forms['myForm']['email'].value)
}

function stepTwo() {
    return topics.length > 0
}

function stepThree() {
    const resume = document.querySelector('.sections').children
    resume[1].children[0].append(document.forms['myForm']['name'].value)
    resume[1].children[1].append(document.forms['myForm']['email'].value)

    topics.forEach(value => {
        let element = document.createElement('li')
        element.innerHTML = value
        resume[1].children[3].appendChild(element)
    })
}

function addTopics(element) {
    const haselement = topics.indexOf(element.value)
    
    if(haselement != -1) {
        topics.splice(haselement)
        document.querySelector(`#${element.id}`).classList.remove('topicCheck')
    }else{
        topics.push(element.value)
        document.querySelector(`#${element.id}`).classList.add('topicCheck')
    }

}

document.querySelector('.formStep-2').style.display = 'none'
document.querySelector('.formStep-3').style.display = 'none'