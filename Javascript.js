    /* Storing multi-line JSON string in a JS variable
    using the new ES6 template literals */
    
    
    var json = `{
        "person1" : {"name": "John", "age": "15", "country": "Canada"},
        "person2" : {"name": "Abraham", "age": "24", "country": "Italy"},
        "person3" : {"name": "Stephen", "age": "58", "country": "UK"},
        "person4" : {"name": "Harry", "age": "10", "country": "Germany"}

    }`;

    //returning json data from json file
    document.write("<br><br>//returning json data from json file<br>",json);

    //modifying user data
    var obj=JSON.parse(json);

    obj.person1.name="Rahul";

    json=JSON.stringify(obj);

    document.write("<br><br>//modifying user data<br>",json);

    //to add data
    var obj=JSON.parse(json);

    obj.person5={name:"Akshay",age:25,country:"India"};

    json=JSON.stringify(obj);

    document.write("<br><br>//to add data<br>",json);

    //to delete
    var obj=JSON.parse(json);

    delete obj.person3;

    json=JSON.stringify(obj);

    document.write("<br><br>//to delete<br>",json);

 //data as table
    obj=JSON.parse(json);

    document.write(
        "<br><br>//data as table<br><table>",
            "<tr> <td>",obj["person1"]["name"],"</td> <td>",obj["person1"]["age"],"</td><td>",obj["person1"]["country"],"</td></tr>",
            "<tr> <td>",obj["person2"]["name"],"</td> <td>",obj["person2"]["age"],"</td><td>",obj["person2"]["country"],"</td></tr>",
            "<tr> <td>",obj["person4"]["name"],"</td> <td>",obj["person4"]["age"],"</td><td>",obj["person4"]["country"],"</td></tr>",
            "<tr> <td>",obj["person5"]["name"],"</td> <td>",obj["person5"]["age"],"</td><td>",obj["person5"]["country"],"</td></tr>",
        "</table>"    

    );

//data of person1
document.write("<br><br>//data of person1<br>","<br>Name: ",obj["person1"]["name"],"<br>Age: ", obj["person1"]["age"],"<br>Country: ",obj["person1"]["country"],);

