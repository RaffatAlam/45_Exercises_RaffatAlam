/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/

let current_usernames: string[] = ['Mubeen us SalAm','Alamdeen','Farman HussaIn','BaBar AZam','SHahzad gul'];

let new_usernames: string[] = ['Mubeen us SalaM','Mehmood Ghaznavi','Altamash','Babar AzaM','Tanveer Hussain'];

new_usernames.forEach(newusername =>{
    let lowerCase: string = newusername.toLowerCase();

if(current_usernames.map(c_username => c_username.toLowerCase()).includes(lowerCase)){
    console.log(`This user name ${newusername} is not available.Please write a diffrent name.`);
}else{
    console.log(`The user name ${newusername} is available.`);
}      
    
})