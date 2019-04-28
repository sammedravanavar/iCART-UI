let loginDefault = {
    started: false,
    recognized: false,
    age: 28,
    gender: 'Male'
}

export function login(defaultStore=loginDefault, action){
    switch(action.type){
        case 'RUN_RECOGNITION': 
            if(action.data.recognized){
                return {
                    started: true,
                    recognized: true,
                    age: Math.floor(action.data.age),
                    gender: action.data.gender.toLowerCase(),
    
                }                
            }
            return {...defaultStore,...action.data}
        default: return defaultStore;   
    }
}