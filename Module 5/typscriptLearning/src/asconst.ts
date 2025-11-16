const UserRoles = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER",
} as const;

/*
    readonly Admin = "Admin",
    readonly Editor = "Editor",
    readonly Viewer = "Viewer",

    1.typeof Operator
    2.keyof Operator

    const user ={
    id=222,]
    name:'Mezba'
    }

    typeof user;

    type user {
    id:number;
    name:string
    }

    typeof UserRoles{
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
    }

    keyof typeof UserRoles
    'Admin' | 'Editor' | 'Viewer'

*/



const canEdit = (role: (typeof UserRoles)[keyof typeof UserRoles]) => {
    if (role === UserRoles.Admin || role === UserRoles.Editor) {
        return true;
    } else return false;
};

const isEditPermissable = canEdit(UserRoles.Admin);
console.log(isEditPermissable);