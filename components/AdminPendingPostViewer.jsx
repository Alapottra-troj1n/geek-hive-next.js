import React from 'react';

const AdminPendingPostViewer = ({setShowDetails}) => {
    return (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-300 h-80 w-80" >
            <div onClick={() => setShowDetails(false)} className="absolute right-2 text-semibold cursor-pointer text-black" >X</div>

        </div>
    );
};

export default AdminPendingPostViewer;