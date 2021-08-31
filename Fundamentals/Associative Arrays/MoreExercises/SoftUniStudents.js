function softUni(arr){

    function register(someString){
        let str = String(someString);
        if(str.includes(':')){
            let [courseName, placesLeft] = str.split(': ').map(a => a.trim());
            if(!courses.hasOwnProperty(courseName)){
                courses[courseName] ={};
                freePlaces[courseName] = 0;
            }
            freePlaces[courseName] += Number(placesLeft);

        }else if(str.includes('with email')){
            let tmp = str.split(' ').map(a => a.trim());
            let tmpUserInfo = tmp[0].split('[');
            let userName = tmpUserInfo.shift();
            let credits = Number(tmpUserInfo[0].replace(']',''));
            let userEmail = tmp[3];
            let courseName = tmp.pop();

            if(courses.hasOwnProperty(courseName) && freePlaces[courseName] > 0){
                courses[courseName][userName] = [credits, userEmail];
                freePlaces[courseName] -= 1;
            }

        }
    }

    let courses = {}
    let freePlaces = {}

    arr.forEach(element => register(element));

    Object.keys(courses)
    .sort((a, b) => Object.keys(courses[b]).length - Object.keys(courses[a]).length)
    .forEach(course =>{
        console.log(`${course}: ${freePlaces[course]} places left`);
        Object.keys(courses[course])
        .sort((a, b) => {
            if(courses[course][b][0] - courses[course][a][0] == 0){
                return a.localeCompare(b);
            }
            return courses[course][b][0] - courses[course][a][0];
        })
        .forEach(student => console.log(`--- ${courses[course][student][0]}: ${student}, ${courses[course][student][1]}`));
    });

}
softUni(['JavaBasics: 2',
'user1[25] with email user1@user.com joins C#Basics',
'C#Advanced: 3',
'JSCore: 4',
'user2[30] with email user2@user.com joins C#Basics',
'user13[50] with email user13@user.com joins JSCore',
'user1[25] with email user1@user.com joins JSCore',
'user8[18] with email user8@user.com joins C#Advanced',
'user6[85] with email user6@user.com joins JSCore',
'JSCore: 2',
'user45[105] with email user45@user.com joins JSCore',
'user007[20] with email user007@user.com joins JSCore',
'user700[29] with email user700@user.com joins JSCore',
'user900[88] with email user900@user.com joins JSCore'])