//INITIALIZING VARIABLES
var newInput = document.getElementById('field0');
var i = 1;
var total = 0;
var emptyCheck = document.getElementsByClassName('inputs'); //TO RESTRICT DELETING ALL FIELDS

//TO MAKE THE KEYBOARD POP UP FOR THE FIRST FIELD (DOESN'T WORK ON PHONES AS OF NOW)
document.getElementsByTagName('input')[0].focus();
//console.log(document.getElementById('fieldId').lastElementChild);

//TO ENABLE PRESSING ENTER FOR NEW FIELD ON THE FIRST FIELD
var input = document.getElementById('fieldId').lastElementChild.firstElementChild;
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('fieldId').lastElementChild.querySelector('#enterButton').click();
        console.log('enter');
    }
});




//ONCLICK METHOD FOR ADD
function newWord(e) {
    //RESTRICTING EMPTY FIELDS
    if(e.target.parentNode.firstElementChild.value == ''){
        return 0;
    }

    //TO CHECK THE POINTS OF WORD
    var points = (e.target.previousElementSibling.value);
    //console.log(points.length);
    switch(points.length) {
        case 0: break;
        case 1: break;
        case 2: break;
        case 3: total = total + 1;
                break;
        case 4: total = total + 2;
                break;
        case 5: total = total + 3;
                break;
        case 5: total = total + 4;
                break;
        default: total = total + 6;
                break;

    }

    //CREATING NEW FIELD
    var clone = newInput.cloneNode(true);
    clone.id = 'field' + i++;
    var text = clone.getElementsByTagName('input')[0];
    text.value = '';
    //console.log(clone);
    document.getElementById('fieldId').appendChild(clone);

    //UPDATING SCORE
    document.getElementsByClassName('totalDisplay')[0].textContent = total;

    //POPPING UP KEYBOARD FOR NEXT INPUT
    document.getElementById('fieldId').lastElementChild.firstElementChild.focus();

    //ENABLING PRESSING ENTER FOR NEW FIELDS
    var input = document.getElementById('fieldId').lastElementChild.firstElementChild;
    input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        document.getElementById('fieldId').lastElementChild.querySelector('#enterButton').click();
        console.log('enter');
        }
    });
}

//ONCLICK FUNCTION FOR REMOVE
function removeWord(e) {

    //console.log(emptyCheck);

    //SUBTRACTING THE TOTAL 
    var points = (e.target.previousElementSibling.previousElementSibling.value);
    
    switch(points.length) {
        case 0: break;
        case 1: break;
        case 2: break;
        case 3: total = total - 1;
                break;
        case 4: total = total - 2;
                break;
        case 5: total = total - 3;
                break;
        case 5: total = total - 4;
                break;
        default: total = total - 6;
                break;

    }
    //console.log(total);

    //DELETION OF FIELD
    var toBeDeleted = e.target.parentNode;
    toBeDeleted.parentNode.removeChild(toBeDeleted);

    //UPDATING TOTAL
    document.getElementsByClassName('totalDisplay')[0].textContent = total;

     //MESSAGE FOR DELETION OF ALL FIELDS
    console.log(emptyCheck.length);
    if(emptyCheck.length == 0) {
        var message = document.createElement('h1');
        message.textContent = 'Sorry, you do not have any words left! :p';
        document.getElementById('fieldId').appendChild(message);
    }

}