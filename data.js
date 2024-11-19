import { getIranianDate } from "./src/App";


export const randomID = ()=> Math.floor(Math.random() * 1000000000000) ;


const dataStore = {
    users : [
        {
            id:1 , type:'person', name:'علی رضا' ,img:'user1.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate(),
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() , created:'12:54:33' , message : 'سلام خوبی'},
                { idOwnerMsg : 1 , idMsg : randomID() , created:'02:21:33' , message : 'امروز میایی باشگاه ؟'}
            ]
        },
        {
            id:2 , type:'person', name:'محمد' ,img:'user2.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() ,
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() , created:'12:02:21' , message : `سلام`},
                { idOwnerMsg : 2 , idMsg : randomID() , created:'12:02:21' , message : 'هرموقع تونستی زنگم بزن'}
            ]
        },
        {
            id:3 ,type:'person', name:'زینب' ,img:'user3.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() ,
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() ,  created:'12:02:21' , message : "میتونی امروز پروژه رو تموم کنی برام بفرستی؟"},
            ]
        },
        {
            id:4 ,type:'person',  name:'حسین' ,img:'user4.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() ,
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() ,  created:'12:02:21' , message : 'کم پیدایی پسر !'}
            ]
        },
        {
            id:5 ,type:'person', name:'تینا' ,img:'user5.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() ,
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() ,  created:'12:02:21' , message : 'سلام چطوری'},
                { idOwnerMsg : 1 , idMsg : randomID() ,  created:'12:02:21' , message : 'میخواستم کمی صحبت کنیم . وقت داری؟'}
            ]
        },
        {
            id:6 ,type:'person', name:'مریم' ,img:'user6.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() ,
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() , created:'12:02:21' , message : 'سلام خوبی'},
                { idOwnerMsg : 2 , idMsg : randomID() , created:'12:02:21' , message : 'امروز دورهمی داریم'},
                { idOwnerMsg : 1 , idMsg : randomID() , created:'12:02:21' , message : 'دوست دارم توام باشی . میای؟'}
            ]
        },
        {
            id:7 ,type:'person', name:'ابوالفضل' ,img:'user7.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() ,
            updated : getIranianDate() ,
            messages : [
                { idOwnerMsg : 1 , idMsg : randomID() , created:'12:02:21' ,message : 'سلام'},
                { idOwnerMsg : 34 , idMsg : randomID() , created:'12:02:21' ,message : 'مهمونی فرداشب رو میایی بریم ؟ من تنهام'}
            ]
        }
    ] ,
    groups : [
        {
            id:1 , name:'دلدادگان',img:'group1.png',
            friend : false , blocked : false ,
            type : 'group',
            updated : getIranianDate() ,
            users : [
                {
                    id:6 , name:'مریم' ,img:'user6.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() 
                },
                {
                    id:5 , name:'تینا' ,img:'user5.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() 
                },
                {
                    id:4 , name:'حسین' ,img:'user4.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate() 
                },
                {
                    id:1 , name:'علی رضا' ,img:'user1.png' , friend:false , blocked:false ,ImBlocked:false , created:getIranianDate(),
                }

            ],
            messages : [

                {
                    idMsg : randomID(),idOwnerMsg : 2 , name : 'علی رضا' ,
                     created : '12:45', message : 'سلام بچه های '
                },
                {
                    idMsg : randomID(),idOwnerMsg : 5 , name : 'مهرداد' ,
                     created : '12:45', message : 'امشب کجایید'
                },
                {
                    idMsg : randomID(),idOwnerMsg : 34 , name : 'قاسم' ,
                     created : '12:45', message : 'فردا میایید مهمونی؟'
                },
                {
                    idMsg : randomID(),idOwnerMsg : 64 , name : 'مهدی' ,
                     created : '12:45', message : 'من پایه ام'
                },
                {
                    idMsg : randomID(),idOwnerMsg : 45 , name : 'زینب' ,
                     created : '12:45', message : 'منم هستم'
                },
                {
                    idMsg : randomID(),idOwnerMsg : 34 , name : 'محمد' ,
                     created : '12:45', message : 'متاسفانه من نیستم بچه ها'
                },
                {
                    idMsg : randomID(),idOwnerMsg : 64 , name : 'مریم' ,
                     created : '12:45', message : 'بریم'
                },
                
            ]
        }

    ] ,
    infoUser : [{}]
}


export default dataStore

