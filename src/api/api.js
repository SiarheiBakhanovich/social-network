import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '5ba454c0-9493-4565-8ce7-6f6f2d25ed60'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {

        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            });

    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
    },

    getProfile(userId) {
     return   instance.get(`profile/` + userId);

    }
}

export const authAPI = {
   me() {
       return instance.get(`auth/me`)

   }
}





/*export const getUsers = (currentPage = 1, pageSize = 10) => {

    return instance.get(`users?page=${currentPage}&count=${pageSize}`,)
        .then(response => {
            return response.data;
        })


}*/

/*export const getUsers2 = (currentPage = 1, pageSize = 10 ) => {

    return  instance.get(`follow?page=${currentPage}&count=${pageSize}`, )
        .then(response =>  {
            return response.data;
        });


}*/