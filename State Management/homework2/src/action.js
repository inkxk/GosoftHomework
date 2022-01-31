let id = 0;
export const addUser = (user) => {
    return {
        type: "ADD_USER",
        id: id++,
        email: user.email,
        gender: user.gender,
        fullName: `${user.name.title} ${user.name.first} ${user.name.last}`,
        picture: user.picture.large,
    };
};

export const changeUser = (cid) => {
    return {
        type: "SET_CID",
        cid: cid,
    };
};
