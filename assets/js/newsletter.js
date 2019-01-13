'use strict';

 const fs = require('fs');

let student = {  
                    name: 'Mike',
                    age: 25, 
                    gender: 'Male',
                    department: 'English',
                    car: 'Honda' 
                };

                let data = JSON.stringify(student);  

fs.writeFileSync('file.json', data, finished);

                function finished(err)
                {
                    console.log('success');
                }
// function WriteToFile(passForm) {
 
//     set fso = CreateObject("Scripting.FileSystemObject"); 
//     set s   = fso.CreateTextFile("c:\log.txt", True);
 
//     var email = document.getElementById('email');
//     var phone  = document.getElementById('phone');
 
//     s.writeline("email :" + email);
//     s.writeline("phone:" + phone);
 
//     s.writeline("-----------------------------");
//     s.Close();
//  }