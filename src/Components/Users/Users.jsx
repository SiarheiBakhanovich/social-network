import React from "react";
import styles from './users.module.css';

let Users = (props) => {
    if (props.users.length === 0) {


        props.setUsers([
                {
                    id: 1,
                    photoUrl: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_1405.jpg',
                    followed: false,
                    fullname: 'Dmitry',
                    status: 'I am a stuped',
                    location: {city: 'Minsk', country: 'Belarus'}
                },
                {
                    id: 2,
                    photoUrl: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_1405.jpg',
                    followed: true,
                    fullname: 'George',
                    status: 'I am a stuped too',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: 'https://avatarko.ru/img/kartinka/2/zhivotnye_kot_1405.jpg',
                    followed: false,
                    fullname: 'Alex',
                    status: 'I am a stuped',
                    location: {city: 'Minsk', country: 'Ukraine'}
                }

            ]
        )
    }
    return <div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;