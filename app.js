function create_tr(table_id) {
    let table_body = document.getElementById(table_id),
        first_tr   = table_body.firstElementChild
        tr_clone   = first_tr.cloneNode(true);
        
           
    // var id = document.getElementById("id").value
    // var name = document.getElementById("name").value
    // var pnumber = document.getElementById("pnumber").value
    // var email = document.getElementById("email").value
    
    //     jsonObject={
    //         "Id":"",
    //         "Name":"",
    //         "PNumber":"",
    //         "Email":""

    // }
    // jsonObject.Id=id;
    // jsonObject.Name=name;
    // jsonObject.PNumber=pnumber;
    // jsonObject.Email=email;

    call()

    // var str = JSON.stringify(jsonObject)
    // console.log(str);
         table_body.append(tr_clone);
         clean_first_tr(table_body.firstElementChild);


    }

function clean_first_tr(firstTr) {
    let children = firstTr.children;
    
    children = Array.isArray(children) ? children : Object.values(children);
    children.forEach(x=>{
        if(x !== firstTr.lastElementChild)
        {
            x.firstElementChild.value = '';
        }
    });
    
}
 
function remove_tr(This) {
    if(This.closest('tbody').childElementCount == 1)
    {
        alert("You Don't have Permission to Delete This ?");
    }else{
        This.closest('tr').remove();
    }
}


//
// for each table row in table body
//
function call(){
    var tbl = $('#students tbody tr ').map(function (idxRow, ele) {
        //
        // start building the retVal object
        //
        var retVal = { };
        //
        // for each cell
        //
        var $td = $(ele).find('td').map(function (idxCell, ele) {
            var input = $(ele).find(':input');
            //
            // if cell contains an input or select....
            //
            if (input.length == 1) {
                var attr = $('#students thead tr th').eq(idxCell).text();
                retVal[attr] = input.val();
            } 
            else {
                var attr = $('#students thead tr th').eq(idxCell).text();
                // retVal[attr] = $(ele).text();
            }
        });
        return retVal;
    }).get();
    
    document.getElementById("jasonobj").innerHTML=JSON.stringify(tbl);
    console.log(tbl)
}