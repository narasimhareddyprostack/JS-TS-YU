function changeColor(){
    //alert("Test Case 123")
    console.log("Test Case 123")
    let input_Tag_Ref = document.getElementById('abc')
    console.log(input_Tag_Ref)
    input_Tag_Ref.style.backgroundColor = "yellow";
}

let  changeCase= ()=>{
    //alert('Test Case 123')
    let input_Tag_Ref  = document.getElementsByTagName('input')[1];
    //console.log(input_Tag_Ref)
    let uname = input_Tag_Ref.value;
    //console.log(uname.toUpperCase())
    //input_Tag_Ref.value = "Today Wednesday"
    input_Tag_Ref.value = uname.toUpperCase()
}