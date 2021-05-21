var guest_name = [];
function submit()
{
    var display_guest_rray = [];

    for (var i = 1; i <=  1; i++){
        var name_of_the_guest = document.getElementById("name_1" +i).value;
        console.log(name_of_the_guest);
        display_guest_rray.push(name_of_the_guest);
    }
    
    console.log(guest_name);
    var length_of_guest_name = guest_name.length;
    console.log(length_of_guest_name);

    for (var k = 0; k < length_of_guest_name; k++){
        display_guest_rray.push(guest_name[k]);
        console.log(display_guest_rray);
        document.getElementById("display_names").innerHTML =display_guest_rray;
    }
    document.getElementById("display_names").innerHTML =display_guest_rray;

    }
    function show() {
        var show = display_guest_rray.join(" ");
        console.log(display_guest_rray);
        document.getElementById("show_names_vertical").innerHTML = show;  
    }

    function sort(){
        var sorted_list = guest_name.sort();
        document.getElementById("display_sort").innerHTML = sorted_list;
    }

function search(){

    var s = document.getElementById("search_text").value;
    var found = 0;
    var m;
    for (m = 0; m <guest_name.length; m++){

        if (s == guest_name[m]){
            found=found+1;
        }
    }
    document.getElementById("search_display").innerHTML = "name found "+ found +"time/s";
    console.log("found name"+ found +"time/s")
}