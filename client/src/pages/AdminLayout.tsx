import React from 'react';

const AdminLayout = ({children} : React.PropsWithChildren) => {
    return (
        <div>
            {children}
        </div>
    );
};

export default AdminLayout;